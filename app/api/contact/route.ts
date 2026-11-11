
import { NextResponse } from "next/server";

// export const runtime = "nodejs";

const RATE_LIMIT = new Map<
  string,
  { count: number; resetAt: number }
>();

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: Request) {
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const secret = process.env.GOOGLE_SCRIPT_SECRET;

    if (!scriptUrl || !secret) {
      return NextResponse.json(
        { success: false, error: "Contact service is not configured." },
        { status: 500 }
      );
    }

    // Basic same-origin protection
    const origin = request.headers.get("origin");

    if (origin) {
      const requestUrl = new URL(request.url);

      if (new URL(origin).host !== requestUrl.host) {
        return NextResponse.json(
          { success: false, error: "Invalid request origin." },
          { status: 403 }
        );
      }
    }

    // Basic rate limiting
    const ip = getClientIp(request);
    const now = Date.now();
    const record = RATE_LIMIT.get(ip);

    if (record && record.resetAt > now && record.count >= MAX_REQUESTS) {
      return NextResponse.json(
        { success: false, error: "Too many enquiries. Please try again later." },
        { status: 429 }
      );
    }

    if (!record || record.resetAt <= now) {
      RATE_LIMIT.set(ip, {
        count: 1,
        resetAt: now + WINDOW_MS,
      });
    } else {
      record.count++;
    }

    const data = await request.json();

    // Honeypot spam protection
    if (typeof data.website === "string" && data.website.trim()) {
      return NextResponse.json({ success: true });
    }

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const company = String(data.company || "").trim();
    const service = String(data.service || "").trim();
    const budget = String(data.budget || "").trim();
    const message = String(data.message || "").trim();

    if (
      !name ||
      name.length > 100 ||
      !isValidEmail(email) ||
      email.length > 254 ||
      company.length > 150 ||
      !service ||
      service.length > 100 ||
      budget.length > 100 ||
      !message ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { success: false, error: "Please check your enquiry details." },
        { status: 400 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        secret,
        name,
        email,
        company,
        service,
        budget,
        message,
      }),
      redirect: "follow",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Google Apps Script request failed.");
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error("Google Apps Script could not process the enquiry.");
    }
    

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to send your enquiry. Please try again.",
      },
      { status: 502 }
    );
  }
}

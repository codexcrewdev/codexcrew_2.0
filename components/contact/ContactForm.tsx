
"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formElement = e.currentTarget;
    const honeypot = new FormData(formElement).get("website");

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          website: honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to send your enquiry.");
      }

      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  // Success screen
  if (status === "success") {
    return (
      <div className="contact-success">
        <CheckCircle2 size={46} strokeWidth={1.8} />

        <h3>Thank you for reaching out.</h3>

        <p>
          Your enquiry has been submitted successfully.
          We&apos;ll be in touch soon.
        </p>

        <button
          type="button"
          className="contact-success-button"
          onClick={() => {
            setStatus("idle");
            setError("");
          }}
        >
          Send another enquiry
          <ArrowUpRight size={17} />
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Honeypot spam protection */}
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="contact-input-grid">
        <div className="contact-field">
          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            maxLength={100}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            maxLength={254}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="company">Business / Company</label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
            maxLength={150}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="service">What are you looking for? *</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Custom Software Development">
              Custom Software Development
            </option>
            <option value="Web Applications">Web Applications</option>
            <option value="E-commerce Solutions">E-commerce Solutions</option>
            <option value="SaaS Product Development">
              SaaS Product Development
            </option>
            <option value="SEO">Search Engine Optimization</option>
            <option value="Social Media Management">
              Social Media Management
            </option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Other">Something else</option>
          </select>
        </div>

        <div className="contact-field contact-field-full">
          <label htmlFor="budget">Estimated project budget</label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
          >
            <option value="">Select a budget range</option>
            <option value="Below ₹10,000">Below ₹10,000</option>
            <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
            <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
            <option value="₹50,000 – ₹1,00,000">
              ₹50,000 – ₹1,00,000
            </option>
            <option value="Above ₹1,00,000">Above ₹1,00,000</option>
            <option value="Not decided yet">Not decided yet</option>
          </select>
        </div>

        <div className="contact-field contact-field-full">
          <label htmlFor="message">Tell us about your project *</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Share your idea, requirements or challenges..."
            rows={5}
            required
            maxLength={3000}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="contact-form-error">{error}</p>
      )}

      <button
        type="submit"
        className="button-primary contact-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            Submit Enquiry
            <ArrowUpRight size={18} />
          </>
        )}
      </button>

      <p className="contact-form-note">
        Your information will only be used to respond to your enquiry.
      </p>
    </form>
  );
}

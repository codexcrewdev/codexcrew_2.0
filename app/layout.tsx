
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codexcrew.vercel.app"),

  verification: {
  google: "v4pEswtzSrBykz3uH9R0Z0Q9EGdFBdBkSnmxbM5kUes",
},

  applicationName: "CodeXcrew",

  title: {
    default: "CodeXcrew — Technology Group | Think Beyond. Build What's Next.",
    template: "%s | CodeXcrew",
  },

  description:
    "CodeXcrew is a technology group building digital products, custom software, web applications and digital growth solutions for modern businesses.",

  keywords: [
    "CodeXcrew",
    "technology group",
    "software development",
    "custom software development",
    "web applications",
    "digital products",
    "digital growth",
    "ecommerce solutions",
    "technology solutions",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "CodeXcrew",
    title: "CodeXcrew — Technology Group",
    description:
      "Think Beyond. Build What's Next. Explore technology products and digital growth solutions by CodeXcrew.",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodeXcrew — Technology Group",
    description:
      "Think Beyond. Build What's Next. Technology products and digital growth solutions.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

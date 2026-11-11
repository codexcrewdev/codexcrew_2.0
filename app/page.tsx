
import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Divisions from "@/components/home/Divisions";
import Products from "@/components/home/Products";
import SelectedWork from "@/components/home/SelectedWork";
import WhyCodeXcrew from "@/components/home/WhyCodeXcrew";
import RemoteFirst from "@/components/home/RemoteFirst";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Technology Group Building Digital Products",
  description:
    "Discover CodeXcrew, a technology group building digital products, custom software, web applications and digital growth solutions for modern businesses.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "CodeXcrew — Think Beyond. Build What's Next.",
    description:
      "Explore technology products, software solutions and digital growth capabilities by CodeXcrew.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Divisions />
      <SelectedWork />
      <Products />
      <WhyCodeXcrew />
      <RemoteFirst />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}

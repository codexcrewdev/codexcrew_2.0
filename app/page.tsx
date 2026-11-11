
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Divisions from "@/components/home/Divisions";
import Products from "@/components/home/Products";
import SelectedWork from "@/components/home/SelectedWork";
import WhyCodeXcrew from "@/components/home/WhyCodeXcrew";
import RemoteFirst from "@/components/home/RemoteFirst";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

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

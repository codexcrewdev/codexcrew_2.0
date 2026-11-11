
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact CodeXcrew",
  description:
    "Have a project or business challenge in mind? Contact CodeXcrew to discuss custom software, digital products, technology solutions and digital growth.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact CodeXcrew",
    description:
      "Start a conversation with CodeXcrew. Tell us about your ideas, project requirements and business goals.",
    url: "/contact",
    type: "website",
  },
};


export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-page-hero section-padding">
        <div className="section-container">

          {/* Page Introduction */}
          <div className="intro-label">
            <span>01</span>
            <span>CONTACT CODEXCREW</span>
          </div>

          <div className="contact-page-heading">
            <div>
              <span className="contact-page-eyebrow">
                LET&apos;S START SOMETHING
              </span>

              <h1>
                Have an idea?
                <span> Let&apos;s talk.</span>
              </h1>
            </div>

            <p>
              Every meaningful project starts with a conversation.
              Tell us what you&apos;re thinking, and let&apos;s explore what&apos;s
              possible together.
            </p>
          </div>

          {/* Contact Content */}
          <div className="contact-page-layout">

            {/* Contact Information */}
            <aside className="contact-information">
              <span className="contact-info-label">
                GET IN TOUCH
              </span>

              <h2>
                Let&apos;s turn your
                <span> vision into reality.</span>
              </h2>

              <p>
                Whether you&apos;re planning a digital product, looking
                for a technology partner or exploring digital growth,
                we&apos;d love to hear from you.
              </p>

              <div className="contact-info-divider" />

              <div className="contact-info-item">
                <span>01 / TECHNOLOGY</span>
                <p>
                  Software, applications and digital products.
                </p>
              </div>

              <div className="contact-info-item">
                <span>02 / DIGITAL GROWTH</span>
                <p>
                  Digital presence, visibility and growth.
                </p>
              </div>

              <div className="contact-info-bottom">
                THINK BEYOND. BUILD WHAT&apos;S NEXT.
              </div>
            </aside>

            {/* Contact Form */}
            <div className="contact-form-panel">
              <div className="contact-form-heading">
                <span>PROJECT ENQUIRY</span>

                <h2>Tell us about your project.</h2>

                <p>
                  Share a few details and we&apos;ll take it from there.
                  Fields marked with * are required.
                </p>
              </div>

              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

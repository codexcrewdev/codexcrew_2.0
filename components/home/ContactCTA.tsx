
import Link from "next/link";
import { ArrowUpRight, Mail, MoveUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="contact-cta section-padding">
      <div className="section-container">

        <div className="contact-cta-box">

          <div className="contact-cta-content">
            <div className="intro-label">
              <span>07</span>
              <span>LET&apos;S CONNECT</span>
            </div>

            <div className="contact-cta-status">
              <span />
              OPEN TO NEW OPPORTUNITIES
            </div>

            <h2>
              Have an idea?
              <span> Let&apos;s make it happen.</span>
            </h2>

            <p>
              Whether you&apos;re looking to build a digital
              product, transform an idea into reality or
              grow your digital presence, let&apos;s start
              a conversation.
            </p>

            <div className="contact-cta-actions">
              <Link href="/contact" className="button-primary">
                Start a Conversation
                <ArrowUpRight size={18} />
              </Link>

              <Link href="/contact" className="contact-email-link">
                <Mail size={17} />
                Get in touch
              </Link>
            </div>
          </div>

          <div className="contact-cta-visual">
            <div className="contact-cta-glow" />

            <div className="contact-cta-orbit orbit-a" />
            <div className="contact-cta-orbit orbit-b" />
            <div className="contact-cta-orbit orbit-c" />

            <div className="contact-cta-core">
              <span>CX</span>
              <MoveUpRight size={22} />
            </div>

            <span className="contact-cta-caption">
              THE NEXT STEP STARTS HERE
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

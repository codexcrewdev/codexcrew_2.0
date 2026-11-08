
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="eyebrow">
          <span className="status-dot" />
          TECHNOLOGY & INNOVATION
        </div>

        <h1>
          Engineering
          <br />
          <span>What&apos;s Next.</span>
        </h1>

        <p className="hero-description">
          We build technology, develop digital products and
          create solutions that help businesses move forward.
        </p>

        <div className="hero-actions">
          <Link href="/technology" className="button-primary">
            Explore Technology <span>↗</span>
          </Link>

          <Link href="/products" className="button-secondary">
            Discover Our Products
          </Link>
        </div>
      </div>

      <div className="hero-bottom">
        <span>INDEPENDENT THINKING. ENGINEERED EXECUTION.</span>
        <span>01 — 02</span>
      </div>
    </section>
  );
}

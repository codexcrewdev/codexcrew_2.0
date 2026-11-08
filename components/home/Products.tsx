
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Products() {
  return (
    <section className="products-section section-padding">
      <div className="section-container">

        <div className="intro-label">
          <span>04</span>
          <span>OUR PRODUCTS</span>
        </div>

        <div className="products-layout">

          <div className="products-content">
            <div className="products-status">
              <span className="status-dot" />
              BUILDING WHAT&apos;S NEXT
            </div>

            <h2>
              Ideas into products.
              <span> Innovation into reality.</span>
            </h2>

            <p>
              We believe technology should do more than
              solve today&apos;s problems. It should create
              new possibilities.

              At CodeXcrew, we&apos;re developing our own
              digital products designed to solve
              meaningful problems and create lasting value.
            </p>

            <div className="products-actions">
              <Link href="/contact" className="button-primary">
                Connect With Us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="products-visual">
            <div className="product-orbit orbit-one" />
            <div className="product-orbit orbit-two" />

            <div className="product-glow" />

            <div className="product-cube">
              <div className="cube-face cube-front">
                <span>C</span>
              </div>
              <div className="cube-face cube-side" />
              <div className="cube-face cube-top" />
            </div>

            <div className="product-floating-label">
              <Sparkles size={15} />
              <span>INNOVATION IN PROGRESS</span>
            </div>
          </div>

        </div>

        <div className="products-bottom">
          <div>
            <span className="products-bottom-label">
              THE NEXT CHAPTER
            </span>
            <h3>Our products are coming soon.</h3>
          </div>

          <span className="coming-soon">
            COMING SOON <ArrowUpRight size={14} />
          </span>
        </div>

      </div>
    </section>
  );
}

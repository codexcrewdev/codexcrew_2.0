
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">C</span>
            <span>CodeXcrew</span>
            <span className="brand-dot">.</span>
          </Link>

          <p>
            Engineering technology.
            <br />
            Building what comes next.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <Link href="/technology">Technology</Link>
            <Link href="/digital-growth">Digital Growth</Link>
            <Link href="/products">Products</Link>
          </div>

          <div>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CodeXcrew. All rights reserved.</span>
        <span>Built with purpose.</span>
      </div>
    </footer>
  );
}

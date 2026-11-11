
import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    Boxes,
    Code2,
    Layers3,
    Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Our Products | CodeXcrew",
    description:
        "Discover what's next from CodeXcrew. We're building thoughtful digital products designed to solve real-world problems.",
};

export default function ProductsPage() {
    return (
        <main className="prod-page">

            {/* HERO */}
            <section className="prod-hero">
                <div className="prod-container">

                    <Link href="/" className="prod-back-link">
                        <ArrowLeft size={16} />
                        Back to home
                    </Link>

                    <div className="prod-hero-content">

                        <div className="prod-status">
                            <span className="prod-status-dot" />
                            SOMETHING IS IN THE WORKS
                        </div>

                        <div className="prod-symbol">
                            <Boxes size={43} strokeWidth={1.4} />
                        </div>

                        <span className="prod-eyebrow">
                            INTRODUCING CODEXCREW PRODUCTS
                        </span>

                        <h1>
                            Built with purpose.
                            <span> Coming soon.</span>
                        </h1>

                        <p>
                            We&apos;re working on a new generation of digital
                            products designed to simplify workflows,
                            solve real problems and create meaningful
                            experiences.
                        </p>

                        <div className="prod-actions">
                            <Link
                                href="/contact"
                                className="prod-button prod-button-primary"
                            >
                                Talk to us
                                <ArrowUpRight size={18} />
                            </Link>

                            <Link
                                href="/about"
                                className="prod-button prod-button-secondary"
                            >
                                Discover CodeXcrew
                            </Link>
                        </div>

                    </div>

                    <div className="prod-bottom-note">
                        <span>THINK BEYOND.</span>
                        <span>BUILD WHAT&apos;S NEXT.</span>
                    </div>

                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="prod-philosophy">
                <div className="prod-container">

                    <div className="prod-section-heading">
                        <span className="prod-eyebrow">
                            OUR PRODUCT PHILOSOPHY
                        </span>

                        <h2>
                            Not just another product.
                            <span> A better way forward.</span>
                        </h2>

                        <p>
                            We believe great products start with
                            meaningful problems. Every product we
                            develop is guided by purpose, thoughtful
                            engineering and practical value.
                        </p>
                    </div>

                    <div className="prod-principles">

                        <article className="prod-principle">
                            <div className="prod-principle-icon">
                                <Sparkles size={23} />
                            </div>

                            <h3>Purposeful Innovation</h3>

                            <p>
                                Ideas shaped around real needs,
                                not technology for the sake of it.
                            </p>
                        </article>

                        <article className="prod-principle">
                            <div className="prod-principle-icon">
                                <Code2 size={23} />
                            </div>

                            <h3>Thoughtful Engineering</h3>

                            <p>
                                Reliable foundations and carefully
                                considered digital experiences.
                            </p>
                        </article>

                        <article className="prod-principle">
                            <div className="prod-principle-icon">
                                <Layers3 size={23} />
                            </div>

                            <h3>Built to Evolve</h3>

                            <p>
                                Products designed to adapt as
                                people, businesses and needs change.
                            </p>
                        </article>

                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="prod-cta">
                <div className="prod-container prod-cta-content">

                    <span className="prod-eyebrow">
                        HAVE A PRODUCT IDEA?
                    </span>

                    <h2>
                        Let&apos;s create something meaningful.
                    </h2>

                    <p>
                        Have an idea, a problem worth solving or
                        an opportunity to explore? We&apos;d love to hear it.
                    </p>

                    <Link
                        href="/contact"
                        className="prod-button prod-button-primary"
                    >
                        Start a conversation
                        <ArrowUpRight size={18} />
                    </Link>

                </div>
            </section>

        </main>
    );
}

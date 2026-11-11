
import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Code2,
    Layers3,
    ShoppingBag,
    Boxes,
    Search,
    Compass,
    Rocket,
    RefreshCw,
    Lightbulb,
} from "lucide-react";


export const metadata: Metadata = {
  title: "Technology Solutions",
  description:
    "Explore CodeXcrew's technology capabilities, including custom software development, web applications, e-commerce solutions and SaaS product engineering.",

  alternates: {
    canonical: "/technology",
  },

  openGraph: {
    title: "Technology Solutions | CodeXcrew",
    description:
      "Discover how CodeXcrew turns ideas into digital products, custom software and purposeful technology solutions.",
    url: "/technology",
    type: "website",
  },
};


const capabilities = [
    {
        icon: Code2,
        title: "Custom Software Development",
        description:
            "Purpose-built software designed around your business processes, requirements and long-term goals.",
    },
    {
        icon: Layers3,
        title: "Web Applications",
        description:
            "Modern, responsive and scalable web applications that turn complex ideas into practical digital experiences.",
    },
    {
        icon: ShoppingBag,
        title: "E-commerce Solutions",
        description:
            "Digital commerce experiences built to simplify product discovery, customer journeys and online operations.",
    },
    {
        icon: Boxes,
        title: "SaaS & Digital Products",
        description:
            "From early concepts to launch-ready platforms, we help shape and engineer products built for growth.",
    },
];

const process = [
    {
        number: "01",
        icon: Search,
        title: "Discover",
        description:
            "Understand the problem, business objectives, users and opportunities before choosing a direction.",
    },
    {
        number: "02",
        icon: Compass,
        title: "Define",
        description:
            "Shape the product strategy, technical architecture and experience around the right priorities.",
    },
    {
        number: "03",
        icon: Rocket,
        title: "Build",
        description:
            "Engineer, test and refine the solution with a focus on quality, performance and usability.",
    },
    {
        number: "04",
        icon: RefreshCw,
        title: "Evolve",
        description:
            "Continuously improve the product as technology, customer needs and business goals change.",
    },
];

export default function TechnologyPage() {
    return (
        <main className="tech-page">

            {/* HERO */}
            <section className="tech-hero">
                <div className="tech-container tech-hero-container">
                    <div className="tech-hero-content">
                        <span className="tech-eyebrow">
                            TECHNOLOGY DIVISION
                        </span>

                        <h1>
                            Ideas into
                            <span> intelligent technology.</span>
                        </h1>

                        <p>
                            We transform ambitious ideas into meaningful
                            digital products, powerful software and
                            technology built for what comes next.
                        </p>

                        <div className="tech-hero-actions">
                            <Link
                                href="/contact"
                                className="tech-button tech-button-primary"
                            >
                                Start a project
                                <ArrowUpRight size={18} />
                            </Link>

                            <Link
                                href="/#selected-work"
                                className="tech-button tech-button-secondary"
                            >
                                Explore our work
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>

                    <div
                        className="tech-hero-visual"
                        aria-hidden="true"
                    >
                        <div className="tech-orbit tech-orbit-one" />
                        <div className="tech-orbit tech-orbit-two" />
                        <div className="tech-orbit tech-orbit-three" />

                        <div className="tech-visual-core">
                            <Code2 size={42} />
                        </div>

                        <span className="tech-visual-dot tech-dot-one" />
                        <span className="tech-visual-dot tech-dot-two" />
                        <span className="tech-visual-dot tech-dot-three" />
                        <span className="tech-visual-dot tech-dot-four" />
                    </div>
                </div>
            </section>

            {/* APPROACH */}
            <section className="tech-section">
                <div className="tech-container tech-intro">
                    <div className="tech-intro-heading">
                        <span className="tech-eyebrow">
                            OUR APPROACH
                        </span>

                        <h2>
                            Technology should solve real problems.
                        </h2>
                    </div>

                    <div className="tech-intro-content">
                        <p>
                            Great technology starts with understanding.
                            We look beyond the immediate requirement to
                            understand the problem, the people and the
                            possibilities behind every idea.
                        </p>

                        <p>
                            Our approach combines thoughtful engineering,
                            purposeful design and product thinking to
                            create solutions that are useful today and
                            adaptable for tomorrow.
                        </p>
                    </div>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className="tech-section tech-capabilities">
                <div className="tech-container">
                    <div className="tech-section-heading">
                        <span className="tech-eyebrow">
                            WHAT WE BUILD
                        </span>

                        <h2>
                            Engineering across the digital landscape.
                        </h2>

                        <p>
                            From business applications to independent
                            digital products, we turn technology
                            opportunities into working solutions.
                        </p>
                    </div>

                    <div className="tech-capability-grid">
                        {capabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    className="tech-capability-card"
                                    key={item.title}
                                >
                                    <div className="tech-capability-icon">
                                        <Icon size={25} />
                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                    <span className="tech-card-decoration">
                                        <ArrowUpRight size={20} />
                                    </span>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PRODUCT THINKING */}
            <section className="tech-section">
                <div className="tech-container tech-products">
                    <div className="tech-products-content">
                        <span className="tech-eyebrow">
                            BEYOND DEVELOPMENT
                        </span>

                        <h2>
                            We don&apos;t just build software.
                            <span> We build products.</span>
                        </h2>

                        <p>
                            We believe technology creates its greatest
                            impact when it becomes something people
                            genuinely use. That&apos;s why product thinking
                            is part of how we approach every opportunity.
                        </p>

                        <Link
                            href="/products"
                            className="tech-text-link"
                        >
                            Explore our products
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>

                    <div
                        className="tech-products-visual"
                        aria-hidden="true"
                    >
                        <div className="tech-product-frame">
                            <Lightbulb size={48} />
                            <span>IDEA</span>
                        </div>

                        <div className="tech-product-line" />

                        <div className="tech-product-frame tech-product-frame-highlight">
                            <Boxes size={48} />
                            <span>PRODUCT</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="tech-section tech-process">
                <div className="tech-container">
                    <div className="tech-section-heading">
                        <span className="tech-eyebrow">
                            HOW WE WORK
                        </span>

                        <h2>
                            A thoughtful process.
                            <span> Better outcomes.</span>
                        </h2>

                        <p>
                            Every project follows a clear direction,
                            keeping the problem, people and purpose
                            at the centre.
                        </p>
                    </div>

                    <div className="tech-process-grid">
                        {process.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    className="tech-process-card"
                                    key={item.number}
                                >
                                    <div className="tech-process-top">
                                        <span>{item.number}</span>
                                        <Icon size={23} />
                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SELECTED WORK */}
            <section className="tech-section tech-work">
                <div className="tech-container tech-work-inner">
                    <div>
                        <span className="tech-eyebrow">
                            SELECTED WORK
                        </span>

                        <h2>
                            Ideas brought to life.
                        </h2>

                        <p>
                            Explore some of the digital experiences
                            and solutions we&apos;ve created.
                        </p>
                    </div>

                    <Link
                        href="/#selected-work"
                        className="tech-button tech-button-secondary"
                    >
                        View selected work
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="tech-section tech-cta">
                <div className="tech-container tech-cta-content">
                    <span className="tech-eyebrow">
                        HAVE AN IDEA?
                    </span>

                    <h2>
                        Let&apos;s build what&apos;s next.
                    </h2>

                    <p>
                        Have a challenge to solve or a product idea
                        to bring to life? Let&apos;s make it happen.
                    </p>

                    <Link
                        href="/contact"
                        className="tech-button tech-button-primary"
                    >
                        Let&apos;s talk
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>

        </main>
    );
}

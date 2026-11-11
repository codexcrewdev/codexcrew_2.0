
import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Search,
    ChartNoAxesCombined,
    MousePointerClick,
    MapPin,
    LineChart,
    Target,
    Compass,
    BarChart3,
    RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Digital Growth | CodeXcrew",
    description:
        "Build a stronger digital presence with strategic SEO, digital experiences, analytics and growth-focused solutions.",
};

const capabilities = [
    {
        icon: Search,
        title: "Search Engine Optimization",
        description:
            "Improve your search visibility through technical SEO, on-page optimization and a structured search strategy.",
    },
    {
        icon: MapPin,
        title: "Local Search Presence",
        description:
            "Strengthen how your business appears in local search with Google Business Profile and local SEO foundations.",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Digital Strategy",
        description:
            "Build a clearer digital direction through audience understanding, positioning and practical growth planning.",
    },
    {
        icon: BarChart3,
        title: "Analytics & Insights",
        description:
            "Understand website performance and customer behaviour with meaningful analytics and measurable insights.",
    },
];

const process = [
    {
        number: "01",
        icon: Compass,
        title: "Understand",
        description:
            "Learn about your business, audience, market position and current digital presence.",
    },
    {
        number: "02",
        icon: Target,
        title: "Strategize",
        description:
            "Identify opportunities and define a focused strategy aligned with your business objectives.",
    },
    {
        number: "03",
        icon: MousePointerClick,
        title: "Execute",
        description:
            "Put the strategy into action through structured improvements and focused digital initiatives.",
    },
    {
        number: "04",
        icon: RefreshCw,
        title: "Optimize",
        description:
            "Review performance, learn from the data and continuously improve the approach.",
    },
];

export default function DigitalGrowthPage() {
    return (
        <main className="dg-page">

            {/* HERO */}
            <section className="dg-hero">
                <div className="dg-container dg-hero-container">
                    <div className="dg-hero-content">
                        <span className="dg-eyebrow">
                            DIGITAL GROWTH DIVISION
                        </span>

                        <h1>
                            Make your digital presence
                            <span> work harder.</span>
                        </h1>

                        <p>
                            We help businesses build stronger digital
                            foundations, improve online visibility and
                            make informed decisions through strategy,
                            optimization and insights.
                        </p>

                        <div className="dg-hero-actions">
                            <Link
                                href="/contact"
                                className="dg-button dg-button-primary"
                            >
                                Grow with us
                                <ArrowUpRight size={18} />
                            </Link>

                            <Link
                                href="#dg-capabilities"
                                className="dg-button dg-button-secondary"
                            >
                                Explore capabilities
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>

                    <div
                        className="dg-hero-visual"
                        aria-hidden="true"
                    >
                        <div className="dg-visual-grid" />

                        <div className="dg-visual-ring dg-ring-one" />
                        <div className="dg-visual-ring dg-ring-two" />

                        <div className="dg-visual-center">
                            <LineChart size={42} />
                        </div>

                        <div className="dg-visual-node dg-node-one">
                            <Search size={19} />
                        </div>

                        <div className="dg-visual-node dg-node-two">
                            <Target size={19} />
                        </div>

                        <div className="dg-visual-node dg-node-three">
                            <BarChart3 size={19} />
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="dg-section">
                <div className="dg-container dg-intro">
                    <div className="dg-intro-heading">
                        <span className="dg-eyebrow">
                            GROW WITH PURPOSE
                        </span>

                        <h2>
                            Visibility is only the beginning.
                        </h2>
                    </div>

                    <div className="dg-intro-content">
                        <p>
                            Being online is not enough. Businesses need
                            a digital presence that communicates value,
                            reaches the right audience and supports
                            meaningful business goals.
                        </p>

                        <p>
                            We bring together strategy, search visibility
                            and performance insights to help businesses
                            make better use of their digital channels.
                        </p>
                    </div>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section
                className="dg-section dg-capabilities"
                id="dg-capabilities"
            >
                <div className="dg-container">
                    <div className="dg-section-heading">
                        <span className="dg-eyebrow">
                            OUR CAPABILITIES
                        </span>

                        <h2>
                            A smarter approach to digital growth.
                        </h2>

                        <p>
                            Practical digital solutions designed to
                            strengthen your online presence and help
                            you understand what is working.
                        </p>
                    </div>

                    <div className="dg-capability-grid">
                        {capabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    className="dg-capability-card"
                                    key={item.title}
                                >
                                    <div className="dg-capability-icon">
                                        <Icon size={25} />
                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                    <span className="dg-card-decoration">
                                        <ArrowUpRight size={20} />
                                    </span>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* GROWTH PHILOSOPHY */}
            <section className="dg-section">
                <div className="dg-container dg-philosophy">
                    <div className="dg-philosophy-visual">
                        <div className="dg-philosophy-card">
                            <span className="dg-philosophy-label">
                                DIGITAL PRESENCE
                            </span>

                            <div className="dg-philosophy-bars">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="dg-philosophy-footer">
                                <span>STRATEGY</span>
                                <span>INSIGHTS</span>
                                <span>OPTIMIZATION</span>
                            </div>
                        </div>
                    </div>

                    <div className="dg-philosophy-content">
                        <span className="dg-eyebrow">
                            BEYOND NUMBERS
                        </span>

                        <h2>
                            Growth should be
                            <span> intentional.</span>
                        </h2>

                        <p>
                            More traffic does not automatically mean
                            better business. We focus on the foundations
                            behind sustainable digital progress:
                            reaching relevant audiences, communicating
                            clearly and understanding performance.
                        </p>

                        <Link
                            href="/contact"
                            className="dg-text-link"
                        >
                            Discuss your goals
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="dg-section dg-process">
                <div className="dg-container">
                    <div className="dg-section-heading">
                        <span className="dg-eyebrow">
                            OUR PROCESS
                        </span>

                        <h2>
                            From understanding to improvement.
                        </h2>

                        <p>
                            A structured approach that keeps every
                            initiative connected to a clear objective.
                        </p>
                    </div>

                    <div className="dg-process-grid">
                        {process.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    className="dg-process-card"
                                    key={item.number}
                                >
                                    <div className="dg-process-top">
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

            {/* CTA */}
            <section className="dg-section dg-cta">
                <div className="dg-container dg-cta-content">
                    <span className="dg-eyebrow">
                        READY TO MOVE FORWARD?
                    </span>

                    <h2>
                        Let&apos;s create a stronger digital presence.
                    </h2>

                    <p>
                        Tell us where your business is today and
                        where you want it to go. Let&apos;s explore
                        what&apos;s possible.
                    </p>

                    <Link
                        href="/contact"
                        className="dg-button dg-button-primary"
                    >
                        Start a conversation
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>

        </main>
    );
}


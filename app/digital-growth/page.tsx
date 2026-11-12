
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
    Check,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Digital Growth & SEO Solutions",
    description:
        "Strengthen your business's online presence with search engine optimization, local SEO, digital strategy and analytics solutions from CodeXcrew.",
    alternates: {
        canonical: "/digital-growth",
    },
    openGraph: {
        title: "Digital Growth Solutions | CodeXcrew",
        description:
            "Build a stronger digital presence through SEO, local search visibility, digital strategy and performance insights.",
        url: "/digital-growth",
        type: "website",
    },
};

const capabilities = [
    {
        icon: Search,
        title: "Search Engine Optimization",
        description:
            "Improve your website's visibility in search engines and help the right audience discover your business.",
        solutions: [
            "Technical SEO audits",
            "On-page SEO optimization",
            "Keyword research and mapping",
            "Website structure and content optimization",
            "Search Console setup and monitoring",
        ],
        outcome:
            "Build a stronger search foundation and improve your opportunities to reach people actively looking for your services.",
    },
    {
        icon: MapPin,
        title: "Local SEO & Google Business Profile",
        description:
            "Help customers discover your business when they search for relevant products and services in your area.",
        solutions: [
            "Google Business Profile setup",
            "Business information optimization",
            "Local keyword targeting",
            "Business category and service optimization",
            "Local search visibility monitoring",
        ],
        outcome:
            "Make it easier for nearby customers to find your business, understand what you offer and get in touch.",
    },
    {
        icon: Target,
        title: "Digital Strategy",
        description:
            "Create a focused digital direction that connects your business goals with the right online channels.",
        solutions: [
            "Digital presence assessment",
            "Audience and competitor research",
            "Brand positioning guidance",
            "Digital channel planning",
            "Website and conversion improvement recommendations",
        ],
        outcome:
            "Make more informed digital decisions with a clear direction, relevant priorities and actionable recommendations.",
    },
    {
        icon: BarChart3,
        title: "Analytics & Performance Insights",
        description:
            "Understand how people discover and interact with your website through meaningful performance data.",
        solutions: [
            "Google Analytics 4 setup",
            "Google Search Console integration",
            "Website traffic monitoring",
            "User behaviour and engagement analysis",
            "Performance reports and insights",
        ],
        outcome:
            "Understand what's working, identify improvement opportunities and make decisions based on meaningful data.",
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

                                    <div
                                        style={{
                                            marginTop: "24px",
                                            paddingTop: "20px",
                                            borderTop: "1px solid rgba(255,255,255,0.09)",
                                        }}
                                    >
                                        <h4
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: 600,
                                                marginBottom: "14px",
                                                color: "#f5f3ff",
                                            }}
                                        >
                                            What we can do
                                        </h4>

                                        <ul
                                            style={{
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0,
                                                display: "grid",
                                                gap: "12px",
                                            }}
                                        >
                                            {item.solutions.map((solution) => (
                                                <li
                                                    key={solution}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "flex-start",
                                                        gap: "10px",
                                                        color: "#a5a5b3",
                                                        fontSize: "14px",
                                                        lineHeight: 1.6,
                                                    }}
                                                >
                                                    <Check
                                                        size={16}
                                                        color="#a78bfa"
                                                        style={{
                                                            flexShrink: 0,
                                                            marginTop: "3px",
                                                        }}
                                                    />
                                                    {solution}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p
                                        style={{
                                            marginTop: "22px",
                                            paddingTop: "18px",
                                            borderTop: "1px solid rgba(255,255,255,0.09)",
                                            color: "#c4b5fd",
                                            fontSize: "14px",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {item.outcome}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "52px",
                        }}
                    >
                        <p
                            style={{
                                color: "#a5a5b3",
                                fontSize: "15px",
                                marginBottom: "20px",
                                lineHeight: 1.7,
                            }}
                        >
                            Not sure what your business needs?
                            Let's discuss your digital goals.
                        </p>

                        <Link
                            href="/contact"
                            className="dg-button dg-button-primary"
                        >
                            Discuss your requirements
                            <ArrowUpRight size={18} />
                        </Link>
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
                        Let's create a stronger digital presence.
                    </h2>

                    <p>
                        Tell us where your business is today and
                        where you want it to go. Let's explore
                        what's possible.
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

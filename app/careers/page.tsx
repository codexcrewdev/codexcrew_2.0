
import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Code2,
    Lightbulb,
    Network,
    Rocket,
    Users,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Careers | CodeXcrew",
    description:
        "Explore opportunities to connect and collaborate with CodeXcrew. We value curiosity, thoughtful engineering and ambitious ideas.",
};

const values = [
    {
        icon: Lightbulb,
        title: "Think Beyond",
        description:
            "Stay curious, challenge assumptions and explore better ways to solve problems.",
    },
    {
        icon: Code2,
        title: "Build with Purpose",
        description:
            "Create meaningful technology with attention to quality, detail and real-world impact.",
    },
    {
        icon: Rocket,
        title: "Keep Evolving",
        description:
            "Learn continuously, embrace new challenges and grow through meaningful work.",
    },
    {
        icon: Network,
        title: "Work Beyond Boundaries",
        description:
            "Bring fresh perspectives and collaborate with an open, globally minded approach.",
    },
];

export default function CareersPage() {
    return (
        <main className="career-page">

            {/* HERO */}
            <section className="career-hero">
                <div className="career-container">

                    <div className="career-hero-content">
                        <span className="career-eyebrow">
                            CAREERS AT CODEXCREW
                        </span>

                        <h1>
                            Build what&apos;s next.
                            <span> Grow beyond limits.</span>
                        </h1>

                        <p>
                            We&apos;re interested in people who think
                            differently, enjoy solving meaningful
                            problems and believe there&apos;s always a
                            better way to build technology.
                        </p>

                        <div className="career-hero-actions">
                            <Link
                                href="#career-connect"
                                className="career-button career-button-primary"
                            >
                                Connect with us
                                <ArrowUpRight size={18} />
                            </Link>

                            <Link
                                href="#career-values"
                                className="career-button career-button-secondary"
                            >
                                What we value
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>

                    <div
                        className="career-hero-visual"
                        aria-hidden="true"
                    >
                        <div className="career-visual-orbit career-orbit-one" />
                        <div className="career-visual-orbit career-orbit-two" />
                        <div className="career-visual-orbit career-orbit-three" />

                        <div className="career-visual-core">
                            <Users size={42} />
                        </div>

                        <span className="career-visual-node career-node-one" />
                        <span className="career-visual-node career-node-two" />
                        <span className="career-visual-node career-node-three" />
                    </div>

                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="career-section">
                <div className="career-container career-intro">

                    <div className="career-intro-heading">
                        <span className="career-eyebrow">
                            MORE THAN A ROLE
                        </span>

                        <h2>
                            Bring your curiosity.
                            Build your future.
                        </h2>
                    </div>

                    <div className="career-intro-content">
                        <p>
                            Technology keeps moving forward, and so do
                            we. We&apos;re interested in connecting with
                            individuals who are passionate about
                            learning, creating and exploring new ideas.
                        </p>

                        <p>
                            Whether your strength is engineering,
                            design, product thinking or digital
                            strategy, we&apos;d love to hear what you
                            bring to the table.
                        </p>
                    </div>

                </div>
            </section>

            {/* VALUES */}
            <section
                className="career-section career-values"
                id="career-values"
            >
                <div className="career-container">

                    <div className="career-section-heading">
                        <span className="career-eyebrow">
                            WHAT DRIVES US
                        </span>

                        <h2>
                            The mindset behind the work.
                        </h2>

                        <p>
                            We believe great work starts with the
                            right mindset, a willingness to learn
                            and a commitment to building better.
                        </p>
                    </div>

                    <div className="career-values-grid">
                        {values.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    className="career-value-card"
                                    key={item.title}
                                >
                                    <div className="career-value-icon">
                                        <Icon size={25} />
                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                    <span className="career-card-decoration">
                                        <ArrowUpRight size={20} />
                                    </span>
                                </article>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* WORKING APPROACH */}
            <section className="career-section">
                <div className="career-container career-approach">

                    <div className="career-approach-content">
                        <span className="career-eyebrow">
                            HOW WE THINK ABOUT WORK
                        </span>

                        <h2>
                            Remote-first.
                            <span> Globally minded.</span>
                        </h2>

                        <p>
                            We believe good ideas and meaningful
                            contributions aren&apos;t limited by
                            geography. Our approach is built around
                            flexibility, ownership and thoughtful
                            collaboration.
                        </p>

                        <Link
                            href="/about"
                            className="career-text-link"
                        >
                            Discover our approach
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>

                    <div className="career-approach-visual">
                        <div className="career-approach-card">
                            <Network size={40} />

                            <div>
                                <span>OUR MINDSET</span>
                                <h3>Beyond boundaries.</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CONNECT */}
            <section
                className="career-section career-connect"
                id="career-connect"
            >
                <div className="career-container career-connect-content">

                    <span className="career-eyebrow">
                        START A CONVERSATION
                    </span>

                    <h2>
                        Your next chapter could start here.
                    </h2>

                    <p>
                        Interested in being part of what we&apos;re building?
                        Tell us about yourself, your skills and the
                        kind of opportunities you&apos;re looking for.
                    </p>

                    <Link
                        href="/contact"
                        className="career-button career-button-primary"
                    >
                        Get in touch
                        <ArrowUpRight size={18} />
                    </Link>

                    <span className="career-connect-note">
                        Connecting with us doesn&apos;t guarantee an
                        immediate opening or employment opportunity.
                    </span>

                </div>
            </section>

        </main>
    );
}

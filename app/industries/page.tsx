
import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Sprout,
    ShoppingCart,
    Factory,
    GraduationCap,
    Plane,
    BriefcaseBusiness,
    Lightbulb,
    Network,
    Target,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Industries | CodeXcrew",
    description:
        "Explore how CodeXcrew approaches technology and digital growth across agriculture, retail, manufacturing, education, travel and professional services.",
};

const industries = [
    {
        number: "01",
        icon: Sprout,
        title: "Agriculture & Food",
        description:
            "Helping farms, food brands and agricultural businesses build stronger digital experiences and connect with their customers.",
        solutions: [
            "Farm and brand websites",
            "Product catalogues",
            "Digital ordering experiences",
            "Business visibility",
        ],
    },
    {
        number: "02",
        icon: ShoppingCart,
        title: "Retail & E-commerce",
        description:
            "Creating digital commerce experiences that help retailers showcase products, reach customers and simplify online operations.",
        solutions: [
            "E-commerce platforms",
            "Product management systems",
            "Online shopping experiences",
            "Digital business tools",
        ],
    },
    {
        number: "03",
        icon: Factory,
        title: "Manufacturing & Distribution",
        description:
            "Supporting manufacturers, suppliers and distributors with technology that improves how they present and manage their businesses.",
        solutions: [
            "Business websites",
            "Product and catalogue systems",
            "Custom business applications",
            "Digital presence",
        ],
    },
    {
        number: "04",
        icon: GraduationCap,
        title: "Education & Learning",
        description:
            "Building digital platforms and experiences that make educational services, learning resources and information more accessible.",
        solutions: [
            "Educational websites",
            "Learning platforms",
            "Course and content systems",
            "Custom web applications",
        ],
    },
    {
        number: "05",
        icon: Plane,
        title: "Travel & Hospitality",
        description:
            "Helping travel businesses and accommodation providers present their offerings and create better digital customer journeys.",
        solutions: [
            "Travel and accommodation websites",
            "Enquiry and booking experiences",
            "Destination showcases",
            "Digital visibility",
        ],
    },
    {
        number: "06",
        icon: BriefcaseBusiness,
        title: "Professional Services",
        description:
            "Equipping service-based businesses with a professional digital presence and tools that support their operations.",
        solutions: [
            "Business websites",
            "Lead generation experiences",
            "Custom digital solutions",
            "Search visibility",
        ],
    },
];

export default function IndustriesPage() {
    return (
        <main className="ind-page">

            {/* HERO */}
            <section className="ind-hero">
                <div className="ind-container ind-hero-container">

                    <div className="ind-hero-content">
                        <span className="ind-eyebrow">
                            INDUSTRIES WE SERVE
                        </span>

                        <h1>
                            Different industries.
                            <span> One technology mindset.</span>
                        </h1>

                        <p>
                            Every industry has its own challenges and
                            opportunities. We bring together technology,
                            product thinking and digital strategy to
                            create solutions around what businesses need.
                        </p>

                        <div className="ind-hero-actions">
                            <Link
                                href="/contact"
                                className="ind-button ind-button-primary"
                            >
                                Discuss your business
                                <ArrowUpRight size={18} />
                            </Link>

                            <Link
                                href="#ind-industries"
                                className="ind-button ind-button-secondary"
                            >
                                Explore industries
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>

                    <div
                        className="ind-hero-visual"
                        aria-hidden="true"
                    >
                        <div className="ind-visual-ring ind-ring-one" />
                        <div className="ind-visual-ring ind-ring-two" />
                        <div className="ind-visual-ring ind-ring-three" />

                        <div className="ind-visual-core">
                            <Network size={42} />
                        </div>

                        <span className="ind-visual-node ind-node-one" />
                        <span className="ind-visual-node ind-node-two" />
                        <span className="ind-visual-node ind-node-three" />
                        <span className="ind-visual-node ind-node-four" />
                    </div>

                </div>
            </section>

            {/* INTRO */}
            <section className="ind-section">
                <div className="ind-container ind-intro">

                    <div className="ind-intro-heading">
                        <span className="ind-eyebrow">
                            INDUSTRY-LED THINKING
                        </span>

                        <h2>
                            Understand the business before building the technology.
                        </h2>
                    </div>

                    <div className="ind-intro-content">
                        <p>
                            Technology should adapt to the business,
                            not the other way around. Different sectors
                            have different customers, workflows and
                            operational challenges.
                        </p>

                        <p>
                            We start by understanding those differences
                            and then explore the right combination of
                            software, digital experiences and growth
                            solutions.
                        </p>
                    </div>

                </div>
            </section>

            {/* INDUSTRIES GRID */}
            <section
                className="ind-section ind-industries"
                id="ind-industries"
            >
                <div className="ind-container">

                    <div className="ind-section-heading">
                        <span className="ind-eyebrow">
                            WHERE WE CREATE VALUE
                        </span>

                        <h2>
                            Technology for a changing business landscape.
                        </h2>

                        <p>
                            Explore some of the industries and business
                            environments where our capabilities can make
                            a difference.
                        </p>
                    </div>

                    <div className="ind-grid">
                        {industries.map((industry) => {
                            const Icon = industry.icon;

                            return (
                                <article
                                    className="ind-card"
                                    key={industry.number}
                                >
                                    <div className="ind-card-top">
                                        <div className="ind-card-icon">
                                            <Icon size={25} />
                                        </div>

                                        <span className="ind-card-number">
                                            {industry.number}
                                        </span>
                                    </div>

                                    <h3>{industry.title}</h3>

                                    <p className="ind-card-description">
                                        {industry.description}
                                    </p>

                                    <div className="ind-card-divider" />

                                    <span className="ind-solutions-label">
                                        POSSIBLE SOLUTIONS
                                    </span>

                                    <ul className="ind-solutions">
                                        {industry.solutions.map((solution) => (
                                            <li key={solution}>
                                                <span className="ind-solution-dot" />
                                                {solution}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/contact"
                                        className="ind-card-link"
                                        aria-label={`Discuss ${industry.title} solutions`}
                                    >
                                        Discuss your requirements
                                        <ArrowUpRight size={17} />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* APPROACH */}
            <section className="ind-section">
                <div className="ind-container ind-approach">

                    <div className="ind-approach-content">
                        <span className="ind-eyebrow">
                            OUR APPROACH
                        </span>

                        <h2>
                            Your industry.
                            <span> Your challenges. Our technology.</span>
                        </h2>

                        <p>
                            We don&apos;t believe in one-size-fits-all
                            solutions. We explore your business goals,
                            identify the right opportunities and
                            shape a practical technology approach
                            around your requirements.
                        </p>

                        <div className="ind-approach-links">
                            <Link
                                href="/technology"
                                className="ind-text-link"
                            >
                                Explore Technology
                                <ArrowUpRight size={18} />
                            </Link>

                            <Link
                                href="/digital-growth"
                                className="ind-text-link"
                            >
                                Explore Digital Growth
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="ind-approach-visual">
                        <div className="ind-approach-card">
                            <div className="ind-approach-card-icon">
                                <Target size={30} />
                            </div>

                            <span>BUILT AROUND YOUR BUSINESS</span>

                            <h3>
                                Purpose before technology.
                            </h3>

                            <div className="ind-approach-line" />

                            <div className="ind-approach-tags">
                                <span>Understand</span>
                                <span>Engineer</span>
                                <span>Evolve</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="ind-section ind-cta">
                <div className="ind-container ind-cta-content">

                    <span className="ind-eyebrow">
                        YOUR INDUSTRY IS NEXT
                    </span>

                    <h2>
                        Have a business challenge worth solving?
                    </h2>

                    <p>
                        Tell us about your business, your goals and
                        the challenges you&apos;re working through.
                        Let&apos;s explore what&apos;s possible together.
                    </p>

                    <Link
                        href="/contact"
                        className="ind-button ind-button-primary"
                    >
                        Start a conversation
                        <ArrowUpRight size={18} />
                    </Link>

                </div>
            </section>

        </main>
    );
}

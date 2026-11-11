
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Layers3,
  Target,
  Code2,
  TrendingUp,
  Globe2,
  Workflow,
  Users,
  Laptop,
  Network,
} from "lucide-react";

export const metadata = {
  title: "About CodeXcrew | Think Beyond. Build What's Next.",
  description:
    "Discover CodeXcrew, a remote-first technology group focused on building digital products, engineering purposeful solutions and enabling digital growth.",
};

const principles = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Think Beyond",
    description:
      "We look beyond immediate requirements to explore better possibilities, meaningful ideas and new opportunities.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Build With Purpose",
    description:
      "We believe technology should solve real problems, create value and make a measurable difference.",
  },
  {
    number: "03",
    icon: Target,
    title: "Focus On Outcomes",
    description:
      "We approach every challenge with clarity, thoughtful execution and a focus on long-term impact.",
  },
];

const approach = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the problem, explore the possibilities and identify what truly matters.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Establish a clear direction, strategy and foundation for the solution.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn ideas into purposeful digital experiences and reliable technology.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "Improve, adapt and create opportunities for continuous growth.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero section-padding">
        <div className="section-container">

          <div className="intro-label">
            <span>01</span>
            <span>ABOUT CODEXCREW</span>
          </div>

          <div className="about-hero-content">
            <span className="about-eyebrow">
              A REMOTE-FIRST TECHNOLOGY GROUP
            </span>

            <h1>
              We think beyond.
              <span> We build what&apos;s next.</span>
            </h1>

            <div className="about-hero-bottom">
              <p>
                CodeXcrew is a technology group focused on building
                digital products, engineering purposeful solutions
                and enabling businesses to move forward.
              </p>

              <Link href="/contact" className="about-primary-link">
                Start a conversation
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-visual-grid" />
            <div className="about-orbit about-orbit-one" />
            <div className="about-orbit about-orbit-two" />

            <div className="about-core">
              <span>CX</span>
              <small>CODEXCREW</small>
            </div>

            <div className="about-visual-caption">
              <span>THINK BEYOND.</span>
              <span>BUILD WHAT&apos;S NEXT.</span>
            </div>

            <span className="about-visual-index">CX / 001</span>
          </div>

        </div>
      </section>

      {/* IDENTITY */}
      <section className="about-identity section-padding">
        <div className="section-container">

          <div className="intro-label">
            <span>02</span>
            <span>WHO WE ARE</span>
          </div>

          <div className="about-identity-grid">
            <h2>
              Technology is more than what we build.
              <span> It&apos;s what we make possible.</span>
            </h2>

            <div className="about-identity-content">
              <p>
                We bring together technology, product thinking and
                digital strategy to create solutions that move ideas
                forward.
              </p>

              <p>
                From developing digital products to helping businesses
                strengthen their digital presence, our focus is on
                creating meaningful work with purpose and direction.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="about-vision section-padding">
        <div className="section-container">

          <div className="intro-label">
            <span>03</span>
            <span>OUR VISION</span>
          </div>

          <div className="about-vision-content">
            <span className="about-eyebrow">LOOKING AHEAD</span>

            <h2>
              Build technology that
              <span> creates possibilities.</span>
            </h2>

            <p>
              Our ambition is to grow into a global technology group
              creating useful digital products, advancing technology
              and helping businesses adapt to an evolving world.
            </p>

            <div className="about-vision-symbol">
              <Globe2 size={42} strokeWidth={1} />
              <span>GLOBAL BY AMBITION. PURPOSEFUL BY DESIGN.</span>
            </div>
          </div>

        </div>
      </section>

      {/* REMOTE FIRST */}
      <section className="about-remote section-padding">
        <div className="section-container">

          <div className="intro-label">
            <span>04</span>
            <span>HOW WE OPERATE</span>
          </div>

          <div className="about-remote-grid">

            <div className="about-remote-content">
              <span className="about-eyebrow">
                REMOTE-FIRST PHILOSOPHY
              </span>

              <h2>
                Built beyond
                <span> boundaries.</span>
              </h2>

              <p>
                CodeXcrew embraces a remote-first approach, bringing
                together people, ideas and capabilities beyond
                geographical boundaries.
              </p>

              <p>
                We believe great work comes from shared vision,
                thoughtful collaboration and purposeful execution,
                not physical proximity.
              </p>

              <div className="about-remote-tag">
                <Globe2 size={17} />
                REMOTE-FIRST. GLOBALLY MINDED.
              </div>
            </div>

            <div className="about-remote-visual">

              <div className="about-network-line about-network-line-one" />
              <div className="about-network-line about-network-line-two" />
              <div className="about-network-line about-network-line-three" />

              <div className="about-network-node about-node-one">
                <Laptop size={21} />
              </div>

              <div className="about-network-node about-node-two">
                <Users size={21} />
              </div>

              <div className="about-network-node about-node-three">
                <Network size={21} />
              </div>

              <div className="about-network-core">
                <span>CX</span>
                <small>CONNECTED BY PURPOSE</small>
              </div>

              <span className="about-network-caption">
                COLLABORATION WITHOUT BOUNDARIES
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="about-principles section-padding">
        <div className="section-container">

          <div className="intro-label">
            <span>05</span>
            <span>WHAT GUIDES US</span>
          </div>

          <div className="about-section-heading">
            <div>
              <span className="about-eyebrow">OUR PHILOSOPHY</span>
              <h2>
                Principles behind
                <span> every possibility.</span>
              </h2>
            </div>

            <p>
              The thinking that shapes how we approach technology,
              products and every opportunity.
            </p>
          </div>

          <div className="about-principles-grid">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article className="about-principle-card" key={item.number}>
                  <div className="about-card-top">
                    <span>{item.number}</span>
                    <Icon size={25} strokeWidth={1.4} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="about-card-decoration">
                    {item.number}
                  </span>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* DIVISIONS */}
      <section className="about-divisions section-padding">
        <div className="section-container">

          <div className="intro-label">
            <span>06</span>
            <span>OUR DIVISIONS</span>
          </div>

          <div className="about-section-heading">
            <div>
              <span className="about-eyebrow">WHAT WE DO</span>
              <h2>
                Two directions.
                <span> One vision.</span>
              </h2>
            </div>

            <p>
              Different capabilities working towards a shared goal:
              creating meaningful digital impact.
            </p>
          </div>

          <div className="about-division-grid">

            <article className="about-division-card">
              <div className="about-division-icon">
                <Code2 size={27} strokeWidth={1.4} />
              </div>

              <span>01 / TECHNOLOGY</span>

              <h3>
                Engineering
                <br />
                what&apos;s next.
              </h3>

              <p>
                Digital products, software solutions and technology
                built to solve real-world problems.
              </p>

              <Link href="/technology">
                Explore Technology
                <ArrowUpRight size={18} />
              </Link>
            </article>

            <article className="about-division-card">
              <div className="about-division-icon">
                <TrendingUp size={27} strokeWidth={1.4} />
              </div>

              <span>02 / DIGITAL GROWTH</span>

              <h3>
                Creating
                <br />
                digital impact.
              </h3>

              <p>
                Digital strategy, visibility and growth solutions
                that help businesses move forward.
              </p>

              <Link href="/digital-growth">
                Explore Digital Growth
                <ArrowUpRight size={18} />
              </Link>
            </article>

          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="about-approach section-padding">
        <div className="section-container">

          <div className="intro-label">
            <span>07</span>
            <span>HOW WE WORK</span>
          </div>

          <div className="about-section-heading">
            <div>
              <span className="about-eyebrow">OUR APPROACH</span>
              <h2>
                From possibility
                <span> to reality.</span>
              </h2>
            </div>

            <p>
              A thoughtful approach that brings clarity to ideas
              and structure to execution.
            </p>
          </div>

          <div className="about-approach-grid">
            {approach.map((item) => (
              <article className="about-approach-item" key={item.number}>
                <span>{item.number}</span>
                <ArrowDown size={18} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-cta section-padding">
        <div className="section-container">

          <div className="about-cta-content">
            <span className="about-eyebrow">
              THE NEXT CHAPTER STARTS HERE
            </span>

            <h2>
              Have something
              <span> in mind?</span>
            </h2>

            <p>
              Every possibility starts somewhere. Let&apos;s explore
              what we can create together.
            </p>

            <Link href="/contact" className="about-primary-link">
              Let&apos;s build what&apos;s next
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="about-cta-mark">
            CX<span>.</span>
          </div>

        </div>
      </section>

    </main>
  );
}


import {
  ArrowUpRight,
  Lightbulb,
  Workflow,
  Target,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Purposeful Engineering",
    description:
      "We begin with understanding the problem, then shape technology into practical and meaningful solutions.",
    label: "THINK WITH PURPOSE",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Product-First Thinking",
    description:
      "We look beyond individual features to create thoughtful digital experiences built for long-term value.",
    label: "BUILD WITH INTENT",
  },
  {
    number: "03",
    icon: Target,
    title: "Focused on Outcomes",
    description:
      "We connect technology with business objectives, keeping usability, performance and growth in focus.",
    label: "CREATE REAL VALUE",
  },
];

export default function WhyCodeXcrew() {
  return (
    <section className="why-section section-padding">
      <div className="section-container">

        <div className="intro-label">
          <span>05</span>
          <span>WHY CODEXCREW</span>
        </div>

        <div className="why-layout">

          <div className="why-main">
            <div className="why-status">
              <span className="why-status-dot" />
              OUR APPROACH
            </div>

            <h2>
              Technology is what we build.
              <span> Impact is what we aim for.</span>
            </h2>

            <p>
              Great digital experiences are not built
              by technology alone. They come from
              understanding problems, thinking
              differently and executing with purpose.
            </p>

            <div className="why-signature">
              <span className="why-signature-line" />
              <span>ENGINEERING WHAT&apos;S NEXT.</span>
            </div>
          </div>

          <div className="why-visual">
            <div className="why-visual-glow" />

            <div className="why-visual-ring ring-one" />
            <div className="why-visual-ring ring-two" />
            <div className="why-visual-ring ring-three" />

            <div className="why-visual-core">
              <span>CX</span>
            </div>

            <span className="why-visual-caption">
              IDEAS · ENGINEERING · IMPACT
            </span>
          </div>

        </div>

        <div className="why-principles">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article className="why-card" key={item.number}>
                <div className="why-card-top">
                  <span>{item.number}</span>
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                <div className="why-card-content">
                  <span className="why-card-label">
                    {item.label}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className="why-card-bottom">
                  <span>CODEXCREW</span>
                  <ArrowUpRight size={17} />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}


import Link from "next/link";
import {
  Code2,
  TrendingUp,
  ArrowUpRight,
  Layers3,
  Globe,
  Search,
  ChartNoAxesCombined,
} from "lucide-react";

const divisions = [
  {
    number: "01",
    title: "Technology",
    description:
      "We engineer digital products, software platforms and technology solutions designed around real business needs.",
    href: "/technology",
    icon: Code2,
    services: [
      { name: "Software Development", icon: Layers3 },
      { name: "Digital Products", icon: Globe },
    ],
  },
  {
    number: "02",
    title: "Digital Growth",
    description:
      "We help businesses strengthen their digital presence, reach the right audience and build sustainable visibility.",
    href: "/digital-growth",
    icon: TrendingUp,
    services: [
      { name: "Digital Marketing", icon: ChartNoAxesCombined },
      { name: "SEO & Visibility", icon: Search },
    ],
  },
];

export default function Divisions() {
  return (
    <section className="divisions section-padding">
      <div className="section-container">
        <div className="section-heading">
          <div className="intro-label">
            <span>02</span>
            <span>WHAT WE DO</span>
          </div>

          <h2>
            Two divisions.
            <br />
            <span>One direction.</span>
          </h2>

          <p>
            Different capabilities, working towards
            one goal — creating meaningful impact
            through technology.
          </p>
        </div>

        <div className="division-grid">
          {divisions.map((division) => {
            const Icon = division.icon;

            return (
              <article
                className="division-card"
                key={division.number}
              >
                <div className="division-top">
                  <span>{division.number} / DIVISION</span>
                  <Icon size={25} strokeWidth={1.5} />
                </div>

                <h3>{division.title}</h3>

                <p className="division-description">
                  {division.description}
                </p>

                <div className="division-services">
                  {division.services.map((service) => {
                    const ServiceIcon = service.icon;

                    return (
                      <div
                        className="division-service"
                        key={service.name}
                      >
                        <ServiceIcon size={16} />
                        <span>{service.name}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href={division.href}
                  className="division-link"
                >
                  Explore Division
                  <ArrowUpRight size={18} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

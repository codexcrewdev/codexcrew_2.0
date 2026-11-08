
import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { sanityClient } from "@/lib/sanity/client";
import { featuredProjectsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

type Project = {
  _id: string;
  title: string;
  client?: string;
  category?: string;
  description?: string;
  coverImage?: any;
  services?: string[];
  technologies?: string[];
  website?: string;
  status?: string;
};

export default async function SelectedWork() {
  const projects: Project[] = await sanityClient.fetch(
    featuredProjectsQuery,
    {},
    { next: { revalidate: 60 } }
  );

  return (
    <section className="work-section section-padding">
      <div className="section-container">

        <div className="intro-label">
          <span>03</span>
          <span>OUR WORK</span>
        </div>

        <div className="work-heading">
          <h2>
            Built with purpose.
            <span> Designed for impact.</span>
          </h2>

          <p>
            Every project begins with an idea.
            We turn business requirements into
            thoughtful digital experiences.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="work-grid">
            {projects.slice(0, 2).map((project, index) => {
              const imageUrl = project.coverImage
                ? urlFor(project.coverImage)
                    .width(1200)
                    .height(850)
                    .fit("crop")
                    .auto("format")
                    .url()
                : null;

              return (
                <article className="work-card" key={project._id}>
                  <div className="work-image">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={`${project.title} website preview`}
                      />
                    ) : (
                      <div className="work-image-placeholder">
                        <Layers3 size={40} />
                        <span>{project.title}</span>
                      </div>
                    )}

                    <span className="work-number">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="work-card-content">
                    <div className="work-meta">
                      <span>
                        {project.category || "Digital Experience"}
                      </span>

                      {project.status === "live" && (
                        <span className="work-live">
                          <span /> LIVE PROJECT
                        </span>
                      )}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="work-footer">
                      <div className="work-tags">
                        {(project.services || [])
                          .slice(0, 3)
                          .map((service) => (
                            <span key={service}>{service}</span>
                          ))}
                      </div>

                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-link"
                          aria-label={`Visit ${project.title}`}
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="work-empty">
            <p>Selected projects will be showcased here soon.</p>
          </div>
        )}

        <div className="work-bottom">
          <div>
            <span className="work-bottom-label">
              HAVE A PROJECT IN MIND?
            </span>

            <h3>Let&apos;s build something meaningful.</h3>
          </div>

          <Link href="/contact" className="button-primary">
            Start a Conversation
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}

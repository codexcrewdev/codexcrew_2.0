
import { Quote } from "lucide-react";
import { sanityClient } from "@/lib/sanity/client";
import { featuredTestimonialsQuery } from "@/lib/sanity/queries";

type Testimonial = {
  _id: string;
  clientName: string;
  company?: string;
  role?: string;
  review: string;
};

export default async function Testimonials() {
  const testimonials: Testimonial[] = await sanityClient.fetch(
    featuredTestimonialsQuery,
    {},
    { next: { revalidate: 60 } }
  );

  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="testimonials-section section-padding">
      <div className="section-container">

        <div className="intro-label">
          <span>06</span>
          <span>CLIENT EXPERIENCES</span>
        </div>

        <div className="testimonials-heading">
          <div>
            <div className="testimonials-status">
              <span />
              BUILT ON COLLABORATION
            </div>

            <h2>
              Good work creates
              <span> lasting impressions.</span>
            </h2>
          </div>

          <p>
            The best measure of our work is the experience
            of the people and businesses we work with.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((item, index) => (
            <article className="testimonial-card" key={item._id}>
              <div className="testimonial-card-top">
                <span className="testimonial-number">
                  0{index + 1}
                </span>

                <Quote size={25} strokeWidth={1.4} />
              </div>

              <blockquote>
                {item.review}
              </blockquote>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.clientName.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3>{item.clientName}</h3>

                  {(item.role || item.company) && (
                    <p>
                      {[item.role, item.company]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

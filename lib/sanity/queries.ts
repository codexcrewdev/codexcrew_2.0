import { defineQuery } from "next-sanity";

export const featuredProjectsQuery = defineQuery(`
  *[_type == "project" && featured == true && status in ["live", "completed"]]
  | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    client,
    category,
    description,
    coverImage,
    gallery,
    services,
    technologies,
    website,
    status
  }
`);

export const featuredServicesQuery = defineQuery(`
  *[_type == "service" && active == true && featured == true]
  | order(displayOrder asc) {
    _id,
    title,
    "slug": slug.current,
    division,
    shortDescription,
    icon,
    features
  }
`);

export const featuredTestimonialsQuery = defineQuery(`
  *[_type == "testimonial" && approved == true && featured == true]
  | order(displayOrder asc) {
    _id,
    clientName,
    company,
    role,
    review,
    rating
  }
`);
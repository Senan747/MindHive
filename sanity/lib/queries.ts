import { defineQuery } from "next-sanity";

export const BLOGS_QUERY = defineQuery(
  `*[_type == "blog" && defined(slug.current) && (
      !defined($search) || 
      title match $search || 
      category match $search || 
      author->name match $search || 
      title match "*" + $search + "*" || 
      category match "*" + $search + "*" || 
      author->name match "*" + $search + "*" || 
      lower(title) match lower($search) || 
      lower(category) match lower($search) || 
      lower(author->name) match lower($search)
    )] | order(_createdAt desc){
        _id,
        title,
        slug,
        _createdAt,
        author -> {
          _id, name, image, info
        },
        views,
        category,
        image
      }`
);

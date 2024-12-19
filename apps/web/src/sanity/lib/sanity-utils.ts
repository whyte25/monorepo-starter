import { groq } from "next-sanity";
import { Post } from "../sanity.types";
import { client } from "./client";

export const getAllPosts = (): Promise<Post[]> => {
  return client.fetch(groq`*[_type == "post"]{
    _id,
    _createdAt,
    publishedAt,
   "categories": categories[]->title,
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    body
  }`);
};
const query = groq`*[_type == 'post']
  {
   slug
  }`;

export const getSinglePost = (slug: string): Promise<Post> => {
  return client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );
};

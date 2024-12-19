import { getAllPosts } from "@/sanity/lib/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Page() {
  const blog = await getAllPosts();
  console.log(blog);
  return (
    <section className="">
   <p>blog</p>
    </section>
  );
}

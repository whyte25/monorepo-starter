import { PortableRichImage } from "@/components/portable-richtext-image";
import { getAllPosts, getSinglePost } from "@/sanity/lib/sanity-utils";
import { consoleIgnore } from "@/utils/console-ignore";
import { parseEditorContentOnServer } from "@/utils/parse-editor-content";
import { PortableText } from "@portabletext/react";
import { toHTML } from "@portabletext/to-html";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = params.slug;
  const post = await getSinglePost(slug);
  if (!post) {
    return notFound();
  }
  const title = post?.title;

  const description = parseEditorContentOnServer(toHTML(post?.body || []));
  // This is to ignore a warning from the toHTML function.
  consoleIgnore([
    'Unknown block type "image", specify a component for it in the `components.types` option',
  ]);

  if (!title) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title,
    description,
  };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const slugs = posts.map((post) => post.slug);
  return slugs.map((slug) => ({
    slug,
  }));
}
export const revalidate = 60;

type Props = {
  params: { slug: string };
};

const page = async ({ params }: Props) => {
  const slug = params.slug;
  const post = await getSinglePost(slug);

  return (
    <section>
      <div className="prose max-w-4xl mx-auto">
        {<PortableText components={PortableRichImage} value={post?.body!} />}
      </div>
    </section>
  );
};

export default page;

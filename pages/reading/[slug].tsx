import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { pathSlugReader, postContentReader } from "../../lib/blog";
import matter from "gray-matter";

interface BlogPostMetadata {
  date: string;
  title: string;
  description: string;
}

interface Props {
  content: string;
  data: BlogPostMetadata;
}
const BlogPage = ({ content, data }: Props) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <pre>{content}</pre>;
    </>
  );
};

export default BlogPage;
// [ 'hello-world' ]
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = pathSlugReader();
  const paths = slugs.map((slug) => {
    return {
      params: { slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const markdownWithMetadata = postContentReader(context.params.slug as string);
  const parsedMarkdown = matter(markdownWithMetadata);
  console.log(parsedMarkdown);
  return {
    props: { content: parsedMarkdown.content, data: parsedMarkdown.data },
  };
};

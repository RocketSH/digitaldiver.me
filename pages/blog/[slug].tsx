import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { pathSlugReader, postContentReader } from "../../lib/blog";

interface Props {
  content: string;
}
const BlogPage = ({ content }: Props) => {
  return <div>{content}</div>;
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
  const content = postContentReader(context.params.slug as string);
  return {
    props: { content },
  };
};

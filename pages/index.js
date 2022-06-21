import React from "react";
import Layout from "../components/layout";
import { PostCard, Categories, PostWidget } from "../components/index";

const posts = [
  {
    title: "React Testing",
    excerpt: "Learing excerpt Learing excerpt Learing excerpt",
  },
  {
    title: "React with Bulma",
    excerpt: "Learing excerpt Learing excerpt Learing excerpt",
  },
];

const IndexPage = () => (
  <Layout>
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.title} />
      ))}
    </div>
    <div>
      <PostWidget />
      <Categories />
    </div>
  </Layout>
);

export default IndexPage;

import React from "react";
import Layout from "../components/layout";

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
      {posts.map((post, index) => (
        <div>
          {post.title}
          {post.excerpt}
        </div>
      ))}
    </div>
  </Layout>
);

export default IndexPage;

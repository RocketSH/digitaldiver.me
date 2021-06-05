import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import About from "../components/about";

import Hero from "../components/hero";

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Link href="/blog/hello-world">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

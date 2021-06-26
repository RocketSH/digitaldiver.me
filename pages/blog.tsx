import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import fs from "fs";

export const BlogIndex = (slugs) => {
  return (
    <div>
      <h1>Lists</h1>
      {slugs.map((slug) => {
        return (
          <Link href={"/blog/" + slug}>
            <a>{"/blog/" + slug}</a>
          </Link>
        );
      })}
    </div>
  );
};

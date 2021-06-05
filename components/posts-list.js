import Link from "next/link";
import { slugs } from "../pages/blog/[slug]";

export const PostsList = ({ slugs }) => {
  <div className="">
    {slugs.map((slug) => {
      return (
        <Link key={slug} href={"/blog/" + slug}>
          <a>{"/blog/" + slug}</a>
        </Link>
      );
    })}
  </div>;
};

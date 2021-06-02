import fs from "fs";
import path from "path";

const postDirectory = path.join(process.cwd(), "/posts");

export const pathSlugReader = () => {
  const files = fs.readdirSync(postDirectory).map((fileName) => {
    return fileName.replace(".md", "");
  });
  return files;
};

export const postContentReader = (slug: string) => {
  const url = path.join(postDirectory, `${slug}.md`);
  return fs.readFileSync(url).toString("utf8");
};

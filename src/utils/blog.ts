import fs from "fs";
import path from "path";

export function getPostBySlug(slug?: string) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return {
    title: "Blog Post Title", // Extract title from file
    date: "2023-02-21", // Extract publish date
    tags: ["tag1", "tag2"], // Extract tags
    content: fileContent, // The full content of the blog post
  };
}

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostFrontmatter {
  title: string;
  date: string;
  summary: string;
  draft?: boolean;
  tags?: string[];
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingTime: string;
}

function slugsOnDisk(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function readPost(slug: string): { frontmatter: PostFrontmatter; content: string } {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as PostFrontmatter, content };
}

export function getAllPosts({ includeDrafts = false } = {}): PostMeta[] {
  return slugsOnDisk()
    .map((slug) => {
      const { frontmatter, content } = readPost(slug);
      return {
        slug,
        ...frontmatter,
        readingTime: readingTime(content).text,
      };
    })
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs({ includeDrafts = false } = {}): string[] {
  return getAllPosts({ includeDrafts }).map((p) => p.slug);
}

export function getPostBySlug(slug: string) {
  const { frontmatter, content } = readPost(slug);
  const meta: PostMeta = {
    slug,
    ...frontmatter,
    readingTime: readingTime(content).text,
  };
  return { meta, content };
}

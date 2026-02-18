import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  readTime?: string;
  published?: boolean;
}

export interface BlogPostSummary extends BlogFrontmatter {
  slug: string;
}

export interface BlogPost extends BlogPostSummary {
  content: string;
}

const isMdxFile = (fileName: string) => fileName.endsWith(".mdx");

const toSlug = (fileName: string) => fileName.replace(/\.mdx$/, "");

const normalizeFrontmatter = (
  data: Partial<BlogFrontmatter>,
  slug: string,
): BlogFrontmatter => ({
  title: data.title?.trim() || slug,
  excerpt: data.excerpt?.trim() || "",
  date: data.date?.trim() || new Date().toISOString(),
  category: data.category?.trim() || "General",
  tags: Array.isArray(data.tags) ? data.tags.filter(Boolean).map((tag) => String(tag)) : [],
  readTime: data.readTime?.trim() || "",
  published: data.published ?? true,
});

const byDateDesc = (a: BlogPostSummary, b: BlogPostSummary) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export async function getBlogSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(BLOG_DIR);
    return files.filter(isMdxFile).map(toSlug);
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
    const source = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(source);
    const frontmatter = normalizeFrontmatter(data, slug);

    if (!frontmatter.published) {
      return null;
    }

    return {
      slug,
      ...frontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogPostSummary[]> {
  const slugs = await getBlogSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getBlogPostBySlug(slug);
      if (!post) {
        return null;
      }

      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        category: post.category,
        tags: post.tags,
        readTime: post.readTime,
        published: post.published,
      };
    }),
  );

  return posts.filter((post): post is BlogPostSummary => post !== null).sort(byDateDesc);
}

export async function getRecentBlogPosts(limit = 3): Promise<BlogPostSummary[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.slice(0, limit);
}

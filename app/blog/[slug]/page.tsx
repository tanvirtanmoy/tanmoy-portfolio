import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentPropsWithoutRef } from "react";
import ReadingProgress from "@/app/components/ReadingProgress";
import { getBlogPostBySlug, getBlogSlugs } from "@/app/lib/blog";
import { siteUrl } from "../../seo";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-4xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-2xl font-semibold text-white mt-6 mb-3" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-slate-300 leading-8 mb-4" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 mb-4 text-slate-300 space-y-2" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 mb-4 text-slate-300 space-y-2" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="leading-7" {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l-4 border-cyan-500/80 pl-4 italic text-slate-300 mb-4" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="text-cyan-400 hover:text-blue-400 transition-colors underline underline-offset-4" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code className="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded text-sm" {...props} />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto mb-4" {...props} />
  ),
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-28 pb-16 px-6">
      <ReadingProgress />
      <article className="max-w-3xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <Link href="/blog" className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-8">
          ← Back to Blog
        </Link>

        <header className="mb-10 border-b border-slate-700 pb-6">
          <p className="text-sm text-cyan-400 mb-3">{post.category}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-slate-400 text-lg mb-4">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            {post.readTime ? <span>• {post.readTime}</span> : null}
          </div>
          {post.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        <div className="max-w-none article-content">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}

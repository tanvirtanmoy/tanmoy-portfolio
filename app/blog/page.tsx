import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/app/lib/blog";
import { siteUrl } from "../seo";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on data engineering, analytics, machine learning, and cloud operations.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Tanmoy",
    description: "Technical articles on data engineering, ML, analytics, and cloud delivery.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-28 pb-16 px-6">
      <section className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Blog
          </h1>
          <p className="text-slate-400 text-lg">Real posts on data engineering, ML, analytics, and cloud systems.</p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-10 text-center">
            <p className="text-slate-300 text-lg font-semibold mb-2">No blog posts published yet</p>
            <p className="text-slate-400">Add MDX files in content/blog to publish your first article.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3 gap-3">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  {post.readTime ? <span className="text-xs text-slate-400">{post.readTime}</span> : null}
                </div>

                <h2 className="text-lg font-bold text-white mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

                <div className="space-y-3 pt-4 border-t border-slate-700">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString()}</span>
                    <Link href={`/blog/${post.slug}`} className="text-blue-400 text-sm font-semibold hover:text-cyan-400 transition-colors">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

import Link from "next/link";
import { getRecentBlogPosts } from "@/app/lib/blog";

const categories = [
  "Data Engineering",
  "BI & Analytics",
  "Cloud / DevOps",
  "Sustainability Analytics",
];

const upcomingPosts = [
  {
    title: "How I Think About BI Dashboards: From Data Quality to Stakeholder Trust",
    category: "BI & Analytics",
    excerpt:
      "What turns a dashboard from a chart collection into a tool stakeholders actually trust and use to make decisions.",
    tags: ["bi", "tableau", "data-quality", "stakeholders"],
  },
  {
    title: "From Raw Data to Decision-Ready Insights: Lessons from Building Analytics Products",
    category: "Analytics / Data Engineering",
    excerpt:
      "Lessons learned across pipelines, modeling, and dashboard design when shipping analytics products that drive real decisions.",
    tags: ["analytics", "data-engineering", "product"],
  },
];

export default async function Blog() {
  const posts = await getRecentBlogPosts(3);

  return (
    <section id="blog" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Insights &amp; Articles
        </h2>
        <p className="text-slate-400 text-lg">
          Notes on BI, analytics, data engineering, cloud / DevOps, and sustainability analytics.
        </p>
      </div>

      {/* Category labels */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-semibold"
          >
            {cat}
          </span>
        ))}
      </div>

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

            <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
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

        {/* Coming-soon placeholders */}
        {upcomingPosts.map((post) => (
          <article
            key={post.title}
            className="bg-slate-800/30 backdrop-blur-sm border border-dashed border-slate-700 rounded-lg p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3 gap-3">
              <span className="inline-block px-3 py-1 bg-slate-700/40 text-slate-300 text-xs font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-cyan-300 font-semibold uppercase tracking-wider">Coming soon</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
            <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

            <div className="pt-4 border-t border-slate-700">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {posts.length > 0 ? (
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      ) : null}
    </section>
  );
}

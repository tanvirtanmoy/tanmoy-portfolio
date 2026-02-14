import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Production ML Pipelines for Resource Prediction",
    excerpt: "From static reporting to interactive analytics: implementing vectorization (TFIDF, CountVectorizer), clustering algorithms (K-means, DBScan), and confidence scoring to improve ML predictions by 95%.",
    date: "Feb 1, 2025",
    readTime: "12 min read",
    category: "ML/Data Science",
    tags: ["ML", "Shiny", "Feature Engineering", "Production"],
    href: "/#contact",
  },
  {
    id: 2,
    title: "Multi-Cluster Dashboard Architecture at Scale",
    excerpt: "Managing 6+ compute clusters with real-time monitoring dashboards. Strategies for handling resource bottlenecks, capacity issues, and maintaining data consistency across 10K+ users.",
    date: "Jan 15, 2025",
    readTime: "14 min read",
    category: "Data Analytics",
    tags: ["Tableau", "Architecture", "Scalability", "Analytics"],
    href: "/#contact",
  },
  {
    id: 3,
    title: "Zero-Downtime Database Migrations in Production",
    excerpt: "Migrating analytics dashboards from legacy to new database version. Data validation strategies, testing approaches, and rollback procedures for production systems.",
    date: "Jan 5, 2025",
    readTime: "11 min read",
    category: "DevOps/Infrastructure",
    tags: ["Database", "Migration", "Data Validation", "Deployment"],
    href: "/#contact",
  },
  {
    id: 4,
    title: "Automating Data Governance with PowerAutomate & Lambda",
    excerpt: "Building automated workflows for data pipeline management, storage optimization, and secret key rotation. Reducing manual overhead by 80% through cloud automation.",
    date: "Dec 20, 2024",
    readTime: "13 min read",
    category: "DevOps/Infrastructure",
    tags: ["Automation", "AWS", "PowerAutomate", "Governance"],
    href: "/#contact",
  },
  {
    id: 5,
    title: "Feature Engineering for Project Delay Prediction",
    excerpt: "Exploring milestone position, task duration, and completion percentage as predictive features using Recursive Feature Addition (RFA) and Random Forest Classifier for project forecasting.",
    date: "Dec 5, 2024",
    readTime: "15 min read",
    category: "ML/Data Science",
    tags: ["Feature Engineering", "Project Data", "Random Forest", "Predictive Modeling"],
    href: "/#contact",
  },
  {
    id: 6,
    title: "Exploratory Data Analysis: Tool Performance Patterns",
    excerpt: "Deep-dive into engineering tool test results using Splunk and Python. Identifying performance patterns and bottlenecks for design team optimization.",
    date: "Nov 15, 2024",
    readTime: "10 min read",
    category: "Data Analytics",
    tags: ["EDA", "Splunk", "Tool Analytics", "Insights"],
    href: "/#contact",
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Insights & Articles
        </h2>
        <p className="text-slate-400 text-lg">Sharing knowledge on data engineering, ML, and analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group cursor-pointer flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-slate-400">{post.readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

            {/* Footer */}
            <div className="space-y-3 pt-4 border-t border-slate-700">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded font-mono">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Date & Read More */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{post.date}</span>
                <Link href={post.href} aria-label={`Discuss article: ${post.title}`} className="text-blue-400 text-sm font-semibold hover:text-cyan-400 transition-colors">
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-12">
        <Link
          href="/#contact"
          className="inline-block px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
}

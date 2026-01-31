interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Scaling Real-Time Data Pipelines to 500M Events Per Day",
    excerpt: "A deep dive into architectural decisions, bottleneck identification, and optimization techniques used to handle massive event throughput with Apache Spark and Kafka.",
    date: "Jan 28, 2024",
    readTime: "12 min read",
    category: "Data Engineering",
    tags: ["Spark", "Kafka", "Architecture", "Performance"],
  },
  {
    id: 2,
    title: "Building ML Models That Actually Deploy in Production",
    excerpt: "Lessons learned from deploying 10+ ML models: choosing the right frameworks, handling model drift, A/B testing strategies, and monitoring in production.",
    date: "Dec 15, 2023",
    readTime: "15 min read",
    category: "Machine Learning",
    tags: ["MLOps", "Production", "Best Practices"],
  },
  {
    id: 3,
    title: "Cost Optimization: Reducing AWS Data Warehouse Spend by 40%",
    excerpt: "Practical strategies for optimizing Redshift costs including query optimization, data partitioning, compression techniques, and workload isolation.",
    date: "Nov 03, 2023",
    readTime: "10 min read",
    category: "Cloud & DevOps",
    tags: ["AWS", "Redshift", "Cost", "Optimization"],
  },
  {
    id: 4,
    title: "Data Quality as Code: Implementing Automated Quality Checks",
    excerpt: "Framework for building robust data quality checks using Python and Airflow. How to define SLAs, catch data issues early, and maintain data trust.",
    date: "Oct 20, 2023",
    readTime: "13 min read",
    category: "Data Engineering",
    tags: ["Quality", "Testing", "Automation", "Governance"],
  },
  {
    id: 5,
    title: "SQL Performance Tuning: From Seconds to Milliseconds",
    excerpt: "Advanced SQL optimization techniques: query plans, index strategies, statistics, and real-world examples that reduced query times by 90%+.",
    date: "Sep 12, 2023",
    readTime: "14 min read",
    category: "Data Engineering",
    tags: ["SQL", "Performance", "Optimization"],
  },
  {
    id: 6,
    title: "Tableau to Production: Best Practices for Self-Service Analytics",
    excerpt: "Building scalable analytics platforms: governance models, semantic layers, performance optimization, and strategies for 40K+ daily active users.",
    date: "Aug 28, 2023",
    readTime: "11 min read",
    category: "Analytics",
    tags: ["Tableau", "Analytics", "Governance"],
  },
];

export default function Blog() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
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
                <a href="#" className="text-blue-400 text-sm font-semibold hover:text-cyan-400 transition-colors">
                  Read More →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300"
        >
          View All Articles
        </a>
      </div>
    </section>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  impact: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Real-Time Event Processing Pipeline",
    description: "Built a high-throughput data pipeline processing millions of events daily using Apache Spark and Kafka. Implemented auto-scaling on AWS to handle peak loads with 99.99% uptime.",
    category: "Data Engineering",
    tags: ["Python", "Spark", "Kafka", "AWS", "Airflow"],
    impact: "Reduced latency by 85% | Processed 500M+ events/day",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Predictive ML Model - Revenue Forecasting",
    description: "Developed ensemble machine learning models (XGBoost, LightGBM) for revenue forecasting with 94% accuracy. Deployed as API service with real-time predictions.",
    category: "ML/Data Science",
    tags: ["Python", "scikit-learn", "XGBoost", "FastAPI"],
    impact: "94% prediction accuracy | ±5% MAPE",
    icon: "🤖",
  },
  {
    id: 3,
    title: "Interactive Analytics Dashboard",
    description: "Created comprehensive Tableau dashboards analyzing customer behavior, product performance, and revenue trends. Self-service analytics reduced report requests by 60%.",
    category: "Data Analytics",
    tags: ["Tableau", "SQL", "Python"],
    impact: "60% fewer manual reports | 40K+ daily users",
    icon: "📊",
  },
  {
    id: 4,
    title: "ETL Orchestration Framework",
    description: "Designed scalable ETL framework using Apache Airflow and dbt. Automated data transformation pipeline with monitoring, error handling, and data quality checks.",
    category: "Data Engineering",
    tags: ["Airflow", "dbt", "SQL", "Python", "AWS"],
    impact: "100% automated workflows | 99.9% SLA",
    icon: "🔄",
  },
  {
    id: 5,
    title: "Cloud Data Warehouse Migration",
    description: "Led migration of on-premise data warehouse to AWS Redshift with zero downtime. Optimized queries and implemented columnar compression reducing costs by 40%.",
    category: "DevOps/Infrastructure",
    tags: ["AWS", "Redshift", "SQL", "Terraform"],
    impact: "40% cost reduction | Zero downtime migration",
    icon: "☁️",
  },
  {
    id: 6,
    title: "Data Governance & Quality Platform",
    description: "Built data governance framework with automated quality checks, lineage tracking, and metadata management using Apache Atlas and custom Python pipelines.",
    category: "Data Engineering",
    tags: ["Python", "Apache Atlas", "SQL", "AWS"],
    impact: "90% data quality compliance | Centralized governance",
    icon: "🛡️",
  },
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-lg">Real-world solutions across data engineering, ML, and analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group cursor-pointer"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {project.icon}
            </div>

            {/* Title & Category */}
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

            {/* Impact */}
            <div className="mb-4 p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded text-sm text-cyan-300 font-medium">
              {project.impact}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

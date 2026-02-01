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
    title: "ML-Powered Resource Prediction System",
    description: "Built end-to-end ML system predicting optimal compute resources for job submissions. Implemented interactive dashboard with user authentication, vectorization (TFIDF, CountVectorizer), clustering (K-means, DBScan), and confidence scoring. Migrated from static reporting to dynamic analytics achieving 95%+ performance improvement.",
    category: "ML/Data Science",
    tags: ["Python", "Shiny", "Scikit-learn", "Clustering", "AWS EC2", "Feature Engineering"],
    impact: "95% faster dashboard | 137+ deployments | Production-grade ML pipeline",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Multi-Cluster Monitoring Dashboard",
    description: "Designed and deployed production Tableau dashboard monitoring 6+ compute clusters across global locations. Implemented real-time resource allocation tracking, memory utilization analysis, and capacity visualization. Managed data consistency migration to new database system.",
    category: "Data Analytics",
    tags: ["Tableau", "SQL", "AWS Athena", "Data Validation", "Production Monitoring"],
    impact: "6+ clusters monitored | 100% data integrity | Zero downtime DB migration",
    icon: "📊",
  },
  {
    id: 3,
    title: "Workload Analytics & Optimization Platform",
    description: "Developed comprehensive workload analyzer tracking job statistics, cluster performance, and resource utilization. Fixed critical bugs (date filtering, obsolete data visibility, labeling). Implemented analytics queries for user tracking across multiple compute clusters.",
    category: "Data Analytics",
    tags: ["Tableau", "SQL", "Athena", "Data Pipeline", "Change Management"],
    impact: "Fixed 4+ critical bugs | Date filter automation | Multi-cluster tracking",
    icon: "📈",
  },
  {
    id: 4,
    title: "Project Timeline Prediction Model",
    description: "Built ML model predicting project delays using project management data. Implemented Recursive Feature Addition (RFA) with Random Forest Classifier. Engineered features (milestone position, task duration, completion percentage) with 4+ stages of cross-validation. Created fallback logic for missing baseline dates.",
    category: "ML/Data Science",
    tags: ["Python", "Random Forest", "Feature Engineering", "Project Data", "SQL"],
    impact: "Multiple feature rankings | Regression & classification models | Production-ready",
    icon: "🎯",
  },
  {
    id: 5,
    title: "Tool Performance Analytics Platform",
    description: "Conducted exploratory analysis on engineering tool test results from compute and design teams. Integrated with log aggregation systems, created dashboards highlighting performance patterns and bottlenecks. Performed tool analysis extracting actionable insights for optimization.",
    category: "Data Analytics",
    tags: ["Splunk", "Python", "S3", "Exploratory Analysis", "Dashboard Design"],
    impact: "Tool performance patterns identified | Stakeholder insights | Dashboard ready",
    icon: "⚡",
  },
  {
    id: 6,
    title: "Reporting Platform & DevOps Automation",
    description: "Maintained enterprise reporting platform with data verification, automated cloud storage management via PowerAutomate workflows. Fixed cloud analytics data source issues, managed secret key rotation with Lambda, handled data source tagging and ownership. Optimized data ingestion frequency reducing costs.",
    category: "DevOps/Infrastructure",
    tags: ["Tableau Cloud", "PowerAutomate", "Lambda", "S3", "SQL", "DevOps"],
    impact: "Storage auto-management | Cost optimization | 100% credential security",
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

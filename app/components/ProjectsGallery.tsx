"use client";

import { useState } from "react";

type FilterKey =
  | "All"
  | "BI & Analytics"
  | "Data Engineering"
  | "Data Platform / DevOps"
  | "ML & Predictive Analytics";

interface Project {
  id: number;
  title: string;
  category: string;
  filter: Exclude<FilterKey, "All">;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tools: string[];
  icon: string;
  highlight?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Multi-Cluster Monitoring Dashboard",
    category: "BI / Analytics",
    filter: "BI & Analytics",
    description:
      "Designed and deployed a production Tableau dashboard to monitor 6+ global compute clusters, giving engineering and IT stakeholders visibility into resource allocation, memory usage, capacity patterns, and operational health.",
    problem: "Cluster and resource usage data was difficult to interpret across locations.",
    solution: "Built a centralized Tableau dashboard backed by SQL/Athena data models and validation logic.",
    impact:
      "Improved visibility into cluster performance, supported operational decision-making, and maintained 100% data integrity during a database migration.",
    tools: ["Tableau", "SQL", "AWS Athena", "Data Validation", "Production Monitoring"],
    icon: "📊",
    highlight: "6+ clusters · 100% data integrity · Zero-downtime migration",
  },
  {
    id: 2,
    title: "Workload Analytics & Optimization Platform",
    category: "BI / Operations Analytics",
    filter: "BI & Analytics",
    description:
      "Built analytics capabilities to track job statistics, workload behavior, user activity, and cluster performance across compute environments.",
    problem: "Operational teams needed better visibility into workload patterns and recurring data quality issues.",
    solution:
      "Implemented analytics queries, fixed critical dashboard bugs, improved date filtering, and cleaned obsolete data visibility.",
    impact:
      "Improved dashboard reliability, enabled better workload analysis, and supported multi-cluster operational tracking.",
    tools: ["Tableau", "SQL", "Athena", "Data Pipeline", "Change Management"],
    icon: "📈",
    highlight: "Multi-cluster tracking · Improved reliability · Cleaner KPIs",
  },
  {
    id: 3,
    title: "Carbon: Green Cloud & Country Analytics",
    category: "Analytics Product / Sustainability BI",
    filter: "BI & Analytics",
    description:
      "An analytics product that ranks EU countries and AWS regions by carbon emissions, offers a cost-vs-green comparison for AWS services, and includes an AI chatbot that answers user questions about the dashboards.",
    problem:
      "Engineers and decision-makers struggle to choose cloud regions and services that are both cost-efficient and low-carbon.",
    solution:
      "Built interactive dashboards comparing EU countries and AWS regions, a cost-vs-green AWS service comparator, and an integrated AI chatbot for natural-language exploration.",
    impact:
      "Helps users pick greener AWS regions and services without giving up cost-efficiency, with self-serve answers via the chatbot.",
    tools: ["Python", "Streamlit", "AWS / Athena", "AI Chatbot", "Dashboard Design", "Sustainability Analytics"],
    icon: "🌱",
    highlight: "EU + AWS region dashboards · Cost vs. green compare · AI chatbot",
  },
  {
    id: 4,
    title: "Reporting Platform & DevOps Automation",
    category: "Data Platform / DevOps",
    filter: "Data Platform / DevOps",
    description:
      "Maintained and improved an enterprise reporting platform by automating cloud storage processes, validating data sources, rotating credentials securely, and improving ingestion efficiency.",
    problem:
      "Reporting platforms require reliability, secure access, clean ownership, and stable data refresh processes.",
    solution:
      "Used automation workflows, Lambda-based secret handling, data source tagging, and validation routines.",
    impact:
      "Improved platform reliability, reduced operational effort, supported cost optimization, and maintained credential security.",
    tools: ["Tableau Cloud", "PowerAutomate", "AWS Lambda", "S3", "SQL", "DevOps"],
    icon: "🛡️",
    highlight: "Automated storage · Secret rotation · Cost optimization",
  },
  {
    id: 5,
    title: "ML-Powered Resource Prediction System",
    category: "ML Analytics / Decision Support",
    filter: "ML & Predictive Analytics",
    description:
      "Built an ML-powered analytics system to predict optimal compute resources for job submissions and support better resource planning.",
    problem: "Users needed better guidance when selecting compute resources for engineering workloads.",
    solution:
      "Implemented feature engineering, vectorization, clustering, confidence scoring, and an authenticated interactive dashboard.",
    impact: "Moved from static reporting to dynamic analytics and improved dashboard performance by 95%+.",
    tools: ["Python", "Shiny", "Scikit-learn", "Clustering", "AWS EC2", "Feature Engineering"],
    icon: "🤖",
    highlight: "95%+ performance gain · 137+ deployments",
  },
  {
    id: 6,
    title: "Project Timeline Prediction Model",
    category: "Predictive Analytics",
    filter: "ML & Predictive Analytics",
    description:
      "Developed predictive models to analyze project and milestone delay patterns using project management data.",
    problem:
      "Project delay risk was difficult to analyze consistently due to missing dates and varying milestone structures.",
    solution:
      "Created fallback date logic, engineered milestone and duration features, and tested Random Forest-based feature selection and prediction approaches.",
    impact: "Produced reusable delay modeling logic and feature insights for schedule-risk analysis.",
    tools: ["Python", "SQL", "Random Forest", "Feature Engineering", "Project Data"],
    icon: "🎯",
    highlight: "Reusable delay logic · Schedule-risk insights",
  },
  {
    id: 7,
    title: "Tool Performance Analytics Platform",
    category: "Analytics / Performance Insights",
    filter: "Data Engineering",
    description:
      "Analyzed engineering tool performance data to identify patterns, bottlenecks, and improvement opportunities for compute and design teams.",
    problem: "Tool test results and logs needed to be translated into understandable performance insights.",
    solution:
      "Integrated log-based data sources, explored performance patterns, and prepared dashboard-ready insights.",
    impact: "Helped surface bottlenecks and supported data-backed optimization discussions.",
    tools: ["Splunk", "Python", "S3", "Exploratory Analysis", "Dashboard Design"],
    icon: "⚡",
    highlight: "Bottlenecks surfaced · Optimization discussions enabled",
  },
];

const filters: FilterKey[] = [
  "All",
  "BI & Analytics",
  "Data Engineering",
  "Data Platform / DevOps",
  "ML & Predictive Analytics",
];

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const visible =
    activeFilter === "All" ? projects : projects.filter((p) => p.filter === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-lg">
          Selected work across BI dashboards, data platforms, ML analytics, and automation.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
              activeFilter === f
                ? "bg-blue-500/20 border-blue-400 text-blue-300"
                : "border-slate-700 text-slate-400 hover:border-blue-500/40 hover:text-blue-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group flex flex-col"
          >
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {project.icon}
            </div>

            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
            </div>

            <p className="text-slate-400 text-sm mb-4">{project.description}</p>

            <div className="space-y-2 text-sm mb-4">
              <p className="text-slate-300">
                <span className="font-semibold text-blue-300">Problem: </span>
                <span className="text-slate-400">{project.problem}</span>
              </p>
              <p className="text-slate-300">
                <span className="font-semibold text-cyan-300">Solution: </span>
                <span className="text-slate-400">{project.solution}</span>
              </p>
              <p className="text-slate-300">
                <span className="font-semibold text-purple-300">Impact: </span>
                <span className="text-slate-400">{project.impact}</span>
              </p>
            </div>

            {project.highlight ? (
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded text-sm text-cyan-300 font-medium">
                {project.highlight}
              </div>
            ) : null}

            <div className="mt-auto">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tools</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

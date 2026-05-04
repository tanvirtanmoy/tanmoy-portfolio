interface SkillGroup {
  title: string;
  icon: string;
  description: string;
  skills: string[];
  accent: string;
}

const skillGroups: SkillGroup[] = [
  {
    title: "BI & Visualization",
    icon: "📊",
    description: "Stakeholder dashboards, KPI design, and reporting at scale.",
    skills: [
      "Tableau",
      "Tableau Cloud",
      "Power BI",
      "Dashboard Design",
      "KPI Reporting",
      "Stakeholder Reporting",
    ],
    accent: "from-blue-500/15 to-cyan-500/15 border-blue-500/30",
  },
  {
    title: "Data Engineering",
    icon: "🔧",
    description: "Reliable pipelines, governed datasets, and analytics-ready models.",
    skills: [
      "SQL",
      "Python",
      "ETL / ELT",
      "AWS S3",
      "AWS Athena",
      "Data Validation",
      "Data Modeling",
      "Pipeline Design",
    ],
    accent: "from-purple-500/15 to-blue-500/15 border-purple-500/30",
  },
  {
    title: "Analytics",
    icon: "🔎",
    description: "Turning operational data into decision-ready insights.",
    skills: [
      "Exploratory Analysis",
      "Operational Analytics",
      "KPI Definition",
      "Data Quality",
      "Business Insights",
      "Reporting Automation",
    ],
    accent: "from-cyan-500/15 to-teal-500/15 border-cyan-500/30",
  },
  {
    title: "DevOps / Platform",
    icon: "🛡️",
    description: "Reliability, automation, and operational stability for analytics platforms.",
    skills: [
      "Git",
      "CI/CD",
      "AWS Lambda",
      "Cloud Automation",
      "Secret Rotation",
      "Monitoring",
      "Production Support",
    ],
    accent: "from-emerald-500/15 to-cyan-500/15 border-emerald-500/30",
  },
  {
    title: "ML / Advanced Analytics",
    icon: "🤖",
    description: "Predictive models supporting analytics and decision support.",
    skills: [
      "Feature Engineering",
      "Scikit-learn",
      "Random Forest",
      "Clustering",
      "Prediction Models",
    ],
    accent: "from-pink-500/15 to-purple-500/15 border-purple-500/30",
  },
];

export default function SkillsVisualization() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          Core Skill Areas
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Practical experience across the BI, analytics, data engineering, and platform stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`bg-gradient-to-br ${group.accent} border rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{group.icon}</span>
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
            </div>
            <p className="text-slate-300 text-sm mb-4">{group.description}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-800/60 border border-slate-700 text-slate-200 text-xs rounded font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Core Competencies Summary */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "BI & Analytics", desc: "Dashboards & KPIs" },
          { title: "Data Engineering", desc: "Pipelines & Models" },
          { title: "Data Platform", desc: "Reliability & Automation" },
          { title: "ML Analytics", desc: "Predictive Insights" },
        ].map((comp) => (
          <div
            key={comp.title}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-4 text-center hover:border-blue-400 transition-colors"
          >
            <div className="text-lg font-bold text-blue-300">{comp.title}</div>
            <div className="text-sm text-slate-400">{comp.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: string;
  icon: string;
}

const skills: Skill[] = [
  // Programming & Analytics
  { name: "SQL", proficiency: 96, category: "Programming", icon: "📝" },
  { name: "Python", proficiency: 92, category: "Programming", icon: "🐍" },
  { name: "R / Shiny", proficiency: 88, category: "Programming", icon: "📊" },
  { name: "Flask / Web Dev", proficiency: 78, category: "Programming", icon: "⚙️" },

  // BI & Analytics Platforms
  { name: "Tableau", proficiency: 94, category: "BI/Analytics", icon: "📈" },
  { name: "Tableau Cloud", proficiency: 90, category: "BI/Analytics", icon: "☁️" },
  { name: "Splunk", proficiency: 85, category: "BI/Analytics", icon: "🔍" },
  { name: "Dashboard Design", proficiency: 91, category: "BI/Analytics", icon: "🎨" },

  // Cloud & Infrastructure
  { name: "AWS Athena", proficiency: 89, category: "Cloud", icon: "🗂️" },
  { name: "AWS S3", proficiency: 87, category: "Cloud", icon: "💾" },
  { name: "AWS EC2", proficiency: 85, category: "Cloud", icon: "🚀" },
  { name: "AWS Lambda", proficiency: 82, category: "Cloud", icon: "⚡" },

  // Data & ML Engineering
  { name: "Feature Engineering", proficiency: 91, category: "ML/Data Science", icon: "🔧" },
  { name: "Random Forest / Clustering", proficiency: 88, category: "ML/Data Science", icon: "🌳" },
  { name: "Scikit-learn", proficiency: 90, category: "ML/Data Science", icon: "📚" },
  { name: "Data Validation & QA", proficiency: 93, category: "ML/Data Science", icon: "✅" },

  // DevOps & Orchestration
  { name: "PowerAutomate Workflows", proficiency: 87, category: "DevOps", icon: "🔄" },
  { name: "Data Pipeline Design", proficiency: 89, category: "DevOps", icon: "🔗" },
  { name: "Git & CI/CD", proficiency: 84, category: "DevOps", icon: "📦" },
  { name: "Database Migration", proficiency: 85, category: "DevOps", icon: "🔀" },
];

const categories = ["Programming", "BI/Analytics", "Cloud", "DevOps", "ML/Data Science"];

export default function SkillsVisualization() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          Skills & Expertise
        </h2>
        <p className="text-slate-400 text-lg">Proficient across modern data stack and cloud platforms</p>
      </div>

      {/* Skills by Category */}
      <div className="space-y-12">
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <div key={category}>
              <h3 className="text-2xl font-bold text-blue-300 mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-cyan-400">{skill.proficiency}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Competencies Summary */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Data Engineering", desc: "Pipelines & ETL" },
          { title: "Analytics", desc: "BI & Visualization" },
          { title: "Machine Learning", desc: "Predictive Models" },
          { title: "Cloud DevOps", desc: "Infrastructure & Scale" },
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

interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: string;
  icon: string;
}

const skills: Skill[] = [
  // Programming & Querying
  { name: "Python", proficiency: 95, category: "Programming", icon: "🐍" },
  { name: "SQL", proficiency: 98, category: "Programming", icon: "📝" },
  { name: "Scala", proficiency: 75, category: "Programming", icon: "🎯" },
  { name: "JavaScript/TypeScript", proficiency: 80, category: "Programming", icon: "⚙️" },

  // Big Data & Frameworks
  { name: "Apache Spark", proficiency: 92, category: "Big Data", icon: "⚡" },
  { name: "Apache Kafka", proficiency: 85, category: "Big Data", icon: "📨" },
  { name: "Apache Airflow", proficiency: 88, category: "Big Data", icon: "🔄" },
  { name: "dbt", proficiency: 87, category: "Big Data", icon: "🏗️" },

  // Cloud Platforms
  { name: "AWS", proficiency: 90, category: "Cloud", icon: "☁️" },
  { name: "Redshift", proficiency: 88, category: "Cloud", icon: "🗄️" },
  { name: "S3/Data Lake", proficiency: 92, category: "Cloud", icon: "💾" },
  { name: "Lambda/EC2", proficiency: 85, category: "Cloud", icon: "🚀" },

  // Analytics & Visualization
  { name: "Tableau", proficiency: 90, category: "Analytics", icon: "📊" },
  { name: "Power BI", proficiency: 82, category: "Analytics", icon: "📈" },
  { name: "Data Visualization", proficiency: 89, category: "Analytics", icon: "🎨" },
  { name: "Statistical Analysis", proficiency: 86, category: "Analytics", icon: "📐" },

  // ML & Data Science
  { name: "Machine Learning", proficiency: 87, category: "ML/DS", icon: "🤖" },
  { name: "TensorFlow/PyTorch", proficiency: 78, category: "ML/DS", icon: "🧠" },
  { name: "scikit-learn", proficiency: 91, category: "ML/DS", icon: "📚" },
  { name: "Statistics", proficiency: 88, category: "ML/DS", icon: "📊" },
];

const categories = ["Programming", "Big Data", "Cloud", "Analytics", "ML/DS"];

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

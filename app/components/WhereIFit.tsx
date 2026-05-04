interface RoleFit {
  title: string;
  description: string;
  icon: string;
  accent: string;
  href: string;
}

const roles: RoleFit[] = [
  {
    title: "BI Specialist",
    description:
      "Designing Tableau and Power BI dashboards, defining KPIs, improving data quality, and turning complex datasets into clear insights for stakeholders.",
    icon: "📊",
    accent: "from-blue-500/15 to-cyan-500/15 border-blue-500/30 hover:border-blue-400",
    href: "#projects",
  },
  {
    title: "Data Analyst",
    description:
      "Exploring business and operational data, finding patterns, building reports, and translating analysis into practical recommendations.",
    icon: "🔎",
    accent: "from-cyan-500/15 to-teal-500/15 border-cyan-500/30 hover:border-cyan-400",
    href: "#projects",
  },
  {
    title: "Data Engineer",
    description:
      "Building reliable pipelines, SQL models, AWS-based data flows, and governed datasets for analytics and reporting.",
    icon: "🔧",
    accent: "from-purple-500/15 to-blue-500/15 border-purple-500/30 hover:border-purple-400",
    href: "#projects",
  },
  {
    title: "Data Platform / DevOps",
    description:
      "Improving reliability, automation, deployment workflows, monitoring, credential handling, and operational stability for analytics platforms.",
    icon: "🛡️",
    accent: "from-emerald-500/15 to-cyan-500/15 border-emerald-500/30 hover:border-emerald-400",
    href: "#projects",
  },
];

export default function WhereIFit() {
  return (
    <section id="where-i-fit" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Where I Fit
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          One coherent profile across BI, analytics, data engineering, and data platform work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map((role) => (
          <a
            key={role.title}
            href={role.href}
            className={`bg-gradient-to-br ${role.accent} border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col`}
          >
            <div className="text-4xl mb-4">{role.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{role.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{role.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

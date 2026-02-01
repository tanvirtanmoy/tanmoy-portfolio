interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

const timeline: TimelineEvent[] = [
  {
    year: "2024-Present",
    role: "BI DevOps Engineer",
    company: "NXP Semiconductors",
    description: "Leading data analytics, ML, and DevOps initiatives for HPC cluster management and job prediction systems",
    achievements: [
      "Built and deployed 6+ production dashboards serving 10K+ users across global compute clusters with real-time monitoring",
      "Engineered ML pipeline with feature engineering achieving 95% performance improvement using vectorization & clustering algorithms",
      "Managed zero-downtime database migration ensuring 100% data consistency across analytics products",
    ],
  },
  {
    year: "2023-2024",
    role: "Data Analyst",
    company: "Techno Teams",
    description: "Analytics and data-driven insights for marketing and sales optimization",
    achievements: [
      "Assessed marketer performance through internal data analysis, achieving 35% increase in campaign effectiveness",
      "Analyzed sales data from new online store, delivering demographic insights that drove 27% increase in targeted sales strategies",
      "Designed interactive dashboards and reports for key business metrics, improving decision-making efficiency by 40%",
    ],
  },
  {
    year: "2023",
    role: "Research Intern",
    company: "ABN AMRO Bank N.V.",
    description: "Research and stakeholder analysis for business and IT alignment",
    achievements: [
      "Interviewed and assessed work procedures of 20+ stakeholders to differentiate business vs IT perspectives",
      "Conducted thematic data analysis to identify data patterns and facilitate data-driven decision making",
      "Supported strategy planning through comprehensive stakeholder research and insights",
    ],
  },
  {
    year: "2017-2019",
    role: "Team Lead",
    company: "Techno Teams",
    description: "Technical Writing & Content Strategy Department",
    achievements: [
      "Led team of 5+ technical writers in creating documentation, user guides, and knowledge base articles for multiple products",
      "Established content standards and style guides, improving documentation consistency and reducing review cycles by 30%",
      "Mentored junior writers on technical communication best practices, contributing to team skill development and retention",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Career Journey
        </h2>
        <p className="text-slate-400 text-lg">8+ years of progressive experience in data</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform md:-translate-x-1/2" />

        {/* Timeline events */}
        <div className="space-y-12 pl-8 md:pl-0">
          {timeline.map((event, index) => (
            <div key={event.year} className={`md:flex md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Content */}
              <div className="md:w-1/2">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  {/* Year */}
                  <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-3">
                    {event.year}
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-2xl font-bold text-white mb-1">{event.role}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{event.company}</p>

                  {/* Description */}
                  <p className="text-slate-400 mb-4">{event.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {event.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-green-400 font-bold">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex md:w-0 md:justify-center">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full ring-4 ring-slate-900 relative z-10" />
              </div>

              {/* Mobile spacing */}
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

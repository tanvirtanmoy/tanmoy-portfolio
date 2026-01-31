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
    role: "Senior Data Engineer",
    company: "Tech Company",
    description: "Leading data infrastructure and platform initiatives",
    achievements: [
      "Architected real-time processing pipeline handling 500M+ events/day",
      "Built data governance framework ensuring 90%+ compliance",
      "Led team of 5 engineers in data platform modernization",
    ],
  },
  {
    year: "2022-2024",
    role: "ML Engineer / Data Scientist",
    company: "Analytics Startup",
    description: "Building machine learning products and data analytics",
    achievements: [
      "Developed 94% accurate revenue forecasting model in production",
      "Reduced model inference latency by 70% through optimization",
      "Established ML best practices and MLOps pipeline",
    ],
  },
  {
    year: "2020-2022",
    role: "Data Analytics Engineer",
    company: "E-commerce Company",
    description: "Analytics platform development and business intelligence",
    achievements: [
      "Created Tableau dashboards used by 40K+ daily active users",
      "Automated 100+ manual reporting processes using Python",
      "Designed data warehouse architecture on AWS Redshift",
    ],
  },
  {
    year: "2018-2020",
    role: "Business Intelligence Developer",
    company: "Financial Services",
    description: "BI development and data warehousing",
    achievements: [
      "Built ETL pipelines processing 100M+ records daily",
      "Migrated legacy data warehouse to cloud with zero downtime",
      "Implemented data quality framework reducing errors by 95%",
    ],
  },
  {
    year: "2016-2018",
    role: "Junior Data Analyst",
    company: "Tech Startup",
    description: "Getting started with data analysis and visualization",
    achievements: [
      "Created 50+ analytical reports for stakeholders",
      "Learned SQL, Python, and data visualization fundamentals",
      "Supported 10+ successful data-driven initiatives",
    ],
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
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

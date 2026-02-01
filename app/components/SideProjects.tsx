interface SideProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  link: string;
}

const sideProjects: SideProject[] = [
  {
    id: 1,
    title: "Data Cleaning in SQL",
    description: "Comprehensive data cleaning project using MySQL on world layoff dataset. Demonstrates advanced SQL techniques for handling missing values, duplicates, and data standardization.",
    tags: ["SQL", "MySQL", "Data Cleaning"],
    icon: "🧹",
    link: "https://github.com/tanvirtanmoy/World-Layoff-Data-Cleaning",
  },
  {
    id: 2,
    title: "Bike Sales Analysis - Excel",
    description: "Complete data cleaning and visualization project analyzing bike sales across Europe, Pacific, and North America using Excel. Includes pivot tables, charts, and trend analysis.",
    tags: ["Excel", "Data Analysis", "Visualization"],
    icon: "🚴",
    link: "https://github.com/tanvirtanmoy/Bike-Sales-Analysis-in-Excel",
  },
  {
    id: 3,
    title: "Data Domain Analysis - Power BI",
    description: "Interactive Power BI dashboard exploring data domain aspects. Demonstrates dashboard design, data modeling, and business intelligence best practices.",
    tags: ["Power BI", "Dashboard", "Data Modeling"],
    icon: "📊",
    link: "https://github.com/tanvirtanmoy/data_domain_with_power_BI",
  },
  {
    id: 4,
    title: "Amsterdam Airbnb Housing Dashboard",
    description: "Tableau dashboard analyzing Airbnb housing listings in Amsterdam. Provides insights into pricing, location, availability, and market trends.",
    tags: ["Tableau", "Data Visualization", "Analytics"],
    icon: "🏠",
    link: "https://github.com/tanvirtanmoy/Amsterdam-Airbnb-Housing-Dashboard-with-Tableau",
  },
  {
    id: 5,
    title: "Amazon Web Scraping & Notifier",
    description: "Python-based web scraper that monitors Amazon products and sends notifications for price drops. Demonstrates web scraping, data handling, and automation techniques.",
    tags: ["Python", "Web Scraping", "Automation"],
    icon: "🛒",
    link: "https://github.com/tanvirtanmoy/Amazon-Web-Scraper-Notifier-Project/",
  },
];

export default function SideProjects() {
  return (
    <section id="side-projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Side Projects
        </h2>
        <p className="text-slate-400 text-lg">Personal projects demonstrating technical skills and data analysis expertise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sideProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group cursor-pointer flex flex-col h-full"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {project.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded font-mono">
                  {tag}
                </span>
              ))}
            </div>

            {/* View Link */}
            <div className="mt-4 text-purple-400 text-sm font-semibold group-hover:text-cyan-400 transition-colors">
              View on GitHub →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const carbonWorkflow = [
  {
    step: "01",
    title: "Compare EU Countries",
    description:
      "An interactive dashboard ranks EU countries by carbon intensity so users can see which regions are greenest for digital workloads.",
  },
  {
    step: "02",
    title: "Find the Greenest AWS Region",
    description:
      "Users explore AWS regions side-by-side on carbon emissions, helping them pick low-carbon regions for their workloads.",
  },
  {
    step: "03",
    title: "Cost vs. Green Comparison",
    description:
      "A dedicated AWS service comparison surfaces options that are both cheaper and greener, so users don't have to trade cost for sustainability.",
  },
  {
    step: "04",
    title: "Ask the AI Chatbot",
    description:
      "An integrated AI assistant answers user questions about the dashboards, regions, and comparisons in plain language.",
  },
];

const carbonTags = [
  "Analytics Product",
  "BI Dashboard",
  "AWS Region Analytics",
  "Cost vs. Carbon",
  "AI Chatbot",
  "Sustainability",
  "Decision Support",
  "Streamlit",
  "Python",
  "AWS / Athena",
];

export default function CarbonProjectSpotlight() {
  return (
    <section id="carbon" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-5">
          Featured Analytics Product
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          Carbon: Green Cloud &amp; Country Analytics
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          Carbon is an analytics product that helps users find the greenest EU countries and AWS regions, compare AWS services on cost <em>and</em> carbon, and explore the dashboards through an integrated AI chatbot.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {carbonWorkflow.map((item) => (
          <div
            key={item.step}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="text-cyan-300 text-sm font-semibold mb-3">FEATURE {item.step}</div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Why this matters */}
      <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-cyan-300 mb-2">Why this matters</h3>
        <p className="text-slate-300 leading-relaxed">
          Carbon connects data engineering, BI dashboards, AI-assisted exploration, and sustainability into one product. It helps engineers and decision-makers pick cloud regions and services that are both cost-efficient and lower-carbon.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {carbonTags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded font-mono border border-slate-600">
            {tag}
          </span>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Explore the live product</h3>
          <p className="text-slate-300">
            Try the EU country and AWS region dashboards, run a cost-vs-green comparison, and ask the AI chatbot about the data.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://carbon.tanmoy.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 text-center"
          >
            Try Carbon Live
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 text-center"
          >
            View Portfolio Projects
          </a>
        </div>
      </div>
    </section>
  );
}

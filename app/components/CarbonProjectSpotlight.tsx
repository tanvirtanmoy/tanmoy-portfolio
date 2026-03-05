const carbonWorkflow = [
  {
    step: "01",
    title: "Collect Usage Inputs",
    description:
      "Users enter operational and activity data such as travel, energy, and resource consumption through a guided flow.",
  },
  {
    step: "02",
    title: "Estimate Emissions",
    description:
      "Carbon converts raw activity data into emission estimates using standardized calculation logic and transparent assumptions.",
  },
  {
    step: "03",
    title: "Surface Actionable Insights",
    description:
      "A focused dashboard highlights footprint hotspots and reduction opportunities to support faster, data-backed decisions.",
  },
];

export default function CarbonProjectSpotlight() {
  return (
    <section id="carbon" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-5">
          New Project Launch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          Carbon: How It Works
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          Carbon is a live product focused on helping users estimate footprint, understand where emissions come from, and prioritize improvements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {carbonWorkflow.map((item) => (
          <div
            key={item.step}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="text-cyan-300 text-sm font-semibold mb-3">STEP {item.step}</div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Explore the live product</h3>
          <p className="text-slate-300">
            Test the full user flow and see how Carbon turns operational input data into decision-ready sustainability insights.
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
export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Insights & Articles
        </h2>
        <p className="text-slate-400 text-lg">Sharing knowledge on data engineering, ML, and analytics</p>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-10 text-center">
        <p className="text-slate-300 text-lg font-semibold mb-2">No blog posts published yet</p>
        <p className="text-slate-400">This section is ready for your real blog articles.</p>
      </div>
    </section>
  );
}

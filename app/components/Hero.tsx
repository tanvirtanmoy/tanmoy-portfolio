export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-purple-500/10 opacity-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
          Data-Driven Engineer
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
          Architecting real-time pipelines, building ML models, and transforming data into insights
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-400 mb-1">6+</div>
            <div className="text-sm text-slate-400">Dashboards in Prod</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-cyan-400 mb-1">137+</div>
            <div className="text-sm text-slate-400">Deployments</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-purple-400 mb-1">10K+</div>
            <div className="text-sm text-slate-400">Users Across Clusters</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

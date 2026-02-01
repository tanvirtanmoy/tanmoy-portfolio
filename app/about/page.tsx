export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
            About Me
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded" />
        </div>

        {/* Professional Bio */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Professional Bio</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              [Your professional bio will go here - describe who you are and your professional identity]
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              [Add more about your role and responsibilities]
            </p>
          </div>
        </section>

        {/* Your Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              [Share your story - how you got into data/BI/DevOps. Include key turning points and what inspired you]
            </p>
          </div>
        </section>

        {/* Key Strengths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What Sets Me Apart</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Strength 1", desc: "Placeholder description" },
              { title: "Strength 2", desc: "Placeholder description" },
              { title: "Strength 3", desc: "Placeholder description" },
              { title: "Strength 4", desc: "Placeholder description" },
            ].map((strength, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-2">{strength.title}</h3>
                <p className="text-slate-400">{strength.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Education & Certifications</h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Certification/Degree 1</h3>
              <p className="text-slate-400">Institution/Year - [Details]</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Certification/Degree 2</h3>
              <p className="text-slate-400">Institution/Year - [Details]</p>
            </div>
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What I'm Looking For</h2>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              [Describe opportunities you're open to - remote/on-site, industries, project types, etc.]
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              [Mention collaboration preferences and how people can reach out]
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pt-8 border-t border-slate-700">
          <p className="text-slate-400 mb-6">Let's work together on something amazing</p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </section>
      </div>
    </main>
  );
}

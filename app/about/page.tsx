import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pt-20 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        {/* Page Title */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">👋</div>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              About Me
            </h1>
          </div>
          <div className="flex gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded" />
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded" />
          </div>
        </div>

        {/* Professional Bio */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">💼</div>
            <h2 className="text-3xl font-bold text-white">Professional Bio</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I&apos;m a data-driven professional with a strong background in data analysis, data engineering, and cloud infrastructure. I leverage complex datasets to uncover actionable insights that empower organizations to make well-informed decisions. My expertise spans across the full data lifecycle—from pipeline architecture to analytics—enabling me to bridge technical excellence with business impact.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My proficiency in BI tools (Tableau, Power BI) combined with strong programming skills in SQL and Python allows me to transform raw data into compelling narratives. As a collaborative team player, I excel at fostering effective communication and project management, ensuring stakeholders understand insights and can act on them confidently.
            </p>
          </div>
        </section>

        {/* Your Story */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🚀</div>
            <h2 className="text-3xl font-bold text-white">My Journey</h2>
          </div>
          <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              My journey in technology began with a bachelor&apos;s degree in Computer Science from American International University-Bangladesh, where I developed a strong foundation in software engineering principles. However, my true passion emerged during my master&apos;s studies through the prestigious Software Engineers for Green Deal (SE4GD) program—an Erasmus Mundus initiative spanning three European universities: Università degli Studi dell&apos;Aquila (Italy), LUT University (Finland), and Vrije Universiteit Amsterdam (Netherlands).
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              This transformative experience deepened my understanding of sustainability in software engineering and the critical role that IT plays in achieving global sustainability goals. I&apos;m passionate about leveraging data and technology as catalysts for positive environmental and social impact. Today, I combine my technical expertise with this sustainability mindset, seeking projects and organizations that prioritize both innovation and responsibility.
            </p>
          </div>
        </section>

        {/* Key Strengths */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-4xl">⭐</div>
            <h2 className="text-3xl font-bold text-white">What Sets Me Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🏗️", title: "End-to-End Data Expertise", desc: "Full proficiency across the data stack—from pipeline architecture and CI/CD to analytics and visualization—enabling holistic solutions" },
              { icon: "📈", title: "Business Acumen", desc: "Strong ability to translate complex technical datasets into actionable business insights that drive informed decision-making" },
              { icon: "🤝", title: "Collaborative Leadership", desc: "Excellent communicator and team player who fosters effective collaboration, ensuring stakeholders understand and trust data insights" },
              { icon: "🌱", title: "Sustainability Focus", desc: "Passionate about Green IT and using technology responsibly to achieve sustainability—combining innovation with environmental consciousness" },
            ].map((strength, i) => (
              <div key={i} className="group">
                <div className="bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{strength.icon}</div>
                  <h3 className="text-xl font-bold text-blue-300 mb-3">{strength.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{strength.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-4xl">🎓</div>
            <h2 className="text-3xl font-bold text-white">Education & Certifications</h2>
          </div>
          <div className="space-y-4">
            <div className="group">
              <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-emerald-400 mb-2 flex items-center gap-2">
                      <span className="text-3xl">🌍</span>
                      Master of Science - Software Engineers for Green Deal (SE4GD)
                    </h3>
                    <p className="text-slate-400 mb-2 font-semibold">Erasmus Mundus Joint Masters Program (Sep 2021 - Aug 2023)</p>
                    <p className="text-slate-400 text-sm mb-2">🇮🇹 Università degli Studi dell&apos;Aquila • 🇫🇮 LUT University • 🇳🇱 Vrije Universiteit Amsterdam</p>
                    <p className="text-slate-300 text-sm italic">Specialization: Sustainability in Software Engineering & Green IT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-400 mb-2 flex items-center gap-2">
                      <span className="text-3xl">🖥️</span>
                      Bachelor of Science - Computer Science
                    </h3>
                    <p className="text-slate-400 mb-2 font-semibold">American International University-Bangladesh (2014 - 2017)</p>
                    <p className="text-slate-300 text-sm">📊 GPA: 3.87/4.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
                      <span className="text-3xl">📚</span>
                      Higher Secondary Education
                    </h3>
                    <p className="text-slate-400 mb-2 font-semibold">Notre Dame College Bangladesh (2010 - 2012)</p>
                    <p className="text-slate-300 text-sm">Science Stream</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I&apos;m Looking For */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🎯</div>
            <h2 className="text-3xl font-bold text-white">What I&apos;m Looking For</h2>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/15">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I&apos;m seeking challenging opportunities where I can apply my data engineering and analytics expertise while contributing to meaningful, sustainable outcomes. I&apos;m interested in roles that value innovation, data-driven decision-making, and environmental responsibility—whether in tech, finance, energy, or other forward-thinking organizations.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m open to collaborative projects, mentorship opportunities, and conversations about leveraging data for social and environmental impact. If you&apos;re working on something interesting or think we could create synergy, I&apos;d love to connect and explore possibilities together.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pt-12 border-t border-slate-700/50">
          <div className="text-5xl mb-4">💫</div>
          <p className="text-slate-400 mb-8 text-lg">Let&apos;s work together on something amazing</p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </section>
      </div>
    </main>
  );
}

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
              I'm a data-driven professional with a strong background in data analysis, data engineering, and cloud infrastructure. I leverage complex datasets to uncover actionable insights that empower organizations to make well-informed decisions. My expertise spans across the full data lifecycle—from pipeline architecture to analytics—enabling me to bridge technical excellence with business impact.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My proficiency in BI tools (Tableau, Power BI) combined with strong programming skills in SQL and Python allows me to transform raw data into compelling narratives. As a collaborative team player, I excel at fostering effective communication and project management, ensuring stakeholders understand insights and can act on them confidently.
            </p>
          </div>
        </section>

        {/* Your Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              My journey in technology began with a bachelor's degree in Computer Science from American International University-Bangladesh, where I developed a strong foundation in software engineering principles. However, my true passion emerged during my master's studies through the prestigious Software Engineers for Green Deal (SE4GD) program—an Erasmus Mundus initiative spanning three European universities: Università degli Studi dell'Aquila (Italy), LUT University (Finland), and Vrije Universiteit Amsterdam (Netherlands).
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              This transformative experience deepened my understanding of sustainability in software engineering and the critical role that IT plays in achieving global sustainability goals. I'm passionate about leveraging data and technology as catalysts for positive environmental and social impact. Today, I combine my technical expertise with this sustainability mindset, seeking projects and organizations that prioritize both innovation and responsibility.
            </p>
          </div>
        </section>

        {/* Key Strengths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What Sets Me Apart</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "End-to-End Data Expertise", desc: "Full proficiency across the data stack—from pipeline architecture and CI/CD to analytics and visualization—enabling holistic solutions" },
              { title: "Business Acumen", desc: "Strong ability to translate complex technical datasets into actionable business insights that drive informed decision-making" },
              { title: "Collaborative Leadership", desc: "Excellent communicator and team player who fosters effective collaboration, ensuring stakeholders understand and trust data insights" },
              { title: "Sustainability Focus", desc: "Passionate about Green IT and using technology responsibly to achieve sustainability—combining innovation with environmental consciousness" },
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
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Master of Science - Software Engineers for Green Deal (SE4GD)</h3>
              <p className="text-slate-400 mb-2">Erasmus Mundus Joint Masters Program (Sep 2021 - Aug 2023)</p>
              <p className="text-slate-400 text-sm">Università degli Studi dell'Aquila (Italy) • LUT University (Finland) • Vrije Universiteit Amsterdam (Netherlands)</p>
              <p className="text-slate-400 text-sm mt-2">Specialization: Sustainability in Software Engineering & Green IT</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Bachelor of Science - Computer Science</h3>
              <p className="text-slate-400 mb-2">American International University-Bangladesh (2014 - 2017)</p>
              <p className="text-slate-400 text-sm">GPA: 3.87/4.00</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Higher Secondary Education</h3>
              <p className="text-slate-400 mb-2">Notre Dame College Bangladesh (2010 - 2012)</p>
              <p className="text-slate-400 text-sm">Science Stream</p>
            </div>
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What I'm Looking For</h2>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I'm seeking challenging opportunities where I can apply my data engineering and analytics expertise while contributing to meaningful, sustainable outcomes. I'm interested in roles that value innovation, data-driven decision-making, and environmental responsibility—whether in tech, finance, energy, or other forward-thinking organizations.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm open to collaborative projects, mentorship opportunities, and conversations about leveraging data for social and environmental impact. If you're working on something interesting or think we could create synergy, I'd love to connect and explore possibilities together.
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

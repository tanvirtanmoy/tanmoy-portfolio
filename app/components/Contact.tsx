export default function Contact() {
  const socialLinks = [
    { name: "LinkedIn", icon: "🔗", url: "https://linkedin.com", color: "hover:text-blue-400" },
    { name: "GitHub", icon: "🐙", url: "https://github.com", color: "hover:text-slate-300" },
    { name: "Twitter", icon: "𝕏", url: "https://twitter.com", color: "hover:text-cyan-400" },
    { name: "Email", icon: "✉️", url: "mailto:hello@example.com", color: "hover:text-purple-400" },
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Let's Connect
        </h2>
        <p className="text-slate-400 text-lg">Open to collaboration, opportunities, and discussing all things data</p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Email Card */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
          <div className="text-4xl mb-4">✉️</div>
          <h3 className="text-xl font-bold text-white mb-2">Email</h3>
          <p className="text-slate-400 mb-4">Reach out for collaboration or opportunities</p>
          <a href="mailto:hello@example.com" className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors">
            hello@example.com
          </a>
        </div>

        {/* Schedule Card */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
          <div className="text-4xl mb-4">📅</div>
          <h3 className="text-xl font-bold text-white mb-2">Schedule a Call</h3>
          <p className="text-slate-400 mb-4">Let's discuss your data challenges</p>
          <a
            href="#"
            className="text-purple-400 font-semibold hover:text-pink-400 transition-colors"
          >
            Book a 30-min call
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center">
        <p className="text-slate-400 mb-8 font-semibold">Follow my work</p>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl transition-all duration-300 transform hover:scale-110 ${link.color}`}
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 pt-12 border-t border-slate-700 text-center">
        <p className="text-slate-400 mb-6">
          Interested in working together on data projects or want to discuss your pipeline architecture?
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Send me an Email
        </a>
      </div>
    </section>
  );
}

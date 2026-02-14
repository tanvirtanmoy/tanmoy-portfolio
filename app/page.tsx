import Hero from "./components/Hero";
import ProjectsGallery from "./components/ProjectsGallery";
import SideProjects from "./components/SideProjects";
import SkillsVisualization from "./components/SkillsVisualization";
import Timeline from "./components/Timeline";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <Hero />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <ProjectsGallery />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      <SideProjects />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <SkillsVisualization />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <Timeline />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <Blog />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      <Contact />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-4">Built with Next.js, React, and Tailwind CSS</p>
          <p className="text-sm">© 2026 Tanmoy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import Hero from "./components/Hero";
import ProjectsGallery from "./components/ProjectsGallery";
import SideProjects from "./components/SideProjects";
import SkillsVisualization from "./components/SkillsVisualization";
import Timeline from "./components/Timeline";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { personName, siteUrl } from "./seo";

export const metadata: Metadata = {
  title: "BI DevOps & Data Analytics Engineer Portfolio",
  description:
    "Explore Tanmoy's portfolio featuring data engineering pipelines, Tableau analytics products, cloud automation, and ML-powered prediction systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BI DevOps & Data Analytics Engineer Portfolio",
    description:
      "Production dashboards, cloud-scale analytics, and ML systems focused on measurable impact.",
    url: siteUrl,
    type: "website",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: personName,
        url: siteUrl,
        jobTitle: "BI DevOps & Data Analytics Engineer",
        sameAs: [
          "https://www.linkedin.com/in/tanvir-tanmoy",
          "https://github.com/tanvirtanmoy",
        ],
        knowsAbout: [
          "Data Engineering",
          "Analytics Engineering",
          "Machine Learning",
          "Tableau",
          "AWS",
          "SQL",
          "Python",
          "ETL",
        ],
      },
      {
        "@type": "WebSite",
        name: "Tanmoy Portfolio",
        url: siteUrl,
        inLanguage: "en",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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

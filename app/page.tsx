import type { Metadata } from "next";
import Hero from "./components/Hero";
import WhereIFit from "./components/WhereIFit";
import CarbonProjectSpotlight from "./components/CarbonProjectSpotlight";
import ProjectsGallery from "./components/ProjectsGallery";
import SideProjects from "./components/SideProjects";
import SkillsVisualization from "./components/SkillsVisualization";
import Timeline from "./components/Timeline";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { personName, siteUrl } from "./seo";

export const metadata: Metadata = {
  title: "Tanmoy | Data Engineer & BI Analytics Specialist",
  description:
    "Portfolio of Tanmoy, a data professional working across BI dashboards, data engineering, AWS analytics platforms, Tableau, Power BI, SQL, Python, and DevOps automation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tanmoy | Data Engineer & BI Analytics Specialist",
    description:
      "BI dashboards, data engineering, and data platform work that turns complex operational data into decision-ready insights.",
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
        jobTitle: "Data Engineer & BI/Analytics Specialist",
        sameAs: [
          "https://www.linkedin.com/in/tanvir-tanmoy",
          "https://github.com/tanvirtanmoy",
        ],
        knowsAbout: [
          "Business Intelligence",
          "Tableau",
          "Power BI",
          "Data Analytics",
          "Data Engineering",
          "Data Platform",
          "AWS",
          "SQL",
          "Python",
          "DevOps",
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

      <WhereIFit />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      <CarbonProjectSpotlight />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import { personName, siteUrl } from "./seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tanmoy | BI DevOps & Data Analytics Engineer",
    template: "%s | Tanmoy",
  },
  description:
    "BI DevOps and Analytics Engineer portfolio showcasing real-time data pipelines, ML systems, cloud automation, and production dashboards with measurable business impact.",
  applicationName: "Tanmoy Portfolio",
  keywords: [
    "BI DevOps Engineer",
    "Data Analytics Engineer",
    "Data Engineer",
    "Analytics Engineer",
    "Machine Learning Engineer",
    "ETL Pipeline",
    "AWS Athena",
    "Tableau",
    "Python",
    "SQL",
    "Cloud Infrastructure",
  ],
  authors: [{ name: personName }],
  creator: personName,
  publisher: personName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tanmoy | BI DevOps & Data Analytics Engineer",
    description:
      "Real-time pipelines, production analytics dashboards, and machine learning solutions across cloud infrastructure.",
    url: siteUrl,
    siteName: "Tanmoy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmoy | BI DevOps & Data Analytics Engineer",
    description:
      "Portfolio of production-grade data engineering, BI analytics, and ML delivery across modern cloud stacks.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

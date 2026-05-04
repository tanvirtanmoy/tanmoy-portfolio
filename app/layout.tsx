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
    default: "Tanmoy | Data Engineer & BI Analytics Specialist",
    template: "%s | Tanmoy",
  },
  description:
    "Portfolio of Tanmoy, a data professional working across BI dashboards, data engineering, AWS analytics platforms, Tableau, Power BI, SQL, Python, and DevOps automation.",
  applicationName: "Tanmoy Portfolio",
  keywords: [
    "Data Engineer",
    "BI Specialist",
    "Data Analyst",
    "Tableau",
    "Power BI",
    "SQL",
    "Python",
    "AWS",
    "Athena",
    "Data Platform",
    "Analytics Engineer",
    "DevOps",
  ],
  authors: [{ name: personName }],
  creator: personName,
  publisher: personName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tanmoy | Data Engineer & BI Analytics Specialist",
    description:
      "BI dashboards, data engineering, AWS analytics platforms, and DevOps automation that turn complex operational data into decision-ready insights.",
    url: siteUrl,
    siteName: "Tanmoy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmoy | Data Engineer & BI Analytics Specialist",
    description:
      "BI, analytics, data engineering, and data platform work across Tableau, Power BI, SQL, Python, and AWS.",
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

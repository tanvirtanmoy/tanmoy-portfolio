import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Data Engineer Portfolio | Real-time Pipelines & ML Models",
  description: "Senior BI/DevOps/Analytics Engineer specializing in real-time data pipelines, machine learning models, and cloud infrastructure. AWS, Spark, Python, Tableau.",
  keywords: "Data Engineer, Data Science, Data Analytics, ETL, Spark, AWS, Python, SQL, Tableau",
  authors: [{ name: "Tanmoy" }],
  openGraph: {
    title: "Data Engineer Portfolio",
    description: "Real-time data pipelines, ML models, and analytics solutions",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}

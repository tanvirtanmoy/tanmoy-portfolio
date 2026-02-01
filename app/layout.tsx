import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
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
  title: "Data Analytics Engineer Portfolio",
  description: "Senior BI/DevOps/Analytics Engineer specializing in real-time data pipelines, machine learning models, and cloud infrastructure. AWS, Spark, Python, Tableau.",
  keywords: "Data Engineer, Data Science, Data Analytics, ETL, Spark, AWS, Python, SQL, Tableau",
  authors: [{ name: "Tanmoy" }],
  openGraph: {
    title: "Data Analytics Engineer Portfolio",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}

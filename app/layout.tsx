import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteDescription =
  "Build a smarter website with Webternet. Explore website planning tools, launch checklists, domain generators, hosting calculators, SEO resources, and AI prompts for website owners.";

export const metadata: Metadata = {
  metadataBase: new URL("https://webternet.com"),
  title: "WEBTERNET | Practical Tools for Building Smarter Websites",
  description: siteDescription,
  keywords: [
    "Webternet",
    "website building guide",
    "build a smarter website",
    "website tools for small business",
    "website launch checklist",
    "website planning tools",
    "domain name generator",
    "website cost calculator",
    "website optimization tools",
    "best tools for websites",
    "AI website tools",
    "website brief generator",
    "website owner tools",
    "small business website guide",
    "website setup checklist",
    "domain and hosting tools",
    "website security checker",
    "SSL checker",
    "email DNS checker",
    "uptime checker",
    "website workflow tools",
    "website automation tools",
    "SEO tools for websites",
    "website hosting comparison",
    "tools for building websites",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WEBTERNET | Practical Tools for Building Smarter Websites",
    description:
      "Discover practical website tools, launch checklists, calculators, curated resources, and AI prompts to help you build and improve smarter websites.",
    url: "https://webternet.com",
    siteName: "Webternet",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Webternet | Build Smarter Websites",
    description:
      "Explore practical tools, checklists, calculators, and AI prompts for planning, launching, and improving websites.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Webternet",
  url: "https://webternet.com",
  description:
    "The practical guide to building smarter websites, with tools, checklists, calculators, curated resources, and AI prompts for website owners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

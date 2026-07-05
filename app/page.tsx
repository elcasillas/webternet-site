import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";

const tools = [
  {
    title: "Domain Name Generator",
    description:
      "Generate brandable domain ideas based on your business name, niche, audience, or keyword.",
  },
  {
    title: "Hosting Cost Calculator",
    description:
      "Estimate hosting costs based on traffic, storage, email, backups, SSL, and support needs.",
  },
  {
    title: "Website Launch Checklist",
    description:
      "Review the essentials before going live, from DNS and analytics to backups and security headers.",
  },
  {
    title: "Page Speed Audit Notes",
    description:
      "Capture the fixes that usually move Lighthouse scores fastest without turning optimization into guesswork.",
  },
  {
    title: "SSL And Security Check",
    description:
      "Spot missing certificates, mixed content, weak forms, and simple trust issues across your pages.",
  },
  {
    title: "SEO Basics Planner",
    description:
      "Map titles, descriptions, headings, and internal links so your site structure is clear before publishing.",
  },
];

const categories = [
  "Website Builders",
  "Hosting Platforms",
  "SEO Tools",
  "Email And CRM",
  "Analytics",
  "Security",
  "Automation",
  "Content Systems",
];

const guides = [
  {
    title: "Launch Smarter",
    description:
      "A practical sequence for choosing a stack, setting up forms, configuring analytics, and publishing cleanly.",
  },
  {
    title: "Secure The Basics",
    description:
      "The short list of SSL, backups, spam prevention, and environment handling work that prevents common failures.",
  },
  {
    title: "Automate Repetitive Work",
    description:
      "Connect forms, notifications, and follow-up workflows so the site keeps working after the first release.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cloud text-ink">
      <SiteHeader />

      <section className="relative overflow-hidden px-5 pb-20 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(31,94,255,0.18),_transparent_58%)]" />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-white/60 bg-white/70 px-3 py-1 text-sm font-semibold text-ocean shadow-soft backdrop-blur">
                Practical tools, guides, and workflows
              </p>
              <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl">
                The practical guide to building smarter websites.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate sm:text-xl">
                Discover the best tools, guides, and workflows for launching,
                securing, automating, and growing your online business.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#tools"
                  className="rounded-xl bg-ocean px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#184cd0]"
                >
                  Explore Tools
                </a>
                <a
                  href="#directory"
                  className="rounded-xl border border-[#cbd8ff] bg-white px-5 py-3 text-sm font-bold text-ocean transition hover:border-ocean"
                >
                  Compare Website Tools
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
                  Build
                </p>
                <p className="mt-3 text-2xl font-extrabold">
                  Start with a clear stack and a site structure that scales.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#dce6ff] bg-mist p-5 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
                  Protect
                </p>
                <p className="mt-3 text-2xl font-extrabold">
                  Handle forms, domains, SSL, and email with fewer blind spots.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#dce6ff] bg-[#172033] p-5 text-white shadow-soft sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Grow
                </p>
                <p className="mt-3 max-w-xl text-2xl font-extrabold">
                  Use calculators, checklists, and comparison guides to make
                  faster decisions without bloated tooling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Utilities"
            title="Free website tools and calculators"
            description="Simple utilities to help you plan, launch, check, and improve your website."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </div>
      </section>

      <section id="directory" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white px-6 py-8 shadow-soft sm:px-8">
          <SectionHeading
            eyebrow="Directory"
            title="Browse tools by category"
            description="Compare the products and services most teams evaluate when they launch or rebuild a website."
          />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-line bg-cloud px-4 py-4 text-sm font-extrabold text-ink"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Guides"
            title="Practical guides for each stage"
            description="Short, opinionated explanations for the decisions that matter when you are building and operating a site."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="rounded-[1.5rem] border border-line bg-white p-6 shadow-soft"
              >
                <h3 className="text-2xl font-extrabold">{guide.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate">
                  {guide.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-2 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-ink px-6 py-10 text-white sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Next Step
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Need a custom website workflow?
              </h2>
              <p className="mt-3 text-base leading-7 text-white/70">
                Use the submission page to collect project details and route
                them through the included API layer.
              </p>
            </div>
            <Link
              href="/submit-property"
              className="inline-flex w-fit rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-mist"
            >
              Open Submission Page
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white px-5 py-8 text-center text-sm text-slate sm:px-8 lg:px-12">
        Webternet helps teams launch, secure, and grow smarter websites.
      </footer>
    </main>
  );
}

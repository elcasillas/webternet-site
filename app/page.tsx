import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";

const tools = [
  {
    title: "Domain Name Generator",
    description:
      "Generate domain name ideas for a business website based on your niche, audience, offer, or target keyword.",
  },
  {
    title: "Website Cost Calculator",
    description:
      "Estimate website costs across hosting, domains, email, backups, SSL, support, and maintenance.",
  },
  {
    title: "Website Launch Checklist",
    description:
      "Review the website checklist before going live, including DNS, analytics, forms, backups, SEO, and security.",
  },
  {
    title: "Website Optimization Notes",
    description:
      "Track speed, content, accessibility, and conversion fixes that help improve a business website after launch.",
  },
  {
    title: "SSL And Security Checker",
    description:
      "Check SSL, mixed content, forms, and basic trust signals before customers rely on your site.",
  },
  {
    title: "SEO Tools Planner",
    description:
      "Map titles, descriptions, headings, internal links, and indexable pages before publishing.",
  },
  {
    title: "Website Brief Generator",
    description:
      "Turn goals, audiences, pages, features, and content needs into a clear website planning brief.",
  },
  {
    title: "AI Prompt Library",
    description:
      "Use AI prompts for website owners to draft page copy, compare tools, plan workflows, and improve updates.",
  },
  {
    title: "Email DNS And Uptime Checks",
    description:
      "Keep track of email DNS, uptime, redirects, and domain and hosting issues that can affect launches.",
  },
];

const categories = [
  {
    title: "Website Builders",
    description:
      "Tools for building websites, landing pages, directories, and small business sites without unnecessary complexity.",
  },
  {
    title: "Domain And Hosting Tools",
    description:
      "Domain, SSL, DNS, hosting comparison, and uptime tools for choosing and maintaining the right setup.",
  },
  {
    title: "SEO Tools",
    description:
      "Research, metadata, content, and technical SEO tools for websites that need clearer structure and visibility.",
  },
  {
    title: "Email And CRM",
    description:
      "Email DNS checker workflows, form routing, CRM capture, and follow-up tools for website owners.",
  },
  {
    title: "Analytics",
    description:
      "Practical reporting tools for understanding traffic, conversions, content performance, and launch outcomes.",
  },
  {
    title: "Security",
    description:
      "Website security checker resources for SSL, backups, spam prevention, permissions, and trust basics.",
  },
  {
    title: "Automation",
    description:
      "Website automation tools for forms, notifications, publishing workflows, and repeatable owner tasks.",
  },
  {
    title: "AI Website Tools",
    description:
      "AI website tools and prompts for briefs, page outlines, content improvements, and operations planning.",
  },
];

const guides = [
  {
    title: "Launch Smarter",
    description:
      "A practical website launch guide for entrepreneurs choosing a stack, setting up forms, configuring analytics, and publishing cleanly.",
  },
  {
    title: "Choose Hosting Clearly",
    description:
      "A plain-English path for how to choose website hosting based on traffic, support, email, backups, and total cost.",
  },
  {
    title: "Automate Repetitive Work",
    description:
      "Connect forms, notifications, content updates, and follow-up workflows so the site keeps working after the first release.",
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
                Website planning tools, checklists, and AI prompts
              </p>
              <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl">
                Practical tools for building smarter websites.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate sm:text-xl">
                Webternet helps entrepreneurs, small businesses, and website
                owners plan, launch, manage, and improve better websites with
                checklists, calculators, curated tools, and practical guides.
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
                  Start with a website planning guide, clear pages, and a stack
                  that fits the business.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#dce6ff] bg-mist p-5 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
                  Protect
                </p>
                <p className="mt-3 text-2xl font-extrabold">
                  Handle domains, hosting, SSL, email DNS, and security with
                  fewer blind spots.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#dce6ff] bg-[#172033] p-5 text-white shadow-soft sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Grow
                </p>
                <p className="mt-3 max-w-xl text-2xl font-extrabold">
                  Use calculators, launch tools, AI prompts, and comparison
                  guides to make faster website decisions.
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
            title="Website tools for small business launches"
            description="Simple utilities to help you plan a site, compare domain and hosting tools, run launch checks, and improve your website after it goes live."
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
            title="Browse the best tools for websites by category"
            description="Compare the products and services website owners evaluate when they plan, launch, optimize, automate, or rebuild a business website."
          />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <div key={category.title} className="rounded-2xl border border-line bg-cloud px-4 py-4">
                <h3 className="text-sm font-extrabold text-ink">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Guides"
            title="Practical website building guides for each stage"
            description="Short, clear explanations for how to build a better website, choose the right tools, and keep improving after launch."
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
                Use the submission page to collect project details and turn the
                next website setup checklist into a practical workflow.
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
        Webternet helps website owners plan, launch, secure, and grow smarter websites.
      </footer>
    </main>
  );
}

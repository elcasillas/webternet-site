import Link from "next/link";

const fields = [
  { id: "name", label: "Full name", type: "text", placeholder: "Alex Morgan" },
  {
    id: "email",
    label: "Email address",
    type: "email",
    placeholder: "alex@example.com",
  },
  {
    id: "website",
    label: "Current website",
    type: "url",
    placeholder: "https://yourwebsite.com",
  },
  {
    id: "goal",
    label: "Primary goal",
    type: "text",
    placeholder: "Generate leads, launch a directory, improve conversions...",
  },
];

export default function SubmitPropertyPage() {
  return (
    <main className="min-h-screen bg-cloud px-5 py-10 text-ink sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-ocean">
          Back to homepage
        </Link>

        <div className="mt-6 rounded-[2rem] border border-line bg-white p-6 shadow-soft sm:p-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
              Submission
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
              Share your website project details
            </h1>
            <p className="mt-4 text-base leading-7 text-slate">
              This page mirrors the small lead-capture shape described in the
              stack notes. The form posts to the included API route.
            </p>
          </div>

          <form
            action="/api/send-property-submission"
            method="post"
            className="mt-8 space-y-5"
          >
            {fields.map((field) => (
              <label key={field.id} className="block">
                <span className="mb-2 block text-sm font-bold text-ink">
                  {field.label}
                </span>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-line bg-cloud px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate focus:border-ocean focus:bg-white"
                />
              </label>
            ))}

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">
                Project notes
              </span>
              <textarea
                id="notes"
                name="notes"
                rows={6}
                placeholder="Describe the site, audience, timeline, and any forms or integrations you need."
                className="w-full rounded-xl border border-line bg-cloud px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate focus:border-ocean focus:bg-white"
              />
            </label>

            <button
              type="submit"
              className="rounded-xl bg-ocean px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#184cd0]"
            >
              Submit project details
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

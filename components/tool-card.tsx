type ToolCardProps = {
  title: string;
  description: string;
};

export function ToolCard({ title, description }: ToolCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-line bg-white p-6 shadow-soft transition hover:-translate-y-0.5">
      <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate">{description}</p>
    </article>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate sm:text-lg">
        {description}
      </p>
    </div>
  );
}

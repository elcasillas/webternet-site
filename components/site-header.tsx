import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#tools", label: "Tools" },
  { href: "#directory", label: "Directory" },
  { href: "#guides", label: "Guides" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <Link
          href="/"
          className="flex w-fit items-center"
          aria-label="Webternet homepage"
        >
          <Image
            src="/webternet-logo.png"
            alt="Webternet"
            width={340}
            height={160}
            className="h-20 w-auto sm:h-[5.5rem]"
            priority
          />
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-ink">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ocean">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const footerItems = [
  {
    name: "GitHub",
    href: "https://github.com/refrainsclub",
  },
];

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn(className, "container mx-auto bg-background")}>
      <ul className="flex flex-col gap-4 md:flex-row">
        {footerItems.map((item) => (
          <li key={item.name}>
            <FooterLink {...item} />
          </li>
        ))}

        <li className="hidden items-center md:flex">
          <ModeToggle className="text-muted-foreground" />
        </li>
      </ul>
    </footer>
  );
}

export function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-1 lowercase text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground"
    >
      <ArrowUpRight size={20} />
      <span>{name}</span>
    </Link>
  );
}

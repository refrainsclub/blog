import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const footerItems = [
  {
    title: "Let's Chat",
    href: "/contact",
  },
  {
    title: "GitHub",
    href: "https://github.com/refrainsclub",
  },
];

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn(className, "container mx-auto bg-background")}>
      <ul className="flex flex-col gap-4 md:flex-row">
        {footerItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="flex items-center gap-1 lowercase text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground"
            >
              <ArrowUpRight size={20} />

              <span>{item.title}</span>
            </Link>
          </li>
        ))}
        <ModeToggle className="text-muted-foreground" />
      </ul>
    </footer>
  );
}

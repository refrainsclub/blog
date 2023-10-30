"use client";
import { cn } from "@/lib/cn";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Nav({ className }: { className?: string }) {
  return (
    <NavigationMenu.Root className={className}>
      <NavigationMenu.List className="flex items-center gap-4">
        {navItems.map((item) => (
          <NavigationMenu.Item key={item.name}>
            <NavigationMenu.Link asChild>
              <NavLink {...item} />
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export function NavLink({ name, href }: { name: string; href: string }) {
  const pathname = "/" + usePathname().split("/")[1];
  const path = "/" + href.split("/")[1];
  const active = path === pathname;

  return (
    <Link
      href={href}
      className="lowercase text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground"
    >
      <span className="relative">
        {name}

        {active && (
          <motion.div
            className="absolute inset-x-0 -bottom-[4px] h-[2px] bg-muted-foreground"
            layoutId="sidebar"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        )}
      </span>
    </Link>
  );
}

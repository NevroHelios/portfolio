"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto",
        "border border-opacity-40 border-[#2a3441]",
        "rounded-full bg-gradient-to-r from-[#1a1f35]/90 to-[#111827]/90",
        "backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]",
        "pr-4 pl-8 py-2 items-center justify-center space-x-4",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.35)]",
        "hover:bg-gradient-to-r hover:from-[#1e2538]/95 hover:to-[#151c2f]/95",
        className
      )}
    >
      {navItems.map((navItem, idx) => {
        const isActive = pathname === navItem.link || (pathname === "/" && navItem.link === "/home");
        return (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "block", // Changed to block to take full height
              "relative px-3 py-1 rounded-full",
              "transition-all duration-200 ease-in-out",
              "cursor-pointer", // Added explicit cursor
              "hover:bg-[#1e2538] hover:shadow-[0_2px_8px_0_rgba(31,38,135,0.15)]",
              isActive
                ? "text-white bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] shadow-[inset_0_1px_12px_0_rgba(59,130,246,0.2)]"
                : "text-[#94a3b8] hover:text-white"
            )}
          >
            <span className="inline-block w-full h-full">
              {navItem.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default FloatingNav;
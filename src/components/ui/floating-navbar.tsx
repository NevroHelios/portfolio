"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { JSX } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Always visible now

  // Optional: Add background blur effect based on scroll
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setHasScrolled(current > 0.05);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-zinc-800 rounded-full shadow-[0px_2px_15px_-3px_rgba(0,0,0,0.6)] z-[5000] px-6 py-3 items-center justify-center space-x-4 sm:space-x-6 transition-all duration-300",
          hasScrolled 
            ? "bg-black/90 backdrop-blur-md" 
            : "bg-black/60 backdrop-blur-sm",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex flex-col items-center justify-center text-gray-400 hover:text-yellow-500 transition-colors duration-200 group"
            )}
          >
            <span className="flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              {navItem.icon}
            </span>
            <span className="text-xs mt-1 hidden sm:block opacity-80 group-hover:opacity-100 transition-opacity">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

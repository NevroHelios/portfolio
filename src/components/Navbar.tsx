"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" }
      ];

  return (
    <main>
      <FloatingNav navItems={navItems} />
    </main>
  );
}
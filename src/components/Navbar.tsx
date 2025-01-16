"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
    const navItems = [
        { 
          name: "Home",
          link: "/",
          // icon: <IconHome  />
        },
        { name: "Projects", link: "/projects" },
        { name: "Blogs", link: "/blogs" }
      ];

  return (
    <main>
      <FloatingNav navItems={navItems} />
    </main>
  );
}
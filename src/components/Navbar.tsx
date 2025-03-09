"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-gray-400 hover:text-cyan-400" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconUser className="h-4 w-4 text-gray-400 hover:text-cyan-400" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <IconMessage className="h-4 w-4 text-gray-400 hover:text-cyan-400" />
      ),
    },
  ];
  
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}


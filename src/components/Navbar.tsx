"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser, IconBriefcase } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-gray-300 hover:text-yellow-500" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconUser className="h-5 w-5 text-gray-300 hover:text-yellow-500" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconBriefcase className="h-5 w-5 text-gray-300 hover:text-yellow-500" />,
    },
  ];
  
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}


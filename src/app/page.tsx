"use client";

import Image from "next/image";
import { FloatingNavDemo } from "../components/Navbar";
import { ThreeDProfileCard } from "../components/card";
import { DataFlowAnimation } from "../components/DataFlowAnimation";
import { FloatingTextAnimation } from "../components/FloatingTextAnimation";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-[#1a1f35] to-[#111827]">
      {/* Background animations - remove pointer-events-none */}
      <div className="fixed inset-0 z-0">
        <FloatingTextAnimation />
        <DataFlowAnimation />
      </div>

      {/* Card with delayed entrance - higher z-index */}
      <div
        className="relative z-10 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.5s" }}
      >
        <FloatingNavDemo />
        <ThreeDProfileCard />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

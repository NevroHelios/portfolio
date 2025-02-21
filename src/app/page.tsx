"use client";

import Image from "next/image";
import { FloatingNavDemo } from "../components/Navbar";
import { ThreeDProfileCard } from "../components/card";
import { AchievementsCard } from "../components/achievements-card";
import { DataFlowAnimation } from "../components/DataFlowAnimation";
import { FloatingTextAnimation } from "../components/FloatingTextAnimation";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#1a1f35] to-[#111827]">
      {/* Background animations */}
      <div className="fixed inset-0 z-0">
        <FloatingTextAnimation />
        <DataFlowAnimation />
      </div>

      {/* Content container with delayed entrance */}
      <div
        className="relative z-10 opacity-0 animate-fade-in px-4 py-8"
        style={{ animationDelay: "1.5s" }}
      >
        <FloatingNavDemo />
        <div className="max-w-7xl mx-auto min-h-[calc(110vh-200px)] flex items-center">
          {/* Changed to grid layout with vertical centering */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center py-8 w-full">
            <ThreeDProfileCard />
            <AchievementsCard />
          </div>
        </div>
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

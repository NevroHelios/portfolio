"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FloatingNavDemo } from "../components/Navbar";
import { ThreeDProfileCard } from "../components/card";
import { AchievementsCard } from "../components/achievements-card";
import { DataFlowAnimation } from "../components/DataFlowAnimation";
import { FloatingTextAnimation } from "../components/FloatingTextAnimation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      setShowIntro(true);
      // Set the flag after showing intro
      localStorage.setItem('hasVisitedBefore', 'true');
    }

    // Clear the flag after 1 hour (optional)
    const lastVisit = localStorage.getItem('lastVisitTime');
    const currentTime = new Date().getTime();
    
    if (!lastVisit || currentTime - parseInt(lastVisit) > 3600000) { // 1 hour
      setShowIntro(true);
      localStorage.setItem('lastVisitTime', currentTime.toString());
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#1a1f35] to-[#111827]">
      {/* Background layer */}
      <div className="fixed inset-0 z-0">
        <DataFlowAnimation />
      </div>

      {/* Floating text layer - only shown on first visit */}
      {showIntro && (
        <div className="fixed inset-0 z-10">
          <FloatingTextAnimation />
        </div>
      )}

      {/* Content layer */}
      <div 
        className="relative z-20 opacity-0 animate-fade-in"
        style={{ 
          animationDelay: showIntro ? "3s" : "0s",
          animationFillMode: "forwards"
        }}
      >
        <FloatingNavDemo />
        <div className="max-w-7xl mx-auto min-h-[calc(110vh-200px)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full pt-28">
            <ThreeDProfileCard />
            <AchievementsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import {FloatingNavDemo} from "../../components/Navbar";
import {AppleCardsCarouselDemo} from "../../components/proCards";
import { DataFlowAnimation } from "@/components/DataFlowAnimation";

export default function Projects() {
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-[#1a1f35] to-[#111827]">
      <div className="fixed inset-0 z-0">
        <DataFlowAnimation />
      </div>
      <FloatingNavDemo />
        <div className="h-[calc(100vh)] w-full pt-28 overflow-hidden">  {/* 100vh-7rem  */}
        <AppleCardsCarouselDemo />
      </div>
    </div>
    );
  }
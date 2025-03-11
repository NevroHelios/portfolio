"use client"

import { Navbar } from "../../components/Navbar";
import { DataFlowAnimation } from "@/components/DataFlowAnimation";

export default function Projects() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-[#1a1f35] to-[#111827]">
      <div className="fixed inset-0 z-0">
        <DataFlowAnimation />
      </div>
      {/* <FloatingNavDemo /> */}
      <div className="relative z-10 h-full w-full pt-28">
        <Navbar />
      </div>
    </div>
  );
}
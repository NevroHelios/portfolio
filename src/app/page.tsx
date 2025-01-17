import Image from "next/image";
import {FloatingNavDemo} from "../components/Navbar"
import {ThreeDProfileCard} from "../components/card"

export default function Home() {
  return (
      <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-[#1a1f35] to-[#111827]">
      <FloatingNavDemo />
      <ThreeDProfileCard />
      </div>
  );
}

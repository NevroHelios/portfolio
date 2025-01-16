import Image from "next/image";
import {FloatingNavDemo} from "../components/Navbar"
import {ThreeDProfileCard} from "../components/card"

export default function Home() {
  return (
      <>
      <FloatingNavDemo />
      <ThreeDProfileCard />
      </>
  );
}

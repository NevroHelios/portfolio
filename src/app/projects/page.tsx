import {FloatingNavDemo} from "../../components/Navbar";
import {AppleCardsCarouselDemo} from "../../components/proCards";
export default function Projects() {
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-[#1a1f35] to-[#111827]">
      <FloatingNavDemo />
      <div className="h-full w-full">
        <AppleCardsCarouselDemo />
      </div>
    </div>
    );
  }
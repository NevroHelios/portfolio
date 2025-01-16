import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Github, Code2 } from "lucide-react";
import { SiPython, SiPytorch, SiReact, SiTensorflow, SiJupyter, SiNumpy, SiPandas } from "react-icons/si";
import { FaLinkedin, FaKaggle } from "react-icons/fa";

const ThreeDProfileCard = () => {
  return (
    // Background gradient
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1a1f35] to-[#111827]">
      <CardContainer className="w-[1000px]">
        {/* Card background with custom shadow */}
        <CardBody className="relative bg-[#1e2538] text-white rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border border-opacity-18 border-[#2a3441]">
          <div className="flex justify-between">
            {/* Left side - Image */}
            <div className="flex gap-8">
              <CardItem
                translateZ="100"
                className="w-60 h-60 rounded-xl overflow-hidden shadow-[0_4px_20px_0_rgba(61,78,175,0.37)]"
              >
                <img
                  src="/saber_1.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </CardItem>
              {/* Right side - Text content */}
              <div className="flex flex-col justify-center">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-[#e2e8f0]"
                >
                  Crafting Innovative Software Solutions
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-[#94a3b8] mt-3"
                >
                  Passionate about creating impactful web applications and data science projects.
                </CardItem>
              </div>
            </div>
            {/* Top right - Social icons */}
            <div className="absolute top-6 right-6 flex gap-6">
              <CardItem translateZ="30">
                <Github className="w-7 h-7 hover:text-[#60a5fa] transition-colors" />
              </CardItem>
              <CardItem translateZ="30">
                <FaLinkedin className="w-7 h-7 hover:text-[#3b82f6] transition-colors" />
              </CardItem>
              <CardItem translateZ="30">
                <FaKaggle className="w-7 h-7 hover:text-[#93c5fd] transition-colors" />
              </CardItem>
            </div>
            {/* Bottom right - Tech stack */}
            <div className="absolute bottom-6 right-6 flex gap-5">
              <CardItem translateZ="30" className="group">
                <SiPython className="w-8 h-8 text-[#fbbf24] group-hover:scale-110 transition-transform" />
              </CardItem>
              <CardItem translateZ="30" className="group">
                <SiPytorch className="w-8 h-8 text-[#f87171] group-hover:scale-110 transition-transform" />
              </CardItem>
              <CardItem translateZ="30" className="group">
                <SiTensorflow className="w-8 h-8 text-[#fb923c] group-hover:scale-110 transition-transform" />
              </CardItem>
              <CardItem translateZ="30" className="group">
                <SiJupyter className="w-8 h-8 text-[#e2e8f0] group-hover:scale-110 transition-transform" />
              </CardItem>
              <CardItem translateZ="30" className="group">
                <SiNumpy className="w-8 h-8 text-[#60a5fa] group-hover:scale-110 transition-transform" />
              </CardItem>
              <CardItem translateZ="30" className="group">
                <SiPandas className="w-8 h-8 text-[#67e8f9] group-hover:scale-110 transition-transform" />
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export { ThreeDProfileCard };
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Github } from "lucide-react";
import { SiPython, SiPytorch, SiReact, SiTensorflow, SiJupyter, SiNumpy, SiPandas, SiTypescript } from "react-icons/si";
import { FaLinkedin, FaKaggle } from "react-icons/fa";

const ThreeDProfileCard = () => {
  return (
    <div className="w-full">
      <CardContainer className="inter-var">
        <CardBody className="relative bg-[#1e2538] text-white rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-lg border border-opacity-18 border-[#2a3441]">
          {/* Main content container */}
          <div className="flex flex-col gap-8">
            {/* Profile section */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Image */}
              <CardItem
                translateZ="50"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden flex-shrink-0 mx-auto sm:mx-0"
              >
                <img
                  src="/saber_1.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </CardItem>

              {/* Name and description */}
                <div className="flex flex-col gap-3 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-6 text-center sm:text-left">
                  <CardItem translateZ="50" className="text-2xl font-bold text-white">
                  Arka Dash
                  </CardItem>
                  <div className="flex gap-4">
                  <CardItem translateZ="30" className="cursor-pointer">
                    <Github className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
                  </CardItem>
                  <CardItem translateZ="30" className="cursor-pointer">
                    <FaLinkedin className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
                  </CardItem>
                  <CardItem translateZ="30" className="cursor-pointer">
                    <FaKaggle className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
                  </CardItem>
                  </div>
                </div>
                
                <CardItem
                  translateZ="50"
                  className="text-sm text-gray-300 leading-relaxed max-w-[500px]"
                >
                  Dual degree student pursuing <span className="text-white font-bold">B.Tech</span> in Computer Science (<span className="text-white font-bold">KGEC</span>) and <span className="text-white font-bold">BS</span> in <span className="text-white font-bold">Data Science</span> (<span className="text-white font-bold">IIT Madras</span>). Passionate about <span className="text-white font-bold">Machine Learning</span>, <span className="text-white font-bold">Data Science</span>, and developing innovative solutions.
                </CardItem>
              </div>
            </div>

            {/* Links and tech stack container */}
            <div className="flex flex-col gap-6">
              {/* Social Links */}

              {/* Divider */}
              <div className="w-full h-px bg-gray-700/50" />

              {/* Tech Stack */}
              <div className="grid grid-cols-3 sm:grid-cols-8 gap-4 justify-items-center">
                <CardItem translateZ="30" className="group">
                  <SiPython className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiPytorch className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiTensorflow className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiJupyter className="w-8 h-8 text-gray-300 group-hover:scale-110 transition-transform" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiNumpy className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiPandas className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiReact className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiTypescript className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                </CardItem>
              </div>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export { ThreeDProfileCard };
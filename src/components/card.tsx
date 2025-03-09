import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Github } from "lucide-react";
import { SiPython, SiPytorch, SiReact, SiTensorflow, SiJupyter, SiNumpy, SiPandas, SiTypescript } from "react-icons/si";
import { FaLinkedin, FaKaggle } from "react-icons/fa";

const ThreeDProfileCard = () => {
  return (
    <div className="w-full">
      <CardContainer className="inter-var">
        <CardBody className="relative bg-[#1a1a1a] text-white rounded-xl p-6 shadow-2xl border border-gray-800 hover:border-cyan-500/50 transition-colors duration-500">
          {/* Main content container */}
          <div className="flex flex-col gap-8">
            {/* Profile section */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Image */}
              <CardItem
                translateZ="50"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden flex-shrink-0 mx-auto sm:mx-0 ring-2 ring-cyan-500/20"
              >
                <img
                  src="/saber_1.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </CardItem>

              {/* Name and description */}
              <div className="flex flex-col gap-3 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-6">
                  <CardItem translateZ="50" className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                    Arka Dash
                  </CardItem>
                  <div className="flex gap-4">
                    <CardItem translateZ="30" className="cursor-pointer">
                      <Github className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
                    </CardItem>
                    <CardItem translateZ="30" className="cursor-pointer">
                      <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
                    </CardItem>
                    <CardItem translateZ="30" className="cursor-pointer">
                      <FaKaggle className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
                    </CardItem>
                  </div>
                </div>
                
                <CardItem
                  translateZ="50"
                  className="text-sm text-gray-400 leading-relaxed max-w-[500px]"
                >
                  Dual degree student pursuing <span className="text-cyan-400 font-medium">B.Tech</span> in Computer Science (<span className="text-cyan-400 font-medium">KGEC</span>) and <span className="text-cyan-400 font-medium">BS</span> in <span className="text-cyan-400 font-medium">Data Science</span> (<span className="text-cyan-400 font-medium">IIT Madras</span>). Passionate about <span className="text-cyan-400 font-medium">Machine Learning</span>, <span className="text-cyan-400 font-medium">Data Science</span>, and developing innovative solutions.
                </CardItem>
              </div>
            </div>

            {/* Links and tech stack container */}
            <div className="flex flex-col gap-6">
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

              {/* Tech Stack */}
              <div className="grid grid-cols-3 sm:grid-cols-8 gap-4 justify-items-center">
                <CardItem translateZ="30" className="group">
                  <SiPython className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiPytorch className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiTensorflow className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiJupyter className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiNumpy className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiPandas className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiReact className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </CardItem>
                <CardItem translateZ="30" className="group">
                  <SiTypescript className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
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
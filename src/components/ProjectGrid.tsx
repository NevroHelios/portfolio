import React from "react";
import { motion } from "framer-motion";

const ProjectGrid = () => {
  return (
    <div className="h-full w-full px-4 py-8 overflow-y-auto">
      <h1 className="text-4xl font-bold text-center text-white mb-12">My Projects</h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveDemo: string;
  github: string;
}

const ProjectCard = ({ title, description, techStack, image, liveDemo, github }: ProjectProps) => {
  return (
    <motion.div
      className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-2">
          <a 
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer" 
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white transition-colors"
          >
            View Live
          </a>
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-gray-700 hover:border-cyan-500 text-gray-300 transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with interactive animations and responsive design.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "https://cdn.magicdecor.in/com/2023/10/20171723/Anime-Girl-and-Dragon-Wallpaper-for-Wall-M-710x488.jpg",
    liveDemo: "https://demo.com",
    github: "https://github.com/yourusername/project"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    image: "/saber_1.png",
    liveDemo: "https://demo.com",
    github: "https://github.com/yourusername/project"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses and user authentication.",
    techStack: ["React", "Node.js", "Socket.io", "OpenAI"],
    image: "/saber_1.png",
    liveDemo: "https://demo.com",
    github: "https://github.com/yourusername/project"
  },
  // Add more projects as needed
];

export default ProjectGrid;
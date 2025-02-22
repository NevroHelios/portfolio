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

const ProjectCard = ({ title, description, techStack, image, liveDemo, github }) => {
  return (
    <motion.div
      className="relative group rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        transform: { type: "spring", stiffness: 400, damping: 30 }
      }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-neutral-300">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-2">
          {liveDemo && (
            <a 
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-white transition-colors"
            >
              GitHub
            </a>
          )}
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
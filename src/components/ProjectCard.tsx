// src/components/ProjectCard.tsx

import { FC } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string | null;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="bg-black/90 border-gray-800 overflow-hidden h-full flex flex-col hover:border-yellow-500 transition-colors shadow-lg">
      <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300 filter contrast-125"
      />
      </div>
      
      <CardContent className="flex-grow p-6 bg-gradient-to-b from-black/80 to-gray-900/90">
      <h3 className="text-xl font-bold mb-2 text-yellow-500">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
        <span 
          key={tag} 
          className="px-2 py-1 bg-gray-900/90 text-yellow-400 text-xs rounded-md border border-gray-800"
        >
          {tag}
        </span>
        ))}
      </div>
      </CardContent>
      
      <CardFooter className="p-2 pt-2 flex justify-between gap-4 bg-black/45">
      <Button 
        variant="outline" 
        size="sm" 
        className="flex-1 border-gray-900 bg-gray-300 hover:bg-yellow-500 hover:text-black transition-colors"
        asChild
      >
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        <Github className="w-4 h-4 mr-2" />
        Code
        </a>
      </Button>
      
      {project.demoUrl && (
        <Button 
        size="sm" 
        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
        asChild
        >
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4 mr-2" />
          Demo
        </a>
        </Button>
      )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
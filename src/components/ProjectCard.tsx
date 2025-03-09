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
    <Card className="bg-gray-800/60 border-gray-700 overflow-hidden h-full flex flex-col hover:border-violet-500 transition-colors">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-gray-700/70 text-violet-300 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex justify-between gap-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 border-gray-700 hover:bg-gray-700 hover:text-white"
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
            className="flex-1 bg-violet-600 hover:bg-violet-700"
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
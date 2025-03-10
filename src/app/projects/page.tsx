"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  featuredProjects,
} from '@/data/data';
import Footer from '@/components/Footer';
import BatLogo from '@/components/BatLogo';
import ProjectCard from '@/components/ProjectCard';

// Define TypeScript interfaces
interface ProjectBadge {
  color: string;
  text: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  team?: string[];
  github?: string;
  demoLink?: string;
  badge?: ProjectBadge;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);
  
  return { ref, controls, isInView };
};


// Filter Button Component
const FilterButton: React.FC<FilterButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide ${
      active
        ? "bg-yellow-600 text-black" 
        : "bg-zinc-800 text-yellow-400 hover:bg-zinc-700 border border-yellow-500/30"
    }`}
  >
    {children}
  </button>
);

// Main Projects Page Component
export default function ProjectsPage() {
  type FilterType = "featured" | "future";
  const [filter, setFilter] = useState<FilterType>("featured");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  const heroAnimation = useScrollAnimation();
  const projectsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  useEffect(() => {
    // Map the featured projects to match the Project interface
    const mappedProjects: Project[] = featuredProjects.map(project => ({
      id: String(project.id),
      title: project.title,
      description: project.description,
      image: project.imageUrl,
      tags: project.tags,
      github: project.githubUrl,
      demoLink: project.demoUrl || undefined
    }));
    
    // Filter projects based on selection
    // For now, just showing all featured projects regardless of filter
    // In a real application, you would have different project categories
    setFilteredProjects(mappedProjects);
  }, [filter]);

  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Hero Section */}
      <section className="relative py-24 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[url('/gotham-skyline.png')] bg-no-repeat bg-cover opacity-10 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-black/90"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={heroAnimation.ref}
            initial="hidden"
            animate={heroAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -20 }
            }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-yellow-500 w-12 mr-4"></div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                The Cases
              </h2>
              <div className="h-px bg-yellow-500 w-12 ml-4"></div>
            </div>
            
            <p className="text-xl text-gray-300 mb-4">
              A selection of my most challenging missions across machine learning, data science, and web development
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16 bg-zinc-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bat-pattern.png')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900 opacity-80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={projectsAnimation.ref}
            initial="hidden"
            animate={projectsAnimation.controls}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard project={project} key={index} />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-xl">No cases in this category yet.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      
      
      <Footer />
    </div>
  );
}
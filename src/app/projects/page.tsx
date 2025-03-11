"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  featuredProjects,
} from '@/data/data';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Navbar } from '@/components/Navbar';

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.04 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return { ref, controls, isInView };
};



// Main Projects Page Component
export default function ProjectsPage() {
  
  const heroAnimation = useScrollAnimation();
  const projectsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();


  return (
    <div className="min-h-screen bg-black text-gray-300">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-24 backdrop-blur-sm">
        <div className="absolute inset-0 bg-no-repeat bg-cover opacity-10 z-0"></div>
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
        <div className="absolute inset-0 bg-repeat opacity-5"></div>
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
          </motion.div>
        </div>
      </section>
      
      
      <Footer />
    </div>
  );
}
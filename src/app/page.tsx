"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FloatingNavDemo } from "../components/Navbar";
import { ThreeDProfileCard } from "../components/card";
import { AchievementsCard } from "../components/achievements-card";
import { DataFlowAnimation } from "../components/DataFlowAnimation";
import { motion } from "framer-motion";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Only show intro on first visit ever
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      setShowIntro(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0a] text-gray-100">
      {/* <FloatingNavDemo /> */}
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] z-0"></div>

      {/* Subtle background animation with reduced opacity */}
      <div className="fixed inset-0 z-0 opacity-20">
        <DataFlowAnimation />
      </div>

      {/* Content layer */}
      <div className="relative z-20 animate-fade-in" style={{ 
        animationDelay: showIntro ? "2s" : "0s",
        animationFillMode: "forwards"
      }}>
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Hi, I'm <span className="text-cyan-400">Your Name</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Full Stack Developer specializing in modern web technologies and creating impactful digital experiences.
                </p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#projects"
                    className="px-6 py-3 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    View My Work
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#contact"
                    className="px-6 py-3 border border-gray-600 text-gray-200 font-medium rounded-lg hover:border-cyan-500 transition-colors"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <ThreeDProfileCard />
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              About Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Background</h3>
                  <p className="text-gray-300">
                    I'm a passionate developer with X years of experience building web applications and digital solutions.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">What I Do</h3>
                  <p className="text-gray-300">
                    My expertise includes React, Next.js, and modern front-end technologies, with a focus on creating
                    seamless user experiences and scalable applications.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Current Focus</h3>
                  <p className="text-gray-300">
                    I'm currently exploring [current learning focus] and working on projects that challenge me to grow.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Beyond Code</h3>
                  <p className="text-gray-300">
                    When I'm not coding, you can find me [your interests/hobbies].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-20 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Example skill items - replace with your actual skills */}
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX Design', 'Database Design', 'Cloud Services', 'CI/CD'].map((skill) => (
                <div key={skill} className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 hover:border-cyan-500 transition-colors">
                  <span className="text-gray-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300">
                  <div className="h-48 bg-[#2a2a2a]"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Project Title {project}</h3>
                    <p className="text-gray-400 mb-4">Brief description of the project and technologies used.</p>
                    <div className="flex gap-3">
                      <a href="#" className="text-cyan-400 font-medium hover:text-cyan-300">View Live</a>
                      <a href="#" className="text-cyan-400 font-medium hover:text-cyan-300">Source Code</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Achievements Section */}
        <section id="achievements" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Achievements</h2>
            <AchievementsCard />
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Get In Touch</h2>
            <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-8 rounded-lg border border-gray-800">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-md text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
                  ></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Footer */}
      <footer className="bg-[#0a0a0a] py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Your Name. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
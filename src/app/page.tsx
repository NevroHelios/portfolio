"use client"
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import BlogPostCard from "@/components/BlogPostCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import HeroSection from "@/components/HeloSection";
import { featuredProjects, recentBlogPosts, skills } from "@/data/data";
import BatLogo from "@/components/BatLogo";
import Skill_About from "@/components/Skill&About";
import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";

// Define animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

// Custom hook for scroll animations - modified to only animate once
const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return { ref, controls, isInView };
};

export default function Home() {
  const projectsAnimation = useScrollAnimation();
  const blogAnimation = useScrollAnimation();
  const projectsContainerAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Combined About & Skills Section */}
      <Skill_About />
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-zinc-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900 opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={projectsAnimation.ref}
            initial="hidden"
            animate={projectsAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-yellow-500 w-12 mr-4"></div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                The Cases
              </h2>
              <div className="h-px bg-yellow-500 w-12 ml-4"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
              A selection of my recent missions spanning machine learning, data science, and web development.
            </p>
            
            <motion.div 
              ref={projectsContainerAnimation.ref}
              variants={containerVariants}
              initial="hidden"
              animate={projectsContainerAnimation.controls}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {featuredProjects.slice(0, 3).map((project, index) => (
                <motion.div 
                  key={project.id} 
                  variants={itemVariants}
                  className="transform transition-all duration-300 hover:translate-y-[-8px]"
                >
                  <ProjectCard project={project} />
                </motion.div>
                ))}
            </motion.div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="bg-dark border-yellow-500 text-yellow-400 hover:text-yellow hover:bg-yellow-900/20 uppercase tracking-wide font-medium">
                <a href="/projects">
                View All Projects
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('/gotham-grid.png')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={blogAnimation.ref}
            initial="hidden"
            animate={blogAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-yellow-500 w-12 mr-4"></div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                The Chronicles
              </h2>
              <div className="h-px bg-yellow-500 w-12 ml-4"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
              I share my insights on machine learning, data science, and software development from the shadows.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {recentBlogPosts.map((post, index) => {
                const postAnimation = useScrollAnimation();
                return (
                  <motion.div 
                    key={post.id}
                    ref={postAnimation.ref}
                    initial="hidden"
                    animate={postAnimation.controls}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 20 }
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <BlogPostCard post={post} />
                  </motion.div>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="bg-dark border-yellow-500 text-yellow-400 hover:bg-yellow-900/20 hover:text-yellow uppercase tracking-wide font-medium">
                <a href="/blog">
                Read All Posts
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
     <Footer />
    </div>
  );
}
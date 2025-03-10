"use client"
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import BlogPostCard from "@/components/BlogPostCard";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import HeroSection from "@/components/HeloSection";
import { featuredProjects, recentBlogPosts, skills } from "@/data/data";
import BatLogo from "@/components/BatLogo";
import Skill_About from "@/components/Skill&About";

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



export default function Home() {
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredProjects.map((project, index) => (
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
                View All Projects
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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
              {recentBlogPosts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlogPostCard key={post.id} post={post} />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="bg-dark border-yellow-500 text-yellow-400 hover:bg-yellow-900/20 hover:text-yellow uppercase tracking-wide font-medium">
                Read All Posts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-10 bg-black border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center">
              <BatLogo className="w-8 h-8 text-yellow-500 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-white">ARKA</h3>
                <p className="text-gray-400 mt-1">Machine Learning Engineer & Full Stack Developer</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-500/10">
                <GithubIcon className="w-5 h-5 text-yellow-400" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-500/10">
                <LinkedinIcon className="w-5 h-5 text-yellow-400" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-500/10">
                <MailIcon className="w-5 h-5 text-yellow-400" />
              </Button>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Arka. All rights reserved.</p>
            <p className="mt-2">Crafted in the shadows with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
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

// Bat logo SVG component
const BatLogo = ({ className }: { className: string }) => (
  <svg 
    viewBox="0 0 100 60" 
    className={className}
    fill="currentColor"
  >
    <path d="M50 0C40 0 42 8 36 8C30 8 30 4 24 4C18 4 16 8 12 8C8 8 0 4 0 16C0 28 20 30 24 46C26 54 30 60 50 60C70 60 74 54 76 46C80 30 100 28 100 16C100 4 92 8 88 8C84 8 82 4 76 4C70 4 70 8 64 8C58 8 60 0 50 0Z"/>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gotham-skyline.png')] bg-no-repeat bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-10">
              <div className="h-px bg-yellow-500 w-12 mr-4"></div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                The Identity
              </h2>
              <div className="h-px bg-yellow-500 w-12 ml-4"></div>
            </div>
            
            <div className="grid md:grid-cols-[2fr,1fr] gap-10 items-start">
              <div className="bg-zinc-900/80 p-8 rounded border-l-4 border-yellow-500 shadow-xl">
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  I'm a dual degree graduate specializing in Machine Learning and Data Science with a strong foundation in full-stack development. My technical journey spans from developing deep learning models to building responsive web applications.
                </p>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  With experience in PyTorch, pandas, and the React ecosystem, I hunt down complex problems at the intersection of data science and software engineering. I'm particularly driven to create intuitive interfaces for complex systems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I emerge from the shadows to contribute to open-source projects and share knowledge through technical writing. My mission: to leverage technology to create meaningful impact through intelligent applications.
                </p>
              </div>
              <div className="bg-zinc-900/80 p-8 rounded shadow-xl border-t border-r border-b border-yellow-500/30">
                <h3 className="font-medium text-xl mb-6 text-yellow-400 uppercase tracking-wide flex items-center">
                  <BatLogo className="w-4 h-4 mr-2 text-yellow-500" />
                  Training
                </h3>
                <div className="mb-6 pb-6 border-b border-zinc-700">
                  <p className="font-bold text-white">Dual Degree in Computer Science</p>
                  <p className="text-yellow-400/80">University Name</p>
                  <p className="text-sm text-gray-500">2018 - 2023</p>
                </div>
                <h3 className="font-medium text-xl mb-6 text-yellow-400 uppercase tracking-wide flex items-center">
                  <BatLogo className="w-4 h-4 mr-2 text-yellow-500" />
                  Operations
                </h3>
                <div>
                  <p className="font-bold text-white">Machine Learning Engineer</p>
                  <p className="text-yellow-400/80">Company Name</p>
                  <p className="text-sm text-gray-500">2023 - Present</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('/bat-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-10">
              <div className="h-px bg-yellow-500 w-12 mr-4"></div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                The Arsenal
              </h2>
              <div className="h-px bg-yellow-500 w-12 ml-4"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {Object.entries(skills).map(([category, categorySkills], index) => (
                <motion.div 
                  key={category} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-900/50 p-8 rounded shadow-lg border-l border-r border-yellow-500/20"
                >
                  <h3 className="text-xl font-medium mb-6 text-yellow-400 uppercase tracking-wide flex items-center">
                    <BatLogo className="w-4 h-4 mr-2 text-yellow-500" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* Contact Section - New Addition */}
      {/* <section id="contact" className="py-20 bg-zinc-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bat-signal.png')] bg-no-repeat bg-center opacity-5"></div>
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
                The Signal
              </h2>
              <div className="h-px bg-yellow-500 w-12 ml-4"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
              Need my assistance? Shine the signal and I'll emerge from the shadows.
            </p>
            
            <div className="max-w-4xl mx-auto bg-zinc-900/80 rounded-lg shadow-2xl border border-yellow-500/20 p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-medium mb-6 text-yellow-400 uppercase tracking-wide">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                      <input type="text" className="w-full bg-black/50 border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                      <input type="email" className="w-full bg-black/50 border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                      <textarea rows={4} className="w-full bg-black/50 border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent"></textarea>
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold uppercase tracking-wide">
                      Send Signal
                    </Button>
                  </form>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-6 text-yellow-400 uppercase tracking-wide">Contact Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MailIcon className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                        <div>
                          <p className="font-medium text-white">Email</p>
                          <p className="text-gray-400">contact@arka.dev</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                        <div>
                          <p className="font-medium text-white">Location</p>
                          <p className="text-gray-400">Gotham City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <h3 className="text-xl font-medium mb-4 text-yellow-400 uppercase tracking-wide">Connect</h3>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" className="rounded-full border-zinc-700 hover:border-yellow-500 hover:bg-yellow-500/10">
                        <GithubIcon className="w-5 h-5 text-yellow-400" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full border-zinc-700 hover:border-yellow-500 hover:bg-yellow-500/10">
                        <LinkedinIcon className="w-5 h-5 text-yellow-400" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full border-zinc-700 hover:border-yellow-500 hover:bg-yellow-500/10">
                        <TwitterIcon className="w-5 h-5 text-yellow-400" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

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
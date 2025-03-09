"use client"
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import BlogPostCard from "@/components/BlogPostCard";
import { motion } from "framer-motion";
import { MapPin, MapPinIcon, TwitterIcon } from "lucide-react";

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
  // Sample projects data
  const featuredProjects = [
    {
      id: 1,
      title: "Machine Learning Image Classifier",
      description: "A PyTorch-based image classification system with 98% accuracy on the test dataset.",
      tags: ["PyTorch", "Python", "Computer Vision"],
      imageUrl: "/projects/ml-image-classifier.jpg",
      githubUrl: "https://github.com/yourusername/ml-image-classifier",
      demoUrl: "https://ml-image-classifier-demo.vercel.app"
    },
    {
      id: 2,
      title: "Data Visualization board",
      description: "Interactive board built with Next.js and D3.js for visualizing complex datasets.",
      tags: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
      imageUrl: "/projects/data-viz-board.jpg",
      githubUrl: "https://github.com/yourusername/data-viz-board",
      demoUrl: "https://data-viz-board.vercel.app"
    },
    {
      id: 3,
      title: "Open Source Contribution: Pandas Enhancement",
      description: "Contributed performance improvements to the Pandas library's dataframe operations.",
      tags: ["Python", "Pandas", "Open Source"],
      imageUrl: "/projects/pandas-contribution.jpg",
      githubUrl: "https://github.com/pandas-dev/pandas/pull/12345",
      demoUrl: null
    }
  ];

  // Sample blog posts data
  const recentBlogPosts = [
    {
      id: 1,
      title: "Optimizing PyTorch Models for Production",
      excerpt: "Learn how to optimize your PyTorch models for production environments with these advanced techniques.",
      date: "2025-02-15",
      readTime: "8 min",
      slug: "optimizing-pytorch-models"
    },
    {
      id: 2,
      title: "Building Type-Safe APIs with TypeScript and Next.js",
      excerpt: "A comprehensive guide to creating robust, type-safe APIs using TypeScript and Next.js.",
      date: "2025-01-28",
      readTime: "12 min",
      slug: "type-safe-apis-typescript-nextjs"
    }
  ];

  // Skills grouped by category
  const skills = {
    "Machine Learning & Data Science": ["PyTorch", "TensorFlow", "Scikit-learn", "Data Analysis"],
    "Languages & Frameworks": ["Python", "TypeScript", "JavaScript", "Next.js", "React"],
    "Tools & Libraries": ["Pandas", "NumPy", "Git", "Docker", "Tailwind CSS"],
    "Other": ["Open Source Contribution", "CI/CD", "Cloud Deployment", "Technical Writing"]
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-blue-900/20"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
                Hello, I'm Arka 
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              A Machine Learning Engineer & Full Stack Developer with a passion for building intelligent, data-driven applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
                View My Projects
              </Button>
              <Button size="lg" variant="outline" className="border-violet-500 text-violet-400 hover:bg-violet-950/50">
                Read My Blog
              </Button>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="ghost" size="icon" className="rounded-full">
                <GithubIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <LinkedinIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MailIcon className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
              About Me
            </h2>
            <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-4">
                  I'm a dual degree graduate specializing in Machine Learning and Data Science with a strong foundation in full-stack development. My technical journey spans from developing deep learning models to building responsive web applications.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  With experience in PyTorch, pandas, and the React ecosystem, I love solving complex problems at the intersection of data science and software engineering. I'm particularly passionate about creating intuitive interfaces for complex systems.
                </p>
                <p className="text-lg text-gray-300">
                  I actively contribute to open-source projects and share my knowledge through technical writing and blog posts. My goal is to leverage technology to create meaningful impact through intelligent applications.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="font-medium text-xl mb-4 text-violet-300">Education</h3>
                <div className="mb-4">
                  <p className="font-medium">Dual Degree in Computer Science</p>
                  <p className="text-gray-400">University Name</p>
                  <p className="text-sm text-gray-500">2018 - 2023</p>
                </div>
                <h3 className="font-medium text-xl mb-4 text-violet-300">Experience</h3>
                <div>
                  <p className="font-medium">Machine Learning Engineer</p>
                  <p className="text-gray-400">Company Name</p>
                  <p className="text-sm text-gray-500">2023 - Present</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <div key={category} className="bg-gray-900/70 p-6 rounded-lg shadow-lg border border-gray-800">
                  <h3 className="text-xl font-medium mb-4 text-violet-300">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
              A selection of my recent work spanning machine learning, data science, and web development.
            </p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-violet-500 text-violet-400 hover:bg-violet-950/50">
                View All Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
              Latest Blog Posts
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
              I share my thoughts and insights on machine learning, data science, and software development.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {recentBlogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-violet-500 text-violet-400 hover:bg-violet-950/50">
                Read All Posts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

 {/* Contact Section */}
<section id="contact" className="py-20 bg-gray-900/50">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto" // Increased max width
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
        Let's Work Together
      </h2>
      <p className="text-gray-400 text-center mb-12 text-lg">
        Have a project in mind? I'm always open to discussing new opportunities and ideas.
      </p>
      
      <div className="grid md:grid-cols-[2fr,1fr] gap-8"> {/* Grid container for form and contact info */}
        <div className="bg-gray-900/90 p-8 rounded-xl shadow-2xl border border-gray-800/50 backdrop-blur-sm">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-violet-300">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-violet-300">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-violet-300">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Project Discussion"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-violet-300">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
            >
              Send Message
            </Button>
          </form>
        </div>

        <div className="bg-gray-900/90 p-8 rounded-xl shadow-2xl border border-gray-800/50 backdrop-blur-sm">
          <div className="space-y-8">
            <div>
              <h3 className="text-violet-400 font-medium mb-2">Email</h3>
              <p className="text-gray-400">contact@example.com</p>
            </div>
            <div>
              <h3 className="text-violet-400 font-medium mb-2">Location</h3>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
            <div>
              <h3 className="text-violet-400 font-medium mb-2">Social</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-violet-500/10">
                  <GithubIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-violet-500/10">
                  <LinkedinIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-violet-500/10">
                  <MailIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-10 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Arka </h3>
              <p className="text-gray-400 mt-2">Machine Learning Engineer & Full Stack Developer</p>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="rounded-full">
                <GithubIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <LinkedinIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MailIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Arka . All rights reserved.</p>
            <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
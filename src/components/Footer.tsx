import BatLogo from "./BatLogo";
import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
    const [mounted, setMounted] = useState(true);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            <footer 
  className="py-10 bg-black border-t border-zinc-800 relative overflow-hidden px-8"
  style={{
    opacity: 0,
    animation: 'fadeIn 0.5s ease-out 1.2s forwards'
  }}
>
  {/* CSS for the fadeIn animation */}
  <style jsx global>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideRight {
      from { width: 0; }
      to { width: 100%; }
    }
  `}</style>
  
  {/* Animated background pattern */}
  <div className="absolute inset-0 bg-[url('/bat-pattern.png')] bg-repeat opacity-5">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.05 }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        repeatType: "reverse" 
      }}
      className="w-full h-full"
    />
  </div>
  
  {/* Improved animated yellow line - full width */}
  <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
    <motion.div 
      initial={{ x: "-100%" }}
      animate={{ x: "200%" }}
      transition={{ 
        duration: 4, 
        repeat: Infinity,
        ease: "easeInOut" 
      }}
      className="h-full w-1/2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
    />
  </div>
  
  <div className="container mx-auto relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div>
        <div className="flex items-center gap-2 mb-2 group">
          <div className="w-6 h-6 text-yellow-500 transition-all duration-300 group-hover:rotate-180">
            <BatLogo className="w-9 h-49" />
          </div>
          <span className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">ARKA</span>
        </div>
        <div className="text-gray-400 mb-2">
          <a href="mailto:arka@example.com" className="relative group hover:text-yellow-500 transition-colors duration-300">
            arka@example.com
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <p className="text-gray-400">Machine Learning Engineer & Full Stack Developer</p>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4 relative inline-block text-white">
          <span className="relative group inline-block">
            Connect
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h3>
        <div className="flex gap-4">
          <a 
            href="#" 
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
            style={{ transitionProperty: 'color, transform, rotate' }}
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
            style={{ transitionProperty: 'color, transform, rotate' }}
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
            style={{ transitionProperty: 'color, transform, rotate' }}
          >
            <MailIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
    
    <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Arka. All rights reserved.</p>
      <p className="mt-2">
        Crafted in the shadows with 
        <span className="relative mx-1 group inline-block">
          <span className="text-white group-hover:text-yellow-500 transition-colors duration-300">Next.js</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </span>, 
        <span className="relative mx-1 group inline-block">
          <span className="text-white group-hover:text-blue-400 transition-colors duration-300">TypeScript</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </span>, and 
        <span className="relative mx-1 group inline-block">
          <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">Tailwind CSS</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </p>
    </div>
  </div>
</footer>
        </>
    )
};

export default Footer;
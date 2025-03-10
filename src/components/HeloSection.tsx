import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const BatLogo = () => (
  <svg 
    viewBox="0 0 100 60" 
    className="w-24 h-24 mb-6 text-[#ffcc00]"
    fill="currentColor"
  >
    <path d="M50 0C40 0 42 8 36 8C30 8 30 4 24 4C18 4 16 8 12 8C8 8 0 4 0 16C0 28 20 30 24 46C26 54 30 60 50 60C70 60 74 54 76 46C80 30 100 28 100 16C100 4 92 8 88 8C84 8 82 4 76 4C70 4 70 8 64 8C58 8 60 0 50 0Z"/>
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
        {/* City skyline silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-[url('/gotham-skyline.png')] bg-repeat-x bg-bottom opacity-5"></div>
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-white/[0.02]">
          {/* Radial fade mask */}
          <div className="absolute pointer-events-none inset-0 bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        {/* Bat signal light beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffcc00]/5 via-transparent to-transparent"></div>
        
        {/* Rain effect - diagonal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

        {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <BatLogo />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            <span className="text-[#ffcc00]">AR</span>KA
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-[#ffcc00] to-transparent mb-6"
          ></motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl"
          >
            Machine Learning Engineer & Full Stack Developer
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border bg-dark border-[#ffcc00]/30 hover:text-yellow text-[#ffcc00] hover:bg-[#ffcc00]/10 hover:border-[#ffcc00]"
            >
              <FaGithub className="mr-2 h-5 w-5" /> GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border bg-dark border-[#ffcc00]/30 hover:text-yellow text-[#ffcc00] hover:bg-[#ffcc00]/10 hover:border-[#ffcc00]"
            >
              <FaLinkedinIn className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.5, duration: 1 },
              y: { delay: 1.5, duration: 1.5, repeat: Infinity, repeatType: "loop" }
            }}
            className="absolute bottom-12"
          >
            <div className="flex flex-col items-center">
              <span className="text-[#ffcc00]/70 text-sm tracking-widest mb-2">SCROLL</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="#ffcc00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bat silhouettes flying animation */}
        <motion.div 
          className="absolute right-10 top-1/4 text-[#ffcc00]/10"
          initial={{ x: 100, y: 0 }}
          animate={{ x: -100, y: 50 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        >
          <svg width="30" height="15" viewBox="0 0 100 60" fill="currentColor">
            <path d="M50 0C40 0 42 8 36 8C30 8 30 4 24 4C18 4 16 8 12 8C8 8 0 4 0 16C0 28 20 30 24 46C26 54 30 60 50 60C70 60 74 54 76 46C80 30 100 28 100 16C100 4 92 8 88 8C84 8 82 4 76 4C70 4 70 8 64 8C58 8 60 0 50 0Z"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute left-20 top-1/3 text-[#ffcc00]/10"
          initial={{ x: -50, y: 0 }}
          animate={{ x: 80, y: 30 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        >
          <svg width="20" height="10" viewBox="0 0 100 60" fill="currentColor">
            <path d="M50 0C40 0 42 8 36 8C30 8 30 4 24 4C18 4 16 8 12 8C8 8 0 4 0 16C0 28 20 30 24 46C26 54 30 60 50 60C70 60 74 54 76 46C80 30 100 28 100 16C100 4 92 8 88 8C84 8 82 4 76 4C70 4 70 8 64 8C58 8 60 0 50 0Z"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
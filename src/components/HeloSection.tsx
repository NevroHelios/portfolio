import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import Bat from '../../public/Bat.svg';


const BatLogo = () => (
  <div className="w-24 h-24 mb-6 text-[#FFCC00]">
    <svg 
      viewBox="0 0 269.996 269.996" 
      className="w-full h-full"
      fill="currentColor"
    >
      <path d="M256.925,137.064c-0.823,0.067-1.63,0.149-2.426,0.24C255.365,137.532,256.189,137.475,256.925,137.064z"/>
      <path d="M267.728,99.195c-29.327-26.908-9.023-52.473,2.268-59.774c-74.255,29.398-69.55,105.234-81.829,113.156c-11.727,7.797-22.692-2.98-28.14-13.195c3.392,13.162-10.42,21.885-20.414,7.166c2.686,20.109,9.489,33.442-18.316,25.955C90.703,164.274,39.174,139.222,0,170.907c22.894-1.74,47.758,16.474,46.624,36.849c16.125-12.228,41.249,3.672,40.871,22.819c7.446-20.636,40.434-25.318,55.434-6.389c-5.479-33.531,35.738-27.986,44.412-6.672c-10.837-45.279,22.031-46.93,40.482-36.654c-6.701-28.987,4.347-40.996,26.676-43.555C245.425,134.918,231.762,100.52,267.728,99.195z"/>
    </svg>
  </div>
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
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 relative inline-block group"
          >
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
              Machine Learning Engineer & Full Stack Developer
            </p>
            {/* Animated underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-700 delay-100 group-hover:w-full"></span></motion.div>
          
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

          {/* Scroll indicator - only animate once */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.5, duration: 1 },
              y: { delay: 1.5, duration: 1.5, repeat: 4, repeatType: "loop" }
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

        {/* Bat silhouettes flying animation - keep these animated for visual interest */}
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
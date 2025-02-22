import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingTextAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const name = "ARKA DASH";
  const letters = name.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Animation duration before fade out

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const letterVariants = {
    hidden: { 
      y: 100,
      opacity: 0,
      rotateX: -90,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
        repeat: 0,
      },
    }),
    hover: {
      y: -20,
      scale: 1.1,
      color: "#60A5FA",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: (i: number) => ({
      y: -100,
      opacity: 0,
      rotateX: 90,
      transition: {
        duration: 0.4,
        ease: "easeIn",
        delay: i * 0.06,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <motion.div
            className="relative flex justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-7xl md:text-9xl font-bold inline-block"
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
                  margin: letter === " " ? "0 1rem" : "0 0.1rem",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                variants={letterVariants}
                custom={i}
                whileHover="hover"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Subtle gradient backgrounds that follow the animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export  {FloatingTextAnimation};
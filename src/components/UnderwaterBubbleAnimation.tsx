import React from "react";

export const UnderwaterBubbleAnimation: React.FC = () => {
  // Helper function to generate random values within a range
  const getRandom = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {Array.from({ length: 30 }).map((_, i) => {
        // Generate random properties for each bubble
        const size = getRandom(15, 50);
        const horizontalStart = getRandom(0, 100);
        const horizontalDrift = getRandom(-20, 20);
        const delay = getRandom(0, 15);
        const duration = getRandom(15, 25);
        const blur = getRandom(2, 4);

        return (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${horizontalStart}%`,
              bottom: `-${getRandom(20, 100)}px`,
              animation: `bubble ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s infinite`,
              backdropFilter: `blur(${blur}px)`,
              background: `
                radial-gradient(circle at 30% 30%, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(255, 255, 255, 0.05) 50%, 
                  rgba(255, 255, 255, 0.01) 100%)
              `,
            }}
          >
            {/* Bubble inner highlight */}
            <div
              className="absolute inset-0 rounded-full mix-blend-plus-lighter"
              style={{
                background: `radial-gradient(circle at 30% 30%, 
                  rgba(255, 255, 255, 0.2) 0%, 
                  rgba(255, 255, 255, 0.1) 70%)`,
              }}
            />
          </div>
        );
      })}

      <style jsx global>{`
        .bubble {
          filter: blur(2px);
        }

        @keyframes bubble {
          0% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: translate(${getRandom(-20, 20)}px, -50vh) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translate(${getRandom(-40, 40)}px, -120vh) scale(1.5);
            opacity: 0;
          }
        }

        /* Performance optimization */
        @media (prefers-reduced-motion: reduce) {
          .bubble {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

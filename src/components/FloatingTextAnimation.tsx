import React from "react";

export const FloatingTextAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
      {/* Wrap the text in a container with fade-out animation */}
      <div className="relative animate-text-fade-out">
        {"ARKA DASH".split("").map((char, i) => (
          <span
            key={i}
            className="absolute text-8xl font-bold text-white/10"
            style={{
              left: `${i * 5}rem`,
              animation: `float-spread 8s ease-in-out ${i * 0.2}s infinite`,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes float-spread {
          0% {
            transform: translateY(0) scale(1);
            letter-spacing: normal;
          }
          50% {
            transform: translateY(-60px) scale(1.8);
            letter-spacing: 0.5em;
          }
          100% {
            transform: translateY(0) scale(1);
            letter-spacing: normal;
          }
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        .animate-text-fade-out {
          animation: fadeOut 0.5s ease-out forwards;
          animation-delay: 2.5s;
        }
      `}</style>
    </div>
  );
};

import React, { useEffect, useRef } from 'react';

export const DataFlowAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 200 });

  interface Particle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    radius: number;
    baseX: number;
    baseY: number;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.x;
      mouseRef.current.y = event.y;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle settings
    const particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 150;
    
    // Create particles with base positions and velocities
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        dx: (Math.random() - 0.5) * 0.5, // Reduced speed for smoother movement
        dy: (Math.random() - 0.5) * 0.5, // Reduced speed for smoother movement
        radius: 3
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Base movement
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRef.current.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          particle.x += forceDirectionX * force * 2;
          particle.y += forceDirectionY * force * 2;
        }

        // Bounce off walls with velocity preservation
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.dx *= -1;
          particle.x = particle.x <= 0 ? 0 : canvas.width;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.dy *= -1;
          particle.y = particle.y <= 0 ? 0 : canvas.height;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(147, 197, 253, 0.8)';
        ctx.fill();

        // Connect particles
        particles.slice(i + 1).forEach(otherParticle => {
          const pdx = particle.x - otherParticle.x;
          const pdy = particle.y - otherParticle.y;
          const particleDistance = Math.sqrt(pdx * pdx + pdy * pdy);

          if (particleDistance < connectionDistance) {
            const opacity = 0.2 * (1 - particleDistance/connectionDistance);
            const mouseDistance = Math.sqrt(
              Math.pow(mouseRef.current.x - (particle.x + otherParticle.x)/2, 2) +
              Math.pow(mouseRef.current.y - (particle.y + otherParticle.y)/2, 2)
            );
            const highlightFactor = mouseDistance < mouseRef.current.radius ? 2 : 1;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity * highlightFactor})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0"
      style={{
        background: 'transparent',
      }}
    />
  );
};
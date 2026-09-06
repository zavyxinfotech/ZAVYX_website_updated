import React, { useEffect, useRef } from 'react';

export const ParticleWave = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const setSize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', setSize);
    
    let mouse = { x: -9999, y: -9999 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse = { x: -9999, y: -9999 };
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    let time = 0;
    const colors = ['#0369a1', '#be123c', '#15803d', '#b45309'];
    
    function draw() {
      ctx.clearRect(0, 0, width, height);
      
      const isMobile = width < 768;
      const xSpacing = isMobile ? 25 : 40;
      const zSpacing = isMobile ? 30 : 40;
      const xPoints = Math.ceil(width / xSpacing);
      const zPoints = 30;
      
      const fov = isMobile ? 220 : 350;
      
      for (let z = 0; z < zPoints; z++) {
        for (let x = -35; x < xPoints + 35; x++) {
          let pX = (x - xPoints/2) * xSpacing;
          let pZ = z * zSpacing;
          
          let pY = Math.sin(pX * 0.01 - time * 0.8) * 60 + Math.cos(pZ * 0.05 - time) * 45;
          let scale = fov / (fov + pZ);
          let screenY = height - (isMobile ? 160 : 120) + pY * scale - (z * 6); 
          let screenX = width / 2 + pX * scale;
          
          let alpha = Math.max(0, 1 - (pZ / (zPoints * zSpacing)));
          let radius = (isMobile ? 2.0 : 2.5) * scale;
          
          let dx = screenX - mouse.x;
          let dy = screenY - mouse.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          
          let hoverAdd = 0;
          let isHovered = false;
          
          if (dist < 130) {
            let intensity = 1 - (dist / 130);
            hoverAdd = intensity * 6 * scale;
            alpha = Math.min(1, alpha + intensity);
            isHovered = true;
          }
          
          let finalRadius = radius + hoverAdd;
          let color = colors[(Math.abs(Math.floor(x/5) + Math.floor(z/4))) % colors.length];
          
          ctx.beginPath();
          ctx.arc(screenX, screenY, finalRadius, 0, Math.PI * 2);
          
          if (isHovered) {
             ctx.shadowBlur = 20;
             ctx.shadowColor = color;
          } else {
             ctx.shadowBlur = 6; 
             ctx.shadowColor = color;
          }
          
          let alphaHex = Math.floor(alpha * 255).toString(16).padStart(2, '0');
          ctx.fillStyle = `${color}${alphaHex}`; 
          ctx.fill();
        }
      }
      
      time += 0.035;
      requestAnimationFrame(draw);
    }
    let animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', setSize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-multiply dark:mix-blend-screen opacity-80 dark:opacity-90" />;
};

export const AnimatedHeroText = ({ text }) => {
  const words = text.split(" ");
  let charCount = 0;

  return (
    <>
      <style>
        {`
          @keyframes dnaFold {
            0% {
              opacity: 0;
              transform: perspective(600px) rotateX(90deg);
            }
            100% {
              opacity: 1;
              transform: perspective(600px) rotateX(0deg);
            }
          }
          .dna-word {
            display: inline-block;
            opacity: 0;
            transform-origin: center;
            animation: dnaFold 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
          .char-hover {
            display: inline-block;
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease-out;
            cursor: default;
          }
          .char-hover:hover {
            transform: translateY(-12px) scale(1.15);
          }
          .hover-c0:hover { color: #0284c7; } /* Sky */
          .hover-c1:hover { color: #d70e69; } /* Magenta */
          .hover-c2:hover { color: #39b54a; } /* Green */
          .hover-c3:hover { color: #f5a623; } /* Gold */
        `}
      </style>
      <span className="inline-block text-slate-900 dark:text-white transition-colors duration-300">
        {words.map((word, wIdx) => {
          return (
            <span 
              key={wIdx} 
              className="dna-word mr-3 sm:mr-4 lg:mr-5" 
              style={{ animationDelay: `${wIdx * 0.15 + 0.2}s` }}
            >
              {word.split('').map((char, cIdx) => {
                 const colorClass = `hover-c${charCount % 4}`;
                 charCount++;
                 return (
                   <span 
                     key={cIdx} 
                     className={`char-hover ${colorClass}`}
                   >
                     {char}
                   </span>
                 );
              })}
            </span>
          );
        })}
      </span>
    </>
  );
};

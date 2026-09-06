import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Database, 
  Smartphone, 
  Bot, 
  Cloud, 
  Globe, 
  CheckCircle 
} from 'lucide-react';
import GridServices from '../components/GridServices';
import ScrollAnimatedHeading from '../components/ScrollAnimatedHeading';

const ScrollSlideSection = ({ children, className = '' }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

import { 
  FaReact, FaNodeJs, FaAws, FaPython, FaDocker, FaDatabase, FaJsSquare, FaGithub, FaFigma,
  FaVuejs, FaAngular, FaPhp, FaJava, FaSwift, FaLinux, FaAndroid, FaApple, FaDigitalOcean, FaGitlab
} from 'react-icons/fa';
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb';

const stackRow1 = [
  { name: 'React', icon: FaReact, hex: '#61DAFB' },
  { name: 'Next.js', icon: TbBrandNextjs, hex: '#A0A0A0' }, 
  { name: 'TypeScript', icon: FaJsSquare, hex: '#3178C6' },
  { name: 'Tailwind CSS', icon: TbBrandTailwind, hex: '#06B6D4' },
  { name: 'Node.js', icon: FaNodeJs, hex: '#339933' },
  { name: 'Python', icon: FaPython, hex: '#3776AB' },
  { name: 'Vue.js', icon: FaVuejs, hex: '#4FC08D' },
  { name: 'Angular', icon: FaAngular, hex: '#DD0031' },
  { name: 'PHP', icon: FaPhp, hex: '#777BB4' },
  { name: 'Java', icon: FaJava, hex: '#007396' },
  { name: 'Swift', icon: FaSwift, hex: '#F05138' }
];

const stackRow2 = [
  { name: 'PostgreSQL', icon: FaDatabase, hex: '#4169E1' },
  { name: 'MongoDB', icon: FaDatabase, hex: '#47A248' },
  { name: 'Docker', icon: FaDocker, hex: '#2496ED' },
  { name: 'Amazon AWS', icon: FaAws, hex: '#FF9900' },
  { name: 'GitHub', icon: FaGithub, hex: '#888888' }, 
  { name: 'Figma', icon: FaFigma, hex: '#F24E1E' },
  { name: 'Linux', icon: FaLinux, hex: '#FCC624' },
  { name: 'Android', icon: FaAndroid, hex: '#3DDC84' },
  { name: 'Apple iOS', icon: FaApple, hex: '#999999' },
  { name: 'DigitalOcean', icon: FaDigitalOcean, hex: '#0080FF' },
  { name: 'GitLab', icon: FaGitlab, hex: '#FC6D26' }
];

const ParticleWave = () => {
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
    // Logo theme colors: Darker variants for better visibility
    const colors = ['#0369a1', '#be123c', '#15803d', '#b45309'];
    
    function draw() {
      ctx.clearRect(0, 0, width, height);
      
      const isMobile = width < 768;
      const xSpacing = isMobile ? 25 : 40; // denser points on mobile
      const zSpacing = isMobile ? 30 : 40;
      const xPoints = Math.ceil(width / xSpacing);
      const zPoints = 30; // deeper sea view
      
      const fov = isMobile ? 220 : 350; // closer perspective on mobile
      
      for (let z = 0; z < zPoints; z++) {
        // Expand loop bounds immensely to ensure no horizontal edge cut-offs at maximum depth
        for (let x = -35; x < xPoints + 35; x++) {
          
          let pX = (x - xPoints/2) * xSpacing;
          let pZ = z * zSpacing;
          
          // Organic sea wave math - Inverted time scalar to flow left-to-right
          let pY = Math.sin(pX * 0.01 - time * 0.8) * 60 + Math.cos(pZ * 0.05 - time) * 45;
          
          // 3D to 2D projection
          let scale = fov / (fov + pZ);
          // Increased subtraction shifts wave higher to prevent bottom-clipping bounds
          let screenY = height - (isMobile ? 160 : 120) + pY * scale - (z * 6); 
          let screenX = width / 2 + pX * scale;
          
          let alpha = Math.max(0, 1 - (pZ / (zPoints * zSpacing)));
          
          let radius = (isMobile ? 2.0 : 2.5) * scale;
          
          // Hover logic for glowing light beam effect
          let dx = screenX - mouse.x;
          let dy = screenY - mouse.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          
          let hoverAdd = 0;
          let isHovered = false;
          
          if (dist < 130) {
            let intensity = 1 - (dist / 130);
            hoverAdd = intensity * 6 * scale; // Pop size
            alpha = Math.min(1, alpha + intensity); // Brighten opacity massively
            isHovered = true;
          }
          
          let finalRadius = radius + hoverAdd;
          
          // Alternate organic colors
          let color = colors[(Math.abs(Math.floor(x/5) + Math.floor(z/4))) % colors.length];
          
          ctx.beginPath();
          ctx.arc(screenX, screenY, finalRadius, 0, Math.PI * 2);
          
          if (isHovered) {
             ctx.shadowBlur = 20;
             ctx.shadowColor = color;
          } else {
             // Minimal glow theme for default state
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

  // Responsive mix-blend handling on canvas for dark mode
  return <canvas ref={canvasRef} className="absolute inset-0 z-0 mix-blend-multiply dark:mix-blend-screen opacity-80 dark:opacity-90" />;
};

const AnimatedHeroText = ({ text }) => {
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


export default function Home() {
  const features = [
    { title: 'End-to-End Delivery', desc: 'From architectural design to production deployment and 24/7 support.' },
    { title: 'Scalable Architecture', desc: 'Built with modern tech stacks that grow seamlessly with your business.' },
    { title: 'Dedicated Tech Experts', desc: 'Direct collaboration with senior software engineers and UI designers.' },
    { title: 'Transparent Process', desc: 'Agile sprints, daily communication, and predictable delivery timelines.' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300">
      
      {/* CENTRALLY ALIGNED HERO SECTION WITH PARTICLE WAVE & DNA FOLD TEXT */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 flex items-center justify-center min-h-[100vh] pt-16 transition-colors duration-300">
        <ParticleWave />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center text-center">
            
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight tracking-tight mb-8 max-w-5xl mx-auto h-auto">
            <AnimatedHeroText text="We build the tech your business runs on." />
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
            <Link
              to="/contact"
              className="px-6 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-rose-600 hover:opacity-95 transition-all text-base sm:text-lg shadow-xl hover:scale-[1.02]"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-all text-base sm:text-lg shadow-sm group"
            >
              Explore Services <ArrowRight className="w-5 h-5 text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
            
        </div>
      </section>

      {/* COMPREHENSIVE SERVICES GRID SECTION */}
      <ScrollSlideSection>
        <GridServices />
      </ScrollSlideSection>

      {/* ENTERPRISE TECHNOLOGY STACK SECTION INLINED */}
      <ScrollSlideSection>
      <section className="py-12 lg:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden relative">
        <style>
          {`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee-left {
              animation: marquee-left 45s linear infinite;
            }
            .animate-marquee-right {
              animation: marquee-right 45s linear infinite;
            }
            .hover-pause:hover {
              animation-play-state: paused !important;
            }
          `}
        </style>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <ScrollAnimatedHeading 
               text="ENTERPRISE TECHNOLOGY STACK" 
               className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight drop-shadow-sm leading-tight text-center" 
            />
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-base md:text-lg lg:text-xl font-normal max-w-4xl mx-auto leading-relaxed">
               Scalable, high-performance infrastructure engineered utilizing industry-leading frameworks and robust deployment systems.
            </p>
          </div>
        </div>

        {/* Global Mask Wrapping the horizontal scrolling ecosystem */}
        <div 
           className="w-full relative z-10"
           style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          {/* ROW 1 : Left to Right Scroll */}
          <div className="flex overflow-hidden relative w-full mb-10 md:mb-12">
             <div className="flex w-max animate-marquee-left hover-pause items-center justify-start gap-8 md:gap-14 pl-4 pr-14">
                {[...stackRow1, ...stackRow1].map((tech, idx) => {
                     const Icon = tech.icon;
                     return (
                       <div key={`r1-${idx}`} className="group relative flex flex-col items-center justify-center py-4 px-2 w-[110px] md:w-[130px] h-[110px] md:h-[130px] cursor-pointer overflow-visible shrink-0 transition-transform hover:z-50">
                         {/* THIN Top Right Bracket -> Reduced strictly to 1px lightweight stroke */}
                         <div 
                            className="absolute top-0 right-0 w-5 h-5 border-t-[1px] border-r-[1px] rounded-tr-lg opacity-40 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-500 ease-out group-hover:rounded-xl border-slate-400 dark:border-slate-600 group-hover:border-sky-500/80"
                            style={{ boxShadow: `inset -1px 1px 6px -3px rgba(14, 165, 233, 0.4)` }}
                         ></div>
                         
                         {/* THIN Bottom Left Bracket -> 1px lightweight stroke */}
                         <div 
                            className="absolute bottom-0 left-0 w-5 h-5 border-b-[1px] border-l-[1px] rounded-bl-lg opacity-40 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-500 ease-out group-hover:rounded-xl border-slate-400 dark:border-slate-600 group-hover:border-sky-500/80"
                            style={{ boxShadow: `inset 1px -1px 6px -3px rgba(14, 165, 233, 0.4)` }}
                         ></div>

                         <div 
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-sky-600" 
                            style={{ filter: `blur(12px)` }}
                         ></div>

                         <div className="relative w-14 h-14 md:w-16 md:h-16 mb-2 mt-1">
                           {/* Base grayscale icon active initially */}
                           <Icon 
                              className="w-full h-full absolute top-0 left-0 text-slate-800 dark:text-slate-200 transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10" 
                           />
                           {/* Colored icon overlay active strictly on hover */}
                           <Icon 
                              className="w-full h-full absolute top-0 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 z-20" 
                              style={{ color: tech.hex, filter: `drop-shadow(0px 4px 10px ${tech.hex}40)` }} 
                           />
                         </div>
                         <div className="relative mt-2 flex justify-center w-full">
                           {/* Base text active initially */}
                           <span className="font-bold text-[12px] md:text-[14px] text-slate-800 dark:text-slate-200 transition-opacity duration-300 opacity-70 group-hover:opacity-0 whitespace-nowrap tracking-wide">
                             {tech.name}
                           </span>
                           {/* Colored text active strictly on hover */}
                           <span className="absolute top-0 left-1/2 -translate-x-1/2 font-bold text-[12px] md:text-[14px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap tracking-wide" style={{ color: tech.hex }}>
                             {tech.name}
                           </span>
                         </div>
                       </div>
                     )
                })}
             </div>
          </div>

          {/* ROW 2 : Right to Left Scroll */}
          <div className="flex overflow-hidden relative w-full pb-8">
             <div className="flex w-max animate-marquee-right hover-pause items-center justify-start gap-8 md:gap-14 pl-4 pr-14">
                {[...stackRow2, ...stackRow2].map((tech, idx) => {
                     const Icon = tech.icon;
                     return (
                       <div key={`r2-${idx}`} className="group relative flex flex-col items-center justify-center py-4 px-2 w-[110px] md:w-[130px] h-[110px] md:h-[130px] cursor-pointer overflow-visible shrink-0 transition-transform hover:z-50">
                         {/* THIN Top Right Bracket -> Strictly 1px navy/sky blue stroke */}
                         <div 
                            className="absolute top-0 right-0 w-5 h-5 border-t-[1px] border-r-[1px] rounded-tr-lg opacity-40 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-500 ease-out group-hover:rounded-xl border-slate-400 dark:border-slate-600 group-hover:border-sky-500/80"
                            style={{ boxShadow: `inset -1px 1px 6px -3px rgba(14, 165, 233, 0.4)` }}
                         ></div>
                         
                         {/* THIN Bottom Left Bracket */}
                         <div 
                            className="absolute bottom-0 left-0 w-5 h-5 border-b-[1px] border-l-[1px] rounded-bl-lg opacity-40 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-500 ease-out group-hover:rounded-xl border-slate-400 dark:border-slate-600 group-hover:border-sky-500/80"
                            style={{ boxShadow: `inset 1px -1px 6px -3px rgba(14, 165, 233, 0.4)` }}
                         ></div>

                         <div className="relative w-14 h-14 md:w-16 md:h-16 mb-2 mt-1">
                           {/* Base grayscale icon active initially */}
                           <Icon 
                              className="w-full h-full absolute top-0 left-0 text-slate-800 dark:text-slate-200 transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10" 
                           />
                           {/* Colored icon overlay active strictly on hover */}
                           <Icon 
                              className="w-full h-full absolute top-0 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 z-20" 
                              style={{ color: tech.hex, filter: `drop-shadow(0px 4px 10px ${tech.hex}40)` }} 
                           />
                         </div>
                         <div className="relative mt-2 flex justify-center w-full">
                           {/* Base text active initially */}
                           <span className="font-bold text-[12px] md:text-[14px] text-slate-800 dark:text-slate-200 transition-opacity duration-300 opacity-70 group-hover:opacity-0 whitespace-nowrap tracking-wide">
                             {tech.name}
                           </span>
                           {/* Colored text active strictly on hover */}
                           <span className="absolute top-0 left-1/2 -translate-x-1/2 font-bold text-[12px] md:text-[14px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap tracking-wide" style={{ color: tech.hex }}>
                             {tech.name}
                           </span>
                         </div>
                       </div>
                     )
                })}
             </div>
          </div>
        </div>

      </section>
      </ScrollSlideSection>

    </div>
  );
}

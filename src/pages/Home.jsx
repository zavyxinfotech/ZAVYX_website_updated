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
  CheckCircle,
  Play,
  Pause,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import GridServices from '../components/GridServices';
import ScrollAnimatedHeading from '../components/ScrollAnimatedHeading';
import { AnimatedHeroText } from '../components/HeroEffects';
import heroBgDesktop from '../../assets/images/Hero_bg_desktop_view.png';
import heroBgMobile from '../../assets/images/Hero_bg_mobile_view.png';

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
  { name: 'Tailwind CSS', icon: TbBrandTailwind, hex: '#06B6D4' },
  { name: 'Node.js', icon: FaNodeJs, hex: '#339933' },
  { name: 'GitHub', icon: FaGithub, hex: '#888888' },
  { name: 'MongoDB', icon: FaDatabase, hex: '#47A248' },
  { name: 'PHP', icon: FaPhp, hex: '#777BB4' },
  { name: 'Express', icon: FaNodeJs, hex: '#555555' },
  { name: 'React', icon: FaReact, hex: '#61DAFB' },
  { name: 'MySQL', icon: FaDatabase, hex: '#00758F' },
  { name: 'JavaScript', icon: FaJsSquare, hex: '#F7DF1E' },
  { name: 'Next.js', icon: TbBrandNextjs, hex: '#A0A0A0' },
  { name: 'TypeScript', icon: FaJsSquare, hex: '#3178C6' }
];

const whyChooseFeatures = [
  { num: '01', title: 'Modern Technology', desc: 'We use current tools and development practices to create solutions that are practical, maintainable and ready to scale.', icon: Code },
  { num: '02', title: 'Dedicated Attention', desc: 'As a growing team, we keep communication direct and give every project focused attention.', icon: CheckCircle },
  { num: '03', title: 'Transparent Process', desc: 'Clear requirements, milestones and communication keep projects predictable from start to finish.', icon: Globe },
  { num: '04', title: 'Built Around You', desc: 'We understand your business needs before recommending technology, helping ensure the solution actually fits your workflow.', icon: Bot }
];

const processSteps = [
  { step: '01', title: 'Discover', desc: 'Understand the business, users, goals and challenges.' },
  { step: '02', title: 'Plan', desc: 'Define requirements, scope, technology and milestones.' },
  { step: '03', title: 'Design', desc: 'Create a clear, intuitive and brand-aligned experience.' },
  { step: '04', title: 'Develop', desc: 'Build, integrate and test the solution.' },
  { step: '05', title: 'Launch & Support', desc: 'Deploy the solution and continue improving it based on real needs.' }
];

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300">
      
      {/* REDESIGNED HERO SECTION MATCHING EXACT REFERENCE LAYOUT */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center transition-colors duration-300">
        
        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-20 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* LEFT COLUMN: Text Content, CTAs & Startup Stats Counter */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left relative z-20">
              
              {/* Hero Headline with highlighted keyword */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-6 text-slate-900 dark:text-white">
                Digital Solutions That Move Your Business <span className="text-slate-900 dark:text-white font-normal inline-block">Forward.</span>
              </h1>

              {/* Sub-headline / Paragraph */}
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
                At ZAVYX Infotech, we help businesses leverage technology to work smarter, connect better and achieve more.
              </p>

              {/* CTA Buttons Row - Using Signature Project Button Style */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0a192f_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#0a192f] font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 group-hover:border-transparent">
                    Get Started <ArrowRight className="w-5 h-5 text-[#0a192f] group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/services"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0a192f_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#0a192f] font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 group-hover:border-transparent">
                    Explore Our Services <ArrowRight className="w-5 h-5 text-[#0a192f] group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Startup Stats Counter Row - Black text & non-bold */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-slate-200/80 dark:border-slate-800">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight">
                    Day 1
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-slate-500 dark:text-slate-400 mt-1">
                    Startup Drive
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight">
                    100<span className="text-slate-900 dark:text-white font-normal">%</span>
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-slate-500 dark:text-slate-400 mt-1">
                    Dedicated Focus
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight">
                    24<span className="text-slate-900 dark:text-white font-normal">/7</span>
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-slate-500 dark:text-slate-400 mt-1">
                    Agile Support
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Building Graphic & Overlays with Shared Stacking Context for Seamless Blending */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-end mt-6 lg:mt-0">
              
              {/* Soft Ambient Logo Blue Background Circle Shape - Decreased Brightness */}
              <div className="absolute -left-12 sm:-left-20 lg:-left-28 top-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full bg-[#e0f2fe]/50 dark:bg-sky-950/20 pointer-events-none z-0" />

              <div className="relative w-full flex items-center justify-end z-10">
                
                {/* Building Graphic Image - Significantly Increased Height with Left Shaded Fade Mask */}
                <div className="relative w-full flex justify-end">
                  {/* Desktop View Image - Tall, Shaded Fade on Left, Flush Right */}
                  <img 
                    src={heroBgDesktop} 
                    alt="ZAVYX Infotech Building" 
                    style={{
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 32%, black 62%, black 100%)',
                      maskImage: 'linear-gradient(to right, transparent 0%, transparent 32%, black 62%, black 100%)'
                    }}
                    className="hidden md:block w-full lg:w-[135%] xl:w-[150%] max-w-[1100px] xl:max-w-[1250px] h-auto object-contain object-right-center transform scale-135 lg:scale-145 xl:scale-155 origin-right-center -mr-8 sm:-mr-16 lg:-mr-24 xl:-mr-32 lg:-translate-y-4" 
                  />
                  {/* Mobile View Image - Increased Height & Shaded Fade on Left */}
                  <img 
                    src={heroBgMobile} 
                    alt="ZAVYX Infotech Mobile Building" 
                    style={{
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
                      maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)'
                    }}
                    className="block md:hidden w-full h-auto object-cover rounded-2xl max-h-[580px] transform scale-110" 
                  />
                </div>

                {/* People / Ideas / Solutions Overlay (Positioned top-right inside blue circle, above image without overlap) */}
                <div className="absolute top-[5%] sm:top-[7%] lg:top-[9%] left-[3rem] sm:left-[5rem] lg:left-[7rem] z-30 hidden sm:flex flex-col text-left">
                  <div className="w-8 h-[2.5px] bg-sky-500 mb-3" />
                  <div className="text-slate-800 dark:text-slate-100 font-semibold text-base sm:text-lg leading-tight tracking-tight">
                    <div>People</div>
                    <div>Ideas</div>
                    <div className="text-slate-900 dark:text-white font-bold">Solutions</div>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-2">
                    A Brighter Tomorrow
                  </div>
                </div>

                {/* Turning Ideas into Real Impact Overlay Card (Floating White Card Bottom Right) */}
                <div className="absolute bottom-4 right-2 sm:right-6 z-20 bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-5 py-3.5 border border-slate-100 dark:border-slate-700/60 flex items-center gap-3.5 max-w-[250px] sm:max-w-[270px]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ec4899] to-[#f43f5e] text-white flex items-center justify-center shrink-0 shadow-md">
                    <TrendingUp className="w-5.5 h-5.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-normal text-slate-900 dark:text-white leading-tight">
                      Turning Ideas
                    </div>
                    <div className="text-xs sm:text-sm text-slate-900 dark:text-white font-normal mt-0.5">
                      into Real Impact
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICES GRID SECTION */}
      <ScrollSlideSection>
        <GridServices />
      </ScrollSlideSection>

      {/* WHY CHOOSE ZAVYX SECTION */}
      <ScrollSlideSection>
        <section className="py-20 lg:py-32 bg-transparent transition-colors duration-300 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
                <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-4">Why Choose ZAVYX</h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                  Built for businesses that are ready to move forward.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  We're a growing technology company with a focused team, modern infrastructure and a straightforward approach to delivering digital solutions.
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-8">
                {whyChooseFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex flex-col group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-sky-500/30">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                           <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-4xl font-extrabold text-slate-200 dark:text-slate-800 transition-colors group-hover:text-sky-500/10">{f.num}</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{f.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {f.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollSlideSection>

      {/* OUR PROCESS SECTION */}
      <ScrollSlideSection>
        <section className="py-20 lg:py-32 bg-transparent transition-colors duration-300 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
            <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-4">Our Methodology</h2>
            <ScrollAnimatedHeading 
              text="OUR PROCESS" 
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.1] tracking-tight mb-16 text-slate-900 dark:text-white uppercase drop-shadow-sm transition-opacity" 
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative mt-16">
              {/* Horizontal Connecting Line for Desktop */}
              <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent z-0"></div>

              {processSteps.map((p, i) => (
                 <div key={i} className="flex flex-col items-center relative z-10 group">
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-sky-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">{p.step}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-500 transition-colors duration-300">{p.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-[220px]">
                      {p.desc}
                    </p>
                 </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSlideSection>

      {/* ENTERPRISE TECHNOLOGY STACK SECTION INLINED */}
      <ScrollSlideSection>
      <section className="py-12 lg:py-24 bg-transparent transition-colors duration-300 overflow-hidden relative">
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
               className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.1] tracking-tight mb-4 lg:mb-6 text-slate-900 dark:text-white uppercase text-center transition-opacity" 
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
                         {/* THIN Top Right Bracket -> Logo Color Mapped */}
                         <div className="absolute top-0 right-0 w-5 h-5 group-hover:w-full group-hover:h-full transition-all duration-500 ease-out">
                            <div className="absolute inset-0 border-t-[1px] border-r-[1px] rounded-tr-lg group-hover:rounded-xl border-slate-400 dark:border-slate-600 opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div 
                               className="absolute inset-0 border-t-[1px] border-r-[1px] rounded-tr-lg group-hover:rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                               style={{ borderColor: tech.hex }}
                            ></div>
                         </div>
                         
                         {/* THIN Bottom Left Bracket -> Logo Color Mapped */}
                         <div className="absolute bottom-0 left-0 w-5 h-5 group-hover:w-full group-hover:h-full transition-all duration-500 ease-out">
                            <div className="absolute inset-0 border-b-[1px] border-l-[1px] rounded-bl-lg group-hover:rounded-xl border-slate-400 dark:border-slate-600 opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
                            <div 
                               className="absolute inset-0 border-b-[1px] border-l-[1px] rounded-bl-lg group-hover:rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                               style={{ borderColor: tech.hex }}
                            ></div>
                         </div>

                         {/* Flat Background tint -> Logo Color Mapped */}
                         <div 
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300" 
                            style={{ backgroundColor: tech.hex }}
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

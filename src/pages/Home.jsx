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
  Sparkles,
  Gem,
  Users,
  Shield,
  Quote,
  Search,
  FileText,
  Pencil,
  Rocket,
  ShoppingCart,
  Factory,
  HeartPulse,
  GraduationCap,
  Building2,
  Truck,
  Tv,
  LayoutGrid
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
  { name: 'React', icon: FaReact, hex: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, hex: '#5FA04E' }, // Real Node.js color
  { name: 'AWS', icon: FaAws, hex: '#FF9900' },
  { name: 'Python', icon: FaPython, hex: '#3776AB' },
  { name: 'Docker', icon: FaDocker, hex: '#2496ED' },
  { name: 'MongoDB', icon: FaDatabase, hex: '#47A248' },
  { name: 'JavaScript', icon: FaJsSquare, hex: '#F7DF1E' },
  { name: 'GitHub', icon: FaGithub, hex: '#181717' },
  { name: 'Tailwind CSS', icon: TbBrandTailwind, hex: '#06B6D4' },
  { name: 'Vue.js', icon: FaVuejs, hex: '#4FC08D' },
  { name: 'DigitalOcean', icon: FaDigitalOcean, hex: '#0080FF' },
  { name: 'PHP', icon: FaPhp, hex: '#777BB4' },
  { name: 'Next.js', icon: TbBrandNextjs, hex: '#000000' }
];

export default function Home() {
  const [activeIndustry, setActiveIndustry] = useState(null);

  const industriesList = [
    { title: 'Retail & E-commerce', icon: ShoppingCart, hex: '#0284C7', subheading: 'Digital storefronts connecting the globe', desc: 'Transform your retail experience with advanced e-commerce solutions, seamless integrations, and modern digital shopping platforms engineered for performance and scale.' },
    { title: 'Manufacturing', icon: Factory, hex: '#EA580C', subheading: 'Smart production and automation', desc: 'Optimize your supply chain and factory floor operations with real-time tracking, intelligent integrations, and highly reliable modern production software.' },
    { title: 'Healthcare', icon: HeartPulse, hex: '#16A34A', subheading: 'Secure and connected patient care', desc: 'Enhance patient care with highly secure, compliant digital health platforms, telemedicine applications, and streamlined digital medical record systems.' },
    { title: 'Education', icon: GraduationCap, hex: '#2563EB', subheading: 'E-learning and campus technology', desc: 'Empower remote learning through intuitive educational platforms, robust student portals, and highly scalable virtual classroom environments.' },
    { title: 'Real Estate', icon: Building2, hex: '#7C3AED', subheading: 'Innovative property tech solutions', desc: 'Bridge the gap between property agents and buyers using advanced digital property management softwares, immersive virtual tours, and modern CRM platforms.' },
    { title: 'Logistics', icon: Truck, hex: '#E11D48', subheading: 'Supply chain tracking & optimization', desc: 'Monitor easily and manage fleets globally in real time with our customized digital routing, intelligent logistics tracking, and warehouse management systems.' },
    { title: 'Media & Entertainment', icon: Tv, hex: '#0D9488', subheading: 'High-bandwidth content delivery', desc: 'Instantly deliver high-quality digital content flawlessly to your audience with our reliable, high-uptime streaming architecture and active engagement tools.' },
    { title: 'Travel & Tourism', icon: Globe, hex: '#14B8A6', subheading: 'Booking and hospitality portals', desc: 'Create unforgettable trips for your customers using comprehensive online booking engines, dynamic hospitality systems, and specialized travel CRMs.' }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300">
      
      {/* REDESIGNED HERO SECTION MATCHING EXACT REFERENCE LAYOUT */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-900 pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center transition-colors duration-300">
        
        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-20 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* LEFT COLUMN: Text Content, CTAs & Startup Stats Counter */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left relative z-20">
              
              {/* Hero Headline with highlighted keyword */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-6 text-slate-900 dark:text-white">
                Digital Solutions That Move Your Business <span className="text-slate-900 dark:text-white font-normal inline-block">Forward</span>
              </h1>

              {/* Sub-headline / Paragraph */}
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
                At ZAVYX Infotech, we empower businesses with smart technology solutions that streamline operations, strengthen connections, and drive sustainable growth.
              </p>

              {/* CTA Buttons Row - Using Signature Project Button Style */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0B1F3A_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#0B1F3A] font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 group-hover:border-transparent">
                    Get Started <ArrowRight className="w-5 h-5 text-[#0B1F3A] group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/services"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0B1F3A_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#0B1F3A] font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 group-hover:border-transparent">
                    Explore Our Services <ArrowRight className="w-5 h-5 text-[#0B1F3A] group-hover:translate-x-1 transition-transform" />
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

      {/* ABOUT ZAVYX SECTION */}
      <ScrollSlideSection>
        <section className="py-16 lg:py-24 bg-transparent transition-colors duration-300 relative z-20">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text & Features */}
              <div className="lg:col-span-6 flex flex-col text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm">ABOUT ZAVYX</span>
                  <span className="w-8 h-[2px] bg-sky-500 inline-block"></span>
                </div>
                
                <ScrollAnimatedHeading 
                  text="A Technology Partner You Can Trust" 
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 transition-opacity"
                />
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal max-w-xl">
                  ZAVYX Infotech is a growing technology company focused on helping businesses use modern digital solutions to work smarter, connect better and grow with confidence.
                </p>

                <div className="mb-10">
                  <Link
                    to="/about"
                    className="relative inline-flex h-12 sm:h-13 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0B1F3A_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#0B1F3A] dark:bg-white text-white dark:text-[#0B1F3A] font-normal px-6 gap-2 text-sm sm:text-base z-10 transition-all border border-transparent group-hover:border-transparent">
                      Learn More About Us <ArrowRight className="w-4 h-4 text-white dark:text-[#0B1F3A] group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>

                {/* 3 Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                      <Gem className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-normal text-slate-800 dark:text-slate-200 leading-snug">
                      Client-Centric Approach
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-normal text-slate-800 dark:text-slate-200 leading-snug">
                      Collaborative and Transparent
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-normal text-slate-800 dark:text-slate-200 leading-snug">
                      Reliable and Supportive
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Team Image with Floating Quote Overlay */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                    alt="ZAVYX Team Collaboration" 
                    className="w-full h-[360px] sm:h-[420px] lg:h-[450px] object-cover"
                  />
                  {/* Floating Quote Card */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-5 border border-slate-100 dark:border-slate-800 max-w-[280px] sm:max-w-[310px] z-20">
                    <Quote className="w-6 h-6 text-sky-500 fill-sky-500/20 mb-2 rotate-180" />
                    <p className="text-xs sm:text-sm font-normal text-slate-800 dark:text-slate-200 leading-snug mb-3">
                      Building meaningful digital solutions for businesses and communities.
                    </p>
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 via-rose-500 via-emerald-500 to-amber-500"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollSlideSection>

      {/* OUR PROCESS SECTION */}
      <ScrollSlideSection>
        <section className="py-16 lg:py-24 bg-transparent transition-colors duration-300 relative z-10 overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-pink-600 dark:text-pink-400 font-normal uppercase tracking-widest text-xs sm:text-sm">OUR PROCESS</span>
                  <span className="w-8 h-[2px] bg-pink-500 inline-block"></span>
                </div>
                <ScrollAnimatedHeading 
                  text="A simple and transparent process" 
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-opacity"
                />
              </div>
            </div>

            {/* 5 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
              {[
                { step: '01', title: 'Discover', desc: 'Understand your goals and requirements.', icon: Search },
                { step: '02', title: 'Plan', desc: 'Create the right strategy and roadmap.', icon: FileText },
                { step: '03', title: 'Design', desc: 'Craft simple and effective designs.', icon: Pencil },
                { step: '04', title: 'Develop', desc: 'Build, test and refine the solution.', icon: Code },
                { step: '05', title: 'Launch & Support', desc: 'Deploy and provide ongoing support.', icon: Rocket }
              ].map((p, i, arr) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="flex flex-col items-start relative group p-5 sm:p-6 rounded-2xl overflow-hidden transition-all h-full">
                    {/* Dark background animating from bottom to top */}
                    <div className="absolute inset-0 bg-[#0B1F3A] dark:bg-slate-800 origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></div>

                    {/* Icon & Step Number */}
                    <div className="flex items-center gap-4 mb-5 w-full relative z-10">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0B1F3A] dark:bg-sky-950 text-white flex items-center justify-center shrink-0 border border-slate-700/50 transition-colors">
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-3xl sm:text-4xl font-normal text-slate-400 dark:text-slate-500 tracking-tight group-hover:text-white transition-colors duration-300">
                        {p.step}
                      </span>
                      {i < arr.length - 1 && (
                        <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300 dark:text-slate-700 ml-auto transition-colors" />
                      )}
                    </div>

                    <h4 className="text-lg font-normal text-slate-900 dark:text-white mb-2 group-hover:text-white transition-colors duration-300 relative z-10">
                      {p.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base leading-relaxed font-normal group-hover:text-slate-200 transition-colors duration-300 relative z-10">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      </ScrollSlideSection>

      {/* INDUSTRIES WE SERVE SECTION */}
      <ScrollSlideSection>
        <section className="py-16 lg:py-24 bg-transparent transition-colors duration-300 relative z-20">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm">INDUSTRIES WE SERVE</span>
                  <span className="w-8 h-[2px] bg-sky-500 inline-block"></span>
                </div>
                <ScrollAnimatedHeading 
                  text="Helping Businesses Across Industries" 
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-opacity"
                />
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-normal text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shrink-0"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Industries Vertical Tabs Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 lg:h-[450px] pt-4">
              {industriesList.map((ind, i) => {
                const isActive = activeIndustry === i;
                const Icon = ind.icon;
                const isLast = i === industriesList.length - 1;
                
                return (
                  <div 
                    key={`ind-${i}`}
                    onClick={() => setActiveIndustry(isActive ? null : i)}
                    className={`group relative flex flex-col items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden w-full h-[180px] lg:h-full py-4 lg:py-0 border-slate-300 dark:border-slate-700/60 ${
                      i % 2 === 0 ? 'border-r' : ''
                    } md:border-r ${
                      (i + 1) % 4 === 0 ? 'md:border-r-0' : ''
                    } lg:border-r ${
                      isLast ? 'lg:border-r-0' : ''
                    }`}
                  >
                     {/* Hover & Active Gradient Background matching ZAVYX navy blue */}
                     <div 
                        className={`absolute inset-0 transition-all duration-300 z-0 bg-gradient-to-b from-transparent to-[#0B1F3A]/15 dark:to-blue-400/15 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                     ></div>

                    {/* Content Component */}
                    <div className="relative w-full h-full flex lg:flex-col items-center justify-center gap-4 lg:gap-8 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                       <div className="relative w-10 h-10 lg:w-12 lg:h-12 shrink-0 mt-4 lg:mt-6">
                         <Icon className={`w-full h-full absolute top-0 left-0 transition-opacity duration-300 p-1 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0 text-slate-800 dark:text-slate-200'}`} strokeWidth={1.5} />
                         <Icon className={`w-full h-full absolute top-0 left-0 transition-all duration-300 p-1 text-[#0B1F3A] dark:text-blue-400 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} strokeWidth={1.5} />
                       </div>
                       
                       <div className="relative w-full h-full lg:max-h-[300px] flex items-center justify-center overflow-visible">
                         <span className={`lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 whitespace-nowrap font-normal text-xl lg:text-[1.5rem] tracking-wider uppercase transition-all duration-300 ${isActive ? "opacity-0" : "text-slate-700 dark:text-slate-300 group-hover:opacity-0"}`}>
                           {ind.title}
                         </span>
                         <span className={`lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 whitespace-nowrap font-normal text-xl lg:text-[1.5rem] tracking-wider uppercase transition-all duration-300 text-[#0B1F3A] dark:text-blue-400 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                           {ind.title}
                         </span>
                       </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Expanded Details Panel */}
            <div className={`transition-all duration-500 ease-in-out origin-top overflow-hidden w-full max-w-4xl mx-auto ${activeIndustry !== null ? 'max-h-[500px] opacity-100 mt-12 md:mt-16' : 'max-h-0 opacity-0 mt-0 pointer-events-none'}`}>
              {activeIndustry !== null && (
                <div className="bg-white dark:bg-slate-800/80 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 md:p-14 w-full flex flex-col items-start text-left relative backdrop-blur-sm">
                  {/* Accent Line matching Industry Color */}
                  <div className="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl opacity-80" style={{ backgroundColor: industriesList[activeIndustry].hex }}></div>
                  
                  <h3 className="text-3xl md:text-[2.5rem] font-normal text-slate-900 dark:text-white mb-2 leading-tight tracking-tight">
                    {industriesList[activeIndustry].title}
                  </h3>
                  <div className="text-xl md:text-2xl font-normal mb-8 md:mb-10 opacity-90 tracking-wide" style={{ color: industriesList[activeIndustry].hex }}>
                    {industriesList[activeIndustry].subheading}
                  </div>
                  <p className="text-base md:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {industriesList[activeIndustry].desc}
                  </p>
                </div>
              )}
            </div>

          </div>
        </section>
      </ScrollSlideSection>

      {/* TESTIMONIALS SECTION */}
      <ScrollSlideSection>
      <section className="py-16 lg:py-28 mb-20 lg:mb-32 bg-transparent transition-colors duration-300 overflow-hidden relative">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm">TESTIMONIALS</span>
              <span className="w-8 h-[2px] bg-sky-500 inline-block"></span>
            </div>
            <ScrollAnimatedHeading 
              text="What Our Clients Say" 
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-opacity"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "ZAVYX Infotech completely transformed our business workflow. The custom software they delivered was highly scalable and exactly what we needed to take our operations to the next level.",
                author: "James T.",
                role: "CTO, TechCorp",
                initial: "J"
              },
              {
                text: "Their team's attention to detail and modern design sensibilities are unmatched. Our e-commerce sales doubled in the first quarter after their platform redesign.",
                author: "Sarah H.",
                role: "Marketing Director, LuxBrand",
                initial: "S"
              },
              {
                text: "Partnering with ZAVYX allowed us to automate critical pipelines that were dragging our efficiency down. Highly recommend their engineering and DevOps services.",
                author: "Michael R.",
                role: "VP Engineering, BuildStart",
                initial: "M"
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-[30px] border border-slate-200 dark:border-slate-700/50 flex flex-col justify-between">
                <div>
                  <svg className="w-8 h-8 text-sky-500 mb-6 opacity-70" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  <p className="text-slate-600 dark:text-slate-300 font-normal leading-relaxed text-[15px] sm:text-base mb-8">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-800 dark:text-white font-normal text-lg">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-normal">{t.author}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollSlideSection>

    </div>
  );
}

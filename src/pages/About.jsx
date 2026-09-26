import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Rocket, Users, ChevronRight, CheckCircle, Shield, Award, ArrowRight, BarChart3 } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import imgFounder from '../../assets/images/team/Founder.webp';
import imgDirector from '../../assets/images/team/Head_of_operations.webp';
import imgHR from '../../assets/images/team/HR_Manager.webp';
import imgRM from '../../assets/images/team/Relationship_Manager.webp';
import imgUX from '../../assets/images/team/UI_Ux_Designer.jpeg';
import imgDev from '../../assets/images/team/Full_Stack_developer.webp';
import imgDA from '../../assets/images/team/Data_Analyst.webp';
import aboutHeroImage from '../../assets/images/about_page_Hero_img.jpeg';
import { AnimatedHeroText } from '../components/HeroEffects';
import zavyxLogoIcon from '../../assets/logo/ZAVYX_logo_image.png';

const ScrollSlideSection = ({ children, className = '', delay='0ms' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.05, rootMargin: '200px 0px 50px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default function About() {
  return (
    <div className="bg-white dark:bg-[#050B14] min-h-screen overflow-hidden transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-transparent pt-24 pb-10 md:pt-32 md:pb-16 overflow-hidden">

        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <ScrollSlideSection className="flex flex-col text-center lg:text-left">
            <h4 className="text-sky-500 font-normal tracking-widest text-sm uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-6 bg-sky-500 inline-block block"></span>
              Experience The Best IT Solutions
            </h4>
            <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-6 leading-[1.1]">
              <AnimatedHeroText text="Where Creativity Meets Cutting-Edge Technology" />
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              We are a team of passionate software engineers, cloud architects, and product designers dedicated to helping businesses scale with reliable digital products.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-4 sm:mt-8">
              <Link
                to="/contact"
                className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-4 sm:px-8 gap-2 text-sm sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                  Explore More <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/services"
                className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#00016E] font-semibold px-4 sm:px-8 gap-2 text-sm sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                  View All Services <ArrowRight className="w-5 h-5 text-[#00016E] group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </ScrollSlideSection>

          <ScrollSlideSection delay="100ms" className="relative w-[280px] min-[400px]:w-[340px] sm:w-[450px] lg:w-[550px] xl:w-[580px] max-w-[85vw] aspect-square mx-auto flex items-center justify-center lg:ml-[10%] mt-8 lg:mt-0">
            
            {/* Base organically shaped container for identical contouring (using inline styles to ensure perfect cross-browser blob rendering) */}
            
            {/* Background Blob 1: Yellow arc (offset top/left) */}
            <div className="absolute inset-0 bg-[#FFF5D1] dark:bg-yellow-500/20 -translate-x-4 sm:-translate-x-6 -translate-y-4 sm:-translate-y-6 scale-[1.03] z-0 mix-blend-multiply dark:mix-blend-normal transform-gpu" style={{ borderRadius: '25% 50% 50% 25% / 35% 50% 50% 35%' }}></div>
            
            {/* Background Blob 2: Light blue curve (offset left/bottom) */}
            <div className="absolute inset-0 bg-[#E8F4FF] dark:bg-sky-500/20 -translate-x-6 sm:-translate-x-10 translate-y-4 sm:translate-y-6 scale-[1.05] z-0 mix-blend-multiply dark:mix-blend-normal transform-gpu" style={{ borderRadius: '25% 50% 50% 25% / 35% 50% 50% 35%' }}></div>
            
            {/* Background Blob 3: Pink curve (offset bottom right) */}
            <div className="absolute inset-0 bg-[#FFEAED] dark:bg-rose-500/20 translate-x-2 sm:translate-x-4 translate-y-3 sm:translate-y-5 scale-[1.02] z-0 mix-blend-multiply dark:mix-blend-normal transform-gpu" style={{ borderRadius: '25% 50% 50% 25% / 35% 50% 50% 35%' }}></div>

            {/* Main organic image frame container matching contours exactly */}
            <div className="relative w-full h-full z-10 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] bg-white ring-1 ring-slate-100 dark:ring-slate-800" style={{ borderRadius: '25% 50% 50% 25% / 35% 50% 50% 35%' }}>
              <img 
                src={aboutHeroImage} 
                alt="Professional Business Solutions" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent dark:from-slate-900/40"></div>
            </div>

            {/* Floating text: Smarter Solutions (Moved Top Right OUTSIDE the image container) */}
            <div className="absolute top-[8%] sm:top-[12%] right-[-5%] sm:right-[-12%] text-[#1E293B] dark:text-white text-left font-medium text-[15px] sm:text-[18px] lg:text-[20px] leading-[1.25] drop-shadow-[0_4px_10px_rgba(255,255,255,0.5)] z-30">
              Smarter<br/>Solutions<br/>Brighter<br/>Business
              <div className="w-6 sm:w-8 h-[2px] sm:h-[3px] bg-[#FFD100] mt-2.5 rounded-full shadow-sm"></div>
            </div>

            {/* Floating Card: Ideas to Impact (Minimal Glassmorphism, Pushed Outward left) */}
            <div className="absolute bottom-[20%] left-[-15%] sm:left-[-25%] lg:left-[-20%] z-30 bg-white/40 dark:bg-slate-900/50 backdrop-blur-md p-4 rounded-[20px] shadow-none flex flex-col items-center justify-center gap-2 aspect-square w-[110px] sm:w-[130px] border border-white/60 dark:border-slate-700/50">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-[#E8F4FF] dark:bg-slate-700 shrink-0">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0070F3]" />
              </div>
              <div className="text-center">
                <h4 className="text-[#1E293B] dark:text-white font-medium text-[14px] sm:text-[16px] leading-[1.2]">Ideas<br/><span className="text-slate-600 dark:text-slate-400 font-normal">to Impact</span></h4>
              </div>
            </div>

          </ScrollSlideSection>
          
        </div>
      </section>

      {/* 2. MARQUEE BANNER */}
      <div className="bg-sky-500 py-3 sm:py-4 w-full flex overflow-hidden whitespace-nowrap relative z-20 mx-auto max-w-[95%] rounded-xl border border-sky-400">
        <div className="animate-[marquee_50s_linear_infinite] flex items-center justify-around min-w-max text-white font-normal tracking-widest uppercase text-[11px] sm:text-sm">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-4 sm:mx-6">*</span><span>Website Development</span>
              <span className="mx-4 sm:mx-6">*</span><span>UX/UI Design</span>
              <span className="mx-4 sm:mx-6">*</span><span>CRM / ERP Solutions</span>
              <span className="mx-4 sm:mx-6">*</span><span>AI Automation</span>
              <span className="mx-4 sm:mx-6">*</span><span>Cloud Infrastructure</span>
              <span className="mx-4 sm:mx-6">*</span><span>Mobile Apps</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3. ABOUT US COLLAGE & TEXT */}
      <section className="py-10 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Collage */}
          <ScrollSlideSection className="relative grid grid-cols-2 gap-2 sm:gap-4 h-[250px] min-[400px]:h-[300px] sm:h-[500px]">
             {/* Center Badge Oval/Circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full flex items-center justify-center text-white text-center font-normal leading-tight shadow-xl">
               <span className="text-[10px] sm:text-sm uppercase tracking-wider font-semibold">Startup<br />Energy</span>
             </div>
             
             {/* Box 1 - Top Left */}
             <div className="rounded-tl-[80px] rounded-br-[40px] overflow-hidden shadow-lg border-[3px] border-slate-50 dark:border-slate-800 hover:border-sky-500 transition-colors duration-500 cursor-pointer relative z-10 w-full h-[90%] align-bottom self-end">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About Image 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             {/* Box 2 - Top Right */}
             <div className="rounded-tr-[80px] rounded-bl-[40px] overflow-hidden shadow-lg border-[3px] border-slate-50 dark:border-slate-800 hover:border-emerald-500 transition-colors duration-500 cursor-pointer relative z-0 w-[90%] h-full">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About Image 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             {/* Box 3 - Bottom Left */}
             <div className="rounded-bl-[80px] rounded-tr-[40px] overflow-hidden shadow-lg border-[3px] border-slate-50 dark:border-slate-800 hover:border-amber-500 transition-colors duration-500 cursor-pointer relative z-0 w-[80%] h-[90%] justify-self-end mt-4">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About Image 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             {/* Box 4 - Bottom Right */}
             <div className="rounded-br-[80px] rounded-tl-[40px] overflow-hidden shadow-lg border-[3px] border-slate-50 dark:border-slate-800 hover:border-rose-500 transition-colors duration-500 cursor-pointer relative z-10 w-full h-[80%] mt-4">
                <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About Image 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
          </ScrollSlideSection>

          {/* Right Content */}
          <ScrollSlideSection delay="100ms" className="flex flex-col text-left">
            <h4 className="text-amber-500 font-normal tracking-widest text-sm uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-amber-500 inline-block block"></span>
              About Us
            </h4>
            <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-6 leading-[1.1]">
              Transforming Ideas<br /> into Digital Reality
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10 border-l-[3px] sm:border-l-4 border-emerald-500 pl-3 sm:pl-4 font-normal">
              ZAVYX InfoTech was founded with a singular purpose: to deliver unparalleled digital experiences that empower businesses to scale securely and efficiently. We are hitting the ground running on day one with relentless startup energy.
            </p>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex flex-col">
                <span className="text-xl sm:text-3xl md:text-4xl font-normal text-slate-900 dark:text-white">Day 1</span>
                <span className="text-[10px] sm:text-sm font-normal text-slate-500 uppercase tracking-wider mt-1">Energy & Drive</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-3xl md:text-4xl font-normal text-slate-900 dark:text-white">100%</span>
                <span className="text-[10px] sm:text-sm font-normal text-slate-500 uppercase tracking-wider mt-1">Commitment</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-3xl md:text-4xl font-normal text-slate-900 dark:text-white">24/7</span>
                <span className="text-[10px] sm:text-sm font-normal text-slate-500 uppercase tracking-wider mt-1">Dedication</span>
              </div>
            </div>

            <div className="flex flex-col mt-2 sm:mt-4">
              <span className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-tight">ZAVYX InfoTech</span>
              <span className="text-[10px] sm:text-xs uppercase font-medium text-slate-500 tracking-widest">Executive Leadership Team</span>
            </div>
          </ScrollSlideSection>
          
        </div>
      </section>

      {/* 4. MISSION & VISION OVERLAP */}
      <section className="py-10 md:py-16 relative mx-4 sm:mx-8 mb-8 md:mb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          
          <ScrollSlideSection className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 p-6 sm:p-12 rounded-xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all duration-500"></div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-sky-50 dark:bg-slate-900 text-sky-500 border border-sky-100 dark:border-slate-700 flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
              <Target className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-3xl font-normal tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg leading-relaxed">
              To empower enterprises and growing startups with high-performance software solutions, seamless cloud automation, and high-impact digital experiences. We measure our success directly by the ROI we generate for you.
            </p>
          </ScrollSlideSection>

          <ScrollSlideSection delay="100ms" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 p-6 sm:p-12 rounded-xl relative overflow-hidden group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-emerald-50 dark:bg-slate-900 text-emerald-500 border border-emerald-100 dark:border-slate-700 flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-3xl font-normal tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg leading-relaxed">
              To be the most trusted technology engineering partner globally, known for innovation, speed of execution, and uncompromising code quality that stands the test of structural demands over long durations.
            </p>
          </ScrollSlideSection>
          
        </div>
      </section>

      {/* 5. OUR TEAM */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-10 overflow-hidden">
        <ScrollSlideSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h4 className="text-sky-500 font-normal tracking-widest text-[11px] sm:text-sm uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-0.5 bg-sky-500 inline-block block"></span>
            Our Professionals
            <span className="w-6 h-0.5 bg-sky-500 inline-block block"></span>
          </h4>
          <h2 className="text-2xl min-[400px]:text-3xl sm:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-6 leading-[1.1]">
            Meet the Minds Behind the Machine
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg px-2">
            Our expert team of engineers and creative directors work harmoniously to translate your vision into a measurable digital asset.
          </p>
        </ScrollSlideSection>

        <div className="flex flex-wrap justify-center gap-x-2 gap-y-10 sm:gap-x-10 sm:gap-y-16 mt-8 sm:mt-10">
          {[
            { 
              name: "SAKTHIVEL S", title: "FOUNDER", 
              desc: "Drives the company's vision and strategy to scale global enterprise operations safely.",
              img: imgFounder, colorId: 'sky',
              linkedin: "https://www.linkedin.com/in/sakthivel007?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            },
            { 
              name: "SARANYA SAKTHIVEL", title: "HEAD OF OPERATIONS", 
              desc: "Oversees structural growth and high-level management across all engineering sectors.",
              img: imgDirector, colorId: 'emerald'
            },
            { 
              name: "VIJAYADARSHINI N M", title: "UI/UX DESIGNER", 
              desc: "Creates user experiences and interfaces designed around usability, clarity and business objectives.",
              img: imgUX, colorId: 'rose',
              linkedin: "https://www.linkedin.com/in/vijayadharshini-n-m-81466a270?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            },
            { 
              name: "ARCHANA S", title: "HR MANAGER", 
              desc: "Cultivates our world-class talent and maintains a cutting-edge operational environment.",
              img: imgHR, colorId: 'amber',
              linkedin: "https://www.linkedin.com/in/archanaplakkal?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            },
            { 
              name: "RAMYA R", title: "RELATIONSHIP MANAGER", 
              desc: "Acts as a key communication point between clients and the project team throughout the engagement.",
              img: imgRM, colorId: 'sky',
              linkedin: "https://www.linkedin.com/in/ramya-ravindran-368968125?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            },
            { 
              name: "NITHYA SRI S", title: "DATA ANALYST", 
              desc: "Analyzes datasets to streamline metrics and drastically improve digital workflow efficiency.",
              img: imgDA, colorId: 'emerald',
              linkedin: "https://www.linkedin.com/in/nithya-sri-s-46b66738b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            },
            { 
              name: "VASUKI T", title: "FULL STACK DEVELOPER", 
              desc: "Architects and writes robust codebase infrastructure powering high-performing client applications.",
              img: imgDev, colorId: 'rose',
              linkedin: "https://www.linkedin.com/in/vasuki-fullstackdeveloper?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            }
          ].map((member, idx) => {
             const rings = {
                sky: 'border-t-sky-500 border-r-sky-500 group-hover:border-b-sky-500 group-hover:border-l-sky-500 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]',
                amber: 'border-t-amber-500 border-r-amber-500 group-hover:border-b-amber-500 group-hover:border-l-amber-500 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]',
                emerald: 'border-t-emerald-500 border-r-emerald-500 group-hover:border-b-emerald-500 group-hover:border-l-emerald-500 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
                rose: 'border-t-rose-500 border-r-rose-500 group-hover:border-b-rose-500 group-hover:border-l-rose-500 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]',
             };
             
             return (
               <ScrollSlideSection key={idx} delay={`${(idx % 4) * 100}ms`} className="flex flex-col text-center px-1 sm:px-4 items-center w-[48%] md:w-[45%] lg:w-[30%] xl:w-[22%]">
                 
                 <div className="relative w-[130px] h-[130px] min-[400px]:w-[150px] min-[400px]:h-[150px] sm:w-[200px] sm:h-[200px] mb-4 sm:mb-6 group cursor-pointer shrink-0">
                   {/* Background track circle */}
                   <div className="absolute inset-0 rounded-full border-[3px] sm:border-[4px] border-slate-100 dark:border-slate-800"></div>
                   
                   {/* Animated foreground ring */}
                   <div className={`absolute inset-0 rounded-full border-[3px] sm:border-[4px] border-b-transparent border-l-transparent transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[360deg] z-10 ${rings[member.colorId]}`}></div>
                   
                   {/* Inner circular image wrapper for perfect cut */}
                   <div className="absolute inset-[4px] sm:inset-[8px] rounded-full overflow-hidden bg-slate-200 dark:bg-slate-900 border-2 border-white dark:border-slate-800 z-0">
                     <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                   </div>
                 </div>

                 <h3 className="text-[13px] min-[400px]:text-[15px] sm:text-xl font-normal text-slate-900 dark:text-white uppercase tracking-tight sm:tracking-wider mb-1 sm:mb-2">{member.title}</h3>
                 <p className="text-[10px] min-[400px]:text-[11px] sm:text-[13px] font-normal text-slate-500 dark:text-slate-400 uppercase tracking-widest sm:tracking-[0.2em] mb-2 sm:mb-4">{member.name}</p>
                 <p className="text-[11px] min-[400px]:text-[12px] sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-[280px] font-normal px-2">
                   {member.desc}
                 </p>
                 
                 {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="mt-3 sm:mt-4 text-[#0A66C2] hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-400 transition-colors"
                    >
                      <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                    </a>
                 )}
                 
               </ScrollSlideSection>
             );
          })}
        </div>
      </section>

      {/* 6. CTA SECTION - Banner Style */}
      <section className="py-10 md:py-16 bg-transparent max-w-[1300px] mx-auto px-4 sm:px-6 relative z-20">
        <ScrollSlideSection>
           <div className="relative bg-gradient-to-r from-[#F2F7FF] to-white dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-12 lg:p-16 border border-sky-100/50 dark:border-slate-700/50 shadow-sm group/cta">
             
             {/* Top-Left glassmorphism logo watermark simulating modern branding */}
             <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] pointer-events-none opacity-[0.12] dark:opacity-[0.15] transition-all duration-700 group-hover/cta:opacity-[0.25] group-hover/cta:scale-105">
               <img src={zavyxLogoIcon} alt="Background Watermark" className="w-full h-full object-contain drop-shadow-lg" />
             </div>

             <div className="relative z-10 flex-1 max-w-2xl text-left mb-8 md:mb-0">
               <span className="text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px] sm:text-xs font-normal mb-2 sm:mb-3 block">
                 READY TO GET STARTED?
               </span>
               <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4 leading-[1.1]">
                 Have a <span className="text-sky-500">Business Challenge</span> to Solve?
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg mb-0 leading-relaxed font-normal">
                 Tell us what you're trying to build, improve or automate. We'll help you understand the possible technology approach and next steps.
               </p>
             </div>

             <div className="relative z-10 flex shrink-0">
               <Link
                 to="/contact"
                 className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
               >
                 <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#00016E] font-normal px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 group-hover:border-transparent">
                   Get a Quote <ArrowRight className="w-5 h-5 text-[#00016E] group-hover:translate-x-1 transition-transform" />
                 </span>
               </Link>
             </div>
             
           </div>
        </ScrollSlideSection>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

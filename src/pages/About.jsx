import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Rocket, Users, ChevronRight, CheckCircle, Shield, Award } from 'lucide-react';

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
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen overflow-hidden transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-transparent pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-sky-900/5 dark:bg-sky-900/10 blur-3xl rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <ScrollSlideSection className="flex flex-col text-center lg:text-left">
            <h4 className="text-sky-500 font-semibold tracking-widest text-sm uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-6 bg-sky-500 inline-block block"></span>
              Experience The Best IT Solutions
            </h4>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.1]">
              Where Creativity Meets<br className="hidden lg:block" /> Cutting-Edge Technology
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              We are a team of passionate software engineers, cloud architects, and product designers dedicated to helping businesses scale with reliable digital products.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link to="/contact" className="px-8 py-3.5 rounded-full bg-sky-500 text-white font-bold hover:bg-sky-400 transition-colors shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                Explore More &rarr;
              </Link>
              <Link to="/services" className="px-8 py-3.5 rounded-full bg-transparent border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold hover:border-slate-400 dark:hover:border-white transition-colors">
                View All Services
              </Link>
            </div>
          </ScrollSlideSection>

          <ScrollSlideSection delay="100ms" className="relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Team collaborating" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </ScrollSlideSection>
          
        </div>
      </section>

      {/* 2. MARQUEE BANNER */}
      <div className="bg-sky-500 py-4 w-full flex overflow-hidden whitespace-nowrap relative z-20 mx-auto max-w-[95%] rounded-full shadow-xl">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center justify-around w-full gap-8 min-w-max text-white font-bold tracking-widest uppercase text-sm">
          <span>*</span><span>Website Development</span>
          <span>*</span><span>UX/UI Design</span>
          <span>*</span><span>CRM / ERP Solutions</span>
          <span>*</span><span>AI Automation</span>
          <span>*</span><span>Cloud Infrastructure</span>
          <span>*</span><span>Mobile Apps</span>
          <span>*</span><span>Website Development</span>
          <span>*</span><span>UX/UI Design</span>
          <span>*</span><span>CRM / ERP Solutions</span>
        </div>
      </div>

      {/* 3. ABOUT US COLLAGE & TEXT */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Collage */}
          <ScrollSlideSection className="relative grid grid-cols-2 gap-4 h-[350px] sm:h-[500px]">
             {/* Center Badge Oval/Circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-28 h-28 sm:w-32 sm:h-32 bg-sky-500 rounded-full border-[6px] sm:border-8 border-slate-50 dark:border-slate-900 flex items-center justify-center text-white text-center font-bold leading-tight shadow-xl">
               <span className="text-xs sm:text-sm uppercase tracking-wider">Startup<br />Energy</span>
             </div>
             
             {/* Box 1 - Top Left */}
             <div className="rounded-tl-[80px] rounded-br-[40px] overflow-hidden shadow-lg border-[6px] border-slate-50 dark:border-slate-800 relative z-10 w-full h-[90%] align-bottom self-end">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About Image 1" className="w-full h-full object-cover" />
             </div>
             {/* Box 2 - Top Right */}
             <div className="rounded-tr-[80px] rounded-bl-[40px] overflow-hidden shadow-lg border-[6px] border-slate-50 dark:border-slate-800 relative z-0 w-[90%] h-full">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About Image 2" className="w-full h-full object-cover" />
             </div>
             {/* Box 3 - Bottom Left */}
             <div className="rounded-bl-[80px] rounded-tr-[40px] overflow-hidden shadow-lg border-[6px] border-slate-50 dark:border-slate-800 relative z-0 w-[80%] h-[90%] justify-self-end mt-4">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About Image 3" className="w-full h-full object-cover" />
             </div>
             {/* Box 4 - Bottom Right */}
             <div className="rounded-br-[80px] rounded-tl-[40px] overflow-hidden shadow-lg border-[6px] border-slate-50 dark:border-slate-800 relative z-10 w-full h-[80%] mt-4">
                <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About Image 4" className="w-full h-full object-cover" />
             </div>
          </ScrollSlideSection>

          {/* Right Content */}
          <ScrollSlideSection delay="100ms" className="flex flex-col text-left">
            <h4 className="text-sky-500 font-semibold tracking-widest text-sm uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-sky-500 inline-block block"></span>
              About Us
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Transforming <span className="text-sky-500">Ideas</span><br /> into Digital Reality
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 border-l-4 border-emerald-500 pl-4">
              ZAVYX InfoTech was founded with a singular purpose: to deliver unparalleled digital experiences that empower businesses to scale securely and efficiently. We are hitting the ground running on day one with relentless startup energy.
            </p>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white">Day 1</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Energy & Drive</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white">100%</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Commitment</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white">24/7</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Dedication</span>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <span className="font-[cursive] text-4xl text-slate-800 dark:text-slate-200 opacity-80 mb-2">Zavyx InfoTech</span>
              <span className="text-xs uppercase font-bold text-slate-500 tracking-widest">Board of Directors • Founders</span>
            </div>
          </ScrollSlideSection>
          
        </div>
      </section>

      {/* 4. MISSION & VISION OVERLAP */}
      <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800/20 relative mx-4 sm:mx-8 rounded-[40px] mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <ScrollSlideSection className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 p-8 sm:p-12 rounded-[30px] shadow-xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-slate-900 text-sky-500 border border-sky-100 dark:border-slate-700 flex items-center justify-center mb-6 shadow-sm">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              To empower enterprises and growing startups with high-performance software solutions, seamless cloud automation, and high-impact digital experiences. We measure our success directly by the ROI we generate for you.
            </p>
          </ScrollSlideSection>

          <ScrollSlideSection delay="100ms" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 p-8 sm:p-12 rounded-[30px] shadow-xl relative overflow-hidden group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-slate-900 text-emerald-500 border border-emerald-100 dark:border-slate-700 flex items-center justify-center mb-6 shadow-sm">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              To be the most trusted technology engineering partner globally, known for innovation, speed of execution, and uncompromising code quality that stands the test of structural demands over long durations.
            </p>
          </ScrollSlideSection>
          
        </div>
      </section>

      {/* 5. OUR TEAM */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 overflow-hidden">
        <ScrollSlideSection className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-emerald-500 font-semibold tracking-widest text-sm uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-0.5 bg-emerald-500 inline-block block"></span>
            Our Professionals
            <span className="w-6 h-0.5 bg-emerald-500 inline-block block"></span>
          </h4>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Meet the Minds Behind the Machine
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Our expert team of engineers and creative directors work harmoniously to translate your vision into a measurable digital asset.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Rahul S.", title: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "Priya M.", title: "Lead Software Architect", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "Arjun K.", title: "Head of Marketing Strategy", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "Sneha V.", title: "Senior UI/UX Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
          ].map((member, idx) => (
            <ScrollSlideSection key={idx} delay={`${idx * 100}ms`} className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md">
               <div className="h-64 sm:h-72 overflow-hidden bg-slate-200">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
               </div>
               <div className="p-6 text-center transform transition-transform duration-300 group-hover:-translate-y-2 relative z-10 bg-white dark:bg-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm font-semibold text-sky-500 mt-1 uppercase tracking-wider">{member.title}</p>
               </div>
            </ScrollSlideSection>
          ))}
        </div>
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

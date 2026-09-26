import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Database, 
  Smartphone, 
  Bot, 
  Cloud, 
  Code, 
  ShoppingBag, 
  Share2, 
  Palette,
  ArrowRight,
  TrendingUp,
  Award,
  Target,
  UserCheck,
  RefreshCw,
  Play,
  Pause
} from 'lucide-react';

import heroImg from '../../assets/images/service_hero_transparent.png';
import introVideo from '../../assets/Videos/ZAVYX_software_company_introduction.mp4';
import imgWeb from '../../assets/images/Websites_Web_apps_service_background.png';
import imgEcom from '../../assets/images/E_commerce_Stores_Service_background.png';
import imgCrm from '../../assets/images/CRM_ERM_service_background.png';
import imgWa from '../../assets/images/WhatsApp_API_and_chatbots.jpeg';
import imgAi from '../../assets/images/Ai_Automation_service_background.png';
import imgMob from '../../assets/images/mobile_apps.jpeg';
import imgSeo from '../../assets/images/Digital_marketing_SEO_service_background.png';
import imgBrand from '../../assets/images/Branding_creative_service_background.png';
import imgCloud from '../../assets/images/Cloud_Infrastructure_service_background.png';

const ScrollSlideSection = ({ children, className = '', delay='0ms' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1, rootMargin: '100px 0px -50px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default function Services() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const allServices = [
    {
      id: 'websites-web-apps',
      icon: Globe,
      title: 'Websites & Web Apps',
      desc: 'Modern web applications engineered for speed, SEO, and flawless UX.',
      path: '/services/websites-web-apps',
      img: imgWeb,
      color: 'bg-sky-500',
      hoverColor: 'group-hover:text-sky-500'
    },
    {
      id: 'ecommerce-stores',
      icon: ShoppingBag,
      title: 'E-commerce Stores',
      desc: 'High-converting online storefronts with seamless payment gateways.',
      path: '/services/ecommerce-stores',
      img: imgEcom,
      color: 'bg-rose-500',
      hoverColor: 'group-hover:text-rose-500'
    },
    {
      id: 'crm-erp-systems',
      icon: Database,
      title: 'CRM & ERP Systems',
      desc: 'Tailored enterprise platforms for automating critical business operations.',
      path: '/services/crm-erp-systems',
      img: imgCrm,
      color: 'bg-emerald-500',
      hoverColor: 'group-hover:text-emerald-500'
    },
    {
      id: 'whatsapp-api-bots',
      icon: Code,
      title: 'WhatsApp API & Bots',
      desc: 'Automated messaging infrastructure and customer support integrations.',
      path: '/services/whatsapp-api-bots',
      img: imgWa,
      color: 'bg-amber-500',
      hoverColor: 'group-hover:text-amber-500'
    },
    {
      id: 'ai-automation',
      icon: Bot,
      title: 'AI & Automation',
      desc: 'Custom AI agents and business process automation to optimize output.',
      path: '/services/ai-automation',
      img: imgAi,
      color: 'bg-sky-500',
      hoverColor: 'group-hover:text-sky-500'
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      title: 'Mobile Apps',
      desc: 'Cross-platform mobile applications for flawless iOS & Android UX.',
      path: '/services/mobile-apps',
      img: imgMob,
      color: 'bg-rose-500',
      hoverColor: 'group-hover:text-rose-500'
    },
    {
      id: 'digital-marketing-seo',
      icon: Share2,
      title: 'Marketing & SEO',
      desc: 'Data-driven search engine optimization and PPC advertising campaigns.',
      path: '/services/digital-marketing-seo',
      img: imgSeo,
      color: 'bg-emerald-500',
      hoverColor: 'group-hover:text-emerald-500'
    },
    {
      id: 'branding-creative',
      icon: Palette,
      title: 'Branding & Creative',
      desc: 'Complete brand identity design, logo design, and UI/UX systems.',
      path: '/services/branding-creative',
      img: imgBrand,
      color: 'bg-amber-500',
      hoverColor: 'group-hover:text-amber-500'
    },
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      desc: 'DevOps automation, CI/CD pipelines, and cloud security architectures.',
      path: '/services/cloud-infrastructure',
      img: imgCloud,
      color: 'bg-sky-500',
      hoverColor: 'group-hover:text-sky-500'
    }
  ];

  return (
    <div className="bg-white dark:bg-[#050B14] min-h-screen transition-colors duration-300 font-sans">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-transparent pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden">
        {/* Background Decorative Shapes */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-sky-100 rounded-bl-[100px] -z-10 hidden lg:block opacity-50 dark:bg-slate-800/50"></div>
        <div className="absolute -left-10 lg:-left-20 top-40 w-32 h-32 bg-pink-100 rotate-45 -z-10 hidden md:block opacity-60 dark:bg-pink-900/20"></div>

        <div className="max-w-[1300px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <ScrollSlideSection className="flex flex-col text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-6 text-slate-900 dark:text-white">
              Tailored Technology<br className="hidden lg:block"/> Solutions for a <br className="hidden lg:block"/>
              Stronger Tomorrow
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 font-normal">
              From strategy to execution, we deliver innovative and scalable technology solutions that help businesses grow, operate smarter, and stay ahead in a digital world.
            </p>

            {/* Signature Homepage Animated Border Button Design */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Link
                to="/contact"
                className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                  Discuss Your Project <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/projects"
                className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#00016E] font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                  Explore Our Work <ArrowRight className="w-5 h-5 text-[#00016E] group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Startup Stats Row - Enlarged text matching Home page */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 pt-6 border-t border-slate-200/80 dark:border-slate-800 max-w-full lg:max-w-max mx-auto lg:mx-0">
              <div className="text-left">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight mb-0.5">100%</h4>
                <p className="text-xs sm:text-sm font-normal text-slate-500 dark:text-slate-400 mt-1">Client Focused</p>
              </div>
              <div className="text-left">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight mb-0.5">Agile</h4>
                <p className="text-xs sm:text-sm font-normal text-slate-500 dark:text-slate-400 mt-1">Rapid Delivery</p>
              </div>
              <div className="text-left">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight mb-0.5">24/7</h4>
                <p className="text-xs sm:text-sm font-normal text-slate-500 dark:text-slate-400 mt-1">Dedicated Support</p>
              </div>
            </div>
          </ScrollSlideSection>

          <ScrollSlideSection delay="100ms" className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] aspect-square bg-transparent flex items-center justify-center group cursor-pointer">
              <img 
                src={heroImg} 
                className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 filter group-hover:drop-shadow-2xl" 
                alt="Technology Solutions"
              />
            </div>
          </ScrollSlideSection>
          
        </div>
      </section>

      {/* 2. WHY CHOOSE US - Video Left, Text Right, Play/Pause Icon */}
      <section className="py-10 sm:py-12 lg:py-16 overflow-hidden relative border-t border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-[#050B14]">
        {/* Background Decorative Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100/50 rounded-bl-full -z-10 hidden lg:block opacity-50 dark:bg-slate-800/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-100/40 rounded-tr-[50px] -z-10 hidden md:block dark:bg-sky-900/10"></div>
        <div className="absolute bottom-20 left-24 w-12 h-12 bg-pink-100/50 rotate-45 -z-10 hidden md:block dark:bg-pink-900/10"></div>
        
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* MOBILE ONLY HEADINGS - Displays first cleanly above video directly in DOM stream */}
            <div className="lg:hidden flex flex-col text-center w-full">
              <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-[10px] sm:text-xs uppercase mb-3 flex items-center justify-center gap-2">
                WHY CHOOSE US?
              </h4>
              <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Why Choose Us for Your<br className="hidden sm:block"/> Tech Transformation Strategy?
              </h2>
            </div>
            
            {/* Left Column - Video mapped relative specifically to bypass grid ordering */}
            <ScrollSlideSection className="lg:col-span-6 w-full relative">
              {/* Realistic Hardware Tablet Model */}
              <div 
                className="relative mx-auto w-full lg:w-[105%] rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-[20px_35px_50px_-15px_rgba(0,0,0,0.6)] bg-[#111] p-[10px] sm:p-[16px] md:p-[20px] ring-2 ring-slate-800/80 group transition-all duration-700 hover:scale-[1.01]"
                style={{ transform: "perspective(1200px) rotateY(12deg) rotateX(4deg)", transformStyle: "preserve-3d" }}
              >
                
                {/* Hardware Front Camera Matrix */}
                <div className="absolute top-[4px] sm:top-[6px] md:top-[8px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-[#0a0a0a] border border-slate-700 shadow-[inset_0_3px_6px_rgba(0,0,0,1)] flex items-center justify-center z-10">
                  <div className="w-[1px] h-[1px] sm:w-[2px] sm:h-[2px] rounded-full bg-blue-500 opacity-60 mix-blend-screen blur-[0.2px]"></div>
                </div>

                {/* Tablet Display Screen - Aspect mapped matching standard hardware arrays */}
                <div className="relative w-full aspect-[4/3] rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-black ring-1 ring-white/10 shadow-[inner_0_0_20px_rgba(0,0,0,1)] flex items-center justify-center">
                  
                  {/* Internal Video 16:9 Anchor targeting Google Gemini native watermark offsets */}
                  <div className="relative w-full aspect-video flex-shrink-0">
                    <video 
                       ref={videoRef}
                       src={introVideo} 
                       autoPlay 
                       loop 
                       muted 
                       playsInline
                       className="absolute inset-0 w-full h-full object-contain" 
                    />
                    
                    {/* Play / Pause Toggle Button anchoring exactly over internal logo matrix logic */}
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                      className="absolute bottom-[4%] right-[3%] z-20 w-8 h-8 min-[400px]:w-10 min-[400px]:h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-sky-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                      ) : (
                        <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white ml-0.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge mapped to explicitly scale down on mobile platforms */}
              <div className="absolute -bottom-3 -left-1 sm:-bottom-6 sm:-left-3 lg:-left-6 bg-white dark:bg-slate-800 py-2 sm:py-4 px-3 sm:px-6 rounded-[14px] sm:rounded-[20px] shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-2 sm:gap-4 z-10 animate-[bounce_3s_infinite_ease-in-out] scale-75 origin-bottom-left sm:scale-100">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-sm font-normal text-slate-900 dark:text-white leading-tight">Your Vision</span>
                  <span className="text-[10px] sm:text-sm font-normal text-slate-900 dark:text-white leading-tight">Our Technology</span>
                  <span className="text-[10px] sm:text-sm font-normal text-sky-500 leading-tight">Real Impact</span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 text-sky-500 shrink-0">
                  <TrendingUp className="w-full h-full" strokeWidth={1.5} />
                </div>
              </div>
            </ScrollSlideSection>

            {/* Right Column - Text Layout restructuring for linear vertical sequence mapping */}
            <ScrollSlideSection delay="100ms" className="lg:col-span-6 flex flex-col w-full text-center lg:text-left mt-2 lg:mt-0">
              
               {/* Headings for Desktop ONLY mapping dynamically */}
              <div className="hidden lg:block">
                <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center justify-start gap-2">
                  WHY CHOOSE US?
                </h4>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-10">
                  Why Choose Us for Your<br className="hidden lg:block"/> Tech Transformation<br className="hidden lg:block"/> Strategy?
                </h2>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-10 text-left">
                {[
                  { icon: Award, title: "Certified Experts", desc: "Skilled and experienced professionals", color: "text-emerald-500 bg-emerald-50" },
                  { icon: Target, title: "Proven Track Record", desc: "Delivering results across industries", color: "text-sky-500 bg-sky-50" },
                  { icon: UserCheck, title: "Client-Centric", desc: "Your success is our priority", color: "text-blue-500 bg-blue-50" },
                  { icon: RefreshCw, title: "Agile Process", desc: "Flexible, transparent, on-time delivery", color: "text-amber-500 bg-amber-50" }
                ].map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                      <div className="w-[50px] h-[50px] shrink-0 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800">
                        <Icon strokeWidth={1.5} className="w-6 h-6 text-sky-500" />
                      </div>
                      <div className="flex flex-col sm:mt-1">
                        <h3 className="text-[17px] sm:text-xl md:text-2xl font-normal text-slate-900 dark:text-white mb-1.5">{feature.title}</h3>
                        <p className="text-[13px] sm:text-sm md:text-base text-slate-500 dark:text-slate-400 leading-[1.6] font-normal">{feature.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollSlideSection>

          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES GRID - Featured Top Image & Clean Light Text Background */}
      <section className="py-12 lg:py-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
         <ScrollSlideSection className="text-center max-w-4xl mx-auto mb-16">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center justify-center gap-2">
              Our Services
            </h4>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Tailored Services to <span className="text-slate-900 dark:text-white font-normal">Grow & Protect Your Business</span>
            </h2>
         </ScrollSlideSection>

         <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 min-[400px]:gap-4 sm:gap-6 lg:gap-8">
            {allServices.map((svc, idx) => {
               const Icon = svc.icon;
               return (
                 <ScrollSlideSection 
                    key={svc.id} 
                    delay={`${(idx % 3) * 100}ms`}
                 >
                    <Link to={svc.path} className="group block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 flex flex-col relative overflow-hidden h-full shadow-none">
                       {/* Top Image Container (Matching reference style) */}
                       <div className="relative h-[110px] min-[400px]:h-[140px] sm:h-[260px] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                          <img 
                            src={svc.img} 
                            alt={svc.title} 
                            loading="lazy" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                          {/* Service Icon Badge */}
                          <div className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-7 h-7 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg sm:rounded-xl text-white ${svc.color} shadow-md`}>
                             <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                          </div>
                          {/* Corner Arrow */}
                          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center text-slate-700 dark:text-slate-200 group-hover:bg-[#00016E] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all duration-300 shadow-sm">
                             <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </div>
                       </div>
                       
                       {/* Bottom Text Content (Clean white background, NOT dark text background) */}
                       <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between bg-white dark:bg-slate-800">
                          <div>
                            <h3 className={`text-sm min-[400px]:text-[17px] sm:text-3xl font-medium sm:font-normal text-slate-900 dark:text-white mb-1 sm:mb-3 transition-colors duration-300 ${svc.hoverColor}`}>
                               {svc.title}
                            </h3>
                            <p className="text-[10px] min-[400px]:text-xs sm:text-lg font-normal leading-tight sm:leading-relaxed text-slate-800 dark:text-slate-200 mb-2 sm:mb-4 pr-1">
                               {svc.desc}
                            </p>
                          </div>

                          {/* Show More option */}
                          <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] min-[400px]:text-xs sm:text-lg font-semibold text-sky-600 dark:text-sky-400 group-hover:text-[#00016E] dark:group-hover:text-sky-300 transition-colors pt-0.5 sm:pt-1">
                            <span>Show More</span>
                            <ArrowRight className="w-3 h-3 min-[400px]:w-3.5 min-[400px]:h-3.5 sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                          </div>
                       </div>
                    </Link>
                 </ScrollSlideSection>
               );
            })}
         </div>
      </section>

      {/* 5. Let's Build Together (Bottom CTA) */}
      <section className="py-12 lg:py-16 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -z-10 opacity-60 dark:bg-sky-900/20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100/50 rounded-tr-[100px] -z-10 opacity-60 dark:bg-pink-900/10"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-200/50 rotate-45 -z-10 dark:bg-purple-900/20"></div>
        
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <ScrollSlideSection className="text-center md:text-left">
            <h4 className="text-[#0284c7] font-semibold tracking-wider text-sm sm:text-base uppercase mb-3">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4">
              Have a project in mind?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl lg:text-2xl font-normal">
              Let's turn your ideas into powerful digital solutions.
            </p>
          </ScrollSlideSection>
          <ScrollSlideSection delay="100ms">
            <Link
              to="/contact"
              className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-8 sm:px-10 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                Get in Touch <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </ScrollSlideSection>
        </div>
      </section>

    </div>
  );
}

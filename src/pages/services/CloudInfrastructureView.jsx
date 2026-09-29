import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Monitor, 
  Smartphone, 
  ShoppingBag, 
  ShoppingCart, 
  Lock, 
  Users, 
  BarChart3, 
  Heart, 
  Briefcase, 
  CreditCard, 
  Package, 
  TrendingUp, 
  ShieldCheck, 
  Headphones, 
  Layers, 
  Cpu, 
  Database, 
  ChevronRight,
  ExternalLink,
  Award,
  MessageSquare,
  Bot,
  Bell,
  Megaphone,
  Zap,
  Clock,
  Sparkles,
  UserCheck,
  Plus,
  Minus,
  Compass,
  FileText,
  Layout,
  Code,
  Rocket,
  Search,
  Gauge,
  RefreshCw,
  Workflow,
  Target,
  PenTool,
  Mail,
  Activity,
  Check,
  Share2,
  Server,
  GraduationCap,
  Building2,
  Utensils,
  Truck,
  MessageCircle,
  Calendar,
  ClipboardList,
  Eye,
  Cloud,
  Infinity,
  Maximize,
  DollarSign,
  Shield,
  ChevronDown,
  ArrowUpRight,
  ArrowDown
} from 'lucide-react';


import cloudHeroImg from '../../../assets/images/Clooud_Infrastructure_hero_img.png';

import { ScrollSlideSection, officialTechLogos, ServiceStatsTicker, ServiceCardsSection } from './Shared';
import { pageConfigs } from './Shared';

export default function CloudInfrastructureView() {
  const processSteps = [
    { num: '01', title: 'Assess', desc: 'Understand your business goals and current infrastructure.', icon: Search },
    { num: '02', title: 'Architect', desc: 'Design a secure and scalable cloud solution.', icon: Layout },
    { num: '03', title: 'Migrate', desc: 'Seamlessly move your applications and data.', icon: RefreshCw },
    { num: '04', title: 'Secure', desc: 'Implement best practices for security and compliance.', icon: ShieldCheck },
    { num: '05', title: 'Optimize', desc: 'Continuous monitoring and cost optimization.', icon: TrendingUp }
  ];

  const whyGrid = [
    { title: 'Reliable Infrastructure', icon: Database, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: 'Scalable Solutions', icon: Maximize, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: 'Enterprise-Grade Security', icon: ShieldCheck, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: 'Cost Optimization', icon: DollarSign, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: '24/7 Monitoring & Support', icon: Clock, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' }
  ];

  const services = [
    { title: 'Cloud Migration & Modernization', desc: 'Seamless migration to the cloud with minimal downtime and improved performance.', color: 'bg-sky-50 text-sky-500 dark:bg-sky-950/40 dark:text-sky-400', icon: Cloud },
    { title: 'AWS / Azure / Google Cloud Infrastructure', desc: 'Design and manage robust infrastructure on leading cloud platforms.', color: 'bg-pink-50 text-pink-500 dark:bg-pink-950/40 dark:text-pink-400', icon: Server },
    { title: 'DevOps & CI/CD', desc: 'Automate your development lifecycle with modern DevOps practices and CI/CD pipelines.', color: 'bg-emerald-50 text-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-400', icon: Infinity },
    { title: 'Cloud Security', desc: 'Protect your data, applications, and infrastructure with advanced security practices.', color: 'bg-purple-50 text-purple-500 dark:bg-purple-950/40 dark:text-purple-400', icon: Shield },
    { title: 'Infrastructure Monitoring', desc: 'Proactive monitoring and alerting to ensure high availability and optimal performance.', color: 'bg-amber-50 text-amber-500 dark:bg-amber-950/40 dark:text-amber-400', icon: Activity },
    { title: 'Backup & Disaster Recovery', desc: 'Ensure business continuity with reliable backup and disaster recovery solutions.', color: 'bg-purple-50 text-purple-500 dark:bg-purple-950/40 dark:text-purple-400', icon: Database }
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="custom-mobile-hero relative pt-20 pb-4 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent min-h-[100dvh] flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-32 h-64 bg-cyan-300/20 dark:bg-cyan-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />
        
        <div className="max-w-[1350px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col justify-between h-full">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2 sm:mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold truncate">Cloud & Infrastructure</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-8 lg:gap-12 items-center">
             {/* Hero Left Content */}
             <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left max-w-2xl mx-0">
               <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-tight sm:leading-[1.12] tracking-tight mb-2 sm:mb-4 text-slate-900 dark:text-white text-left">
                 Scalable Cloud Infrastructure
               </h1>
               <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg lg:text-xl leading-relaxed mb-2 sm:mb-6 max-w-2xl font-normal text-left line-clamp-3">
                 We design, build, and manage secure, scalable, and high-performance cloud environments that help your business grow without limits.
               </p>
               
               {/* Signature CTA Buttons - DESKTOP ONLY */}
               <div className="hidden lg:flex flex-row items-center gap-4 sm:gap-6 mt-2 mb-2 w-full">
                  <Link to="/contact" className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                      Discuss Your Project <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link to="/contact" className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                      View Our  Solutions <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
               </div>
             </ScrollSlideSection>

             {/* Hero Right Visual */}
             <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end my-1 sm:my-2 lg:my-0">
               <div className="relative w-full max-w-[280px] min-[400px]:max-w-[340px] sm:max-w-[580px] lg:max-w-[780px] group cursor-pointer">
                 <img 
                   src={cloudHeroImg} 
                   alt="Cloud Infrastructure" 
                   className="w-full h-auto max-h-[200px] min-[400px]:max-h-[240px] sm:max-h-[460px] lg:max-h-[520px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.03] filter drop-shadow-2xl" 
                 />
               </div>
             </ScrollSlideSection>

            {/* MOBILE ONLY CTA BUTTONS (Single line inline row) */}
            <ScrollSlideSection direction="up" className="lg:hidden flex flex-row items-center justify-center w-full gap-2 min-[400px]:gap-3 mt-1 sm:mt-4 mb-2">
              <Link
                to="/contact"
                className="relative flex-1 inline-flex h-11 min-[400px]:h-12 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-2 text-[11px] min-[400px]:text-xs z-10 transition-all border border-[#00016E] group-hover:border-transparent whitespace-nowrap text-center">
                  Discuss Your Cloud Project <ArrowRight className="w-3.5 h-3.5 text-white ml-1" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="relative flex-1 inline-flex h-11 min-[400px]:h-12 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-2 text-[11px] min-[400px]:text-xs z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent whitespace-nowrap text-center">
                  View Our Cloud Solutions <ArrowRight className="w-3.5 h-3.5 text-[#00016E] dark:text-sky-400 ml-1" />
                </span>
              </Link>
            </ScrollSlideSection>

          </div>

          {/* Service Auto Scroll Ticker Row */}
          <ScrollSlideSection direction="up" delay="200ms">
            <ServiceStatsTicker stats={pageConfigs['cloud-infrastructure'].stats} />
          </ScrollSlideSection>

        </div>
      </section>

      {/* 2. OUR SERVICES */}
      <ServiceCardsSection
        tag="OUR SERVICES"
        title="Cloud & Infrastructure Services"
        sub="End-to-end cloud solutions to help you modernize, scale, and stay secure in a fast-changing digital world."
        cards={services}
      />
      
      {/* 3. OUR CLOUD APPROACH */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 bg-sky-50/50 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollSlideSection direction="up" className="lg:col-span-5 flex flex-col items-start text-left max-w-xl lg:max-w-2xl">
              <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
                OUR CLOUD APPROACH
              </h4>
              <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-6">
                Modern Architecture for a Scalable Future
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 font-normal mb-10">
                We build secure, resilient, and high-performing cloud infrastructure tailored to your business needs using industry best practices and modern technologies.
              </p>
              
              <ul className="space-y-4 w-full text-slate-700 dark:text-slate-300 font-normal">
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Highly Available &amp; Scalable</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Secure by Design</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Automated &amp; Cost-Optimized</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Multi-Cloud Expertise</li>
              </ul>
            </ScrollSlideSection>

            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-7 flex justify-end">
               <div className="relative w-full h-full  overflow-hidden  flex items-center justify-center  dark:border-slate-700 p-8">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-sky-300/30 blur-2xl rounded-full"></div>
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-300/30 blur-2xl"></div>
                  <img src={cloudHeroImg} alt="Cloud Approach Architecture" className="w-full object-contain relative z-10 scale-90 mix-blend-multiply dark:mix-blend-normal" />
               </div>
            </ScrollSlideSection>
         </div>
      </section>

      {/* 4. WHY CHOOSE ZAVYX */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 mb-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left flex flex-col items-start lg:flex-row lg:justify-between lg:items-end">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              WHY CHOOSE ZAVYX
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Your Trusted Cloud Transformation Partner
            </h2>
          </div>
        
        </ScrollSlideSection>

        <div className="flex flex-wrap lg:grid lg:grid-cols-5 gap-4">
           {whyGrid.map((item, idx) => (
             <ScrollSlideSection key={idx} delay={idx*60 + "ms"} direction="up" className=" dark:bg-slate-800/80 p-6 rounded-xl  border-slate-100 dark:border-slate-700/60  hover:shadow-md transition-all flex flex-col items-center text-center flex-1 min-w-[200px]">
                <div className={"w-18 h-18 rounded-full flex items-center justify-center mb-4 shadow-sm " + item.color}>
                  <item.icon className="w-8 h-8 fill-current opacity-80" strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-normal text-slate-900 dark:text-white leading-tight">{item.title}</h4>
             </ScrollSlideSection>
           ))}
        </div>
      </section>


      {/* 5. OUR PROCESS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 bg-transparent">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
            OUR PROCESS
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl mx-auto lg:mx-0">
            A Simple Path to Cloud Success
          </h2>
        </ScrollSlideSection>
        
        <ScrollSlideSection direction="up" delay="200ms" className="w-full">
           <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
             <div className="flex items-start lg:justify-between min-w-[800px] lg:min-w-0 pt-4">
               {processSteps.map((step, idx) => {
                 const StepIcon = step.icon;
                 return (
                   <div key={idx} className="flex relative flex-1 items-start text-left">
                      <div className="flex flex-col items-start px-2">
                        <div className="w-16 h-16 rounded-none bg-white dark:bg-slate-800 text-sky-500 border border-sky-100 flex items-center justify-center shrink-0 shadow-sm relative z-10 mb-5">
                          <StepIcon className="w-6 h-6 opacity-90" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="font-semibold text-sky-700 dark:text-sky-400 text-xl">{step.num}</span> {step.title}
                        </h3>
                        <p className="text-md text-slate-500 leading-relaxed max-w-[140px] font-normal">{step.desc}</p>
                      </div>
                      {idx !== processSteps.length - 1 && (
                         <div className="absolute top-7 left-full w-full h-[1px] bg-sky-200 dark:bg-slate-700 -z-0 transform -translate-x-[50%]">
                           <ArrowRight className="absolute -right-3 -top-2 w-4 h-4 text-sky-400" />
                         </div>
                      )}
                   </div>
                 )
               })}
             </div>
           </div>
        </ScrollSlideSection>
      </section>
      
      {/* 6. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-8 mb-4">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white mb-4">
              Ready to Build a Future-Ready Cloud?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto lg:mx-0">
              Let's turn your ideas into secure, scalable, and high-performing cloud solutions.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
             <Link to="/contact" className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                  Discuss Your Project <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </span>
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
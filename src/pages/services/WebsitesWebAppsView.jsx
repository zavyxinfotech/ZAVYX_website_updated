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

import webAppsHeroImg from '../../../assets/images/website_webapps_hero_image.png';


import { ScrollSlideSection, officialTechLogos, ServiceStatsTicker, ServiceCardsSection } from './Shared';

export default function WebsitesWebAppsView() {
  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-[100dvh] transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION WITH ACCENTS */}
      <section className="custom-mobile-hero relative pt-20 pb-4 lg:pt-28 lg:pb-10 overflow-hidden bg-transparent min-h-[100dvh] flex flex-col justify-center">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        
        {/* Soft pink accent geometry on top right */}
        <div className="absolute top-12 right-0 w-32 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col justify-between h-full">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2 sm:mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold truncate">Websites & Web Apps</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-8 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left max-w-2xl mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-tight sm:leading-[1.12] tracking-tight mb-2 sm:mb-4 text-slate-900 dark:text-white text-left">
                Websites & Web Apps
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg lg:text-xl leading-relaxed mb-2 sm:mb-6 max-w-2xl font-normal text-left line-clamp-3">
                Modern, high-performance web applications designed for speed, SEO, and seamless user experiences. We design custom websites that scale.
              </p>

              {/* Signature CTA Buttons - DESKTOP ONLY */}
              <div className="hidden lg:flex flex-row items-center gap-4 sm:gap-6 mt-2 mb-2 w-full">
                <Link
                  to="/contact"
                  className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Your Project <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    View Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Image */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-5 relative flex justify-center lg:justify-end my-1 sm:my-2 lg:my-0">
              <div className="relative w-full max-w-[200px] min-[300px]:max-w-[340px] sm:max-w-[580px] lg:max-w-[780px] group cursor-pointer">
                {/* Floating pill badge on top right */}
                <div className="absolute -top-2 right-1 sm:-top-5 sm:right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-100 dark:border-slate-700 shadow-lg rounded-xl sm:rounded-2xl p-2 sm:p-4 flex items-center sm:items-start gap-2 sm:gap-3 z-30">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-sky-50 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-100 dark:border-sky-800/50">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">Responsive</span>
                    <span className="text-[10px] sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight hidden sm:block">Fast & Secure</span>
                  </div>
                </div>

                <div className="relative bg-transparent flex items-center justify-center p-0 shadow-none">
                  <img 
                    src={webAppsHeroImg} 
                    alt="Websites & Web Apps" 
                    className="w-full h-auto max-h-[200px] min-[400px]:max-h-[240px] sm:max-h-[460px] lg:max-h-[520px] object-contain filter drop-shadow-2xl"
                  />
                </div>
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
                  Discuss Project <ArrowRight className="w-3.5 h-3.5 text-white ml-1" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="relative flex-1 inline-flex h-11 min-[400px]:h-12 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-2 text-[11px] min-[400px]:text-xs z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent whitespace-nowrap text-center">
                  View Our Work <ArrowRight className="w-3.5 h-3.5 text-[#00016E] dark:text-sky-400 ml-1" />
                </span>
              </Link>
            </ScrollSlideSection>

          </div>

          {/* Service Auto Scroll Ticker Row */}
          <ScrollSlideSection direction="up" delay="200ms">
            <ServiceStatsTicker />
          </ScrollSlideSection>

        </div>
      </section>

      {/* 2. WHAT WE BUILD SECTION */}
      <ServiceCardsSection 
        tag="WHAT WE BUILD" 
        title="Custom Web Solutions for Every Business Need" 
        cards={[
          { title: 'Business Websites', desc: 'Professional, SEO-friendly websites that build your brand and attract more customers.', color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400', icon: Monitor },
          { title: 'Web Applications', desc: 'Custom web apps to automate processes, manage data, and improve productivity.', color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400', icon: ShoppingBag },
          { title: 'E-commerce Websites', desc: 'High-converting online stores with secure payment gateways and scalable architecture.', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400', icon: ShoppingCart },
          { title: 'Web Portals', desc: 'Customer portals, employee portals, and admin dashboards tailored to your workflow.', color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400', icon: Lock }
        ]} 
      />

      {/* 3. WHY IT MATTERS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text & Checkmarks */}
          <ScrollSlideSection direction="up" className="lg:col-span-5 flex flex-col">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              WHY IT MATTERS
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
              Build a Strong Digital Presence
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              A well-designed website or web application helps you reach more customers, streamline operations, and stay ahead of your competition.
            </p>

            <div className="space-y-4">
              {[
                'Enhances brand credibility',
                'Improves customer engagement',
                'Accessible anytime, anywhere',
                'Scalable for future growth'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-800 dark:text-slate-200 text-base sm:text-lg font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollSlideSection>

          {/* Right Dashboard Graph Visual Mockup */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-7 relative">
            
            {/* Background Geometric Accent Polygons */}
            <div className="absolute -top-6 -left-6 w-36 h-36 bg-sky-200/60 dark:bg-sky-900/20 rounded-3xl -z-10 transform -rotate-6 blur-lg pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-200/60 dark:bg-pink-900/20 rounded-3xl -z-10 transform rotate-12 blur-lg pointer-events-none" />

            {/* Dashboard Window Container */}
            <div className="bg-white dark:bg-slate-800  dark:border-slate-700  overflow-hidden">
              
              {/* Window Header */}
              <div className="px-4 py-3 border-b border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 ml-2">ZAVYX Website Analytics</span>
                </div>
                <div className="text-[11px] text-slate-400 bg-slate-200/60 dark:bg-slate-800 px-3 py-1 rounded-md">
                  zavyx.com/analytics
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6 grid grid-cols-12 gap-4">
                
                {/* Mini Sidebar */}
                <div className="col-span-3 sm:col-span-3 border-r border-slate-100 dark:border-slate-700/60 pr-3 hidden sm:flex flex-col gap-2">
                  <div className="px-3 py-2 rounded-lg bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 text-xs font-semibold flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" /> Dashboard
                  </div>
                  <div className="px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 text-xs font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700/40">
                    <TrendingUp className="w-4 h-4" /> Analytics
                  </div>
                  <div className="px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 text-xs font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700/40">
                    <Briefcase className="w-4 h-4" /> Projects
                  </div>
                  <div className="px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 text-xs font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700/40">
                    <Users className="w-4 h-4" /> Customers
                  </div>
                </div>

                {/* Main Graph Area */}
                <div className="col-span-12 sm:col-span-9 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Website Analytics</h3>
                    <div className="text-xs text-sky-600 font-semibold bg-sky-50 dark:bg-sky-950 px-2.5 py-1 rounded-md">This Month</div>
                  </div>

                  {/* Graph Canvas SVG */}
                  <div className="relative h-44 sm:h-48 w-full">
                    {/* Floating Callout Badge */}
                    <div className="absolute top-2 right-12 z-20 bg-[#0284C7] text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/40 flex items-center gap-1 animate-pulse">
                      +42% <span className="font-normal opacity-90">Growth this month</span>
                    </div>

                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="blueAreaGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Area Fill */}
                      <path 
                        d="M 0 120 Q 50 110 100 125 T 200 85 T 300 35 T 400 90 L 400 150 L 0 150 Z" 
                        fill="url(#blueAreaGrad)" 
                      />

                      {/* Top Curve Line */}
                      <path 
                        d="M 0 120 Q 50 110 100 125 T 200 85 T 300 35 T 400 90" 
                        fill="none" 
                        stroke="#0284C7" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                      />

                      {/* Highlighted Peak Circle Node */}
                      <circle cx="300" cy="35" r="5" fill="#0284C7" stroke="#ffffff" strokeWidth="2.5" />
                    </svg>
                  </div>

                  {/* Bottom Stats Pills */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                        A
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">12.5K</div>
                        <div className="text-[10px] text-slate-400">Visitors</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 font-bold text-xs flex items-center justify-center shrink-0">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">4.8K</div>
                        <div className="text-[10px] text-slate-400">Leads</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">98%</div>
                        <div className="text-[10px] text-slate-400">Uptime</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </ScrollSlideSection>

        </div>
      </section>

      {/* 4. OUR DEVELOPMENT PROCESS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-12 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR DEVELOPMENT PROCESS
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl mx-auto lg:mx-0">
            From Idea to Launch
          </h2>
        </ScrollSlideSection>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
            {[
              { num: '01', title: 'Discover', desc: 'Understand your goals and requirements', icon: Compass },
              { num: '02', title: 'Plan', desc: 'Create strategy and project roadmap', icon: FileText },
              { num: '03', title: 'Design', desc: 'Craft modern and user-friendly UI/UX', icon: Layout },
              { num: '04', title: 'Develop', desc: 'Build with best practices and clean code', icon: Code },
              { num: '05', title: 'Test & Launch', desc: 'Ensure quality and deploy with confidence', icon: Rocket }
            ].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <ScrollSlideSection key={idx} delay={`${idx * 100}ms`} direction="up">
                  <div className="flex flex-col items-center text-center group process-step-group">
                    <div className="w-16 h-16 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] m-3 bg-white dark:bg-slate-800 border-1 border-sky-400/80 dark:border-sky-500/80 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-md mb-4 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 relative bg-white">
                      <StepIcon className="w-6 h-6 " />
                    </div>
                    <span className="text-sm sm:text-base font-normal text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-1">
                      {step.num}
                    </span>
                    <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-[220px]">
                      {step.desc}
                    </p>
                  </div>
                </ScrollSlideSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGIES WE USE & KEY BENEFITS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Tech Stack */}
          <ScrollSlideSection direction="up" className="lg:col-span-7 flex flex-col">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              TECHNOLOGIES WE USE
            </h4>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 dark:text-white mb-8">
              Reliable Technologies for Modern Web Solutions
            </h2>

            <div className="grid grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: 'React', key: 'React' },
                { name: 'Next.js', key: 'Next.js' },
                { name: 'Vue.js', key: 'Vue.js' },
                { name: 'Node.js', key: 'Node.js' },
                { name: 'Laravel', key: 'Laravel' },
                { name: 'PHP', key: 'PHP' },
                { name: 'MySQL', key: 'MySQL' },
                { name: 'MongoDB', key: 'MongoDB' }
              ].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-3 p-4 transition-transform duration-300 hover:scale-105">
                  <img 
                    src={officialTechLogos[tech.key]} 
                    alt={tech.name} 
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-sm sm:text-base font-normal text-slate-700 dark:text-slate-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollSlideSection>

          {/* Right Column: Key Benefits */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-5 flex flex-col">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              KEY BENEFITS
            </h4>
            <div className="mb-8 hidden lg:block" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                { title: 'High Performance', desc: 'Optimized for speed and reliability', icon: Gauge },
                { title: 'Secure & Scalable', desc: 'Enterprise-grade security and scalability', icon: ShieldCheck },
                { title: 'SEO Friendly', desc: 'Built with search engine best practices', icon: Search },
                { title: 'Ongoing Support', desc: 'Continuous updates and maintenance', icon: RefreshCw }
              ].map((b, idx) => {
                const BIcon = b.icon;
                return (
                  <div key={idx} className="flex flex-col gap-3 py-2">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                      <BIcon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-1">
                        {b.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-100/60 via-blue-50/70 to-pink-100/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          
          {/* Decorative Corner Tabs */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-300/40 dark:bg-pink-900/20 rotate-45 rounded-xl pointer-events-none" />
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-300/40 dark:bg-sky-900/20 rotate-45 rounded-xl pointer-events-none" />

          <div className="relative z-10">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-2">
              Have a project in mind?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              Let's turn your ideas into powerful digital solutions.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm shrink-0 cursor-pointer z-10"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
              Get in Touch <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}
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

import mobileHeroImg from '../../../assets/images/Mobile_apps_Hero_Img.png';
import mobilewhychooseus from '../../../assets/images/mobile_apps.jpeg';



import { ScrollSlideSection, officialTechLogos, ServiceStatsTicker, ServiceCardsSection } from './Shared';

export default function MobileAppsView() {
  const mobileServices = [
    { title: 'iOS App Development', desc: 'High-performance, secure, and scalable apps for iPhone and iPad using Swift and modern frameworks.', icon: Smartphone, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: 'Android App Development', desc: 'Feature-rich Android apps with modern UI/UX and robust performance using Kotlin.', icon: ShoppingCart, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' },
    { title: 'Cross-Platform Development', desc: 'Build once, run everywhere with Flutter or React Native for faster time-to-market.', icon: Layers, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
    { title: 'UI/UX Design', desc: 'Intuitive and engaging designs that deliver exceptional user experiences.', icon: Layout, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: 'App Maintenance & Support', desc: 'Keep your app secure, updated and running smoothly with our ongoing support.', icon: Gauge, color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
    { title: 'App Consulting', desc: 'Turn your idea into a successful product with expert guidance and technical consulting.', icon: Compass, color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400' }
  ];

  const processSteps = [
    { num: '1', title: 'Discover', desc: 'Understand your goals and requirements', icon: Search },
    { num: '2', title: 'Design', desc: 'Create UI/UX and interactive prototypes', icon: Layout },
    { num: '3', title: 'Develop', desc: 'Build, test and iterate with agility', icon: Code },
    { num: '4', title: 'Launch', desc: 'Deploy to App Store and Google Play', icon: Rocket },
    { num: '5', title: 'Grow', desc: 'Ongoing support and feature updates', icon: BarChart3 }
  ];

  const whyChooseGrid = [
    { title: 'Expert Development Team', desc: 'Skilled and experienced professionals', icon: Users, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: 'On-Time Delivery', desc: 'Commitment to deadlines', icon: Clock, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
    { title: 'Transparent Process', desc: 'Regular updates and clear communication', icon: MessageSquare, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: 'Scalable Solutions', desc: 'Apps ready for future growth', icon: TrendingUp, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' }
  ];

  const industryCards = [
    { title: 'Retail & E-commerce', icon: ShoppingBag, color: 'text-pink-600 bg-pink-50 dark:bg-pink-950/40 dark:text-pink-400' },
    { title: 'Healthcare', icon: Heart, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400' },
    { title: 'Education', icon: GraduationCap, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: 'Real Estate', icon: Building2, color: 'text-sky-600 bg-sky-50 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: 'Food & Hospitality', icon: Utensils, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400' },
    { title: 'Logistics', icon: Truck, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400' }
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="custom-mobile-hero relative pt-20 pb-4 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent min-h-[100dvh] flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-32 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col justify-between h-full">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2 sm:mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold truncate">Mobile App Development</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-8 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left max-w-2xl mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-tight sm:leading-[1.12] tracking-tight mb-2 sm:mb-4 text-slate-900 dark:text-white text-left">
                Powerful Mobile Apps
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg lg:text-xl leading-relaxed mb-2 sm:mb-6 max-w-2xl font-normal text-left line-clamp-3">
                We design and develop high-performance mobile applications for Android and iOS that deliver seamless user experiences, solve real business problems, and create lasting value.
              </p>

              {/* Signature CTA Buttons - DESKTOP ONLY */}
              <div className="hidden lg:flex flex-row items-center gap-4 sm:gap-6 mt-2 mb-2 w-full">
                <Link
                  to="/contact"
                  className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Your App Idea <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    Explore Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Visual */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end my-1 sm:my-2 lg:my-0">
              <div className="relative w-full max-w-[280px] min-[400px]:max-w-[340px] sm:max-w-[580px] lg:max-w-[780px] group cursor-pointer">
                <img
                  src={mobileHeroImg}
                  alt="Mobile Apps"
                  className="w-full h-auto max-h-[200px] min-[400px]:max-h-[240px] sm:max-h-[460px] lg:max-h-[520px] object-contain transition-transform duration-700 group-hover:scale-[1.03] filter drop-shadow-2xl"
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
                  Discuss Your App Idea <ArrowRight className="w-3.5 h-3.5 text-white ml-1" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="relative flex-1 inline-flex h-11 min-[400px]:h-12 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-2 text-[11px] min-[400px]:text-xs z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent whitespace-nowrap text-center">
                  Explore Our Work <ArrowRight className="w-3.5 h-3.5 text-[#00016E] dark:text-sky-400 ml-1" />
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

      {/* 2. OUR SERVICES SECTION */}
      <ServiceCardsSection
        tag="OUR SERVICES"
        title="End-to-End Mobile App Development Services"
        sub="From idea to launch, we offer complete mobile app development services tailored to your business goals."
        cards={mobileServices}
      />

      {/* 3. OUR DEVELOPMENT PROCESS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR DEVELOPMENT PROCESS
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            From Idea to Launch in Simple Steps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal">
            We follow a structured and agile process to deliver high-quality mobile applications.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-stretch relative">
          {processSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 100}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 p-5 rounded-2xl border-0 shadow-sm hover:shadow-md h-full flex flex-col justify-between relative group transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3 shrink-0">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-normal text-slate-900 dark:text-white block mb-1">
                      <span className=" text-lg sm:text-sm font-semibold text-sky-600 dark:text-sky-400 mr-1">{step.num}</span> {step.title}
                    </span>
                    <p className="text-2xl sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-400">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            WHY CHOOSE US
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            Your Trusted Partner in Mobile App Development
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal">
            We combine technical expertise, creative design, and a user-first approach to build mobile apps that drive real business results.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: 4 Advantage Bullets */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseGrid.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                  <div className="bg-white dark:bg-slate-800/80 p-5  hover:shadow-md transition-all flex items-start gap-4 h-full">
                    <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                      <ItemIcon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-normal text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollSlideSection>
              );
            })}
          </div>

          {/* Right: Mobile App Graphic Container */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[280px] min-[400px]:max-w-[340px] sm:max-w-[580px] lg:max-w-[780px] group cursor-pointer">
                <img
                  src={mobilewhychooseus}
                  alt="Mobile Apps"
                  className="w-full h-auto max-h-[200px] min-[400px]:max-h-[240px] sm:max-h-[460px] lg:max-h-[520px] object-contain transition-transform duration-700 group-hover:scale-[1.03] filter "
                />
              </div>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            INDUSTRIES WE SERVE
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Mobile Apps for Every Industry
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industryCards.map((ind, idx) => {
            const IndIcon = ind.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className=" dark:bg-slate-800/80 p-5  hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 text-center group border-0 h-full">
                  <div className={`w-12 h-12  ${ind.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <IndIcon className="w-6 h-6" />
                  </div>
                  <span className="text-md sm:text-sm  lg:text-xl  font-normal text-slate-800 dark:text-slate-200">
                    {ind.title}
                  </span>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-100/60 via-blue-50/70 to-pink-100/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-2">
              Have a Mobile App Idea?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              Let's turn your idea into a powerful mobile application for iOS and Android.
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
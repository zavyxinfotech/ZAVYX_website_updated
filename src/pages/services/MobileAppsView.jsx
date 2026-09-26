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

import webAppsHeroImg from '../../../assets/images/website_web_apps_hero_transparent.png';
import ecommerceHeroImg from '../../../assets/images/e_commerce_stores_hero_transparent.png';
import crmErpHeroImg from '../../../assets/images/crm_erp_systems_hero_transparent.png';
import whatsappHeroImg from '../../../assets/images/whatsapp_api_hero_transparent.png';

import analyticsDashboardImg from '../../../assets/images/website_analytics_dashboard_mockup.png';
import ecommerceWomanImg from '../../../assets/images/ecommerce_growth_partner_v2.png';
import fashionCaseStudyImg from '../../../assets/images/fashion_ecommerce_case_study.png';
import crmDashboardImg from '../../../assets/images/crm_erp_dashboard_mockup.png';
import whatsappAnalyticsImg from '../../../assets/images/whatsapp_analytics_dashboard_visual.png';
import digitalMarketingHeroImg from '../../../assets/images/digital_marketing_hero_transparent.png';
import digitalMarketingTrustedPartnerImg from '../../../assets/images/digital_marketing_trusted_partner_visual.png';
import brandingHeroImg from '../../../assets/images/Branding_Creative.png';
import cloudBgImg from '../../../assets/images/Cloud_Infrastructure_service_background.png';
import crmGrowthPartnerImg from '../../../assets/images/crm_erp_growth_partner.png';

import { ScrollSlideSection, officialTechLogos } from './Shared';

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
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-32 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold">Mobile App Development</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white">
                Powerful Mobile Apps<br />
                for a Smarter Tomorrow
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 font-normal">
                We design and develop high-performance mobile applications for Android and iOS that deliver seamless user experiences, solve real business problems, and create lasting value.
              </p>

              {/* Signature CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-2">
                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Your App Idea <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    Explore Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Visual: Dual Smartphone Mockup matching reference image */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[540px] flex items-center justify-center py-6">
                
                {/* Dual Phone Frames Container */}
                <div className="relative flex items-center justify-center gap-4 sm:gap-6">
                  
                  {/* Left Phone: iOS App */}
                  <div className="relative w-[210px] sm:w-[250px] h-[410px] sm:h-[480px] rounded-[36px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800 -rotate-6 transition-transform duration-500 hover:rotate-0">
                    <div className="w-full h-full rounded-[28px] bg-gradient-to-b from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 p-4 flex flex-col justify-between overflow-hidden relative border border-slate-200/50 dark:border-slate-700/50">
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-b-xl z-20"></div>
                      
                      <div className="mt-6">
                        <span className="text-[10px] font-semibold text-sky-600 uppercase tracking-widest block mb-1">iOS App</span>
                        <h4 className="text-lg font-normal text-slate-900 dark:text-white leading-tight">Beautiful iOS Apps</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Smooth, Secure, Scalable.</p>
                      </div>

                      {/* Mock App UI Card */}
                      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col gap-2">
                        <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-xs">
                          
                        </div>
                        <div className="h-2 w-24 bg-sky-200 dark:bg-sky-900 rounded-full"></div>
                        <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center self-end text-xs font-bold shadow-md">
                        →
                      </div>
                    </div>

                    {/* Floating Apple Icon Badge */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white text-lg font-bold">
                      
                    </div>
                  </div>

                  {/* Right Phone: Android App */}
                  <div className="relative w-[210px] sm:w-[250px] h-[410px] sm:h-[480px] rounded-[36px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800 rotate-6 transition-transform duration-500 hover:rotate-0 mt-8">
                    <div className="w-full h-full rounded-[28px] bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-4 flex flex-col justify-between overflow-hidden relative border border-slate-200/50 dark:border-slate-700/50">
                      {/* Camera hole */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rounded-full z-20"></div>

                      <div className="mt-6">
                        <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-widest block mb-1">Android App</span>
                        <h4 className="text-lg font-normal text-slate-900 dark:text-white leading-tight">Powerful Android Apps</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Custom, Flexible, Future-Ready.</p>
                      </div>

                      {/* Mock App UI Card */}
                      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col gap-2">
                        <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                          🤖
                        </div>
                        <div className="h-2 w-24 bg-emerald-200 dark:bg-emerald-900 rounded-full"></div>
                        <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center self-end text-xs font-bold shadow-md">
                        →
                      </div>
                    </div>

                    {/* Floating Android Icon Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-emerald-500 text-lg font-bold">
                      🤖
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSlideSection>
          </div>

          {/* Startup Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 lg:mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  100+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Apps Delivered
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  250+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Happy Clients
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  5+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Years of Experience
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  99%
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  App Store Approval
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR SERVICES
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            End-to-End Mobile App Development Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
            From idea to launch, we offer complete mobile app development services tailored to your business goals.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mobileServices.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-5 shrink-0 shadow-sm`}>
                      <CardIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                      {card.desc}
                    </p>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-normal text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 3. OUR DEVELOPMENT PROCESS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR DEVELOPMENT PROCESS
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            From Idea to Launch in Simple Steps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
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
                    <span className="text-sm font-normal text-slate-900 dark:text-white block mb-1">
                      <span className="font-semibold text-sky-600 dark:text-sky-400 mr-1">{step.num}</span> {step.title}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
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
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            Your Trusted Partner in Mobile App Development
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
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
                  <div className="bg-white dark:bg-slate-800/80 p-5 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all flex items-start gap-4 h-full">
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
            <div className="relative w-full max-w-[480px] bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
              <div className="relative flex justify-center gap-4">
                
                {/* Phone 1 */}
                <div className="w-48 h-80 rounded-[28px] bg-slate-900 p-2 shadow-xl border-2 border-slate-800 overflow-hidden">
                  <div className="w-full h-full bg-slate-50 dark:bg-slate-900 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                      <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Good Morning!</span>
                      <span className="text-[10px] text-sky-600 font-bold">$12,850</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 bg-sky-100 dark:bg-sky-900/40 rounded-xl p-1.5 flex items-center justify-between text-[9px] text-slate-700 dark:text-slate-300">
                        <span>Recent Activity</span>
                        <span className="font-bold text-sky-600">+ $420</span>
                      </div>
                      <div className="h-8 bg-pink-100 dark:bg-pink-900/40 rounded-xl p-1.5 flex items-center justify-between text-[9px] text-slate-700 dark:text-slate-300">
                        <span>New Orders</span>
                        <span className="font-bold text-pink-600">18 items</span>
                      </div>
                    </div>
                    <div className="h-10 bg-slate-900 rounded-xl text-white flex items-center justify-center text-[10px] font-semibold">
                      App Analytics
                    </div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="w-48 h-80 rounded-[28px] bg-slate-900 p-2 shadow-xl border-2 border-slate-800 overflow-hidden mt-6">
                  <div className="w-full h-full bg-slate-50 dark:bg-slate-900 p-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest block">Discover</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Trendy Collections</span>
                      <div className="grid grid-cols-2 gap-1.5 mt-3">
                        <div className="h-16 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                        <div className="h-16 bg-sky-200 dark:bg-sky-900/50 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="h-8 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-[10px] font-semibold">
                      Featured Products
                    </div>
                  </div>
                </div>

                {/* Floating pill badge on bottom right */}
                <div className="absolute -bottom-4 right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg rounded-2xl p-3 flex items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">Apps that</span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">Make an Impact</span>
                  </div>
                </div>

              </div>
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
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Mobile Apps for Every Industry
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industryCards.map((ind, idx) => {
            const IndIcon = ind.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 text-center group border-0 h-full">
                  <div className={`w-12 h-12 rounded-xl ${ind.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <IndIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-slate-800 dark:text-slate-200">
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
            className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm shrink-0 cursor-pointer z-10"
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
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

export default function WebsitesWebAppsView() {
  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-[100dvh] transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION WITH ACCENTS */}
      <section className="relative pt-24 pb-8 lg:pt-28 lg:pb-10 overflow-hidden bg-transparent min-h-[100dvh] lg:min-h-[90vh] flex flex-col justify-center">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        
        {/* Soft pink accent geometry on top right */}
        <div className="absolute top-12 right-0 w-32 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold">Websites & Web Apps</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white">
                Websites & Web Apps
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-4 font-normal">
                Modern, high-performance web applications designed for speed, SEO, and seamless user experiences.
              </p>
              
              <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                We design and develop custom websites and web applications that help businesses grow, engage users, and achieve real results in the digital world.
              </p>

              {/* Signature CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-2">
                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Your Project <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    View Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Image & Badge - Increased image size in desktop view */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[720px] lg:max-w-[780px] group cursor-pointer">
                {/* Floating pill badge on top right of laptop */}
                <div className="absolute -top-3 right-2 sm:-top-5 sm:right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-100 dark:border-slate-700 shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3 z-30 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-50 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-100 dark:border-sky-800/50">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">Responsive</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">Fast</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">Secure</span>
                  </div>
                </div>

                <div className="relative bg-transparent flex items-center justify-center p-0 shadow-none">
                  <img 
                    src={webAppsHeroImg} 
                    alt="Websites & Web Apps" 
                    className="w-full h-auto max-h-[460px] lg:max-h-[520px] object-contain transition-transform duration-700 group-hover:scale-[1.03] filter drop-shadow-2xl"
                  />
                </div>
              </div>
            </ScrollSlideSection>

          </div>

          {/* Startup Metrics Row - Aligned properly with balanced spacing & tailored startup content */}
          <ScrollSlideSection direction="up" delay="300ms">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 lg:mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  50+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Web Solutions Delivered
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  40+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Happy Clients
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  100%
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Startup Energy & Speed
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  99%
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 2. WHAT WE BUILD SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            WHAT WE BUILD
          </h4>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
              Custom Web Solutions for Every Business Need
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal">
              From business websites to complex web applications, we build scalable, secure, and user-friendly solutions tailored to your goals.
            </p>
          </div>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <ScrollSlideSection delay="0ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between h-full group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center mb-5 shrink-0 shadow-md shadow-sky-500/20">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  Business Websites
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                  Professional, SEO-friendly websites that build your brand and attract more customers.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollSlideSection>

          {/* Card 2 */}
          <ScrollSlideSection delay="80ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between h-full group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-500 text-white flex items-center justify-center mb-5 shrink-0 shadow-md shadow-pink-500/20">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  Web Applications
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                  Custom web apps to automate processes, manage data, and improve productivity.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollSlideSection>

          {/* Card 3 */}
          <ScrollSlideSection delay="160ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between h-full group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-5 shrink-0 shadow-md shadow-emerald-500/20">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  E-commerce Websites
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                  High-converting online stores with secure payment gateways and scalable architecture.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollSlideSection>

          {/* Card 4 */}
          <ScrollSlideSection delay="240ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between h-full group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center mb-5 shrink-0 shadow-md shadow-purple-500/20">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Web Portals
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                  Customer portals, employee portals, and admin dashboards tailored to your workflow.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollSlideSection>
        </div>
      </section>

      {/* 3. WHY IT MATTERS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text & Checkmarks */}
          <ScrollSlideSection direction="up" className="lg:col-span-5 flex flex-col">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              WHY IT MATTERS
            </h4>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
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
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-slate-50 dark:bg-slate-900/80 px-4 py-3 border-b border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
              From Idea to Launch
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal">
              A streamlined process to ensure your web solution is delivered with quality and on time.
            </p>
          </div>
        </ScrollSlideSection>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
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
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-2 border-sky-400/80 dark:border-sky-500/80 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-md mb-4 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 relative bg-white">
                      <StepIcon className="w-6 h-6" />
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
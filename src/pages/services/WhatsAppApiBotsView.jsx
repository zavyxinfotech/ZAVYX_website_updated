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

export default function WhatsAppApiBotsView() {
  const whatsappServices = [
    { title: 'WhatsApp Business API Integration', desc: 'Secure and official WhatsApp Business API setup with seamless integration to your systems.', icon: MessageCircle, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
    { title: 'AI Chatbots', desc: 'Intelligent chatbots to handle queries, provide instant answers, and automate workflows.', icon: Bot, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' },
    { title: 'Automated Notifications', desc: 'Send order updates, appointment reminders, payment confirmations and more — automatically.', icon: Bell, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: 'Marketing Campaigns', desc: 'Run targeted campaigns, product updates and promotions with high delivery rates.', icon: Megaphone, color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
    { title: 'Customer Support Automation', desc: 'Automate FAQs, ticket creation and routing to the right team for faster resolution.', icon: Headphones, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: 'CRM Integration', desc: 'Connect WhatsApp with your CRM to sync leads, customers and conversations.', icon: Database, color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400' }
  ];

  const whyChooseUs = [
    { title: '24/7 Automation', desc: 'Never miss a customer with always-on bots.', icon: Clock, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40' },
    { title: 'Faster Responses', desc: 'Reduce response time and improve satisfaction.', icon: Zap, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40' },
    { title: 'Personalized Conversations', desc: 'Deliver tailored messages for better engagement.', icon: Users, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40' },
    { title: 'Secure API Integration', desc: 'Official WhatsApp API with enterprise-grade security.', icon: ShieldCheck, color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40' },
    { title: 'Scalable Messaging', desc: 'Handle thousands of conversations effortlessly.', icon: TrendingUp, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40' },
    { title: 'Actionable Analytics', desc: 'Make data-driven decisions with real insights.', icon: BarChart3, color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40' }
  ];

  const useCases = [
    { title: 'Sales & Lead Generation', icon: TrendingUp, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' },
    { title: 'Customer Support', icon: Headphones, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/40' },
    { title: 'Order & Delivery Updates', icon: Package, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' },
    { title: 'Appointment Reminders', icon: Calendar, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40' },
    { title: 'Payment Notifications', icon: CreditCard, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/40' },
    { title: 'Surveys & Feedback', icon: ClipboardList, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40' }
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION WITH ACCENTS */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-32 h-64 bg-emerald-300/20 dark:bg-emerald-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold">WhatsApp API & Chatbots</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white">
                Smarter Conversations.<br />
                Automated Growth.
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 font-normal">
                Leverage WhatsApp Business API and intelligent bots to automate conversations, enhance customer engagement, and scale your business with seamless, secure, and reliable messaging solutions.
              </p>
              
              {/* Signature CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-2">
                <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Explore WhatsApp Solutions <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    View Demo <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Visual */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex items-center justify-end lg:pr-8">
              <div className="relative w-full max-w-[550px] aspect-[4/3] flex items-center justify-center overflow-visible transform scale-105 lg:scale-110">
                {/* Visual Chat Mock */}
                <div className="relative w-full max-w-[480px] lg:max-w-[520px] bg-slate-900 rounded-xl shadow-2xl flex border border-slate-800 overflow-hidden transform group-hover:scale-105 transition-transform duration-500 z-10">
                  {/* Left Sidebar */}
                  <div className="w-1/3 bg-slate-900 border-r border-slate-800 flex flex-col p-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded bg-sky-500" />
                      <span className="text-white text-sm font-semibold">ZAVYX</span>
                    </div>
                    <div className="space-y-2">
                       <div className="bg-sky-500/20 text-sky-400 p-2 rounded text-xs">Inbox</div>
                       <div className="text-slate-400 p-2 rounded text-xs hover:text-white">Broadcast</div>
                       <div className="text-slate-400 p-2 rounded text-xs hover:text-white">Templates</div>
                       <div className="text-slate-400 p-2 rounded text-xs hover:text-white">Automation</div>
                       <div className="text-slate-400 p-2 rounded text-xs hover:text-white">Analytics</div>
                    </div>
                  </div>
                  {/* Right Chat Area */}
                  <div className="w-2/3 bg-white dark:bg-slate-900 flex flex-col">
                    <div className="p-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
                         {/* avatar placeholder */}
                       </div>
                       <div>
                         <div className="text-xs font-semibold text-slate-800 dark:text-white">Priya Sharma</div>
                         <div className="text-[10px] text-emerald-500">Online</div>
                       </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col gap-3 text-xs bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
                       <div className="self-end bg-sky-100 dark:bg-sky-900/50 p-2.5 rounded-l-xl rounded-tr-xl max-w-[80%] text-slate-800 dark:text-slate-200 shadow-sm border border-sky-200 dark:border-sky-800/50">
                         Hi! I want to know about your services.
                       </div>
                       <div className="self-start bg-white dark:bg-slate-800 p-2.5 rounded-r-xl rounded-tl-xl max-w-[85%] text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">
                         Hello Priya! Welcome to ZAVYX InfoTech. How can we help you today?
                         <div className="mt-2 flex flex-col gap-1.5 w-full">
                           <div className="bg-sky-50 hover:bg-sky-100 dark:bg-sky-900/30 dark:hover:bg-sky-900/50 text-sky-600 dark:text-sky-400 py-1.5 px-3 rounded text-center cursor-pointer transition-colors border border-sky-200 dark:border-sky-800/50">Our Services</div>
                           <div className="bg-sky-50 hover:bg-sky-100 dark:bg-sky-900/30 dark:hover:bg-sky-900/50 text-sky-600 dark:text-sky-400 py-1.5 px-3 rounded text-center cursor-pointer transition-colors border border-sky-200 dark:border-sky-800/50">Get a Quote</div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements that pop out */}
                <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-10 bg-white dark:bg-slate-800 border-0 shadow-lg rounded-xl p-2.5 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-500 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-900 dark:text-white block leading-tight">WhatsApp</span>
                    <span className="text-[10px] font-bold text-slate-900 dark:text-white block leading-tight">Business API</span>
                    <span className="text-[11px] text-emerald-500 block leading-tight mt-0.5">Connected</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-10 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-lg rounded-xl p-3 flex flex-col z-20 scale-90 sm:scale-100 transition-transform duration-300 hover:scale-105">
                  <div className="text-[10px] font-bold text-slate-800 dark:text-white mb-2">Message Insights</div>
                  <div className="flex gap-4 items-end">
                    <div className="flex gap-1 items-end h-8">
                       <div className="w-2 bg-sky-200 dark:bg-sky-900 h-[30%]"></div>
                       <div className="w-2 bg-sky-300 dark:bg-sky-800 h-[60%]"></div>
                       <div className="w-2 bg-sky-400 dark:bg-sky-700 h-[40%]"></div>
                       <div className="w-2 bg-sky-500 dark:bg-sky-600 h-[80%]"></div>
                       <div className="w-2 bg-sky-600 dark:bg-sky-500 h-[100%]"></div>
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-emerald-500 flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> 32%</div>
                      <div className="text-[11px] text-slate-500">This Month</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSlideSection>
          </div>

          {/* Stats Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 lg:mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  500K+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Messages Processed
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  50+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Businesses Enabled
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  24/7
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Customer Engagement
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  99.9%
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Uptime Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR WHATSAPP API & BOT SOLUTIONS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR WHATSAPP API & BOT SOLUTIONS
          </h4>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
              WhatsApp API & Bot Solutions for Modern Businesses
            </h2>
            
          </div>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {whatsappServices.map((srv, idx) => {
            const SrvIcon = srv.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5 h-full group">
                  <div className={`w-14 h-14 rounded-xl ${srv.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    <SrvIcon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-4">
                        {srv.desc}
                      </p>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full">
          <ScrollSlideSection direction="up" className="mb-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              HOW IT WORKS
            </h4>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
                From Message to Meaningful Results
              </h2>
              
            </div>
          </ScrollSlideSection>

          {/* Interactive Flowchart exactly as in WhatsApp mock */}
          <div className="relative pb-6 mt-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between lg:justify-between relative px-2 gap-10 lg:gap-0 lg:min-w-[900px]">
               {/* Arrow Lines connecting steps underneath */}
               {/* Removed horizontal line as per user request */}

               {/* Step 1 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-[15px] font-bold text-slate-700 dark:text-slate-200 mb-4 px-2">1. Customer Message</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex items-start gap-3 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0 overflow-hidden">
                     {/* avatar placeholder */}
                   </div>
                   <div className="bg-slate-100 dark:bg-slate-700/50 rounded-xl rounded-tl-none p-3 text-[11px] leading-snug text-slate-700 dark:text-slate-300 font-medium">
                     Hi! I'm interested in your services.
                   </div>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 2 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-[15px] font-bold text-slate-700 dark:text-slate-200 mb-4 px-2">2. WhatsApp API</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex flex-col items-center gap-2 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center">
                     <MessageCircle className="w-6 h-6 fill-current" />
                   </div>
                   <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center font-medium mt-1 text-xs">
                     Secure connection via WhatsApp Business API</div>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 3 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-[15px] font-bold text-slate-700 dark:text-slate-200 mb-4 px-2">3. Bot / Automation</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex flex-col items-center justify-center gap-2 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 text-sky-500 flex items-center justify-center mb-1">
                     <Bot className="w-8 h-8" />
                   </div>
                   <ul className="text-[11px] text-slate-600 dark:text-slate-400 w-full text-left space-y-1.5 font-medium">
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Auto Reply</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Smart Routing</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Data Collection</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Workflow Triggers</li>
                   </ul>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 4 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-[15px] font-bold text-slate-700 dark:text-slate-200 mb-4 px-2">4. CRM System</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex flex-col items-center justify-center gap-2 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 text-indigo-500 flex items-center justify-center mb-1">
                     <Database className="w-8 h-8" />
                   </div>
                   <ul className="text-[11px] text-slate-600 dark:text-slate-400 w-full text-left space-y-1.5 font-medium">
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-sky-500" /> Create / Update Lead</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-sky-500" /> Sync Conversations</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-sky-500" /> Track Customer Journey</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-sky-500" /> Manage Follow-ups</li>
                   </ul>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 5 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-[15px] font-bold text-slate-700 dark:text-slate-200 mb-4 px-2">5. Human Agent (If Needed)</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex items-center gap-3 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0 overflow-hidden">
                     {/* avatar placeholder */}
                   </div>
                   <div className="bg-sky-50 dark:bg-sky-900/40 border border-sky-100 dark:border-sky-800 rounded-xl rounded-tl-none p-3 text-[11px] leading-snug text-slate-700 dark:text-slate-300 font-medium">
                     Sure! Let me assist you further.
                   </div>
                 </div>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. ANALYTICS & PERFORMANCE */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <ScrollSlideSection direction="up" className="lg:col-span-5 text-left mb-10 lg:mb-0">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            ANALYTICS & PERFORMANCE
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl mb-4">
            Track Conversations. Measure Growth.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-md font-normal mb-6">
            Get real-time insights into your WhatsApp communication and campaign performance.
          </p>
          <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
             <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
               View Live Analytics <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
             </span>
          </Link>
        </ScrollSlideSection>

          {/* Analytics Dashboard Mock matching the attached image perfectly */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6 transform hover:-translate-y-2 transition-transform duration-500">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
               <h3 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Analytics</h3>
               <div className="bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                 Last 30 Days <ChevronDown className="w-3 h-3" />
               </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-4 gap-4">
               <div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><MessageCircle className="w-4 h-4 text-sky-500" /> 125,640</div>
                  <div className="text-[10px] text-slate-500">Messages Sent</div>
                  <div className="text-[10px] text-emerald-500 font-semibold mt-1">↑ 12%</div>
               </div>
               <div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 123,200</div>
                  <div className="text-[10px] text-slate-500">Delivered</div>
                  <div className="text-[10px] text-emerald-500 font-semibold mt-1">↑ 98%</div>
               </div>
               <div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><Eye className="w-4 h-4 text-blue-500" /> 118,450</div>
                  <div className="text-[10px] text-slate-500">Read</div>
                  <div className="text-[10px] text-emerald-500 font-semibold mt-1">↑ 96%</div>
               </div>
               <div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><UserCheck className="w-4 h-4 text-pink-500" /> 4,320</div>
                  <div className="text-[10px] text-slate-500">Active Chats</div>
                  <div className="text-[10px] text-emerald-500 font-semibold mt-1">↑ 28%</div>
               </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="flex flex-col gap-2">
                 <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Conversation Trends</div>
                 {/* Fake line chart */}
                 <div className="relative h-24 w-full flex items-end gap-1.5 justify-between">
                    <div className="absolute top-2 right-0 bg-sky-500 text-white text-[11px] px-1.5 py-0.5 rounded shadow">12.4K</div>
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[20%] rounded-t border-t-2 border-sky-400" />
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[40%] rounded-t border-t-2 border-sky-400" />
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[30%] rounded-t border-t-2 border-sky-400" />
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[60%] rounded-t border-t-2 border-sky-400" />
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[100%] rounded-t border-t-2 border-sky-400" />
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[80%] rounded-t border-t-2 border-sky-400" />
                 </div>
                 <div className="flex justify-between text-[8px] text-slate-400 mt-1">
                   <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                 </div>
               </div>

               <div className="flex flex-col gap-2">
                 <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Message Breakdown</div>
                 <div className="flex items-center gap-4 mt-2">
                   {/* Fake donut chart ring */}
                   <div className="w-16 h-16 rounded-full border-4 border-slate-100 relative shrink-0">
                     <div className="absolute inset-[-4px] rounded-full border-4 border-sky-400" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 50%)' }} />
                     <div className="absolute inset-[-4px] rounded-full border-4 border-pink-400" style={{ clipPath: 'polygon(50% 50%, 0 50%, 0 0, 50% 0)' }} />
                     <div className="absolute inset-[-4px] rounded-full border-4 border-emerald-400" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0)' }} />
                   </div>
                   <div className="flex flex-col gap-1.5 w-full">
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-sky-400" /> Customer Queries</span> <span className="font-bold">45%</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-pink-400" /> Order Updates</span> <span className="font-bold">25%</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Campaign Messages</span> <span className="font-bold">20%</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-300" /> Other</span> <span className="font-bold">10%</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </ScrollSlideSection>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            WHY CHOOSE US
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            Why Choose Our WhatsApp Solutions?
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {whyChooseUs.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className="bg-transparent border border-slate-200 dark:border-slate-700/80 p-5 rounded-2xl transition-all flex flex-col gap-3 group h-full hover:shadow-md">
                  <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <FeatureIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1 leading-tight group-hover:text-sky-600 dark:group-hover:text-sky-400">{feature.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{feature.desc}</p>
                  </div>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 6. USE CASES SECTION fully borderless to match reference image */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            USE CASES
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Built for Every Business Need
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {useCases.map((useCase, idx) => {
            const CaseIcon = useCase.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className="bg-transparent dark:bg-transparent p-5 rounded-2xl shadow-none transition-all flex flex-col items-center justify-center gap-3 text-center group border-0 h-full">
                  <div className={`w-12 h-12 rounded-xl ${useCase.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <CaseIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {useCase.title}
                  </span>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-50 via-blue-50/50 to-pink-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-900 dark:text-white mb-2 leading-snug">
              Ready to Automate Your WhatsApp Communication?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              Let's turn conversations into opportunities with powerful WhatsApp solutions.
            </p>
          </div>
          <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm shrink-0 cursor-pointer z-10">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
              Get a Quote <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}
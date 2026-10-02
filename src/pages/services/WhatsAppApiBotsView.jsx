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

import whatsappHeroImg from '../../../assets/images/Whatsapp_API_hero.webp';



import { ScrollSlideSection, officialTechLogos, ServiceStatsTicker, ServiceCardsSection } from './Shared';
import { pageConfigs } from './Shared';

export default function WhatsAppApiBotsView() {
  const whatsappServices = [
    { title: <span className="text-2xl sm:text-3xl font-normal">WhatsApp Business API Integration</span>, desc: <span className="text-lg sm:text-xl">Secure and official WhatsApp Business API setup with seamless integration to your systems.</span>, icon: MessageCircle, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
    { title: <span className="text-2xl sm:text-3xl font-normal">AI Chatbots</span>, desc: <span className="text-lg sm:text-xl">Intelligent chatbots to handle queries, provide instant answers, and automate workflows.</span>, icon: Bot, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' },
    { title: <span className="text-2xl sm:text-3xl font-normal">Automated Notifications</span>, desc: <span className="text-lg sm:text-xl">Send order updates, appointment reminders, payment confirmations and more — automatically.</span>, icon: Bell, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: <span className="text-2xl sm:text-3xl font-normal">Marketing Campaigns</span>, desc: <span className="text-lg sm:text-xl">Run targeted campaigns, product updates and promotions with high delivery rates.</span>, icon: Megaphone, color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
    { title: <span className="text-2xl sm:text-3xl font-normal">Customer Support Automation</span>, desc: <span className="text-lg sm:text-xl">Automate FAQs, ticket creation and routing to the right team for faster resolution.</span>, icon: Headphones, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: <span className="text-2xl sm:text-3xl font-normal">CRM Integration</span>, desc: <span className="text-lg sm:text-xl">Connect WhatsApp with your CRM to sync leads, customers and conversations.</span>, icon: Database, color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400' }
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
      <section className="custom-mobile-hero relative pt-20 pb-0 lg:pt-24 lg:pb-0 overflow-hidden bg-transparent min-h-[85dvh] flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-32 h-64 bg-emerald-300/20 dark:bg-emerald-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col justify-between h-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2 sm:mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold truncate">WhatsApp API & Chatbots</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-8 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left max-w-2xl mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-tight sm:leading-[1.12] tracking-tight mb-2 sm:mb-4 text-slate-900 dark:text-white text-left">
                Smarter Conversations
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg lg:text-xl leading-relaxed mb-2 sm:mb-4 max-w-2xl font-normal text-left">
                Leverage WhatsApp Business API and intelligent bots to automate conversations, enhance customer engagement, and scale your business with seamless, secure messaging solutions.
              </p>
              
              {/* Signature CTA Buttons - DESKTOP ONLY */}
              <div className="hidden lg:flex flex-row items-center gap-4 sm:gap-6 mt-2 mb-2 w-full">
                <Link to="/contact" className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    WhatsApp Solutions <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    View Demo <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Visual */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end my-1 sm:my-2 lg:my-0">
              <div className="relative w-full max-w-[280px] min-[300px]:max-w-[400px] sm:max-w-[580px] lg:max-w-[780px] group cursor-pointer">
                <div className="relative bg-transparent flex items-center justify-center p-0 shadow-none">
                  <img 
                    src={whatsappHeroImg} 
                    alt="WhatsApp API & Bots" 
                    className="w-full h-auto max-h-[250px] min-[400px]:max-h-[300px] sm:max-h-[460px] lg:max-h-[520px] object-cover rounded-2xl filter drop-shadow-2xl transform scale-110 sm:scale-100" 
                  />
                </div>
              </div>
            </ScrollSlideSection>

            {/* MOBILE ONLY CTA BUTTONS (Single line inline row) */}
            <ScrollSlideSection direction="up" className="lg:hidden flex flex-row items-center justify-center w-[88%] min-[400px]:w-[85%] sm:w-full gap-2 min-[400px]:gap-3 mt-2 sm:mt-2 mb-2 mx-auto">
              <Link
                to="/contact"
                className="relative flex-1 inline-flex h-11 min-[400px]:h-12 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-normal px-2 text-sm sm:text-base z-10 transition-all border border-[#00016E] group-hover:border-transparent whitespace-nowrap text-center">
                  WhatsApp Solutions <ArrowRight className="w-3.5 h-3.5 text-white ml-0.5" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="relative flex-1 inline-flex h-11 min-[400px]:h-12 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-normal px-2 text-sm sm:text-base z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent whitespace-nowrap text-center">
                  View Demo <ArrowRight className="w-3.5 h-3.5 text-[#00016E] dark:text-sky-400 ml-0.5" />
                </span>
              </Link>
            </ScrollSlideSection>

          </div>

          {/* Service Auto Scroll Ticker Row */}
          <ScrollSlideSection direction="up" delay="200ms">
            <ServiceStatsTicker stats={pageConfigs['whatsapp-api-bots'].stats} />
          </ScrollSlideSection>

        </div>
      </section>

      {/* 2. OUR WHATSAPP API & BOT SOLUTIONS */}
      <ServiceCardsSection
        tag="OUR WHATSAPP API & BOT SOLUTIONS"
        title="WhatsApp API & Bot Solutions for Modern Businesses"
        cards={whatsappServices}
      />

      {/* 3. HOW IT WORKS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full">
          <ScrollSlideSection direction="up" className="mb-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              HOW IT WORKS
            </h4>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl mx-auto lg:mx-0">
                From Message to Meaningful Results
              </h2>
            </div>
          </ScrollSlideSection>

          {/* Interactive Flowchart */}
          <div className="relative pb-6 mt-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between lg:justify-between relative px-2 gap-10 lg:gap-0 lg:min-w-[900px]">
               {/* Step 1 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-lg sm:text-xl font-normal text-slate-700 dark:text-slate-200 mb-4 px-2">1. Customer Message</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex items-start gap-3 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0 overflow-hidden" />
                   <div className="bg-slate-100 dark:bg-slate-700/50 rounded-xl rounded-tl-none p-3 text-sm sm:text-base leading-snug text-slate-700 dark:text-slate-300 font-medium">
                     Hi! I'm interested in your services.
                   </div>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 2 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-lg sm:text-xl font-normal text-slate-700 dark:text-slate-200 mb-4 px-2">2. WhatsApp API</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex flex-col items-center gap-2 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center">
                     <MessageCircle className="w-6 h-6 fill-current" />
                   </div>
                   <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 text-center font-medium mt-1">
                     Secure connection via WhatsApp Business API
                   </div>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 3 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-lg sm:text-xl font-normal text-slate-700 dark:text-slate-200 mb-4 px-2">3. Bot / Automation</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex flex-col items-center justify-center gap-2 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 text-sky-500 flex items-center justify-center mb-1">
                     <Bot className="w-8 h-8" />
                   </div>
                   <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-400 w-full text-left space-y-1 font-medium">
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Auto Reply</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Smart Routing</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Data Collection</li>
                   </ul>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 4 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-lg sm:text-xl font-normal text-slate-700 dark:text-slate-200 mb-4 px-2">4. CRM System</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex flex-col items-center justify-center gap-2 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 text-indigo-500 flex items-center justify-center mb-1">
                     <Database className="w-8 h-8" />
                   </div>
                   <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-400 w-full text-left space-y-1 font-medium">
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-sky-500" /> Create / Update Lead</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-sky-500" /> Sync Conversations</li>
                   </ul>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 5 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-lg sm:text-xl font-normal text-slate-700 dark:text-slate-200 mb-4 px-2">5. Human Agent</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex items-center gap-3 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0 overflow-hidden" />
                   <div className="bg-sky-50 dark:bg-sky-900/40 border border-sky-100 dark:border-sky-800 rounded-xl rounded-tl-none p-3 text-sm sm:text-base leading-snug text-slate-700 dark:text-slate-300 font-medium">
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
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl mx-auto lg:mx-0 mb-4">
            Track Conversations. Measure Growth.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 font-normal mb-6">
            Get real-time insights into your WhatsApp communication and campaign performance.
          </p>
          <Link to="/contact" className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
             <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
               View Live Analytics <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
             </span>
          </Link>
        </ScrollSlideSection>

          {/* Analytics Dashboard Mock */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6 transform hover:-translate-y-2 transition-transform duration-500">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
               <h3 className="text-lg font-normal text-slate-900 dark:text-white">WhatsApp Analytics</h3>
               <div className="bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                 Last 30 Days <ChevronDown className="w-3 h-3" />
               </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               <div className="flex flex-col gap-2">
                 <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Conversation Trends</div>
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
                   <div className="w-16 h-16 rounded-full border-4 border-slate-100 relative shrink-0">
                     <div className="absolute inset-[-4px] rounded-full border-4 border-sky-400" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 50%)' }} />
                     <div className="absolute inset-[-4px] rounded-full border-4 border-pink-400" style={{ clipPath: 'polygon(50% 50%, 0 50%, 0 0, 50% 0)' }} />
                     <div className="absolute inset-[-4px] rounded-full border-4 border-emerald-400" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0)' }} />
                   </div>
                   <div className="flex flex-col gap-1.5 w-full">
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-sky-400" /> Customer Queries</span> <span className="font-normal">45%</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-pink-400" /> Order Updates</span> <span className="font-normal">25%</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Campaign Messages</span> <span className="font-normal">20%</span>
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
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
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
                    <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-1 leading-tight group-hover:text-sky-600 dark:group-hover:text-sky-400">{feature.title}</h3>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{feature.desc}</p>
                  </div>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 6. USE CASES SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            USE CASES
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
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
                  <span className="text-md font-normal text-slate-800 dark:text-slate-200">
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
          <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
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
          <Link to="/contact" className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm shrink-0 cursor-pointer z-10">
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
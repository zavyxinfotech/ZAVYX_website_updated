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

export default function AiAutomationView() {
  const whatsappServices = [
    { title: 'Intelligent Workflow Automation', desc: 'Automate repetitive chat tasks and streamline business workflows via WhatsApp Business API.', icon: Workflow, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: 'AI Chatbots & Virtual Assistants', desc: 'Build intelligent assistants for customer support, internal operations, and lead qualification 24/7.', icon: Bot, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: 'Document & Data Automation', desc: 'Extract, process, and send instant messaging receipts, order updates, and notifications.', icon: FileText, color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400' },
    { title: 'Predictive Analytics & Insights', desc: 'Turn your conversation data into accurate predictions and actionable growth insights.', icon: BarChart3, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' },
    { title: 'AI Content & Process Intelligence', desc: 'Leverage AI to analyze, generate and optimize business content and processes.', icon: Megaphone, color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
    { title: 'Custom AI Integrations', desc: 'Integrate AI into your existing systems with tailored solutions for your business.', icon: Cpu, color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400' }
  ];

  const workflowSteps = [
    { num: '1', title: 'Discover', desc: 'Understand your business needs' },
    { num: '2', title: 'Automate', desc: 'Design and build AI solutions' },
    { num: '3', title: 'Integrate', desc: 'Connect with your existing systems' },
    { num: '4', title: 'Optimize', desc: 'Monitor, improve and scale' }
  ];

  const departmentSolutions = [
    { title: 'Sales & Marketing', icon: TrendingUp, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' },
    { title: 'Customer Support', icon: Headphones, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/40' },
    { title: 'Finance & Accounting', icon: CreditCard, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' },
    { title: 'HR & People Ops', icon: Users, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40' },
    { title: 'Operations & Supply Chain', icon: Package, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' },
    { title: 'Analytics & Business Intel', icon: BarChart3, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/40' }
  ];

  const whyChooseGrid = [
    { title: 'Certified Expertise', desc: 'Skilled and experienced AI professionals.', icon: Award, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400' },
    { title: 'Custom Solutions', desc: 'Tailored conversation flows for your business needs.', icon: Sparkles, color: 'bg-pink-50 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400' },
    { title: 'Secure Implementation', desc: 'Enterprise-grade security, end-to-end encryption & compliance.', icon: ShieldCheck, color: 'bg-sky-50 text-sky-600 dark:bg-sky-900/40 dark:text-sky-400' },
    { title: 'Continuous Optimization', desc: 'Ongoing bot tuning, support, and performance improvement.', icon: RefreshCw, color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400' }
  ];

  const aiTechLogos = [
    { name: 'Google Cloud', url: officialTechLogos['Google Cloud'] },
    { name: 'AWS', url: officialTechLogos['AWS'] },
    { name: 'Microsoft Azure', url: officialTechLogos['Microsoft Azure'] },
    { name: 'OpenAI', url: officialTechLogos['OpenAI'] },
    { name: 'Slack', url: officialTechLogos['Slack'] },
    { name: 'Microsoft 365', url: officialTechLogos['Microsoft 365'] },
    { name: 'Databases', url: officialTechLogos['PostgreSQL'] },
    { name: 'APIs', url: officialTechLogos['GraphQL'] }
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION WITH ACCENTS */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent">
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
            <span className="text-sky-600 dark:text-sky-400 font-semibold">AI Automation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white">
                Intelligent Automation for a Smarter Tomorrow
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-6 font-normal">
                Leverage the power of WhatsApp API and AI automation to reduce manual work, improve efficiency, and enable scalable business operations for a future-ready enterprise.
              </p>

              {/* Signature CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-2">
                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Explore Solutions <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
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

            {/* Hero Right Hub Diagram Visual matching reference image */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[620px] aspect-square bg-transparent rounded-3xl p-6 sm:p-8 border-0 flex items-center justify-center overflow-hidden">
                
                {/* Background Dotted Grid pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Central Node Hub */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-600 dark:to-blue-700 text-white flex flex-col items-center justify-center p-3 shadow-2xl shadow-sky-500/30 group">
                  <div className="absolute -inset-1 rounded-[26px] bg-sky-400/30 animate-pulse -z-10" />
                  <Bot className="w-10 h-10 sm:w-12 sm:h-12 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-center leading-tight">AI Automation</span>
                </div>

                {/* Floating Connected Nodes around central hub matching reference image */}
                {/* Node 1: AI Assistant (Top Left) */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">AI Assistant</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Natural Language Processing</div>
                  </div>
                </div>

                {/* Node 2: Document Processing (Top Right) */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Document Processing</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">OCR & Data Extraction</div>
                  </div>
                </div>

                {/* Node 3: Predictive Analytics (Far Top Right) */}
                <div className="absolute top-28 -right-2 sm:top-32 sm:right-2 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Predictive Analytics</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Data-Driven Insights</div>
                  </div>
                </div>

                {/* Node 4: Chatbot 24/7 (Middle Left) */}
                <div className="absolute top-32 -left-2 sm:top-36 sm:left-2 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Chatbot</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">24/7 Instant Support</div>
                  </div>
                </div>

                {/* Node 5: Workflow Automation (Middle Right) */}
                <div className="absolute bottom-10 right-4 sm:bottom-12 sm:right-6 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Workflow Automation</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Automate Repetitive Tasks</div>
                  </div>
                </div>

                {/* Node 6: Data Intelligence (Bottom Left) */}
                <div className="absolute bottom-8 left-6 sm:bottom-10 sm:left-8 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Data Intelligence</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Unify • Analyze • Grow</div>
                  </div>
                </div>

              </div>
            </ScrollSlideSection>
          </div>

          {/* Startup Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 lg:mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  100+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Automations Delivered
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
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  95%
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Time Saved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR SERVICES
          </h4>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
              AI-Powered Solutions Built for Your Business
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal">
              Leverage the power of AI and automation to reduce manual work, improve efficiency, and enable scalable business operations for a future-ready enterprise.
            </p>
          </div>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatsappServices.map((srv, idx) => {
            const SrvIcon = srv.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${srv.color} flex items-center justify-center mb-5 shrink-0 shadow-sm`}>
                      <SrvIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                      {srv.desc}
                    </p>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 3. HOW AI AUTOMATION WORKS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            HOW IT WORKS
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            From Idea to Impact in 4 Simple Steps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl font-normal">
            Our streamlined process ensures successful AI implementation with measurable results.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {workflowSteps.map((step, idx) => (
            <ScrollSlideSection key={idx} delay={`${idx * 100}ms`} direction="up">
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border-0 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between relative group">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-bold text-sm flex items-center justify-center shrink-0 border border-sky-200 dark:border-sky-800">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-normal text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 items-center justify-center text-sky-600 shadow-sm">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            </ScrollSlideSection>
          ))}
        </div>
      </section>

      {/* 4. TRANSFORM YOUR OPERATIONS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <ScrollSlideSection direction="up" className="lg:col-span-5 flex flex-col text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              TRANSFORM YOUR OPERATIONS
            </h4>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
              Achieve More with AI and Automation
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Our AI solutions help you eliminate manual work, improve accuracy, and unlock new opportunities for growth.
            </p>

            {/* 4 Bullet Feature list matching reference image */}
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">Reduce Manual Work</h4>
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">Automate repetitive and time-consuming tasks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">Faster Decisions</h4>
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">Get real-time insights and make smarter decisions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">Fewer Errors</h4>
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">Minimize human errors and ensure consistency.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">Scalable Operations</h4>
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">Grow your business without operational limits.</p>
                </div>
              </div>
            </div>
          </ScrollSlideSection>

          {/* Right Dashboard Mock Visual matching reference image */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-slate-900 text-white p-5 sm:p-6">
              
              {/* Top Dashboard Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-xs">
                    ZA
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">ZAVYX AI Dashboard</h4>
                    <p className="text-[11px] text-emerald-400 font-normal flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Your AI systems are running smoothly.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full font-normal">Live Stats</span>
                </div>
              </div>

              {/* 3 Metric Stat Cards */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
                  <div className="text-xs text-slate-400 mb-1 font-normal">Tasks Automated</div>
                  <div className="text-xl font-bold text-white">124</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">+12% vs last week</div>
                </div>

                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
                  <div className="text-xs text-slate-400 mb-1 font-normal">Accuracy Rate</div>
                  <div className="text-xl font-bold text-white">96%</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">+2% improvement</div>
                </div>

                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
                  <div className="text-xs text-slate-400 mb-1 font-normal">Hours Saved</div>
                  <div className="text-xl font-bold text-white">2.4k</div>
                  <div className="text-[10px] text-sky-400 font-semibold">+18% total efficiency</div>
                </div>
              </div>

              {/* Workflow Activity Chart & AI Assistant Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8 bg-slate-800/60 rounded-xl p-4 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-300">Workflow Activity</span>
                    <span className="text-[10px] text-slate-400">Last 7 days</span>
                  </div>
                  {/* Wave Trend Line SVG */}
                  <div className="h-28 w-full flex items-end">
                    <svg className="w-full h-full text-sky-400 overflow-visible" viewBox="0 0 300 80" fill="none">
                      <path d="M0 60 Q 50 10, 100 45 T 200 20 T 300 35" stroke="currentColor" strokeWidth="3" fill="none" />
                      <path d="M0 60 Q 50 10, 100 45 T 200 20 T 300 35 L 300 80 L 0 80 Z" fill="url(#blue-grad)" opacity="0.2" />
                      <defs>
                        <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="sm:col-span-4 bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-semibold text-slate-200">AI Assistant</span>
                    </div>
                    <div className="bg-slate-900/90 rounded-lg p-2.5 text-[11px] text-slate-300 font-normal leading-relaxed border border-slate-800">
                      "How can I help automate your workflow today?"
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Status: Active</span>
                    <span className="text-emerald-400 font-medium">Online</span>
                  </div>
                </div>
              </div>

            </div>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 5. SOLUTIONS FOR EVERY DEPARTMENT SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            AI ACROSS YOUR BUSINESS
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Solutions for Every Department
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {departmentSolutions.map((dept, idx) => {
            const DeptIcon = dept.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className="bg-transparent dark:bg-transparent p-5 rounded-2xl shadow-none transition-all flex flex-col items-center justify-center gap-3 text-center group border-0 h-full">
                  <div className={`w-12 h-12 rounded-xl ${dept.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <DeptIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-slate-800 dark:text-slate-200">
                    {dept.title}
                  </span>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 6. TECHNOLOGY & INTEGRATION SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            TECHNOLOGY & INTEGRATION
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            Seamless Integration with Your Existing Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
            We integrate with your existing tools and infrastructure to ensure a smooth and secure AI implementation.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8">
          {aiTechLogos.map((tech, idx) => (
            <ScrollSlideSection key={idx} delay={`${idx * 40}ms`} direction="up">
              <div className="flex flex-col items-center justify-center gap-3 group py-2">
                <img src={tech.url} alt={tech.name} className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110 filter drop-shadow-sm" />
                <span className="text-sm sm:text-base font-normal text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {tech.name}
                </span>
              </div>
            </ScrollSlideSection>
          ))}
        </div>
      </section>

      {/* 7. WHY CHOOSE US & SUCCESS STORY SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            WHY CHOOSE US
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Your Trusted Partner in AI Transformation
          </h2>
        </ScrollSlideSection>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {whyChooseGrid.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4 h-full">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    <ItemIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>

        {/* SUCCESS STORY Box matching reference image */}
        <ScrollSlideSection direction="up" delay="100ms">
          <div className="bg-gradient-to-r from-sky-50/90 via-blue-50/50 to-pink-50/80 dark:from-slate-800/90 dark:via-slate-800/80 dark:to-slate-800/90 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-sky-600 dark:text-sky-400 font-semibold tracking-widest text-xs uppercase mb-2 block">
                SUCCESS STORY
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white mb-3">
                Automating Document Processing for a Leading Logistics Company
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
                We implemented an AI-powered document processing solution that automated invoice and shipment document handling, resulting in 70% faster processing and 90% higher accuracy.
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">70%</div>
                  <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">Faster Processing</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">90%</div>
                  <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">Higher Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">50+</div>
                  <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">Hours Saved Weekly</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-sky-400 to-blue-600 text-white flex items-center justify-center shadow-xl shadow-sky-500/20">
                <Bot className="w-12 h-12 sm:w-14 sm:h-14" />
              </div>
            </div>
          </div>
        </ScrollSlideSection>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-100/60 via-blue-50/70 to-pink-100/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-2">
              Ready to Automate Your Business?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              Let's discuss how AI can create real impact for your business.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm shrink-0 cursor-pointer z-10"
          >
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
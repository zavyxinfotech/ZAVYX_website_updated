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


import aiHeroImg from '../../../assets/images/AI_Automation_hero_img.webp';
import aitransformyourideasImg from '../../../assets/images/AI_automations_transform_your_operations.webp';



import { ScrollSlideSection, officialTechLogos, ServiceStatsTicker, ServiceCardsSection } from './Shared';
import { pageConfigs } from './Shared';

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
            <span className="text-sky-600 dark:text-sky-400 font-semibold truncate">AI & Automation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-8 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left max-w-2xl mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-tight sm:leading-[1.12] tracking-tight mb-2 sm:mb-4 text-slate-900 dark:text-white text-left">
                Intelligent Automation
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg lg:text-xl leading-relaxed mb-2 sm:mb-6 max-w-2xl font-normal text-left line-clamp-3">
                Leverage the power of WhatsApp API and AI automation to reduce manual work, improve efficiency, and enable scalable business operations for a future-ready enterprise.
              </p>

              {/* Signature CTA Buttons - DESKTOP ONLY */}
              <div className="hidden lg:flex flex-row items-center gap-4 sm:gap-6 mt-2 mb-2 w-full">
                <Link
                  to="/contact"
                  className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Explore Solutions <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
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

            {/* Hero Right Visual Diagram */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end my-1 sm:my-2 lg:my-0">
              <div className="relative w-full max-w-[280px] min-[400px]:max-w-[340px] sm:max-w-[580px] lg:max-w-[780px] group cursor-pointer">
                <img
                  src={aiHeroImg}
                  alt="AI & Automation"
                  className="w-full h-auto max-h-[200px] min-[400px]:max-h-[240px] sm:max-h-[460px] lg:max-h-[520px] object-contain filter drop-shadow-2xl"
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
                  Explore Solutions <ArrowRight className="w-3.5 h-3.5 text-white ml-1" />
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
            <ServiceStatsTicker stats={pageConfigs['ai-automation'].stats} />
          </ScrollSlideSection>

        </div>
      </section>

      {/* 2. WHAT WE BUILD SECTION */}
      <ServiceCardsSection
        tag="OUR SERVICES"
        title="AI-Powered Solutions Built for Your Business"
        sub="Leverage the power of AI and automation to reduce manual work, improve efficiency, and enable scalable business operations for a future-ready enterprise."
        cards={whatsappServices}
      />

      {/* 3. HOW AI AUTOMATION WORKS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            HOW IT WORKS
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            From Idea to Impact in 4 Simple Steps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal">
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
          
          <ScrollSlideSection direction="up" className="lg:col-span-5 flex flex-col items-start text-left max-w-xl lg:max-w-2xl">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              TRANSFORM YOUR OPERATIONS
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
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
           
              <div className="relative w-full max-w-[280px] min-[400px]:max-w-[340px] sm:max-w-[580px] lg:max-w-[780px] group cursor-pointer">
                <img
                  src={aitransformyourideasImg}
                  alt="AI & Automation"
                  className="w-full h-auto max-h-[200px] min-[400px]:max-h-[240px] sm:max-h-[460px] lg:max-h-[520px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.03] filter drop-shadow-2xl"
                />
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
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
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

    
      {/* 7. WHY CHOOSE US & SUCCESS STORY SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            WHY CHOOSE US
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
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
            className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm shrink-0 cursor-pointer z-10"
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
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


import brandingHeroImg from '../../../assets/images/Branding_Creative_Herom_img.webp';
import logoDesign from '../../../assets/images/Logo_Brand_identity.webp';
import packagedesign from '../../../assets/images/packaging_design.webp';
import brandingcollateral from '../../../assets/images/Brand_collateral.webp';
import socialmediacreative from '../../../assets/images/Social_media_creative.webp';




import { ScrollSlideSection, officialTechLogos, ServiceStatsTicker, ServiceCardsSection } from './Shared';
import { pageConfigs } from './Shared';

export default function BrandingCreativeView() {
  const processSteps = [
    { num: '1', title: 'Discover', desc: 'Understand your business and goals', icon: Search },
    { num: '2', title: 'Strategize', desc: 'Create a tailored brand plan', icon: Target },
    { num: '3', title: 'Design', desc: 'Bring ideas to life with creativity', icon: PenTool },
    { num: '4', title: 'Refine', desc: 'Get feedback and perfect', icon: ShieldCheck },
    { num: '5', title: 'Deliver', desc: 'Launch your brand with confidence', icon: Rocket }
  ];

  const whyGrid = [
    { title: 'Strategic Approach', desc: 'Designs aligned with your business goals.', icon: Compass, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50' },
    { title: 'Creative Excellence', desc: 'Unique and original design solutions.', icon: Sparkles, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/50' },
    { title: 'Industry Experience', desc: 'Trusted by businesses across industries.', icon: Briefcase, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: 'Dedicated Support', desc: 'From concept to launch and beyond.', icon: Headphones, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/50' }
  ];

  const services = [
    { title: 'Brand Strategy', desc: 'Define your brand\'s purpose, positioning, and identity for long-term success.', color: 'bg-sky-50 text-sky-500 dark:bg-sky-950/40 dark:text-sky-400', icon: Layout },
    { title: 'Logo & Identity Design', desc: 'Create unique and memorable logos and visual identity systems that represent your brand.', color: 'bg-pink-50 text-pink-500 dark:bg-pink-950/40 dark:text-pink-400', icon: Package },
    { title: 'Marketing Collateral', desc: 'Brochures, business cards, presentations, and more to strengthen your brand presence.', color: 'bg-emerald-50 text-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-400', icon: FileText },
    { title: 'Social Media Creatives', desc: 'Scroll-stopping designs for social media that engage and grow your audience.', color: 'bg-purple-50 text-purple-500 dark:bg-purple-950/40 dark:text-purple-400', icon: Megaphone },
    { title: 'Packaging Design', desc: 'Creative packaging that makes your product stand out on every shelf.', color: 'bg-amber-50 text-amber-500 dark:bg-amber-950/40 dark:text-amber-400', icon: ShoppingBag },
    { title: 'UI/UX Design', desc: 'Modern and user-friendly designs for websites and applications.', color: 'bg-blue-50 text-blue-500 dark:bg-blue-950/40 dark:text-blue-400', icon: Smartphone }
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
            <span className="text-sky-600 dark:text-sky-400 font-semibold truncate">Branding & Creative</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-8 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left max-w-2xl mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-tight sm:leading-[1.12] tracking-tight mb-2 sm:mb-4 text-slate-900 dark:text-white text-left">
                Creative Brand Identity
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg lg:text-xl leading-relaxed mb-2 sm:mb-4 max-w-2xl font-normal text-left">
                We create meaningful brands and stunning creative designs that help your business stand out, connect with your audience, and leave a lasting impression.
              </p>

              {/* Signature CTA Buttons - DESKTOP ONLY */}
              <div className="hidden lg:flex flex-row items-center gap-4 sm:gap-6 mt-2 mb-2 w-full">
                <Link to="/contact" className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Your Brand <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    Explore Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Visual */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end my-0.5 sm:my-1 lg:my-0">
              <div className="relative w-full max-w-[280px] min-[300px]:max-w-[400px] sm:max-w-[580px] lg:max-w-[780px] group cursor-pointer">
                <img
                  src={brandingHeroImg}
                  alt="Branding & Creative"
                  className="w-full h-auto max-h-[250px] min-[400px]:max-h-[300px] sm:max-h-[460px] lg:max-h-[520px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.03] filter drop-shadow-2xl transform scale-110 sm:scale-100"
                />
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
                  Discuss Your Brand <ArrowRight className="w-3.5 h-3.5 text-white ml-0.5" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="relative flex-1 inline-flex h-11 min-[400px]:h-12 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-normal px-2 text-sm sm:text-base z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent whitespace-nowrap text-center">
                  Explore Our Work <ArrowRight className="w-3.5 h-3.5 text-[#00016E] dark:text-sky-400 ml-0.5" />
                </span>
              </Link>
            </ScrollSlideSection>

          </div>

          {/* Service Auto Scroll Ticker Row */}
          <ScrollSlideSection direction="up" delay="200ms">
            <ServiceStatsTicker stats={pageConfigs['branding-creative'].stats} />
          </ScrollSlideSection>

        </div>
      </section>

      {/* 2. OUR SERVICES */}
      <ServiceCardsSection
        tag="OUR SERVICES"
        title="Complete Branding & Creative Solutions for Your Business"
        cards={services}
      />

      {/* 3. OUR PROCESS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 bg-transparent">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
            OUR PROCESS
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl mx-auto lg:mx-0">
            From Ideas to Impact
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 font-normal mt-4">
            We follow a strategic and collaborative process to create brands that inspire and deliver results.
          </p>
        </ScrollSlideSection>

        <ScrollSlideSection direction="up" delay="200ms" className="w-full">
          <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
            <div className="flex items-start lg:justify-between min-w-[800px] lg:min-w-0 pt-4">
              {processSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div key={idx} className="flex relative flex-1 items-start text-left">
                    <div className="flex flex-col items-start px-2">
                      <div className="w-18 h-18 rounded-full bg-white dark:bg-slate-800 text-sky-500 border border-sky-100 flex items-center justify-center shrink-0 shadow-sm relative z-10 mb-5">
                        <StepIcon className="w-8 h-8 opacity-90" />
                      </div>
                      <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <span className="font-semibold text-sky-700 dark:text-sky-400 text-xl">{step.num}</span> {step.title}
                      </h3>
                      <p className="text-md text-slate-500 leading-relaxed max-w-[140px] font-normal">{step.desc}</p>
                    </div>
                    {idx !== processSteps.length - 1 && (
                      <div className="absolute top-7 left-full w-full h-[1px] bg-slate-200 dark:bg-slate-700 -z-0 transform -translate-x-[50%]">
                        <ArrowRight className="absolute -right-3 -top-2 w-4 h-4 text-sky-300" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollSlideSection>
      </section>

      {/* 4. OUR WORK */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-8 border-t border-slate-200/60 dark:border-slate-800/60">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
            OUR WORK
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl mx-auto lg:mx-0">
            Creative Work That Makes a Difference
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-normal mt-4">
            A glimpse of our recent branding and creative projects across various industries.
          </p>
         
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
            <div className="h-48 bg-slate-900 flex items-center justify-center relative overflow-hidden p-6 group">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 blur-2xl absolute center" />
              <img src={logoDesign} alt="Lumina" className="h-full object-contain filter saturate-50 group-hover:saturate-100 transition-all opacity-80 group-hover:scale-105 group-hover:opacity-100" />
            </div>
            <div className="py-4 px-2 font-normal text-slate-900 dark:text-slate-300 text-sm text-center border-t border-slate-100 dark:border-slate-800">
              Logo &amp; Brand Identity
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
            <div className="h-48 bg-[#E9E4DB] flex items-center justify-center relative overflow-hidden p-4 group">
              <img src={packagedesign} alt="Leafy" className="h-full object-cover filter group-hover:scale-105 transition-all w-1/2 opacity-70" />
            </div>
            <div className="py-4 px-2 font-normal text-slate-900 dark:text-slate-300 text-sm text-center border-t border-slate-100 dark:border-slate-800">
              Packaging Design
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
            <div className="h-48  flex items-center justify-center relative overflow-hidden group">
              <img src={brandingcollateral} alt="Nexa" className="h-full object-cover filter group-hover:scale-105 transition-all opacity-40 grayscale group-hover:grayscale-0" />
            </div>
            <div className="py-4 px-2 font-normal text-slate-900 dark:text-slate-300 text-sm text-center border-t border-slate-100 dark:border-slate-800">
              Brand Collateral
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
            <div className="h-48 bg-pink-50 flex items-center justify-center relative overflow-hidden group">
              <img src={socialmediacreative} alt="Social" className="h-full object-cover filter group-hover:scale-105 transition-all opacity-60 mix-blend-multiply" />
            </div>
            <div className="py-4 px-2 font-normal text-slate-900 dark:text-slate-300 text-sm text-center border-t border-slate-100 dark:border-slate-800">
              Social Media Creatives
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      {/* <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 bg-sky-50/50 dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left max-w-xl lg:max-w-2xl">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              WHY CHOOSE US
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
              Your Creative Partner<br />for Brand Success
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 font-normal mb-10">
              We combine strategy, creativity, and industry expertise to build brands that create real business impact.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full">
              {whyGrid.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className={"w-12 h-12 rounded-xl flex items-center justify-center shadow-sm " + item.color}>
                    <item.icon className="w-5 h-5 fill-current opacity-80" />
                  </div>
                  <div>
                    <h4 className="text-base font-normal text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollSlideSection>

          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 flex justify-end">
            <div className="relative w-full max-w-[600px] h-[400px] bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm flex items-center justify-center border border-slate-200 dark:border-slate-700">
              <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300/30 blur-2xl rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-sky-300/30 blur-2xl rounded-full"></div>
              <img src={brandingHeroImg} alt="Why Choose Us Graphic" className="w-[85%] h-[85%] object-contain relative z-10 opacity-90" />
            </div>
          </ScrollSlideSection>
        </div>
      </section> */}

      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-8 mb-4">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white mb-4">
              Have a branding project in mind?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto lg:mx-0">
              Let's turn your ideas into a powerful brand that people remember.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link to="/contact" className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                Get in Touch <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
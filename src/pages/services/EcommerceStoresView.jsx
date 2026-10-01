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

import ecommerceHeroImg from '../../../assets/images/e_commerce_stores_hero_transparent.webp';
import ecommerceWomanImg from '../../../assets/images/ecommerce_growth_partner_v2.webp';
import fashionCaseStudyImg from '../../../assets/images/fashion_ecommerce_case_study.webp';


import { ScrollSlideSection, ServiceStatsTicker, ServiceCardsSection } from './Shared';
import { pageConfigs } from './Shared';

export default function EcommerceStoresView() {
  const ecommerceServices = [
    { title: 'Custom E-commerce Store Development', desc: 'Feature-rich, scalable, and secure online stores tailored to your brand.', icon: ShoppingCart, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400' },
    { title: 'Payment Gateway Integration', desc: 'Secure and seamless payment processing with multiple options.', icon: CreditCard, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400' },
    { title: 'Product & Inventory Management', desc: 'Easy product upload, stock management, and order tracking.', icon: Package, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400' },
    { title: 'Mobile-Optimized Stores', desc: 'Fully responsive and mobile-friendly stores for a smooth shopping experience.', icon: Smartphone, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400' },
    { title: 'SEO & Marketing Integration', desc: 'Built-in SEO, analytics, and marketing tools to boost your sales.', icon: TrendingUp, color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400' },
    { title: 'Ongoing Support & Maintenance', desc: 'Reliable support to keep your store running smoothly.', icon: Headphones, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400' }
  ];

  const growthPillars = [
    { title: 'Strategic Approach', desc: 'Focused on your business goals', icon: Compass },
    { title: 'Scalable Solutions', desc: 'Built for long-term growth', icon: Layers },
    { title: 'Dedicated Support', desc: 'From start to finish and beyond', icon: UserCheck }
  ];

  const processSteps = [
    { num: '1', title: 'Planning', desc: 'Understand your requirements and set goals', icon: Search },
    { num: '2', title: 'Design', desc: 'Create modern UI/UX for high conversions', icon: Layout },
    { num: '3', title: 'Development', desc: 'Build store with secure checkout', icon: Code },
    { num: '4', title: 'Testing', desc: 'Ensure smooth performance & security', icon: ShieldCheck },
    { num: '5', title: 'Launch', desc: 'Deploy store and start selling online', icon: Rocket }
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
            <span className="text-sky-600 dark:text-sky-400 font-semibold truncate">E-Commerce Stores</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-8 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left max-w-2xl mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-tight sm:leading-[1.12] tracking-tight mb-2 sm:mb-4 text-slate-900 dark:text-white text-left">
                Custom E-Commerce Stores
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-lg lg:text-xl leading-relaxed mb-0 sm:mb-2 max-w-2xl font-normal text-left">
                We design and build fast, secure, and conversion-focused online stores that help your brand showcase products, engage customers, and grow sales seamlessly.
              </p>

              {/* Signature CTA Buttons - DESKTOP ONLY */}
              <div className="hidden lg:flex flex-row items-center gap-4 sm:gap-6 mt-2 mb-2 w-full">
                <Link
                  to="/contact"
                  className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Build Your Store <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
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
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end my-0">
              <div className="relative w-full max-w-[280px] min-[300px]:max-w-[400px] sm:max-w-[580px] lg:max-w-[780px] group cursor-pointer">
                <img
                  src={ecommerceHeroImg}
                  alt="E-Commerce Stores"
                  className="w-full h-auto max-h-[250px] min-[400px]:max-h-[300px] sm:max-h-[460px] lg:max-h-[520px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.03] filter drop-shadow-2xl transform scale-110 sm:scale-100"
                />
              </div>
            </ScrollSlideSection>

            {/* MOBILE ONLY CTA BUTTONS (Single line inline row) */}
            <ScrollSlideSection direction="up" className="lg:hidden flex flex-row items-center justify-center w-[88%] min-[400px]:w-[85%] sm:w-full gap-2 min-[400px]:gap-3 mt-0 mb-2 mx-auto">
              <Link
                to="/contact"
                className="relative flex-1 inline-flex h-11 min-[400px]:h-12 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-normal px-2 text-sm sm:text-base z-10 transition-all border border-[#00016E] group-hover:border-transparent whitespace-nowrap text-center">
                  Build Your Store <ArrowRight className="w-3.5 h-3.5 text-white ml-0.5" />
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
            <ServiceStatsTicker stats={pageConfigs['ecommerce-stores'].stats} />
          </ScrollSlideSection>

        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <ServiceCardsSection
        tag="OUR SERVICES"
        title="End-to-End E-Commerce Solutions"
        sub="Everything you need to launch, scale, and manage a successful online store."
        cards={ecommerceServices}
      />

      {/* 3. YOUR E-COMMERCE GROWTH PARTNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left max-w-xl lg:max-w-2xl">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              WHY CHOOSE US
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
              Your E-Commerce Growth Partner
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              We don't just build online stores; we build digital shopping experiences that attract buyers, increase conversion rates, and turn first-time shoppers into loyal brand advocates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4">
              {growthPillars.map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                return (
                  <div key={idx} className="flex flex-col items-start gap-2 bg-white dark:bg-slate-800/60 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                      <PillarIcon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{pillar.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </ScrollSlideSection>

          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[500px] group">
              <img
                src={ecommerceWomanImg}
                alt="E-Commerce Growth Partner"
                className="w-full h-auto rounded-3xl object-cover shadow-xl border border-slate-200/80 dark:border-slate-700/80"
              />
            </div>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 4. PROCESS STEPS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-md sm:text-sm uppercase mb-2">
            OUR PROCESS
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            How We Build Your Store
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal">
            A battle-tested 5-step process to bring your online store to life efficiently.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative">
          {processSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 100}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80  p-5 hover:shadow-md transition-all h-full flex flex-col justify-between relative group">
                  <div>
                    <div className="w-18 h-18 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4 shrink-0 ">
                      <StepIcon className="w-7 h-7" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-sky-600 dark:text-sky-400">{step.num}</span>
                      <h3 className="text-2xl  text-slate-900 dark:text-white">{step.title}</h3>
                    </div>
                    <p className="text-md sm:text-sm text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-400 shadow-sm">
                      <ChevronRight className="w-4.5 h-4.5" />
                    </div>
                  )}
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 5. CASE STUDY FEATURE BOX */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up">
          <div className="bg-gradient-to-r from-sky-50/90 via-blue-50/50 to-pink-50/80 dark:from-slate-800/90 dark:via-slate-800/80 dark:to-slate-800/90 p-8 sm:p-12   dark:border-slate-700/80  flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-sky-600  dark:text-sky-400 font-semibold tracking-widest text-2xl sm:text-md lg:text-2xl uppercase mb-2 block">
                SUCCESS STORY
              </span>
              <h3 className="text-3xl  sm:text-xl lg:text-3xl  font-normal text-slate-900 dark:text-white mb-3">
                150% Revenue Increase for Fashion E-Commerce Brand
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-md sm:text-base font-normal leading-relaxed mb-6">
                By redesigning the store experience, optimizing mobile checkout, and integrating smart upsell features, we helped a retail fashion client double their sales within 90 days of launch.
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                <div>
                  <div className="text-xl sm:text-xl lg:text-4xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">150%</div>
                  <div className="text-sm  sm:text-sm lg:text-2xl text-slate-500 dark:text-slate-400 font-normal">Revenue Growth</div>
                </div>
                <div>
                  <div className="text-xl sm:text-xl lg:text-4xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">2.8x</div>
                  <div className="text-sm  sm:text-sm lg:text-2xl  text-slate-500 dark:text-slate-400 font-normal">Conversion Rate</div>
                </div>
                <div>
                  <div className="text-xl sm:text-xl lg:text-4xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">99.9%</div>
                  <div className="text-sm sm:text-sm lg:text-2xl  text-slate-500 dark:text-slate-400 font-normal">Uptime SLA</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex justify-center">
              <img
                src={fashionCaseStudyImg}
                alt="Fashion Case Study"
                className="w-full max-w-[340px] h-auto   border-slate-200 dark:border-slate-700 object-cover"
              />
            </div>
          </div>
        </ScrollSlideSection>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-100/60 via-blue-50/70 to-pink-100/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-2">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              Let's build an e-commerce platform that turns visitors into buyers.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm shrink-0 cursor-pointer z-10"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
              Get Started <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}
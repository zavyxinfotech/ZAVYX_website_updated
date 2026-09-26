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
    { title: 'Industry Expertise', desc: 'Proven e-commerce experience', icon: Award },
    { title: 'Scalable Solutions', desc: 'Grow without limitations', icon: TrendingUp },
    { title: 'Dedicated Support', desc: "We're with you every step", icon: Heart }
  ];

  const platforms = [
    { name: 'shopify', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg' },
    { name: 'WOO COMMERCE', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg' },
    { name: 'Magento', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg' },
    { name: 'BIGCOMMERCE', url: officialTechLogos['BigCommerce'] || 'https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg' },
    { name: 'PrestaShop', url: 'https://cdn.worldvectorlogo.com/logos/prestashop.svg' },
    { name: 'Custom Solutions', url: officialTechLogos['React'] }
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
            <span className="text-sky-600 dark:text-sky-400 font-semibold">E-commerce Stores</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Text */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white">
                Powerful Online Stores<br />
                for a Stronger Tomorrow
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
                We design and develop high-converting e-commerce stores that help you reach more customers, increase sales, and grow your brand in the digital marketplace.
              </p>
              
              {/* Signature Conic-Gradient CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-2">
                <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Your Project <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    Explore Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Visual */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[720px] lg:max-w-[780px] group cursor-pointer">
                

                <div className="relative bg-transparent flex items-center justify-center p-0 shadow-none">
                  <img 
                    src={ecommerceHeroImg} 
                    alt="E-commerce Stores" 
                    className="w-full h-auto max-h-[460px] lg:max-h-[520px] object-contain transition-transform duration-700 group-hover:scale-[1.03] filter drop-shadow-2xl" 
                  />
                </div>
              </div>
            </ScrollSlideSection>
          </div>

          {/* Startup Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 lg:mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  100+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  E-commerce Projects
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
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR E-COMMERCE SERVICES */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 border-t border-slate-200/60 dark:border-slate-800/60">
        <ScrollSlideSection direction="up" className="mb-10 text-left flex flex-col items-start lg:flex-row lg:justify-between lg:items-end">
          <div className="max-w-xl">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              OUR E-COMMERCE SERVICES
            </h4>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Complete E-commerce Solutions for Your Business
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md font-normal mt-4 lg:mt-0 text-left lg:text-right">
            From strategy to launch, we provide end-to-end e-commerce solutions tailored to your business goals.
          </p>
        </ScrollSlideSection>

        {/* Desktop View: 3-Column Card Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecommerceServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <ScrollSlideSection key={idx} delay={idx * 80 + "ms"} className="bg-white dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-col justify-between group">
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0 ${srv.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>
                <Link to="/contact" className="text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-normal flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </ScrollSlideSection>
            );
          })}
        </div>

        {/* Mobile View: Compact List Rows matching Mockup */}
        <div className="sm:hidden flex flex-col gap-3">
          {ecommerceServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <Link key={idx} to="/contact" className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-xl p-4 flex items-center justify-between gap-3 shadow-sm hover:shadow transition-all group">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${srv.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-normal text-slate-900 dark:text-white text-left">{srv.title}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors shrink-0" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. WHY CHOOSE US / Your E-commerce Growth Partner */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              WHY CHOOSE US?
            </h4>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
              Your E-commerce Growth Partner
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-lg">
              We combine creativity, technology, and e-commerce expertise to build online stores that deliver real results. Our focus is on creating seamless shopping experiences that turn visitors into loyal customers.
            </p>
            
            {/* 4 Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6 w-full">
              {growthPillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-start text-left gap-1">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-normal text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-normal leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </ScrollSlideSection>

          {/* Right Image */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
              <img src={ecommerceWomanImg} alt="Your E-commerce Growth Partner" className="w-full h-auto object-cover" />
            </div>
          </ScrollSlideSection>
        </div>
      </section>

      {/* 4. PLATFORMS WE WORK WITH */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 border-t border-slate-200/60 dark:border-slate-800/60">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
            PLATFORMS WE WORK WITH
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Flexible Solutions for Every Business
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {platforms.map((p, idx) => (
            <ScrollSlideSection key={idx} delay={idx * 60 + "ms"} direction="up">
              <div className="transition-all rounded-2xl p-5 flex flex-col items-center justify-center gap-3 group cursor-pointer h-32">
                <img src={p.url} alt={p.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110 filter drop-shadow-sm" />
                <span className="text-xs sm:text-sm font-normal text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors text-center">{p.name}</span>
              </div>
            </ScrollSlideSection>
          ))}
        </div>
      </section>

      {/* 5. SUCCESS STORIES */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 border-t border-slate-200/60 dark:border-slate-800/60">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
            SUCCESS STORIES
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
            Real Results for Real Businesses
          </h2>
        </ScrollSlideSection>

        <ScrollSlideSection direction="up" delay="100ms" className="rounded-3xl p-0 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <img src={fashionCaseStudyImg} alt="Fashion E-commerce Case Study" className="w-full h-auto object-cover" />
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 text-left">
            <div className="bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 text-xs font-normal px-3 py-1 rounded-full uppercase tracking-wider">
              CASE STUDY
            </div>
            <h3 className="text-3xl sm:text-4xl font-normal text-slate-900 dark:text-white leading-snug">
              Building a High-Converting Fashion E-commerce Store
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed mb-4">
              We developed a feature-rich online store for a fashion brand with seamless shopping experience, secure payments, and marketing integrations. The result was a 2.5x increase in sales within 6 months.
            </p>
            
            <div className="grid grid-cols-3 gap-4 w-full pt-6 border-t border-slate-100 dark:border-slate-700">
              <div className="flex flex-col">
                <div className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight">2.5x</div>
                <div className="text-slate-500 text-sm sm:text-base font-normal mt-1">Increase in Sales</div>
              </div>
              <div className="flex flex-col">
                <div className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight">40%</div>
                <div className="text-slate-500 text-sm sm:text-base font-normal mt-1">More Customers</div>
              </div>
              <div className="flex flex-col">
                <div className="text-sky-600 dark:text-sky-400 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight">60%</div>
                <div className="text-slate-500 text-sm sm:text-base font-normal mt-1">Higher Engagement</div>
              </div>
            </div>
          </div>
        </ScrollSlideSection>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 border-t border-slate-200/60 dark:border-slate-800/60 mb-4">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-50/70 via-blue-50/50 to-sky-50/70 dark:from-slate-800 dark:to-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white mb-2">
              Ready to Start Your Online Store?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-normal max-w-xl">
              Let's turn your products into a successful online business.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
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
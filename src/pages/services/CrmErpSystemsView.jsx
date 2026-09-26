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

export default function CrmErpSystemsView() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const servicesList = [
    { 
      title: 'CRM Implementation', 
      desc: 'Manage leads, customers, and interactions with a centralized CRM system.', 
      icon: Users, 
      color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400' 
    },
    { 
      title: 'Sales & Order Management', 
      desc: 'Automate your sales process from quotation to order fulfillment.', 
      icon: ShoppingCart, 
      color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400' 
    },
    { 
      title: 'Inventory Management', 
      desc: 'Track stock, manage warehouses and ensure real-time inventory visibility.', 
      icon: Package, 
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400' 
    },
    { 
      title: 'Purchase Management', 
      desc: 'Simplify procurement and vendor management with automated workflows.', 
      icon: CreditCard, 
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400' 
    },
    { 
      title: 'Finance & Accounting', 
      desc: 'Manage invoices, payments, expenses and financial reports with ease.', 
      icon: DollarSign, 
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400' 
    },
    { 
      title: 'HR & Employee Management', 
      desc: 'Streamline attendance, payroll, leaves and employee performance tracking.', 
      icon: Briefcase, 
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400' 
    }
  ];

  const growthPillars = [
    { 
      title: 'Industry Expertise', 
      desc: 'Proven experience across multiple industries', 
      icon: Award, 
      color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' 
    },
    { 
      title: 'Customized Solutions', 
      desc: 'Tailored to your unique business needs', 
      icon: Layers, 
      color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' 
    },
    { 
      title: 'Scalable & Flexible', 
      desc: 'Grow without limits', 
      icon: TrendingUp, 
      color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' 
    },
    { 
      title: 'Dedicated Support', 
      desc: 'Ongoing support and training', 
      icon: Headphones, 
      color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' 
    }
  ];

  const industries = [
    { title: 'Retail & E-commerce', icon: ShoppingCart, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/40' },
    { title: 'Manufacturing', icon: Server, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/40' },
    { title: 'Healthcare', icon: Heart, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' },
    { title: 'Education', icon: GraduationCap, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40' },
    { title: 'Real Estate', icon: Building2, color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/40' },
    { title: 'Logistics', icon: Truck, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40' }
  ];

  const faqs = [
    {
      q: 'What is the difference between CRM and ERP?',
      a: 'CRM focuses on managing customer relationships, sales pipelines, and support. ERP manages internal operations, inventory, finance, procurement, and HR. Our integrated solutions bring both together seamlessly into a single platform.'
    },
    {
      q: 'Is the solution suitable for small businesses?',
      a: 'Yes! We design modular solutions that scale with your growth, allowing small businesses to start with essential modules and expand functionality as business operations scale.'
    },
    {
      q: 'Can the system be customized for my business?',
      a: 'Yes, absolutely! Every business has unique workflows. We architect fully custom CRM & ERP modules tailored specifically to your processes, roles, and industry requirements.'
    },
    {
      q: 'Can I integrate with third-party tools?',
      a: 'Yes! We build secure API integrations connecting your CRM & ERP with payment gateways, WhatsApp API, email marketing tools, accounting software, and e-commerce storefronts.'
    },
    {
      q: 'How long does implementation take?',
      a: 'Timeline depends on system complexity. Standard custom implementations typically take between 4 to 8 weeks, including data migration, API integrations, testing, and team onboarding.'
    },
    {
      q: 'Is my data secure?',
      a: 'Data security is our highest priority. We implement bank-grade encryption, role-based access controls, automated data backups, and strict security compliance standards.'
    },
    {
      q: 'Do you provide training and support?',
      a: 'Yes! We provide comprehensive staff onboarding, live user training sessions, detailed technical documentation, and ongoing SLA maintenance support.'
    },
    {
      q: 'What industries do you serve?',
      a: 'We serve retail, e-commerce, manufacturing, healthcare, education, real estate, logistics, financial services, and professional service companies.'
    }
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden bg-transparent">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-32 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold">CRM & ERP Systems</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white">
                Unified Business Management for a <br className="hidden sm:inline" />
                Stronger Tomorrow
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 font-normal">
                Streamline your operations, strengthen customer relationships, and drive growth with an integrated CRM & ERP solution.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-2">
                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Your Requirements <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    Explore Features <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

            </ScrollSlideSection>

            {/* Hero Right Image Mockup */}
            <ScrollSlideSection direction="up" delay="150ms" className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-xl">
                <img 
                  src={crmErpHeroImg} 
                  alt="CRM & ERP Systems Graphic" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </ScrollSlideSection>
          </div>
          {/* Stats Metrics */}
              <ScrollSlideSection direction="up" delay="300ms">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 lg:mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  100+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Businesses Transformed
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
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
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  99%
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Operational Success
                </div>
              </div>
            </div>
          </div>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 2. OUR CRM & ERP SERVICES SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              OUR CRM & ERP SERVICES
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white">
              Comprehensive Solutions for Every Business Need
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal max-w-md text-left md:text-right">
            We offer end-to-end CRM & ERP solutions designed to streamline your operations, improve efficiency, and help your business grow.
          </p>
        </ScrollSlideSection>

        {/* Desktop View: 3-Column Card Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((svc, idx) => {
            const IconComp = svc.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 p-8 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${svc.color} flex items-center justify-center mb-6 shadow-sm`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-normal text-slate-900 dark:text-white mb-3 text-left">
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-relaxed text-left mb-6">
                      {svc.desc}
                    </p>
                  </div>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-medium text-sm hover:gap-3 transition-all text-left"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
            </ScrollSlideSection>
            );
          })}
        </div>

        {/* Mobile View: Compact List Rows */}
        <ScrollSlideSection direction="up" delay="100ms">
        <div className="sm:hidden flex flex-col divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
          {servicesList.map((svc, idx) => {
            const IconComp = svc.icon;
            return (
              <Link 
                key={idx}
                to="/contact" 
                className="py-4 flex items-center justify-between group active:bg-slate-100/50 dark:active:bg-slate-800/50 px-2 transition-colors"
              >
                <div className="flex items-center gap-3 text-left">
                  <div className={`w-10 h-10 rounded-lg ${svc.color} flex items-center justify-center shrink-0`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-normal text-slate-900 dark:text-white">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {svc.desc}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 transition-colors shrink-0" />
              </Link>
            );
          })}
        </div>
        </ScrollSlideSection>
      </section>

      {/* 3. WHY CHOOSE OUR CRM & ERP SOLUTIONS (GROWTH PARTNER) */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text & 4 Pillars Grid */}
          <ScrollSlideSection direction="up" className="lg:col-span-6 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              WHY CHOOSE OUR CRM & ERP SOLUTIONS
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-4">
              More Than Software – <br className="hidden sm:inline" />
              A Smarter Way to Grow
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal leading-relaxed mb-8">
              We combine industry expertise, modern technology, and a customer-first approach to deliver CRM & ERP solutions that create real business impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {growthPillars.map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-normal text-slate-900 dark:text-white mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollSlideSection>

          {/* Right Visual Image */}
          <ScrollSlideSection direction="up" delay="150ms" className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800">
              <img 
                src={crmGrowthPartnerImg} 
                alt="Your Partner in Digital Growth" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Your Partner</div>
                  <div className="text-xs text-sky-600 dark:text-sky-400 font-normal">in Digital Growth</div>
                </div>
              </div>
            </div>
          </ScrollSlideSection>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              INDUSTRIES WE SERVE
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white">
              Solutions for Every Industry
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal max-w-md text-left md:text-right">
            Our CRM & ERP systems are flexible and scalable, serving businesses across diverse industries.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {industries.map((ind, idx) => {
            const IndIcon = ind.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-3 group">
                  <div className={`w-12 h-12 rounded-xl ${ind.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <IndIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm sm:text-base font-normal text-slate-900 dark:text-white">
                    {ind.title}
                  </h3>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 5. SUCCESS STORIES CASE STUDY */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="text-left mb-8">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            SUCCESS STORIES
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white">
            Real Results for Real Businesses
          </h2>
        </ScrollSlideSection>

        <ScrollSlideSection direction="up" delay="100ms">
          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-700/80 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Image Visual with Badge Overlay */}
            <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden shrink-0">
              <img 
                src={crmDashboardImg} 
                alt="CRM ERP Case Study Dashboard" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                <div className="text-xl sm:text-2xl font-bold text-sky-600 dark:text-sky-400">40%</div>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-normal">Increase in Sales</div>
              </div>
            </div>

            {/* Right Case Study Content */}
            <div className="w-full lg:w-1/2 text-left">
              <span className="text-sky-600 dark:text-sky-400 font-semibold tracking-widest text-xs uppercase mb-2 block">
                CASE STUDY
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white mb-4">
                Transforming Operations for a Growing Retail Business
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-relaxed mb-8">
                We implemented a custom CRM & ERP solution for a retail client, streamlining their sales, inventory, and finance operations. This resulted in improved efficiency, better customer engagement, and significant growth in revenue.
              </p>

              {/* 3 Metrics Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-700">
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">40%</div>
                  <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">Increase in Sales</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">30%</div>
                  <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">Operational Efficiency</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">60%</div>
                  <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">Faster Reporting</div>
                </div>
              </div>
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
              Ready to Streamline Your Business?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              Let's connect and find the right CRM & ERP solution for your business.
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
      </section></div>);}
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

import crmErpHeroImg from '../../../assets/images/CRM_ERP__systems_hero_img.webp';
import crmDashboardImg from '../../../assets/images/crm_erp_dashboard_mockup.webp';
import crmGrowthPartnerImg from '../../../assets/images/crm_erp_growth_partner.webp';

import { ScrollSlideSection, officialTechLogos, ServiceStatsTicker, ServiceCardsSection } from './Shared';
import { pageConfigs } from './Shared';

export default function CrmErpSystemsView() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const servicesList = [
    { 
      title: <span className="text-xl sm:text-2xl">CRM Implementation</span>, 
      desc: <span className="text-base sm:text-lg">Manage leads, customers, and interactions with a centralized CRM system.</span>, 
      icon: Users, 
      color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400' 
    },
    { 
      title: <span className="text-xl sm:text-2xl">Sales & Order Management</span>, 
      desc: <span className="text-base sm:text-lg">Automate your sales process from quotation to order fulfillment.</span>, 
      icon: ShoppingCart, 
      color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400' 
    },
    { 
      title: <span className="text-xl sm:text-2xl">Inventory Management</span>, 
      desc: <span className="text-base sm:text-lg">Track stock, manage warehouses and ensure real-time inventory visibility.</span>, 
      icon: Package, 
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400' 
    },
    { 
      title: <span className="text-xl sm:text-2xl">Purchase Management</span>, 
      desc: <span className="text-base sm:text-lg">Simplify procurement and vendor management with automated workflows.</span>, 
      icon: CreditCard, 
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400' 
    },
    { 
      title: <span className="text-xl sm:text-2xl">Finance & Accounting</span>, 
      desc: <span className="text-base sm:text-lg">Manage invoices, payments, expenses and financial reports with ease.</span>, 
      icon: DollarSign, 
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400' 
    },
    { 
      title: <span className="text-xl sm:text-2xl">HR & Employee Management</span>, 
      desc: <span className="text-base sm:text-lg">Streamline attendance, payroll, leaves and employee performance tracking.</span>, 
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

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="custom-mobile-hero relative pt-20 pb-4 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent min-h-[100dvh] flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-32 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col justify-between h-full">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2 sm:mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold truncate">CRM & ERP Systems</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-8 lg:gap-12 items-center">
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left max-w-2xl mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-tight sm:leading-[1.12] tracking-tight mb-2 sm:mb-4 text-slate-900 dark:text-white text-left">
                Unified Business Management
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-lg lg:text-xl leading-relaxed mb-2 sm:mb-4 max-w-2xl font-normal text-left">
                Streamline your operations, strengthen customer relationships, and drive growth with an integrated CRM & ERP solution.
              </p>

              <div className="hidden lg:flex flex-row items-center gap-4 sm:gap-6 mt-2 mb-2 w-full">
                <Link
                  to="/contact"
                  className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Requirements <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    Explore Features <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

            </ScrollSlideSection>

            {/* Hero Right Image Mockup */}
            <ScrollSlideSection direction="up" delay="150ms" className="lg:col-span-6 relative flex justify-center lg:justify-end my-0.5 sm:my-1 lg:my-0">
              <div className="relative w-full max-w-[280px] min-[300px]:max-w-[400px] sm:max-w-[580px] lg:max-w-[780px] group cursor-pointer">
                <div className="relative bg-transparent flex items-center justify-center p-0 shadow-none">
                  <img 
                    src={crmErpHeroImg} 
                    alt="CRM & ERP Systems Graphic" 
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
                  Discuss Project <ArrowRight className="w-3.5 h-3.5 text-white ml-0.5" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="relative flex-1 inline-flex h-11 min-[400px]:h-12 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-normal px-2 text-sm sm:text-base z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent whitespace-nowrap text-center">
                  Explore Features <ArrowRight className="w-3.5 h-3.5 text-[#00016E] dark:text-sky-400 ml-0.5" />
                </span>
              </Link>
            </ScrollSlideSection>

          </div>

          {/* Service Auto Scroll Ticker Row */}
          <ScrollSlideSection direction="up" delay="200ms">
            <ServiceStatsTicker stats={pageConfigs['crm-erp-systems'].stats} />
          </ScrollSlideSection>

        </div>
      </section>

      {/* 2. OUR CRM & ERP SERVICES SECTION */}
      <ServiceCardsSection
        tag="OUR CRM & ERP SERVICES"
        title="Comprehensive Solutions for Every Business Need"
        sub="We offer end-to-end CRM & ERP solutions designed to streamline your operations, improve efficiency, and help your business grow."
        cards={servicesList}
      />

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
            <p className="text-slate-600 dark:text-slate-300 text-xl sm:text-2xl font-normal leading-relaxed mb-8">
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
                      <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
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
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800">
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
          <div className="max-w-xl mx-auto lg:mx-0 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              INDUSTRIES WE SERVE
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white">
              Solutions for Every Industry
            </h2>
          </div>
        
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {industries.map((ind, idx) => {
            const IndIcon = ind.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className="dark:bg-slate-800/80 p-6  hover:shadow-md transition-all flex flex-col items-center text-center gap-3 group">
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
            className="relative inline-flex h-10 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm shrink-0 cursor-pointer z-10"
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
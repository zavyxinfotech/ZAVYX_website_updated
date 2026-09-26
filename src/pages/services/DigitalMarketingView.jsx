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

export default function DigitalMarketingView() {
  const processSteps = [
    { num: '1', title: 'Research', desc: 'Understand your business and audience', icon: Search },
    { num: '2', title: 'Strategy', desc: 'Create a customized digital marketing plan', icon: Target },
    { num: '3', title: 'Execute', desc: 'Launch and manage campaigns across channels', icon: PenTool },
    { num: '4', title: 'Analyze', desc: 'Track performance and make data-driven improvements', icon: BarChart3 },
    { num: '5', title: 'Grow', desc: 'Achieve long-term growth and higher ROI', icon: TrendingUp }
  ];

  const whyGrid = [
    { title: 'Result-Oriented', desc: 'Focused on measurable results and ROI.', icon: Award, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50' },
    { title: 'Experienced Team', desc: 'Skilled professionals with proven expertise.', icon: Users, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: 'Tailored Strategies', desc: 'Customized solutions for your unique goals.', icon: Sparkles, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/50' },
    { title: 'Ongoing Support', desc: 'Continuous optimization and dedicated support.', icon: Headphones, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/50' }
  ];

  const faqs = [
    { q: 'How long does it take to see results from SEO?', a: 'SEO is a long-term strategy. Typically, noticeable improvements in rankings and organic traffic start appearing within 3 to 6 months of consistent optimization.' },
    { q: 'What is the budget for digital marketing?', a: 'Budgets vary based on your business size, industry, and goals. We tailor customized marketing strategies that deliver maximum ROI for your target budget.' },
    { q: 'What platforms do you manage for social media?', a: 'We manage all major social media platforms including Meta (Facebook & Instagram), LinkedIn, Twitter (X), YouTube, and Pinterest.' },
    { q: 'Can you work with small businesses?', a: 'Yes! We work with businesses of all sizes, from early-stage startups and small businesses to enterprise brands.' },
    { q: 'Do you provide content creation services?', a: 'Yes, we provide end-to-end content creation including blog posts, website copywriting, ad graphics, video scripts, and social media posts.' },
    { q: 'How do you measure campaign success?', a: 'We track clear KPIs such as conversion rates, click-through rates (CTR), organic traffic growth, cost per acquisition (CPA), and return on ad spend (ROAS).' }
  ];

  const services = [
    { title: 'Search Engine Optimization (SEO)', desc: 'Improve your website ranking and get organic traffic from search engines.', color: 'bg-sky-50 text-sky-500 dark:bg-sky-950/40 dark:text-sky-400', icon: Search },
    { title: 'Social Media Marketing', desc: 'Build your brand presence on Facebook, Instagram, LinkedIn and more.', color: 'bg-pink-50 text-pink-500 dark:bg-pink-950/40 dark:text-pink-400', icon: Megaphone },
    { title: 'Pay Per Click (PPC) Advertising', desc: 'Get instant visibility with targeted ad campaigns that deliver real results.', color: 'bg-emerald-50 text-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-400', icon: Target },
    { title: 'Content Marketing', desc: 'Engaging content that attracts, converts, and retains your audience.', color: 'bg-purple-50 text-purple-500 dark:bg-purple-950/40 dark:text-purple-400', icon: FileText },
    { title: 'Email Marketing', desc: 'Reach your customers with personalized email campaigns that drive action.', color: 'bg-amber-50 text-amber-500 dark:bg-amber-950/40 dark:text-amber-400', icon: Mail },
    { title: 'Analytics & Reporting', desc: 'Track performance with detailed reports and data-driven insights.', color: 'bg-blue-50 text-blue-500 dark:bg-blue-950/40 dark:text-blue-400', icon: BarChart3 }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-32 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />
        
        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold">Digital Marketing & SEO</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
             <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
               <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white">
                 Grow Your Brand<br />in the Digital World
               </h1>
               <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal">
                 We create data-driven digital marketing strategies and SEO solutions that help your business get more visibility, attract the right audience, and achieve measurable growth.
               </p>
               
               <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-2">
                  <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                      Discuss Your Goals <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
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

             <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end">
               <div className="relative w-full max-w-[720px] lg:max-w-[780px] group cursor-pointer">
                 <img 
                   src={digitalMarketingHeroImg} 
                   alt="Digital Marketing & SEO" 
                   className="w-full h-auto max-h-[460px] lg:max-h-[520px] object-contain transition-transform duration-700 group-hover:scale-[1.03] filter drop-shadow-2xl" 
                 />
               </div>
             </ScrollSlideSection>
          </div>

          {/* Startup Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 lg:mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  100+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Brands Promoted
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
                  98%
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Client Retention
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR SERVICES
          </h4>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-md font-normal leading-relaxed lg:pb-2">
              From strategy to execution, we offer end-to-end digital marketing services tailored to your business goals.
            </p>
          </div>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-6 gap-4">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <ScrollSlideSection key={idx} delay={idx * 100 + 'ms'} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-row gap-5">
                <div className={'w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ' + srv.color}>
                   <Icon className="w-6 h-6 fill-current opacity-80" />
                </div>
                <div className="flex flex-col justify-between items-start">
                   <h3 className="text-xl font-normal text-slate-900 dark:text-white mb-2">{srv.title}</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm font-normal mb-4">{srv.desc}</p>
                   <Link to="/contact" className="text-[#00016E] dark:text-sky-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </ScrollSlideSection>
            )
          })}
        </div>
      </section>

      {/* 3. OUR PROCESS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR PROCESS
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
            A Simple Process<br/>for Real Results
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-md font-normal mt-4">
            We follow a proven process to plan, execute, and optimize your digital marketing campaigns.
          </p>
        </ScrollSlideSection>
        
        <ScrollSlideSection direction="up" delay="200ms" className="w-full">
           <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
             <div className="flex items-start lg:justify-between min-w-[800px] lg:min-w-0">
               {processSteps.map((step, idx) => {
                 const StepIcon = step.icon;
                 return (
                   <div key={idx} className="flex relative flex-1 items-start text-left">
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-500 border-2 border-sky-100 flex items-center justify-center shrink-0 shadow-sm relative z-10 mb-4">
                          <StepIcon className="w-5 h-5 opacity-80" />
                        </div>
                        <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          {step.num} <span className="text-slate-900 dark:text-slate-100">{step.title}</span>
                        </h3>
                        <p className="text-xs text-slate-500 max-w-[140px] text-center font-normal">{step.desc}</p>
                      </div>
                      {idx !== processSteps.length - 1 && (
                         <div className="absolute top-7 left-1/2 w-full h-[1.5px] bg-sky-100 dark:bg-sky-900/50 -z-0">
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

      {/* 4. WHY CHOOSE US */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left">
              <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
                WHY CHOOSE US
              </h4>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
                Your Trusted Partner<br/>in Digital Growth
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal mb-8">
                We combine creativity, data, and industry expertise to deliver digital marketing solutions that drive real business impact.
              </p>
              
              <div className="grid grid-cols-2 gap-6 w-full">
                 {whyGrid.map((item, idx) => (
                   <div key={idx} className="flex flex-col gap-2">
                     <div className={'w-10 h-10 rounded-lg flex items-center justify-center ' + item.color}>
                       <item.icon className="w-5 h-5 fill-current opacity-80" />
                     </div>
                     <h4 className="text-sm font-normal text-slate-900 dark:text-white">{item.title}</h4>
                     <p className="text-xs text-slate-500 font-normal">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </ScrollSlideSection>
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 flex justify-end">
               <img src={digitalMarketingTrustedPartnerImg} alt="Why Choose Us Graphic" className="w-full max-w-[600px] h-auto rounded-3xl" />
            </ScrollSlideSection>
         </div>
      </section>

      {/* 5. SUCCESS STORIES (No small cards drifting, built-in stats) */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-8 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            SUCCESS STORIES
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Real Results for Real Businesses
          </h2>
        </ScrollSlideSection>
        
        <ScrollSlideSection direction="up" delay="100ms" className="w-full bg-transparent border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10 bg-white dark:bg-slate-900/50 shadow-sm">
           <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
             <img src={analyticsDashboardImg} alt="Analytics Dashboard" className="max-w-[450px] w-full h-auto drop-shadow-lg" />
           </div>
           <div className="w-full lg:w-1/2 text-left">
              <span className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-normal tracking-widest mb-2 block">
                 CASE STUDY
              </span>
              <h3 className="text-3xl font-regular text-slate-900 dark:text-white mb-4">E-Commerce Brand Boosts Sales with SEO</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal mb-8">
                 We implemented a complete SEO and content marketing strategy for an e-commerce client, resulting in higher search rankings, increased website traffic, and a significant growth in online sales.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                 <div>
                   <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight mb-1">230%</div>
                   <div className="text-xs text-slate-500 font-normal">Increase in Organic Traffic</div>
                 </div>
                 <div>
                   <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight mb-1">3x</div>
                   <div className="text-xs text-slate-500 font-normal">More Conversions</div>
                 </div>
                 <div>
                   <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight mb-1">150%</div>
                   <div className="text-xs text-slate-500 font-normal">Revenue Growth</div>
                 </div>
              </div>
           </div>
        </ScrollSlideSection>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              LET'S GROW TOGETHER
            </h4>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white mb-3">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-6 font-normal">
              Let's create a digital marketing strategy that delivers real results.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
             <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                  Get in Touch <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1" />
                </span>
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Database, 
  Smartphone, 
  Bot, 
  Cloud, 
  Code, 
  ShoppingBag, 
  Share2, 
  Palette,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Cpu,
  LifeBuoy
} from 'lucide-react';

import heroVid from '../../assets/Videos/animo-showcase-stream-720p.webm';
import imgWeb from '../../assets/images/Websites_Web_apps_service_background.png';
import imgEcom from '../../assets/images/E_commerce_Stores_Service_background.png';
import imgCrm from '../../assets/images/CRM_ERM_service_background.png';
import imgWa from '../../assets/images/WhatsApp_API_and_chatbots.jpeg';
import imgAi from '../../assets/images/Ai_Automation_service_background.png';
import imgMob from '../../assets/images/mobile_apps.jpeg';
import imgSeo from '../../assets/images/Digital_marketing_SEO_service_background.png';
import imgBrand from '../../assets/images/Branding_creative_service_background.png';
import imgCloud from '../../assets/images/Cloud_Infrastructure_service_background.png';
import laptopMockup from '../../assets/images/laptop_mockup.png';

const ScrollSlideSection = ({ children, className = '', delay='0ms' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
         setIsVisible(true);
      }
    }, { threshold: 0.05, rootMargin: '200px 0px 50px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default function Services() {
  const allServices = [
    {
      id: 'websites-web-apps',
      icon: Globe,
      title: 'Websites & Web Apps',
      desc: 'Modern web applications engineered for speed, SEO, and flawless UX.',
      path: '/services/websites-web-apps',
      img: imgWeb,
      color: 'bg-sky-500',
      hoverColor: 'group-hover:text-sky-500'
    },
    {
      id: 'ecommerce-stores',
      icon: ShoppingBag,
      title: 'E-commerce Stores',
      desc: 'High-converting online storefronts with seamless payment gateways.',
      path: '/services/ecommerce-stores',
      img: imgEcom,
      color: 'bg-rose-500',
      hoverColor: 'group-hover:text-rose-500'
    },
    {
      id: 'crm-erp-systems',
      icon: Database,
      title: 'CRM & ERP Systems',
      desc: 'Tailored enterprise platforms for automating critical business operations.',
      path: '/services/crm-erp-systems',
      img: imgCrm,
      color: 'bg-emerald-500',
      hoverColor: 'group-hover:text-emerald-500'
    },
    {
      id: 'whatsapp-api-bots',
      icon: Code,
      title: 'WhatsApp API & Bots',
      desc: 'Automated messaging infrastructure and customer support integrations.',
      path: '/services/whatsapp-api-bots',
      img: imgWa,
      color: 'bg-amber-500',
      hoverColor: 'group-hover:text-amber-500'
    },
    {
      id: 'ai-automation',
      icon: Bot,
      title: 'AI & Automation',
      desc: 'Custom AI agents and business process automation to optimize output.',
      path: '/services/ai-automation',
      img: imgAi,
      color: 'bg-sky-500',
      hoverColor: 'group-hover:text-sky-500'
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      title: 'Mobile Apps',
      desc: 'Cross-platform mobile applications for flawless iOS & Android UX.',
      path: '/services/mobile-apps',
      img: imgMob,
      color: 'bg-rose-500',
      hoverColor: 'group-hover:text-rose-500'
    },
    {
      id: 'digital-marketing-seo',
      icon: Share2,
      title: 'Marketing & SEO',
      desc: 'Data-driven search engine optimization and PPC advertising campaigns.',
      path: '/services/digital-marketing-seo',
      img: imgSeo,
      color: 'bg-emerald-500',
      hoverColor: 'group-hover:text-emerald-500'
    },
    {
      id: 'branding-creative',
      icon: Palette,
      title: 'Branding & Creative',
      desc: 'Complete brand identity design, logo design, and UI/UX systems.',
      path: '/services/branding-creative',
      img: imgBrand,
      color: 'bg-amber-500',
      hoverColor: 'group-hover:text-amber-500'
    },
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      desc: 'DevOps automation, CI/CD pipelines, and cloud security architectures.',
      path: '/services/cloud-infrastructure',
      img: imgCloud,
      color: 'bg-sky-500',
      hoverColor: 'group-hover:text-sky-500'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#050B14] min-h-screen transition-colors duration-300">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-transparent pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-sky-900/5 dark:bg-sky-900/10 blur-3xl rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <ScrollSlideSection className="flex flex-col text-center lg:text-left">
            <h4 className="text-sky-500 font-semibold tracking-widest text-sm uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-6 bg-sky-500 inline-block block"></span>
              OUR TECHNICAL CAPABILITIES
            </h4>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.1]">
              End-to-End Technology &<br className="hidden lg:block" /> Software Services
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              From modern web products to enterprise AI integration, explore how ZAVYX Infotech delivers end-to-end software structural builds and automation.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8">
              <Link
                to="/contact"
                className="px-6 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-rose-600 hover:opacity-95 transition-all text-base sm:text-lg shadow-xl hover:scale-[1.02]"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-all text-base sm:text-lg shadow-sm group"
              >
                Our Agency <ArrowRight className="w-5 h-5 text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollSlideSection>

          <ScrollSlideSection delay="100ms" className="relative h-[350px] sm:h-[450px] lg:h-[600px] bg-transparent">
            <video 
              src={heroVid} 
              className="w-full h-full object-contain" 
              autoPlay 
              muted 
              loop 
              playsInline 
            />
          </ScrollSlideSection>
          
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <ScrollSlideSection>
             <h4 className="text-emerald-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center gap-2">
               <span className="w-4 h-4 bg-emerald-500 text-white rounded-sm flex items-center justify-center text-[10px]">&plus;</span>
               What we do
             </h4>
             <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
               Empowering You to<br />
               <span className="text-slate-500 dark:text-slate-400">Achieve Lasting<br />Digital Transformation</span>
             </h2>
          </ScrollSlideSection>

          <ScrollSlideSection delay="100ms" className="flex flex-col">
             <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
               At ZAVYX InfoTech, we believe that true transformation starts with robust architecture and precision execution. Our comprehensive technology services are engineered to provide maximum scalability, security, and performance.
             </p>
             <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
               Whether you\'re looking to modernize legacy systems, automate critical pipelines, or build highly responsive consumer platforms, we\'re here to guide you every step of the way.
             </p>
             
             <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-6">Key Areas We Focus On:</h4>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Enterprise Systems (ERP)", 
                  "Cloud Scalability & AWS", 
                  "Cross-Platform Native Apps", 
                  "AI Workflow Automations",
                  "Secure Payment Integrations",
                  "Performance SEO Tuning"
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                     <span className="text-slate-700 dark:text-slate-300 font-semibold">{item}</span>
                   </div>
                ))}
             </div>
          </ScrollSlideSection>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="bg-white dark:bg-slate-900/50 py-24 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <ScrollSlideSection className="shrink-0 relative">
               <h4 className="text-amber-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center gap-2">
                 <span className="w-4 h-4 bg-amber-500 text-white rounded-sm flex items-center justify-center text-[10px]">&plus;</span>
                 Why Choose Us?
               </h4>
               <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-10">
                 Why Choose Us for <span className="text-slate-500 dark:text-slate-400 font-light">Your Tech Transformation Strategy?</span>
               </h2>
               
               <div className="relative w-full h-[350px] sm:h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-slate-50 dark:border-slate-800">
                  <img src={laptopMockup} alt="Mockup" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-slate-900/20"></div>
                  {/* Play Button Mock */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                     <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-slate-900 border-b-[12px] border-b-transparent ml-2"></div>
                  </div>
               </div>
            </ScrollSlideSection>

            <ScrollSlideSection delay="100ms" className="flex flex-col gap-4 sm:gap-6 mt-8 lg:mt-32">
               {[
                 { icon: ShieldCheck, title: "Certified Expert Engineering", desc: "Work with professionally certified stack architects committed to zero-downtime scalability.", color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10" },
                 { icon: TrendingUp, title: "Proven Startup Success", desc: "Join hundreds of firms who have unlocked their potential capabilities and exploded their metrics.", color: "text-sky-500 bg-sky-50 dark:bg-sky-500/10" },
                 { icon: Cpu, title: "Customized Architecture Plans", desc: "Get engineering tailored to your unique scaling goals with crystal clear milestone roadmaps.", color: "text-amber-500 bg-amber-50 dark:bg-amber-500/10" },
                 { icon: LifeBuoy, title: "24/7 Dedicated Support Space", desc: "Get support tailored to your exact deployment environment with instant bug resolution.", color: "text-rose-500 bg-rose-50 dark:bg-rose-500/10" }
               ].map((feature, i) => {
                 const Icon = feature.icon;
                 return (
                   <div key={i} className="flex gap-6 bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-[30px] border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                      <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center ${feature.color} border border-current/20`}>
                         <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                         <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                         <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                   </div>
                 )
               })}
            </ScrollSlideSection>

        </div>
      </section>

      {/* 4. OUR SERVICES GRID */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
         <ScrollSlideSection className="text-center max-w-4xl mx-auto mb-16">
            <h4 className="text-sky-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-4 h-4 bg-sky-500 text-white rounded-sm flex items-center justify-center text-[10px]">&plus;</span>
              Our Services
            </h4>
            <h2 className="text-4xl sm:text-5xl border-slate-900 font-extrabold text-slate-900 dark:text-white leading-tight">
              Tailored Services to <span className="text-slate-500 dark:text-slate-400 font-light">Grow & Protect Your Tech Ecosystem</span>
            </h2>
         </ScrollSlideSection>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {allServices.map((svc, idx) => {
               const Icon = svc.icon;
               return (
                 <ScrollSlideSection 
                    key={svc.id} 
                    delay={`${(idx % 3) * 100}ms`}
                 >
                    <Link to={svc.path} className="group block bg-white dark:bg-slate-800 rounded-[40px] overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 h-[420px] flex flex-col relative">
                       {/* Top Text Content */}
                       <div className="p-8 relative z-10 flex-1">
                          <h3 className={`text-2xl font-extrabold text-slate-900 dark:text-white mb-3 transition-colors duration-300 ${svc.hoverColor}`}>
                             {svc.title}
                          </h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-[15px] font-medium leading-relaxed max-w-[85%]">
                             {svc.desc}
                          </p>
                          {/* Corner Arrow */}
                          <div className="absolute top-8 right-8 w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 group-hover:border-transparent transition-all duration-300">
                             <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </div>
                       </div>
                       
                       {/* Bottom Image & Icon */}
                       <div className="relative h-[220px] w-full mt-auto">
                          <img src={svc.img} alt={svc.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className={`absolute bottom-6 left-6 w-14 h-14 flex items-center justify-center rounded-2xl text-white shadow-lg ${svc.color}`}>
                             <Icon className="w-7 h-7" />
                          </div>
                          {/* Inner Shadow Overlay for depth */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                       </div>
                    </Link>
                 </ScrollSlideSection>
               );
            })}
         </div>
      </section>

    </div>
  );
}

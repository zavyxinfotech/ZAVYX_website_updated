import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Activity, Cpu, Layers, Rocket } from 'lucide-react';
import { AnimatedHeroText } from '../components/HeroEffects';

const serviceData = {
  'websites-web-apps': {
    title: 'Websites & Web Apps',
    subtitle: 'Lightning-fast React, Vite & Next.js web applications',
    desc: 'We design and develop custom web applications optimized for speed, conversion, responsive UX, and scalable architecture.',
    deliverables: ['Custom React/Next.js frontend', 'RESTful API integration', 'SEO optimization & meta tags', 'Responsive layout & mobile performance', 'Content Management System (CMS)']
  },
  'crm-erp-systems': {
    title: 'CRM & ERP Systems',
    subtitle: 'Custom business management & inventory automation',
    desc: 'Streamline client management, sales pipelines, inventory tracking, and employee workflows with enterprise-grade ERP portals.',
    deliverables: ['Role-based access control', 'Custom reporting dashboards', 'Automated invoicing & billing', 'Database migration & API integrations', 'Multi-tenant architecture']
  },
  'mobile-apps': {
    title: 'Mobile Apps (iOS & Android)',
    subtitle: 'High-performance React Native & Flutter mobile applications',
    desc: 'Deliver seamless mobile experiences across iOS and Android with custom offline storage, push notifications, and biometric security.',
    deliverables: ['Cross-platform iOS & Android apps', 'Native device API integration', 'Push notifications & analytics', 'App Store & Play Store publishing', 'UI/UX animation & micro-interactions']
  },
  'ai-automation': {
    title: 'AI & Automation',
    subtitle: 'LLM agents, intelligent chatbots & process automation',
    desc: 'Automate repetitive operations, customer support, document extraction, and workflow pipelines using cutting-edge AI models.',
    deliverables: ['Custom AI chat agents', 'Document parsing & OCR', 'Workflow automation (n8n/Zapier/Python)', 'Fine-tuned LLM solutions', 'Real-time analytics dashboard']
  },
  'cloud-infrastructure': {
    title: 'Cloud & Infrastructure',
    subtitle: 'AWS, Azure & Google Cloud DevOps & security',
    desc: 'Architect secure, auto-scaling cloud environments with CI/CD automation, serverless microservices, and 99.99% uptime guarantees.',
    deliverables: ['Cloud architecture & migration', 'DevOps & CI/CD deployment pipelines', 'Docker & Kubernetes orchestration', 'Security hardening & compliance', 'Database optimization & backup']
  },
  'whatsapp-api-bots': {
    title: 'WhatsApp API & Bots',
    subtitle: 'Automated Meta WhatsApp Business Messaging',
    desc: 'Engage customers directly on WhatsApp with automated broadcasting, AI support bots, order tracking, and lead capture.',
    deliverables: ['Official Meta Business API setup', 'Automated chatbot workflows', 'Broadcast campaign manager', 'CRM & payment gateway integration', 'Analytics & response tracking']
  },
  'ecommerce-stores': {
    title: 'E-commerce Stores',
    subtitle: 'Scalable online storefronts & payment gateways',
    desc: 'Boost online sales with high-converting e-commerce web applications featuring instant checkout, inventory sync, and multi-currency support.',
    deliverables: ['Stripe/Razorpay payment gateway', 'Real-time inventory sync', 'Cart & checkout optimization', 'Customer order portal', 'Promotions & discount engine']
  },
  'digital-marketing-seo': {
    title: 'Digital Marketing & SEO',
    subtitle: 'Data-driven SEO & growth marketing campaigns',
    desc: 'Dominate search rankings and drive qualified organic and paid traffic with structured data, technical SEO, and conversion rate optimization.',
    deliverables: ['Technical SEO audit & fixes', 'Keyword strategy & content plan', 'Google Ads & PPC management', 'Speed & Web Vitals optimization', 'Conversion tracking & analytics']
  },
  'branding-creative': {
    title: 'Branding & Creative',
    subtitle: 'Brand identity, UI/UX design systems & graphics',
    desc: 'Establish a standout brand image with custom logo systems, modern color palettes, typography guidelines, and web design systems.',
    deliverables: ['Brand identity guidelines', 'Figma UI/UX design systems', 'Logo design & typography', 'Marketing graphic templates', 'Interactive prototypes']
  }
};

const ScrollSlideSection = ({ children, className = '', delay='0ms', direction = 'up' }) => {
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

  let translateClass = '';
  switch(direction) {
    case 'left': translateClass = '-translate-x-12'; break;
    case 'right': translateClass = 'translate-x-12'; break;
    case 'down': translateClass = '-translate-y-12'; break;
    case 'up': default: translateClass = 'translate-y-12'; break;
  }

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] md:duration-1000 ${isVisible ? 'translate-x-0 translate-y-0 opacity-100' : `${translateClass} opacity-0`} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId] || serviceData['websites-web-apps'];

  const processSteps = [
    { icon: Activity, title: '1. Discovery & Analysis', desc: 'We analyze your requirements, business goals, and current infrastructure to create a comprehensive project roadmap.' },
    { icon: Layers, title: '2. UI/UX & Architecture', desc: 'Our design and engineering teams collaborate to prototype user interfaces and design scalable system architectures.' },
    { icon: Cpu, title: '3. Agile Development', desc: 'We execute sprints with rigorous code quality, delivering iterative features for continuous feedback and improvement.' },
    { icon: Rocket, title: '4. Testing & Deployment', desc: 'Extensive QA testing ensures security and performance before launching your product to live production environments.' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#050B14] min-h-screen transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-transparent">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <ScrollSlideSection direction="up" className="w-full">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-500 hover:text-sky-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <h4 className="text-sky-500 font-bold tracking-widest text-sm uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-1.5 h-6 bg-sky-500 inline-block block"></span>
              ZAVYX SERVICE CAPABILITY
            </h4>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1] drop-shadow-sm">
              <AnimatedHeroText text={service.title} />
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10">
              {service.subtitle}
            </p>
          </ScrollSlideSection>
        </div>
      </section>

      {/* OVERVIEW CONTENT */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Description Blocks */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-10">
               <ScrollSlideSection direction="left" className="bg-white dark:bg-slate-800/80 rounded-[40px] p-8 sm:p-12 border border-slate-200 dark:border-slate-700/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-sky-500/10 dark:bg-sky-500/20 rounded-full blur-3xl"></div>
                 <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                   Overview
                 </h2>
                 <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                   {service.desc}
                 </p>
               </ScrollSlideSection>

               {/* KEY DELIVERABLES */}
               <ScrollSlideSection delay="100ms" direction="left" className="bg-white dark:bg-slate-800/80 rounded-[40px] p-8 sm:p-12 border border-slate-200 dark:border-slate-700/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                 <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
                   Key Deliverables 
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 z-10 relative">
                   {service.deliverables.map((item, idx) => (
                     <div key={idx} className="flex items-start gap-4 bg-slate-50 dark:bg-slate-900/80 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 group">
                       <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                       <span className="text-slate-700 dark:text-slate-300 font-semibold leading-snug">{item}</span>
                     </div>
                   ))}
                 </div>
               </ScrollSlideSection>
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-32">
               <ScrollSlideSection direction="right" className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-[40px] p-8 sm:p-10 border border-slate-700 shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <h3 className="text-2xl font-normal tracking-tight text-white mb-4 relative z-10">Ready to build?</h3>
                 <p className="text-slate-300 text-base mb-8 relative z-10 leading-relaxed">
                   Consult with our lead architects to blueprint your <span className="text-sky-400 font-bold">{service.title}</span> requirements. We provide scalable action plans within 24 hours.
                 </p>
                 <Link
                   to="/contact"
                   className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-full shadow-sm relative z-10"
                 >
                   <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0a192f_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#0a192f] font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 group-hover:border-transparent">
                     Request Proposal <ArrowRight className="w-5 h-5 text-[#0a192f] group-hover:translate-x-1 transition-transform" />
                   </span>
                 </Link>
               </ScrollSlideSection>
            </div>

          </div>
        </div>
      </section>

      {/* OUR PROCESS SECTION */}
      <section className="py-24 border-t border-slate-200 dark:border-slate-800 relative z-10 bg-slate-50 dark:bg-[#050B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollSlideSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-amber-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-4 h-4 bg-amber-500 text-white rounded-sm flex items-center justify-center text-[10px]">&plus;</span>
              Implementation Strategy
            </h4>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              Our Process
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              A structured, transparent engineering lifecycle designed to minimize risk and accelerate deployment speed.
            </p>
          </ScrollSlideSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollSlideSection key={idx} delay={`${idx * 150}ms`} direction="up" className="relative group bg-white dark:bg-slate-800/80 rounded-[30px] p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-slate-900/80 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 border border-sky-100 dark:border-slate-700">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-sky-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </ScrollSlideSection>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

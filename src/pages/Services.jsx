import React from 'react';
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
  ArrowRight 
} from 'lucide-react';

export default function Services() {
  const allServices = [
    {
      id: 'websites-web-apps',
      icon: Globe,
      title: 'Websites & Web Apps',
      desc: 'Modern web applications built with React, Vite, Next.js, and custom APIs for lightning-fast performance and conversion.',
      path: '/services/websites-web-apps',
      badgeColor: 'text-sky-700 bg-sky-50 border-sky-200'
    },
    {
      id: 'ecommerce-stores',
      icon: ShoppingBag,
      title: 'E-commerce Stores',
      desc: 'High-converting online storefronts with seamless payment gateways, inventory sync, and order management.',
      path: '/services/ecommerce-stores',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    {
      id: 'crm-erp-systems',
      icon: Database,
      title: 'CRM & ERP Systems',
      desc: 'Tailored enterprise platforms for automating business operations, HR, finance, and customer relationship data.',
      path: '/services/crm-erp-systems',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      id: 'whatsapp-api-bots',
      icon: Code,
      title: 'WhatsApp API & Bots',
      desc: 'Automated messaging infrastructure, broadcasting bots, and customer support integrations via Meta WhatsApp API.',
      path: '/services/whatsapp-api-bots',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      id: 'ai-automation',
      icon: Bot,
      title: 'AI & Automation',
      desc: 'Custom AI agents, LLM integrations, document parsing, and business process automation to optimize output.',
      path: '/services/ai-automation',
      badgeColor: 'text-sky-700 bg-sky-50 border-sky-200'
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      title: 'Mobile Apps (iOS & Android)',
      desc: 'Cross-platform mobile applications engineered with React Native and Flutter for flawless iOS & Android UX.',
      path: '/services/mobile-apps',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    {
      id: 'digital-marketing-seo',
      icon: Share2,
      title: 'Digital Marketing & SEO',
      desc: 'Data-driven search engine optimization, pay-per-click advertising campaigns, and technical SEO growth strategies.',
      path: '/services/digital-marketing-seo',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    {
      id: 'branding-creative',
      icon: Palette,
      title: 'Branding & Creative',
      desc: 'Complete brand identity design, logo design, UI/UX design systems, and marketing graphic assets.',
      path: '/services/branding-creative',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      desc: 'AWS, Azure, and Google Cloud management, DevOps automation, CI/CD pipelines, and cloud security audits.',
      path: '/services/cloud-infrastructure',
      badgeColor: 'text-sky-700 bg-sky-50 border-sky-200'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-sky-700 bg-sky-100 border border-sky-300 uppercase mb-4">
            OUR TECHNICAL CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            End-to-End Technology & Software Services
          </h1>
          <p className="text-slate-700 text-lg leading-relaxed font-medium">
            From modern web products to enterprise AI integration, explore how ZAVYX Infotech delivers end-to-end software solutions.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div 
                key={svc.id}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-sky-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-all ${svc.badgeColor}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">{svc.desc}</p>
                </div>
                <Link
                  to={svc.path}
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

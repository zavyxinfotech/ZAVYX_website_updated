import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';

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

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId] || serviceData['websites-web-apps'];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BACK LINK */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

        {/* HERO SECTION */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 mb-12 shadow-sm">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-sky-700 bg-sky-100 border border-sky-300 uppercase mb-4">
            ZAVYX SERVICE CAPABILITY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">{service.title}</h1>
          <p className="text-sky-700 text-lg font-semibold mb-6">{service.subtitle}</p>
          <p className="text-slate-600 text-base leading-relaxed max-w-3xl mb-8 font-normal">{service.desc}</p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-rose-600 hover:opacity-95 transition-all text-base shadow-md"
          >
            Request Proposal for {service.title} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* DELIVERABLES */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Deliverables & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm text-slate-800 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

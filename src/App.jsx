import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));

const PageLoader = () => (
  <div className="flex items-center justify-center w-full min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-slate-200 dark:border-slate-800 border-t-sky-500 rounded-full animate-spin"></div>
  </div>
);

// High-impact SEO Route Map:
// - Home page: Company Name + Slogan ("Digital Solutions for Business")
// - Internal pages: Strictly NO "About" or "Services" words — ONLY strong Google search SEO keywords
const seoMap = {
  '/': {
    title: 'ZAVYX Infotech — Digital Solutions for Business',
    description: 'ZAVYX Infotech delivers custom web apps, mobile engineering, AI automation, CRM/ERP systems, and digital transformation solutions for growing businesses.'
  },
  '/about': {
    title: 'ZAVYX Infotech — Custom Software Engineering & Enterprise Technology Company',
    description: 'ZAVYX Infotech is a premier software engineering & enterprise technology company delivering scalable digital solutions, cloud infrastructure, and AI automation.'
  },
  '/services': {
    title: 'ZAVYX Infotech — Custom Web Apps, Mobile Engineering & AI Solutions',
    description: 'Explore high-performance custom web applications, iOS & Android mobile apps, CRM/ERP software, WhatsApp API bots, and cloud infrastructure by ZAVYX Infotech.'
  },
  '/services/websites-web-apps': {
    title: 'Custom Web Application & Enterprise Software Development | ZAVYX Infotech',
    description: 'High-performance custom web applications, SaaS platforms, and enterprise web engineering by ZAVYX Infotech.'
  },
  '/services/ecommerce-stores': {
    title: 'Scalable E-Commerce Store Development & Digital Commerce Solutions | ZAVYX Infotech',
    description: 'Custom e-commerce storefront development, online payment gateways, and scalable digital commerce engineering by ZAVYX Infotech.'
  },
  '/services/crm-erp-systems': {
    title: 'Custom CRM & ERP Software Systems Development | ZAVYX Infotech',
    description: 'Tailored enterprise CRM & ERP systems, workflow automation, and business analytics integration by ZAVYX Infotech.'
  },
  '/services/whatsapp-api-bots': {
    title: 'WhatsApp Business API Integration & Automated AI Chatbots | ZAVYX Infotech',
    description: 'Official WhatsApp Business API integration, AI customer support chatbots, and automated marketing workflows by ZAVYX Infotech.'
  },
  '/services/ai-automation': {
    title: 'AI Automation & Custom Machine Learning Integration | ZAVYX Infotech',
    description: 'Enterprise AI automation, custom machine learning models, and intelligent business process optimization by ZAVYX Infotech.'
  },
  '/services/mobile-apps': {
    title: 'iOS & Android Mobile App Development Engineering | ZAVYX Infotech',
    description: 'Native & cross-platform iOS and Android mobile app development with high-performance UI/UX by ZAVYX Infotech.'
  },
  '/services/digital-marketing-seo': {
    title: 'Enterprise Digital Marketing & Growth SEO Optimization | ZAVYX Infotech',
    description: 'Data-driven digital marketing, search engine optimization (SEO), and targeted customer growth campaigns by ZAVYX Infotech.'
  },
  '/services/branding-creative': {
    title: 'UI/UX Design, Brand Identity & Digital Creative Studio | ZAVYX Infotech',
    description: 'Modern UI/UX design, corporate brand identity, graphic design, and digital creative assets by ZAVYX Infotech.'
  },
  '/services/cloud-infrastructure': {
    title: 'Cloud Infrastructure Architecture & DevOps Consulting | ZAVYX Infotech',
    description: 'Cloud architecture design, AWS/Azure/GCP DevOps consulting, CI/CD pipelines, and secure cloud infrastructure management by ZAVYX Infotech.'
  },
  '/contact': {
    title: 'ZAVYX Infotech — Hire Custom Software & Enterprise Technology Developers',
    description: 'Connect with ZAVYX Infotech to consult with expert software engineers, request project proposals, and accelerate your digital growth.'
  }
};

function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const routeInfo = seoMap[location.pathname] || {
      title: 'ZAVYX Infotech — Digital Solutions for Business',
      description: 'ZAVYX Infotech delivers custom software engineering, AI automation, and cloud solutions.'
    };

    document.title = routeInfo.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', routeInfo.description);
    }

    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <SEOUpdater />
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

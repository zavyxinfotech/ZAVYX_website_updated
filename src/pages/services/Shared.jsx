import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, ShoppingBag, ShoppingCart, Lock, CreditCard, Package, Smartphone, TrendingUp, Headphones, 
  Users, Database, Layers, BarChart3, Cpu, MessageSquare, Bot, Bell, Megaphone, Globe, Zap, Sparkles, 
  Award, ShieldCheck, Clock, CheckCircle2, Heart, Compass, FileText, Target, Server, Shield, Share2, 
  Eye, Infinity, Check, ArrowUpRight, ArrowRight
} from 'lucide-react';

import webAppsHeroImg from '../../../assets/images/website_webapps_hero_image.webp';
import ecommerceHeroImg from '../../../assets/images/e_commerce_stores_hero_transparent.webp';
import crmErpHeroImg from '../../../assets/images/CRM_ERP__systems_hero_img.webp';
import whatsappHeroImg from '../../../assets/images/whatsapp_API_hero_img.webp';
import analyticsDashboardImg from '../../../assets/images/website_analytics_dashboard_mockup.webp';
import ecommerceWomanImg from '../../../assets/images/ecommerce_growth_partner_v2.webp';
import fashionCaseStudyImg from '../../../assets/images/fashion_ecommerce_case_study.webp';
import crmDashboardImg from '../../../assets/images/crm_erp_dashboard_mockup.webp';
import whatsappAnalyticsImg from '../../../assets/images/whatsapp_analytics_dashboard_visual.webp';
import digitalMarketingHeroImg from '../../../assets/images/digital_marketing_hero_transparent.webp';
import digitalMarketingTrustedPartnerImg from '../../../assets/images/digital_marketing_trusted_partner_visual.webp';


export const officialTechLogos = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Shopify': 'https://cdn.simpleicons.org/shopify/95BF47',
  'WooCommerce': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'WhatsApp': 'https://cdn.simpleicons.org/whatsapp/25D366',
  'Meta': 'https://cdn.simpleicons.org/meta/0467DF',
  'OpenAI': 'https://api.iconify.design/logos:openai-icon.svg',
  'FastAPI': 'https://cdn.simpleicons.org/fastapi/009688'
};

export const ScrollSlideSection = ({ children, className = '', delay = '0ms', direction = 'up' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0, rootMargin: '40px 0px -5% 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translateClass = direction === 'left' ? '-translate-x-6 sm:-translate-x-12' : 
                         direction === 'right' ? 'translate-x-6 sm:translate-x-12' : 
                         direction === 'up' ? 'translate-y-6 sm:translate-y-12' : '-translate-y-6 sm:-translate-y-12';

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'translate-x-0 translate-y-0 opacity-100' : `${translateClass} opacity-0`} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export const pageConfigs = {
    'websites-web-apps': {
      breadcrumb: 'Websites & Web Apps',
      tag: 'OUR SERVICE',
      title: 'Websites & Web Apps',
      subheadline: 'Modern, high-performance web applications designed for speed, SEO, and seamless user experiences.',
      desc: 'We design and develop custom websites and web applications that help businesses grow, engage users, and achieve real results in the digital world.',
      heroImg: webAppsHeroImg,
      badgeText: 'Responsive Fast Secure',
      stats: [
        { label: 'Web Projects Delivered', val: '100+' },
        { label: 'Happy Clients', val: '250+' },
        { label: 'Years of Experience', val: '5+' },
        { label: 'Client Satisfaction', val: '99%' }
      ],
      whatWeBuildTag: 'WHAT WE BUILD',
      whatWeBuildTitle: 'Custom Web Solutions for Every Business Need',
      whatWeBuildSub: 'From business websites to complex web applications, we build scalable, secure, and user-friendly solutions tailored to your goals.',
      cards: [
        { title: 'Business Websites', desc: 'Professional, SEO-friendly websites that build your brand and attract more customers.', color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400', icon: Monitor },
        { title: 'Web Applications', desc: 'Custom web apps to automate processes, manage data, and improve productivity.', color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400', icon: ShoppingBag },
        { title: 'E-commerce Websites', desc: 'High-converting online stores with secure payment gateways and scalable architecture.', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400', icon: ShoppingCart },
        { title: 'Web Portals', desc: 'Customer portals, employee portals, and admin dashboards tailored to your workflow.', color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400', icon: Lock }
      ],
      whyTag: 'WHY IT MATTERS',
      whyTitle: 'Build a Strong Digital Presence',
      whyDesc: 'A well-designed website or web application helps you reach more customers, streamline operations, and stay ahead of your competition.',
      checkmarks: [
        'Enhances brand credibility',
        'Improves customer engagement',
        'Accessible anytime, anywhere',
        'Scalable for future growth'
      ],
      whyVisual: analyticsDashboardImg,
      processTag: 'OUR DEVELOPMENT PROCESS',
      processTitle: 'From Idea to Launch',
      processSub: 'A streamlined process to ensure your web solution is delivered with quality and on time.',
      steps: [
        { num: '01', title: 'Discover', desc: 'Understand your goals and requirements' },
        { num: '02', title: 'Plan', desc: 'Create strategy and project roadmap' },
        { num: '03', title: 'Design', desc: 'Craft modern and user-friendly UI/UX' },
        { num: '04', title: 'Develop', desc: 'Build with best practices and clean code' },
        { num: '05', title: 'Test & Launch', desc: 'Ensure quality and deploy with confidence' }
      ],
      techTitle: 'Reliable Technologies for Modern Web Solutions',
      techs: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Laravel', 'PHP', 'MySQL', 'MongoDB'],
      benefits: [
        { title: 'High Performance', desc: 'Optimized for speed and reliability' },
        { title: 'Secure & Scalable', desc: 'Enterprise-grade security and scalability' },
        { title: 'SEO Friendly', desc: 'Built with search engine best practices' },
        { title: 'Ongoing Support', desc: 'Continuous updates and maintenance' }
      ],
      ctaTitle: 'Have a project in mind?',
      ctaSub: "Let's turn your ideas into powerful digital solutions.",
      primaryCta: 'Discuss Your Project',
      secondaryCta: 'View Our Work'
    },

    'ecommerce-stores': {
      breadcrumb: 'E-Commerce Stores',
      tag: 'OUR E-COMMERCE SERVICES',
      title: 'Custom E-Commerce Stores built for High Conversions',
      subheadline: 'We design & build high-converting online stores that drive real business growth.',
      desc: 'Feature-rich, scalable, and secure online stores tailored to your brand to showcase products and grow sales.',
      heroImg: ecommerceHeroImg,
      badgeText: 'Scalable Stores & Gateways',
      stats: [
        { label: 'E-commerce Projects', val: '100+' },
        { label: 'Happy Clients', val: '250+' },
        { label: 'Years of Experience', val: '5+' },
        { label: 'Client Satisfaction', val: '99%' }
      ],
      whatWeBuildTag: 'OUR E-COMMERCE SERVICES',
      whatWeBuildTitle: 'Complete E-commerce Solutions for Your Business',
      whatWeBuildSub: 'From strategy to launch, we provide end-to-end e-commerce solutions tailored to your business goals.',
      cards: [
        { title: 'Custom E-commerce Store Development', desc: 'Feature-rich, scalable, and secure online stores tailored to your brand.', color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400', icon: ShoppingCart },
        { title: 'Payment Gateway Integration', desc: 'Secure and seamless payment processing with multiple options.', color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400', icon: CreditCard },
        { title: 'Product & Inventory Management', desc: 'Easy product upload, stock management, and order tracking.', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400', icon: Package },
        { title: 'Mobile-Optimized Stores', desc: 'Fully responsive and mobile-friendly stores for a smooth shopping experience.', color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400', icon: Smartphone },
        { title: 'SEO & Marketing Integration', desc: 'Built-in SEO, analytics, and marketing tools to boost your sales.', color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400', icon: TrendingUp },
        { title: 'Ongoing Support & Maintenance', desc: 'Reliable support to keep your store running smoothly.', color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400', icon: Headphones }
      ],
      whyTag: 'WHY CHOOSE US?',
      whyTitle: 'Your E-commerce Growth Partner',
      whyDesc: 'We combine creativity, technology, and e-commerce expertise to build online stores that deliver real results. Our focus is on creating seamless shopping experiences that turn visitors into loyal customers.',
      pillars: [
        { title: 'Strategic Approach', desc: 'Focused on your business goals' },
        { title: 'Industry Expertise', desc: 'Proven e-commerce experience' },
        { title: 'Scalable Solutions', desc: 'Grow without limitations' },
        { title: 'Dedicated Support', desc: "We're with you every step" }
      ],
      whyVisual: ecommerceWomanImg,
      platformsTag: 'PLATFORMS WE WORK WITH',
      platformsTitle: 'Flexible Solutions for Every Business',
      platforms: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'PrestaShop', 'Custom Solutions'],
      caseStudyTag: 'SUCCESS STORIES',
      caseStudyTitle: 'Real Results for Real Businesses',
      caseStudyVisual: fashionCaseStudyImg,
      caseStudyHeader: 'Building a High-Converting Fashion E-commerce Store',
      caseStudyDesc: 'We developed a feature-rich online store for a fashion brand with seamless shopping experience, secure payments, and marketing integrations. The result was a 2.5x increase in sales within 6 months.',
      caseStudyStats: [
        { val: '2.5x', label: 'Increase in Sales' },
        { val: '40%', label: 'More Customers' },
        { val: '60%', label: 'Higher Engagement' }
      ],
      ctaTitle: 'Ready to Start Your Online Store?',
      ctaSub: "Let's turn your products into a successful online business.",
      primaryCta: 'Discuss Your Project',
      secondaryCta: 'Explore Our Work'
    },

    'crm-erp-systems': {
      breadcrumb: 'CRM & ERP Systems',
      tag: 'OUR CRM & ERP SOLUTIONS',
      title: 'Custom CRM & ERP Systems for Operational Excellence',
      subheadline: 'Streamline client management, sales pipelines, inventory tracking, and employee workflows with enterprise-grade ERP portals.',
      desc: 'Centralize company data, automate complex business workflows, and empower leadership with real-time decision analytics.',
      heroImg: crmErpHeroImg,
      badgeText: 'Automated Operations & Analytics',
      stats: [
        { label: 'Enterprise Implementations', val: '85+' },
        { label: 'Happy Enterprise Clients', val: '200+' },
        { label: 'Years of ERP Expertise', val: '5+' },
        { label: 'Client Satisfaction', val: '99%' }
      ],
      whatWeBuildTag: 'OUR CRM & ERP SERVICES',
      whatWeBuildTitle: 'Tailored Enterprise Systems for Business Scaling',
      whatWeBuildSub: 'We architect end-to-end custom CRM & ERP applications that eliminate operational bottlenecks.',
      cards: [
        { title: 'Custom CRM Development', desc: 'Manage leads, track customer interactions, and automate sales pipelines.', color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400', icon: Users },
        { title: 'Enterprise ERP Systems', desc: 'Centralize inventory, supply chain, HR, and financial management.', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400', icon: Database },
        { title: 'Workflow & Process Automation', desc: 'Eliminate repetitive manual tasks with automated triggers and alerts.', color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400', icon: Layers },
        { title: 'Data Analytics & BI Dashboards', desc: 'Real-time executive reporting dashboards for data-driven decisions.', color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400', icon: BarChart3 },
        { title: 'API & Gateway Integrations', desc: 'Seamlessly connect with payment processors, WhatsApp API, and email.', color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400', icon: Cpu },
        { title: 'Role-Based Security & Access', desc: 'Granular admin permission controls, encryption, and audit logs.', color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400', icon: Lock }
      ],
      whyTag: 'WHY IT MATTERS',
      whyTitle: 'Transform Your Business Operations',
      whyDesc: 'A tailored CRM or ERP platform unifies company knowledge, boosts team productivity, and drastically reduces operational costs.',
      checkmarks: [
        'Centralizes company data & workflows',
        'Increases team productivity & efficiency',
        'Reduces operational costs & manual errors',
        'Provides real-time business insights'
      ],
      whyVisual: crmDashboardImg,
      processTag: 'IMPLEMENTATION PROCESS',
      processTitle: 'From Architecture to Enterprise Rollout',
      processSub: 'A rigorous engineering lifecycle for enterprise software.',
      steps: [
        { num: '01', title: 'Discovery', desc: 'Audit workflows and define system architecture' },
        { num: '02', title: 'Blueprint', desc: 'Design database schema and API contracts' },
        { num: '03', title: 'Development', desc: 'Engineered with high concurrency and security' },
        { num: '04', title: 'Integration', desc: 'Connect legacy systems and third-party tools' },
        { num: '05', title: 'Deployment', desc: 'User training, data migration, and go-live support' }
      ],
      techTitle: 'Enterprise Stack & Database Systems',
      techs: ['PostgreSQL', 'MySQL', 'Node.js', 'Python', 'Docker', 'AWS', 'Zapier'],
      benefits: [
        { title: 'Unified Data', desc: 'Single source of truth for all departments' },
        { title: 'Role Security', desc: 'Bank-grade access control & encryption' },
        { title: 'Custom Dashboards', desc: 'Tailored KPIs for executive decision making' },
        { title: '24/7 SLA Support', desc: 'Dedicated engineering maintenance support' }
      ],
      ctaTitle: 'Ready to Automate Your Business Operations?',
      ctaSub: "Let's build a custom CRM/ERP system tailored specifically to your workflow.",
      primaryCta: 'Discuss Your Project',
      secondaryCta: 'Explore Systems'
    },

    'whatsapp-api-bots': {
      breadcrumb: 'WhatsApp API & Bots',
      tag: 'WHATSAPP API & BOTS',
      title: 'Smarter Conversations. Automated Growth.',
      subheadline: 'Leverage WhatsApp Business API and intelligent bots to automate conversations, enhance customer engagement, and scale your business with seamless, secure, and reliable messaging solutions.',
      desc: 'Directly reach your customers on WhatsApp with automated broadcasting, AI support bots, order tracking, and instant lead capture.',
      heroImg: whatsappHeroImg,
      badgeText: 'WhatsApp Business API Connected',
      stats: [
        { label: 'Messages Processed', val: '10M+' },
        { label: 'Businesses Enabled', val: '500+' },
        { label: 'Delivery Success', val: '98%' },
        { label: 'Customer Engagement', val: '24/7' }
      ],
      primaryCta: 'Explore WhatsApp Solutions',
      secondaryCta: 'View Demo',
      whatWeBuildTag: 'OUR WHATSAPP API & BOT SOLUTIONS',
      whatWeBuildTitle: 'WhatsApp API & Bot Solutions for Modern Businesses',
      whatWeBuildSub: 'We design and implement WhatsApp solutions that help you automate, engage, and grow — tailored to your business needs.',
      cards: [
        { title: 'WhatsApp Business API Integration', desc: 'Secure and official WhatsApp Business API setup with seamless integration to your systems.', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400', icon: MessageSquare },
        { title: 'AI Chatbots', desc: 'Intelligent chatbots to handle queries, provide instant answers, and automate workflows.', color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400', icon: Bot },
        { title: 'Automated Notifications', desc: 'Send order updates, appointment reminders, payment confirmations and more — automatically.', color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400', icon: Bell },
        { title: 'Marketing Campaigns', desc: 'Run targeted campaigns, product updates and promotions with high delivery rates.', color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400', icon: Megaphone },
        { title: 'Customer Support Automation', desc: 'Automate FAQs, ticket creation and routing to the right team for faster resolution.', color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400', icon: Headphones },
        { title: 'CRM Integration', desc: 'Connect WhatsApp with your CRM to sync leads, customers and conversations.', color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400', icon: Database }
      ],
      workflowTag: 'HOW IT WORKS',
      workflowTitle: 'From Message to Meaningful Results',
      workflowSub: 'A seamless workflow that turns conversations into customers.',
      workflowSteps: [
        { num: '1', title: 'Customer Message', detail: "Hi! I'm interested in your services.", type: 'user' },
        { num: '2', title: 'WhatsApp API', detail: 'Secure connection via WhatsApp Business API', type: 'api' },
        { num: '3', title: 'Bot / Automation', items: ['Auto Reply', 'Smart Routing', 'Data Collection', 'Workflow Triggers'], type: 'bot' },
        { num: '4', title: 'CRM System', items: ['Create / Update Lead', 'Sync Conversations', 'Track Customer Journey', 'Manage Follow-ups'], type: 'crm' },
        { num: '5', title: 'Human Agent (If Needed)', detail: 'Sure! Let me assist you further.', type: 'agent' }
      ],
      analyticsTag: 'ANALYTICS & PERFORMANCE',
      analyticsTitle: 'Track Conversations. Measure Growth.',
      analyticsSub: 'Get real-time insights into your WhatsApp communication and campaign performance.',
      analyticsBtn: 'View Live Analytics',
      analyticsVisual: whatsappAnalyticsImg,
      whyTag: 'WHY CHOOSE US',
      whyTitle: 'Why Choose Our WhatsApp Solutions?',
      whyGrid: [
        { title: '24/7 Automation', desc: 'Never miss a customer with always-on bots.', icon: Clock, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50' },
        { title: 'Faster Responses', desc: 'Reduce response time and improve satisfaction.', icon: Zap, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
        { title: 'Personalized Conversations', desc: 'Deliver tailored messages for better engagement.', icon: Sparkles, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/50' },
        { title: 'Secure API Integration', desc: 'Official WhatsApp API with enterprise-grade security.', icon: ShieldCheck, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50' },
        { title: 'Scalable Messaging', desc: 'Handle thousands of conversations effortlessly.', icon: BarChart3, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/50' },
        { title: 'Actionable Analytics', desc: 'Make data-driven decisions with real insights.', icon: TrendingUp, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/50' }
      ],
      useCasesTag: 'USE CASES',
      useCasesTitle: 'Built for Every Business Need',
      useCases: ['Sales & Lead Generation', 'Customer Support', 'Order & Delivery Updates', 'Appointment Reminders', 'Payment Notifications', 'Surveys & Feedback'],
      ctaTitle: 'Ready to Automate Your WhatsApp Communication?',
      ctaSub: "Let's turn conversations into opportunities with powerful WhatsApp solutions.",
      primaryCta: 'Get a Quote'
    },

    'digital-marketing-seo': {
      breadcrumb: 'Digital Marketing & SEO',
      tag: 'DIGITAL MARKETING & SEO',
      title: 'Grow Your Brand in the Digital World',
      subheadline: 'We create data-driven digital marketing strategies and SEO solutions that help your business get more visibility, attract the right audience, and achieve measurable growth.',
      heroImg: digitalMarketingHeroImg,
      badgeText: 'Grow Your Business',
      stats: [
        { label: 'Brands Promoted', val: '100+' },
        { label: 'Happy Clients', val: '250+' },
        { label: 'Years of Experience', val: '5+' },
        { label: 'Client Satisfaction', val: '99%' }
      ],
      primaryCta: 'Discuss Your Goals',
      secondaryCta: 'Explore Our Work',
      whatWeBuildTag: 'OUR SERVICES',
      whatWeBuildTitle: 'Comprehensive Digital Marketing Solutions',
      whatWeBuildSub: 'From strategy to execution, we offer end-to-end digital marketing services tailored to your business goals.',
      cards: [
        { title: 'Search Engine Optimization (SEO)', desc: 'Improve your website ranking and get organic traffic from search engines.', color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400', icon: Globe },
        { title: 'Social Media Marketing', desc: 'Build your brand presence on Facebook, Instagram, LinkedIn and more.', color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400', icon: Megaphone },
        { title: 'Pay Per Click (PPC) Advertising', desc: 'Get instant visibility with targeted ad campaigns that deliver real results.', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400', icon: Zap },
        { title: 'Content Marketing', desc: 'Engaging content that attracts, converts, and retains your audience.', color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400', icon: Sparkles },
        { title: 'Email Marketing', desc: 'Reach your customers with personalized email campaigns that drive action.', color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400', icon: Bell },
        { title: 'Analytics & Reporting', desc: 'Track performance with detailed reports and data-driven insights.', color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400', icon: BarChart3 }
      ],
      processTag: 'OUR PROCESS',
      processTitle: 'A Simple Process for Real Results',
      processSub: 'We follow a proven process to plan, execute, and optimize your digital marketing campaigns.',
      steps: [
        { num: '1', title: 'Research', desc: 'Understand your business and audience' },
        { num: '2', title: 'Strategy', desc: 'Create a customized digital marketing plan' },
        { num: '3', title: 'Execute', desc: 'Launch and manage campaigns across channels' },
        { num: '4', title: 'Analyze', desc: 'Track performance and make data-driven improvements' },
        { num: '5', title: 'Grow', desc: 'Achieve long-term growth and higher ROI' }
      ],
      whyTag: 'WHY CHOOSE US',
      whyTitle: 'Your Trusted Partner in Digital Growth',
      whyDesc: 'We combine creativity, data, and industry expertise to deliver digital marketing solutions that drive real business impact.',
      whyVisual: digitalMarketingTrustedPartnerImg,
      whyGrid: [
        { title: 'Result-Oriented', desc: 'Focused on measurable results and ROI.', icon: Award, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50' },
        { title: 'Experienced Team', desc: 'Skilled professionals with proven expertise.', icon: Users, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
        { title: 'Tailored Strategies', desc: 'Customized solutions for your unique goals.', icon: Sparkles, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/50' },
        { title: 'Ongoing Support', desc: 'Continuous optimization and dedicated support.', icon: Headphones, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/50' }
      ],
      caseStudyTag: 'SUCCESS STORIES',
      caseStudyTitle: 'Real Results for Real Businesses',
      caseStudyVisual: analyticsDashboardImg,
      caseStudyHeader: 'E-Commerce Brand Boosts Sales with SEO',
      caseStudyDesc: 'We implemented a complete SEO and content marketing strategy for an e-commerce client, resulting in higher search rankings, increased website traffic, and a significant growth in online sales.',
      caseStudyStats: [
        { val: '230%', label: 'Increase in Organic Traffic' },
        { val: '3x', label: 'More Conversions' },
        { val: '150%', label: 'Revenue Growth' }
      ],
      faqsTag: 'FAQ',
      faqsTitle: 'Frequently Asked Questions',
      faqsSub: "Got more questions? We're here to help.",
      faqs: [
        { q: 'How long does it take to see results from SEO?', a: 'SEO is a long-term strategy. Typically, noticeable improvements in rankings and organic traffic start appearing within 3 to 6 months of consistent optimization.' },
        { q: 'What is the budget for digital marketing?', a: 'Budgets vary based on your business size, industry, and goals. We tailor customized marketing strategies that deliver maximum ROI for your target budget.' },
        { q: 'What platforms do you manage for social media?', a: 'We manage all major social media platforms including Meta (Facebook & Instagram), LinkedIn, Twitter (X), YouTube, and Pinterest.' },
        { q: 'Can you work with small businesses?', a: 'Yes! We work with businesses of all sizes, from early-stage startups and small businesses to enterprise brands.' },
        { q: 'Do you provide content creation services?', a: 'Yes, we provide end-to-end content creation including blog posts, website copywriting, ad graphics, video scripts, and social media posts.' },
        { q: 'How do you measure campaign success?', a: 'We track clear KPIs such as conversion rates, click-through rates (CTR), organic traffic growth, cost per acquisition (CPA), and return on ad spend (ROAS).' }
      ],
      ctaTitle: 'Ready to Take Your Business to the Next Level?',
      ctaSub: "Let's create a digital marketing strategy that delivers real results.",
      primaryCta: 'Get in Touch'
    },

    'ai-automation': {
      breadcrumb: 'AI & Automation',
      tag: 'AI & AUTOMATION',
      title: 'Intelligent Automation for Smarter Business',
      subheadline: 'Leverage the power of AI and automation to reduce manual work, improve efficiency, and enable your team to focus on what truly matters.',
      desc: 'From AI chatbots to workflow automation and predictive analytics, we build intelligent solutions that transform how your business operates.',
      badgeText: 'AI-Powered Solutions',
      stats: [
        { label: 'Automation Projects', val: '60+' },
        { label: 'Happy Clients', val: '250+' },
        { label: 'Hours Saved Monthly', val: '10K+' },
        { label: 'Client Satisfaction', val: '99%' }
      ],
      primaryCta: 'Explore AI Solutions',
      secondaryCta: 'View Demo'
    },

    'mobile-apps': {
      breadcrumb: 'Mobile Apps',
      tag: 'MOBILE APP DEVELOPMENT',
      title: 'Powerful Mobile Apps for iOS & Android',
      subheadline: 'We design and develop high-quality mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
      desc: 'From concept to launch, we build mobile apps that engage users, drive business growth, and stand out in the marketplace.',
      badgeText: 'iOS & Android',
      stats: [
        { label: 'Apps Delivered', val: '80+' },
        { label: 'Happy Clients', val: '250+' },
        { label: 'App Store Rating', val: '4.9★' },
        { label: 'Client Satisfaction', val: '99%' }
      ],
      primaryCta: 'Discuss Your App',
      secondaryCta: 'View Portfolio'
    },

    'branding-creative': {
      breadcrumb: 'Branding & Creative',
      tag: 'BRANDING & CREATIVE DESIGN',
      title: 'Brands That Inspire. Designs That Convert.',
      subheadline: 'We create meaningful brands and stunning creative designs that help your business stand out, connect with your audience, and drive growth.',
      desc: 'From logo design and brand identity to marketing collateral and UI/UX, we craft compelling visuals that tell your story.',
      badgeText: 'Strategic Branding',
      stats: [
        { label: 'Brands Designed', val: '120+' },
        { label: 'Happy Clients', val: '250+' },
        { label: 'Design Awards', val: '15+' },
        { label: 'Client Satisfaction', val: '99%' }
      ],
      primaryCta: 'Start Your Brand Journey',
      secondaryCta: 'View Portfolio'
    },

    'cloud-infrastructure': {
      breadcrumb: 'Cloud & Infrastructure',
      tag: 'CLOUD & INFRASTRUCTURE',
      title: 'Scalable Cloud Solutions for Modern Businesses',
      subheadline: 'We architect, migrate, and manage cloud infrastructure that keeps your business running securely, efficiently, and at scale.',
      desc: 'From cloud migration to DevOps, server management and security, we provide end-to-end cloud solutions tailored to your needs.',
      badgeText: 'Cloud-First Architecture',
      stats: [
        { label: 'Cloud Projects', val: '70+' },
        { label: 'Happy Clients', val: '250+' },
        { label: 'Uptime Guaranteed', val: '99.9%' },
        { label: 'Client Satisfaction', val: '99%' }
      ],
      primaryCta: 'Discuss Cloud Strategy',
      secondaryCta: 'Explore Solutions'
    }
  };

export const ServiceStatsTicker = ({ stats = [] }) => {
  const defaultStats = [
    { label: 'Web Solutions Delivered', val: '50+' },
    { label: 'Happy Clients', val: '40+' },
    { label: 'Startup Energy & Speed', val: '100%' },
    { label: 'Client Satisfaction', val: '99%' }
  ];
  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <>
      {/* Mobile Auto Scroll Ticker */}
      <div className="flex lg:hidden overflow-hidden w-full py-2.5 border-t border-slate-200/80 dark:border-slate-800/80 my-2">
        <div className="flex animate-marquee whitespace-nowrap gap-6 items-center">
          {[1, 2].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-6">
              {displayStats.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-slate-900 dark:text-white">{stat.val}</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-normal">{stat.label}</span>
                  </div>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid Row */}
      <div className="hidden lg:grid grid-cols-4 gap-8 mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
        {displayStats.slice(0, 4).map((stat, idx) => (
          <div key={idx} className="flex items-start gap-4 py-1">
            <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
              {idx === 0 && <Users className="w-6 h-6" />}
              {idx === 1 && <Award className="w-6 h-6" />}
              {idx === 2 && <TrendingUp className="w-6 h-6" />}
              {idx === 3 && <Heart className="w-6 h-6" />}
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">{stat.val}</div>
              <div className="text-base text-slate-500 dark:text-slate-400 font-normal">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const ServiceCardsSection = ({ 
  tag = "WHAT WE BUILD", 
  title = "Custom Web Solutions for Every Business Need", 
  sub = "", 
  cards = [] 
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const goTo = (idx) => {
    setActiveIdx(Math.max(0, Math.min(cards.length - 1, idx)));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only treat as horizontal swipe if horizontal movement > vertical
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goTo(activeIdx + 1); // swipe left → next
      else goTo(activeIdx - 1);         // swipe right → prev
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <ScrollSlideSection direction="up" className="mb-10 text-left">
        {tag && (
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            {tag}
          </h4>
        )}
        <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-none mx-auto lg:mx-0 mb-2">
          {title}
        </h2>
        {sub && (
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal">
            {sub}
          </p>
        )}
      </ScrollSlideSection>

      {/* MOBILE SWIPE CAROUSEL (block md:hidden) */}
      <div className="block md:hidden">
        {/* Card Viewport */}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Perspective wrapper */}
          <div
            className="relative mx-auto flex items-center justify-center"
            style={{ height: 400, perspective: '900px' }}
          >
            {cards.map((card, idx) => {
              const Icon = card.icon || Monitor;
              const diff = idx - activeIdx;
              const absDiff = Math.abs(diff);
              const translateX = diff * 105;
              const rotateY = diff * -28;
              const scale = absDiff === 0 ? 1 : Math.max(0.78, 1 - absDiff * 0.14);
              const opacity = absDiff > 1 ? 0 : absDiff === 0 ? 1 : 0.55;
              const zIndex = absDiff === 0 ? 10 : 5 - absDiff;

              return (
                <div
                  key={idx}
                  className="absolute  p-6 dark:border-slate-700/80  flex flex-col justify-between group"
                  style={{
                    width: '88%',
                    height: 360,
                    transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.38s cubic-bezier(0.25,0.8,0.25,1), opacity 0.38s ease',
                    pointerEvents: absDiff === 0 ? 'auto' : 'none',
                  }}
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-none ${card.color || 'bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400'} flex items-center justify-center shrink-0 `}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="w-11 h-11  dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center group-hover:bg-[#00016E] group-hover:text-white group-hover:border-[#00016E] transition-all duration-300 shadow-sm shrink-0">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-normal text-slate-900 dark:text-white mb-2.5 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                  {/* Bottom Link */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots + Arrow Nav */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            onClick={() => goTo(activeIdx - 1)}
            disabled={activeIdx === 0}
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 disabled:opacity-30 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Previous card"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
          </button>

          <div className="flex items-center gap-2">
            {cards.map((_, dotIdx) => {
              const isActive = activeIdx === dotIdx;
              return (
                <button
                  key={dotIdx}
                  onClick={() => goTo(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-7 bg-sky-600 dark:bg-sky-400'
                      : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to card ${dotIdx + 1}`}
                />
              );
            })}
          </div>

          <button
            onClick={() => goTo(activeIdx + 1)}
            disabled={activeIdx === cards.length - 1}
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 disabled:opacity-30 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Next card"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* DESKTOP GRID CARDS (hidden md:grid) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon || Monitor;
          return (
            <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
              <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Top Header: Circular Icon Left, Arrow Badge Right */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-full ${card.color || 'bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400'} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center group-hover:bg-[#00016E] group-hover:text-white group-hover:border-[#00016E] transition-all duration-300 shadow-sm shrink-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-normal text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-0.5" />
                  </Link>
                </div>
              </div>
            </ScrollSlideSection>
          );
        })}
      </div>
    </section>
  );
};


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

import webAppsHeroImg from '../../assets/images/website_web_apps_hero_transparent.png';
import ecommerceHeroImg from '../../assets/images/e_commerce_stores_hero_transparent.png';
import crmErpHeroImg from '../../assets/images/crm_erp_systems_hero_transparent.png';
import whatsappHeroImg from '../../assets/images/whatsapp_api_hero_transparent.png';

import analyticsDashboardImg from '../../assets/images/website_analytics_dashboard_mockup.png';
import ecommerceWomanImg from '../../assets/images/ecommerce_growth_partner_woman.png';
import fashionCaseStudyImg from '../../assets/images/fashion_ecommerce_case_study.png';
import crmDashboardImg from '../../assets/images/crm_erp_dashboard_mockup.png';
import whatsappAnalyticsImg from '../../assets/images/whatsapp_analytics_dashboard_visual.png';
import digitalMarketingHeroImg from '../../assets/images/digital_marketing_hero_transparent.png';
import digitalMarketingTrustedPartnerImg from '../../assets/images/digital_marketing_trusted_partner_visual.png';
import brandingHeroImg from '../../assets/images/Branding_Creative.png';
import cloudBgImg from '../../assets/images/Cloud_Infrastructure_service_background.png';
import crmGrowthPartnerImg from '../../assets/images/crm_erp_growth_partner.png';

const officialTechLogos = {
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

const ScrollSlideSection = ({ children, className = '', delay = '0ms', direction = 'up' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translateClass = direction === 'left' ? '-translate-x-10' : 
                         direction === 'right' ? 'translate-x-10' : 
                         direction === 'up' ? 'translate-y-10' : '-translate-y-10';

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'translate-x-0 translate-y-0 opacity-100' : `${translateClass} opacity-0`} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

const pageConfigs = {
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
      breadcrumb: 'E-commerce Stores',
      tag: 'OUR E-COMMERCE STORES',
      title: 'Powerful Online Stores for a Stronger Tomorrow',
      subheadline: 'We design and develop high-converting e-commerce stores that help you reach more customers, increase sales, and grow your brand in the digital marketplace.',
      desc: 'Boost online sales with high-converting e-commerce web applications featuring instant checkout, inventory sync, and multi-currency support.',
      heroImg: ecommerceHeroImg,
      badgeText: 'Seamless Shopping Experience',
      badgeText2: 'Boost Your Sales',
      stats: [
        { label: 'E-commerce Projects', val: '100+' },
        { label: 'Happy Clients', val: '250+' },
        { label: 'Years of Experience', val: '5+' }
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
        { label: 'Years of ERP Expertise', val: '5+' }
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
        { label: 'Years of Experience', val: '5+' }
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
    }
  };

function WebsitesWebAppsView() {
  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION WITH ACCENTS */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        
        {/* Soft pink accent geometry on top right */}
        <div className="absolute top-12 right-0 w-32 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold">Websites & Web Apps</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-3 flex items-center justify-start gap-2">
                OUR SERVICE
              </h4>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white whitespace-nowrap">
                Websites & Web Apps
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-4 font-normal">
                Modern, high-performance web applications designed for speed, SEO, and seamless user experiences.
              </p>
              
              <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                We design and develop custom websites and web applications that help businesses grow, engage users, and achieve real results in the digital world.
              </p>

              {/* Signature CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-2">
                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Your Project <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    View Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Image & Badge - Increased image size in desktop view */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[720px] lg:max-w-[780px] group cursor-pointer">
                {/* Floating pill badge on top right of laptop */}
                <div className="absolute -top-3 right-2 sm:-top-5 sm:right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-100 dark:border-slate-700 shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3 z-30 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-50 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-100 dark:border-sky-800/50">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">Responsive</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">Fast</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">Secure</span>
                  </div>
                </div>

                <div className="relative bg-transparent flex items-center justify-center p-0 shadow-none">
                  <img 
                    src={webAppsHeroImg} 
                    alt="Websites & Web Apps" 
                    className="w-full h-auto max-h-[460px] lg:max-h-[520px] object-contain transition-transform duration-700 group-hover:scale-[1.03] filter drop-shadow-2xl"
                  />
                </div>
              </div>
            </ScrollSlideSection>

          </div>

          {/* Startup Metrics Row - Aligned properly with balanced spacing & tailored startup content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 lg:mt-12 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  50+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Web Solutions Delivered
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  40+
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Happy Clients
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight leading-tight">
                  100%
                </div>
                <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Startup Energy & Speed
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
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

      {/* 2. WHAT WE BUILD SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            WHAT WE BUILD
          </h4>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
              Custom Web Solutions for Every Business Need
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal">
              From business websites to complex web applications, we build scalable, secure, and user-friendly solutions tailored to your goals.
            </p>
          </div>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <ScrollSlideSection delay="0ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between h-full group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center mb-5 shrink-0 shadow-md shadow-sky-500/20">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  Business Websites
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                  Professional, SEO-friendly websites that build your brand and attract more customers.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollSlideSection>

          {/* Card 2 */}
          <ScrollSlideSection delay="80ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between h-full group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-500 text-white flex items-center justify-center mb-5 shrink-0 shadow-md shadow-pink-500/20">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  Web Applications
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                  Custom web apps to automate processes, manage data, and improve productivity.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollSlideSection>

          {/* Card 3 */}
          <ScrollSlideSection delay="160ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between h-full group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-5 shrink-0 shadow-md shadow-emerald-500/20">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  E-commerce Websites
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                  High-converting online stores with secure payment gateways and scalable architecture.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollSlideSection>

          {/* Card 4 */}
          <ScrollSlideSection delay="240ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between h-full group shadow-sm hover:shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center mb-5 shrink-0 shadow-md shadow-purple-500/20">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Web Portals
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                  Customer portals, employee portals, and admin dashboards tailored to your workflow.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollSlideSection>
        </div>
      </section>

      {/* 3. WHY IT MATTERS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text & Checkmarks */}
          <ScrollSlideSection direction="up" className="lg:col-span-5 flex flex-col">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              WHY IT MATTERS
            </h4>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
              Build a Strong Digital Presence
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              A well-designed website or web application helps you reach more customers, streamline operations, and stay ahead of your competition.
            </p>

            <div className="space-y-4">
              {[
                'Enhances brand credibility',
                'Improves customer engagement',
                'Accessible anytime, anywhere',
                'Scalable for future growth'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-800 dark:text-slate-200 text-base sm:text-lg font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollSlideSection>

          {/* Right Dashboard Graph Visual Mockup */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-7 relative">
            
            {/* Background Geometric Accent Polygons */}
            <div className="absolute -top-6 -left-6 w-36 h-36 bg-sky-200/60 dark:bg-sky-900/20 rounded-3xl -z-10 transform -rotate-6 blur-lg pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-200/60 dark:bg-pink-900/20 rounded-3xl -z-10 transform rotate-12 blur-lg pointer-events-none" />

            {/* Dashboard Window Container */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-slate-50 dark:bg-slate-900/80 px-4 py-3 border-b border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 ml-2">ZAVYX Website Analytics</span>
                </div>
                <div className="text-[11px] text-slate-400 bg-slate-200/60 dark:bg-slate-800 px-3 py-1 rounded-md">
                  zavyx.com/analytics
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6 grid grid-cols-12 gap-4">
                
                {/* Mini Sidebar */}
                <div className="col-span-3 sm:col-span-3 border-r border-slate-100 dark:border-slate-700/60 pr-3 hidden sm:flex flex-col gap-2">
                  <div className="px-3 py-2 rounded-lg bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 text-xs font-semibold flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" /> Dashboard
                  </div>
                  <div className="px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 text-xs font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700/40">
                    <TrendingUp className="w-4 h-4" /> Analytics
                  </div>
                  <div className="px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 text-xs font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700/40">
                    <Briefcase className="w-4 h-4" /> Projects
                  </div>
                  <div className="px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 text-xs font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700/40">
                    <Users className="w-4 h-4" /> Customers
                  </div>
                </div>

                {/* Main Graph Area */}
                <div className="col-span-12 sm:col-span-9 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Website Analytics</h3>
                    <div className="text-xs text-sky-600 font-semibold bg-sky-50 dark:bg-sky-950 px-2.5 py-1 rounded-md">This Month</div>
                  </div>

                  {/* Graph Canvas SVG */}
                  <div className="relative h-44 sm:h-48 w-full">
                    {/* Floating Callout Badge */}
                    <div className="absolute top-2 right-12 z-20 bg-[#0284C7] text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/40 flex items-center gap-1 animate-pulse">
                      +42% <span className="font-normal opacity-90">Growth this month</span>
                    </div>

                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="blueAreaGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Area Fill */}
                      <path 
                        d="M 0 120 Q 50 110 100 125 T 200 85 T 300 35 T 400 90 L 400 150 L 0 150 Z" 
                        fill="url(#blueAreaGrad)" 
                      />

                      {/* Top Curve Line */}
                      <path 
                        d="M 0 120 Q 50 110 100 125 T 200 85 T 300 35 T 400 90" 
                        fill="none" 
                        stroke="#0284C7" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                      />

                      {/* Highlighted Peak Circle Node */}
                      <circle cx="300" cy="35" r="5" fill="#0284C7" stroke="#ffffff" strokeWidth="2.5" />
                    </svg>
                  </div>

                  {/* Bottom Stats Pills */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center shrink-0">
                        A
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">12.5K</div>
                        <div className="text-[10px] text-slate-400">Visitors</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 font-bold text-xs flex items-center justify-center shrink-0">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">4.8K</div>
                        <div className="text-[10px] text-slate-400">Leads</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">98%</div>
                        <div className="text-[10px] text-slate-400">Uptime</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </ScrollSlideSection>

        </div>
      </section>

      {/* 4. OUR DEVELOPMENT PROCESS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-12 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR DEVELOPMENT PROCESS
          </h4>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
              From Idea to Launch
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal">
              A streamlined process to ensure your web solution is delivered with quality and on time.
            </p>
          </div>
        </ScrollSlideSection>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
            {[
              { num: '01', title: 'Discover', desc: 'Understand your goals and requirements', icon: Compass },
              { num: '02', title: 'Plan', desc: 'Create strategy and project roadmap', icon: FileText },
              { num: '03', title: 'Design', desc: 'Craft modern and user-friendly UI/UX', icon: Layout },
              { num: '04', title: 'Develop', desc: 'Build with best practices and clean code', icon: Code },
              { num: '05', title: 'Test & Launch', desc: 'Ensure quality and deploy with confidence', icon: Rocket }
            ].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <ScrollSlideSection key={idx} delay={`${idx * 100}ms`} direction="up">
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-2 border-sky-400/80 dark:border-sky-500/80 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-md mb-4 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 relative bg-white">
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <span className="text-sm sm:text-base font-normal text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-1">
                      {step.num}
                    </span>
                    <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-[220px]">
                      {step.desc}
                    </p>
                  </div>
                </ScrollSlideSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGIES WE USE & KEY BENEFITS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Tech Stack */}
          <ScrollSlideSection direction="up" className="lg:col-span-7 flex flex-col">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              TECHNOLOGIES WE USE
            </h4>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 dark:text-white mb-8">
              Reliable Technologies for Modern Web Solutions
            </h2>

            <div className="grid grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: 'React', key: 'React' },
                { name: 'Next.js', key: 'Next.js' },
                { name: 'Vue.js', key: 'Vue.js' },
                { name: 'Node.js', key: 'Node.js' },
                { name: 'Laravel', key: 'Laravel' },
                { name: 'PHP', key: 'PHP' },
                { name: 'MySQL', key: 'MySQL' },
                { name: 'MongoDB', key: 'MongoDB' }
              ].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-3 p-4 transition-transform duration-300 hover:scale-105">
                  <img 
                    src={officialTechLogos[tech.key]} 
                    alt={tech.name} 
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-sm sm:text-base font-normal text-slate-700 dark:text-slate-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollSlideSection>

          {/* Right Column: Key Benefits */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-5 flex flex-col">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              KEY BENEFITS
            </h4>
            <div className="mb-8 hidden lg:block" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                { title: 'High Performance', desc: 'Optimized for speed and reliability', icon: Gauge },
                { title: 'Secure & Scalable', desc: 'Enterprise-grade security and scalability', icon: ShieldCheck },
                { title: 'SEO Friendly', desc: 'Built with search engine best practices', icon: Search },
                { title: 'Ongoing Support', desc: 'Continuous updates and maintenance', icon: RefreshCw }
              ].map((b, idx) => {
                const BIcon = b.icon;
                return (
                  <div key={idx} className="flex flex-col gap-3 py-2">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                      <BIcon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-1">
                        {b.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-100/60 via-blue-50/70 to-pink-100/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          
          {/* Decorative Corner Tabs */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-300/40 dark:bg-pink-900/20 rotate-45 rounded-xl pointer-events-none" />
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-300/40 dark:bg-sky-900/20 rotate-45 rounded-xl pointer-events-none" />

          <div className="relative z-10">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-2">
              Have a project in mind?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              Let's turn your ideas into powerful digital solutions.
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
      </section>

    </div>
  );
}

function EcommerceStoresView() {
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
      <section className="relative pt-20 pb-12 sm:pt-28 lg:pt-32 lg:pb-20 min-h-[85vh] flex flex-col justify-center overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-32 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-normal">E-commerce Stores</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Text */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-3">
                E-COMMERCE STORES
              </h4>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white">
                Powerful Online Stores<br />
                for a <span className="text-sky-600 dark:text-sky-400 font-normal">Stronger Tomorrow</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                We design and develop high-converting e-commerce stores that help you reach more customers, increase sales, and grow your brand in the digital marketplace.
              </p>
              
              {/* Signature Conic-Gradient CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
                <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Your Project <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-900 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] dark:border-sky-500 group-hover:border-transparent">
                    Explore Our Work
                  </span>
                </Link>
              </div>

              {/* Stats Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                <div>
                  <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-normal tracking-tight mb-1">100+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">E-commerce Projects</div>
                </div>
                <div>
                  <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-normal tracking-tight mb-1">250+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Happy Clients</div>
                </div>
                <div>
                  <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-normal tracking-tight mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Years of Experience</div>
                </div>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Visual */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[650px] group cursor-pointer">
                <img 
                  src={ecommerceHeroImg} 
                  alt="E-commerce Stores Platform Preview" 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] filter drop-shadow-xl" 
                />
              </div>
            </ScrollSlideSection>
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
              <div className="bg-white dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all rounded-2xl p-5 flex flex-col items-center justify-center gap-3 group cursor-pointer h-32">
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

        <ScrollSlideSection direction="up" delay="100ms" className="bg-white dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700/60 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center shadow-sm hover:shadow-md transition-all">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <img src={fashionCaseStudyImg} alt="Fashion E-commerce Case Study" className="w-full h-auto object-cover" />
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 text-left">
            <div className="bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 text-xs font-normal px-3 py-1 rounded-full uppercase tracking-wider">
              CASE STUDY
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white leading-snug">
              Building a High-Converting Fashion E-commerce Store
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-normal leading-relaxed mb-4">
              We developed a feature-rich online store for a fashion brand with seamless shopping experience, secure payments, and marketing integrations. The result was a 2.5x increase in sales within 6 months.
            </p>
            
            <div className="grid grid-cols-3 gap-4 w-full pt-6 border-t border-slate-100 dark:border-slate-700">
              <div className="flex flex-col">
                <div className="text-sky-600 dark:text-sky-400 text-2xl sm:text-3xl font-normal tracking-tight">2.5x</div>
                <div className="text-slate-500 text-xs font-normal mt-1">Increase in Sales</div>
              </div>
              <div className="flex flex-col">
                <div className="text-sky-600 dark:text-sky-400 text-2xl sm:text-3xl font-normal tracking-tight">40%</div>
                <div className="text-slate-500 text-xs font-normal mt-1">More Customers</div>
              </div>
              <div className="flex flex-col">
                <div className="text-sky-600 dark:text-sky-400 text-2xl sm:text-3xl font-normal tracking-tight">60%</div>
                <div className="text-slate-500 text-xs font-normal mt-1">Higher Engagement</div>
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
function WhatsAppApiBotsView() {
  const whatsappServices = [
    { title: 'WhatsApp Business API Integration', desc: 'Secure and official WhatsApp Business API setup with seamless integration to your systems.', icon: MessageCircle, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
    { title: 'AI Chatbots', desc: 'Intelligent chatbots to handle queries, provide instant answers, and automate workflows.', icon: Bot, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' },
    { title: 'Automated Notifications', desc: 'Send order updates, appointment reminders, payment confirmations and more — automatically.', icon: Bell, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: 'Marketing Campaigns', desc: 'Run targeted campaigns, product updates and promotions with high delivery rates.', icon: Megaphone, color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
    { title: 'Customer Support Automation', desc: 'Automate FAQs, ticket creation and routing to the right team for faster resolution.', icon: Headphones, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: 'CRM Integration', desc: 'Connect WhatsApp with your CRM to sync leads, customers and conversations.', icon: Database, color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400' }
  ];

  const whyChooseUs = [
    { title: '24/7 Automation', desc: 'Never miss a customer with always-on bots.', icon: Clock, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40' },
    { title: 'Faster Responses', desc: 'Reduce response time and improve satisfaction.', icon: Zap, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40' },
    { title: 'Personalized Conversations', desc: 'Deliver tailored messages for better engagement.', icon: Users, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40' },
    { title: 'Secure API Integration', desc: 'Official WhatsApp API with enterprise-grade security.', icon: ShieldCheck, color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40' },
    { title: 'Scalable Messaging', desc: 'Handle thousands of conversations effortlessly.', icon: TrendingUp, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40' },
    { title: 'Actionable Analytics', desc: 'Make data-driven decisions with real insights.', icon: BarChart3, color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40' }
  ];

  const useCases = [
    { title: 'Sales & Lead Generation', icon: TrendingUp, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' },
    { title: 'Customer Support', icon: Headphones, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/40' },
    { title: 'Order & Delivery Updates', icon: Package, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' },
    { title: 'Appointment Reminders', icon: Calendar, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40' },
    { title: 'Payment Notifications', icon: CreditCard, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/40' },
    { title: 'Surveys & Feedback', icon: ClipboardList, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40' }
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION WITH ACCENTS */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        <div className="absolute top-12 right-0 w-32 h-64 bg-emerald-300/20 dark:bg-emerald-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold">WhatsApp API & Chatbots</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-3 flex items-center justify-start gap-2">
                WHATSAPP API & BOTS
              </h4>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.5rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white">
                Smarter Conversations. <span className="text-sky-600 dark:text-sky-400">Automated Growth.</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-6 font-normal">
                Leverage WhatsApp Business API and intelligent bots to automate conversations, enhance customer engagement, and scale your business with seamless, secure, and reliable messaging solutions.
              </p>
              
              {/* Signature CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
                <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Explore WhatsApp Solutions <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    View Demo <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Startup Metrics Row */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <div>
                  <div className="text-3xl sm:text-4xl font-normal text-slate-900 dark:text-white tracking-tight">500K+</div>
                  <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Messages Processed</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-normal text-slate-900 dark:text-white tracking-tight">50+</div>
                  <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Businesses Enabled</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-normal text-slate-900 dark:text-white tracking-tight">24/7</div>
                  <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Customer Engagement</div>
                </div>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Visual */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex items-center justify-end lg:pr-8">
              <div className="relative w-full max-w-[550px] aspect-[4/3] flex items-center justify-center overflow-visible transform scale-105 lg:scale-110">
                {/* Visual Chat Mock */}
                <div className="relative w-full max-w-[480px] lg:max-w-[520px] bg-slate-900 rounded-xl shadow-2xl flex border border-slate-800 overflow-hidden transform group-hover:scale-105 transition-transform duration-500 z-10">
                  {/* Left Sidebar */}
                  <div className="w-1/3 bg-slate-900 border-r border-slate-800 flex flex-col p-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded bg-sky-500" />
                      <span className="text-white text-sm font-semibold">ZAVYX</span>
                    </div>
                    <div className="space-y-2">
                       <div className="bg-sky-500/20 text-sky-400 p-2 rounded text-xs">Inbox</div>
                       <div className="text-slate-400 p-2 rounded text-xs hover:text-white">Broadcast</div>
                       <div className="text-slate-400 p-2 rounded text-xs hover:text-white">Templates</div>
                       <div className="text-slate-400 p-2 rounded text-xs hover:text-white">Automation</div>
                       <div className="text-slate-400 p-2 rounded text-xs hover:text-white">Analytics</div>
                    </div>
                  </div>
                  {/* Right Chat Area */}
                  <div className="w-2/3 bg-white dark:bg-slate-900 flex flex-col">
                    <div className="p-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
                         {/* avatar placeholder */}
                       </div>
                       <div>
                         <div className="text-xs font-semibold text-slate-800 dark:text-white">Priya Sharma</div>
                         <div className="text-[10px] text-emerald-500">Online</div>
                       </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col gap-3 text-xs bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
                       <div className="self-end bg-sky-100 dark:bg-sky-900/50 p-2.5 rounded-l-xl rounded-tr-xl max-w-[80%] text-slate-800 dark:text-slate-200 shadow-sm border border-sky-200 dark:border-sky-800/50">
                         Hi! I want to know about your services.
                       </div>
                       <div className="self-start bg-white dark:bg-slate-800 p-2.5 rounded-r-xl rounded-tl-xl max-w-[85%] text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">
                         Hello Priya! Welcome to ZAVYX InfoTech. How can we help you today?
                         <div className="mt-2 flex flex-col gap-1.5 w-full">
                           <div className="bg-sky-50 hover:bg-sky-100 dark:bg-sky-900/30 dark:hover:bg-sky-900/50 text-sky-600 dark:text-sky-400 py-1.5 px-3 rounded text-center cursor-pointer transition-colors border border-sky-200 dark:border-sky-800/50">Our Services</div>
                           <div className="bg-sky-50 hover:bg-sky-100 dark:bg-sky-900/30 dark:hover:bg-sky-900/50 text-sky-600 dark:text-sky-400 py-1.5 px-3 rounded text-center cursor-pointer transition-colors border border-sky-200 dark:border-sky-800/50">Get a Quote</div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements that pop out */}
                <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-10 bg-white dark:bg-slate-800 border-0 shadow-lg rounded-xl p-2.5 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-500 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-900 dark:text-white block leading-tight">WhatsApp</span>
                    <span className="text-[10px] font-bold text-slate-900 dark:text-white block leading-tight">Business API</span>
                    <span className="text-[11px] text-emerald-500 block leading-tight mt-0.5">Connected</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-10 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-lg rounded-xl p-3 flex flex-col z-20 scale-90 sm:scale-100 transition-transform duration-300 hover:scale-105">
                  <div className="text-[10px] font-bold text-slate-800 dark:text-white mb-2">Message Insights</div>
                  <div className="flex gap-4 items-end">
                    <div className="flex gap-1 items-end h-8">
                       <div className="w-2 bg-sky-200 dark:bg-sky-900 h-[30%]"></div>
                       <div className="w-2 bg-sky-300 dark:bg-sky-800 h-[60%]"></div>
                       <div className="w-2 bg-sky-400 dark:bg-sky-700 h-[40%]"></div>
                       <div className="w-2 bg-sky-500 dark:bg-sky-600 h-[80%]"></div>
                       <div className="w-2 bg-sky-600 dark:bg-sky-500 h-[100%]"></div>
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-emerald-500 flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> 32%</div>
                      <div className="text-[11px] text-slate-500">This Month</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSlideSection>
          </div>
        </div>
      </section>

      {/* 2. OUR WHATSAPP API & BOT SOLUTIONS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR WHATSAPP API & BOT SOLUTIONS
          </h4>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
              WhatsApp API & Bot Solutions for Modern Businesses
            </h2>
            
          </div>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {whatsappServices.map((srv, idx) => {
            const SrvIcon = srv.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5 h-full group">
                  <div className={`w-14 h-14 rounded-xl ${srv.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    <SrvIcon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-4">
                        {srv.desc}
                      </p>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full">
          <ScrollSlideSection direction="up" className="mb-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              HOW IT WORKS
            </h4>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
                From Message to Meaningful Results
              </h2>
              
            </div>
          </ScrollSlideSection>

          {/* Interactive Flowchart exactly as in WhatsApp mock */}
          <div className="relative pb-6 mt-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between lg:justify-between relative px-2 gap-10 lg:gap-0 lg:min-w-[900px]">
               {/* Arrow Lines connecting steps underneath */}
               {/* Removed horizontal line as per user request */}

               {/* Step 1 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-[15px] font-bold text-slate-700 dark:text-slate-200 mb-4 px-2">1. Customer Message</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex items-start gap-3 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0 overflow-hidden">
                     {/* avatar placeholder */}
                   </div>
                   <div className="bg-slate-100 dark:bg-slate-700/50 rounded-xl rounded-tl-none p-3 text-[11px] leading-snug text-slate-700 dark:text-slate-300 font-medium">
                     Hi! I'm interested in your services.
                   </div>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 2 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-[15px] font-bold text-slate-700 dark:text-slate-200 mb-4 px-2">2. WhatsApp API</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex flex-col items-center gap-2 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center">
                     <MessageCircle className="w-6 h-6 fill-current" />
                   </div>
                   <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center font-medium mt-1 text-xs">
                     Secure connection via WhatsApp Business API</div>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 3 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-[15px] font-bold text-slate-700 dark:text-slate-200 mb-4 px-2">3. Bot / Automation</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex flex-col items-center justify-center gap-2 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 text-sky-500 flex items-center justify-center mb-1">
                     <Bot className="w-8 h-8" />
                   </div>
                   <ul className="text-[11px] text-slate-600 dark:text-slate-400 w-full text-left space-y-1.5 font-medium">
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Auto Reply</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Smart Routing</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Data Collection</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Workflow Triggers</li>
                   </ul>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 4 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-[15px] font-bold text-slate-700 dark:text-slate-200 mb-4 px-2">4. CRM System</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex flex-col items-center justify-center gap-2 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 text-indigo-500 flex items-center justify-center mb-1">
                     <Database className="w-8 h-8" />
                   </div>
                   <ul className="text-[11px] text-slate-600 dark:text-slate-400 w-full text-left space-y-1.5 font-medium">
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-sky-500" /> Create / Update Lead</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-sky-500" /> Sync Conversations</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-sky-500" /> Track Customer Journey</li>
                     <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-sky-500" /> Manage Follow-ups</li>
                   </ul>
                   <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />
                 </div>
               </div>

               {/* Step 5 */}
               <div className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none">
                 <div className="text-[15px] font-bold text-slate-700 dark:text-slate-200 mb-4 px-2">5. Human Agent (If Needed)</div>
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] flex items-center gap-3 relative h-[140px] transform transition-transform hover:-translate-y-1">
                   <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0 overflow-hidden">
                     {/* avatar placeholder */}
                   </div>
                   <div className="bg-sky-50 dark:bg-sky-900/40 border border-sky-100 dark:border-sky-800 rounded-xl rounded-tl-none p-3 text-[11px] leading-snug text-slate-700 dark:text-slate-300 font-medium">
                     Sure! Let me assist you further.
                   </div>
                 </div>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. ANALYTICS & PERFORMANCE */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <ScrollSlideSection direction="up" className="lg:col-span-5 text-left mb-10 lg:mb-0">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            ANALYTICS & PERFORMANCE
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl mb-4">
            Track Conversations. Measure Growth.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-md font-normal mb-6">
            Get real-time insights into your WhatsApp communication and campaign performance.
          </p>
          <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
             <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
               View Live Analytics <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
             </span>
          </Link>
        </ScrollSlideSection>

          {/* Analytics Dashboard Mock matching the attached image perfectly */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6 transform hover:-translate-y-2 transition-transform duration-500">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
               <h3 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Analytics</h3>
               <div className="bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                 Last 30 Days <ChevronDown className="w-3 h-3" />
               </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-4 gap-4">
               <div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><MessageCircle className="w-4 h-4 text-sky-500" /> 125,640</div>
                  <div className="text-[10px] text-slate-500">Messages Sent</div>
                  <div className="text-[10px] text-emerald-500 font-semibold mt-1">↑ 12%</div>
               </div>
               <div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 123,200</div>
                  <div className="text-[10px] text-slate-500">Delivered</div>
                  <div className="text-[10px] text-emerald-500 font-semibold mt-1">↑ 98%</div>
               </div>
               <div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><Eye className="w-4 h-4 text-blue-500" /> 118,450</div>
                  <div className="text-[10px] text-slate-500">Read</div>
                  <div className="text-[10px] text-emerald-500 font-semibold mt-1">↑ 96%</div>
               </div>
               <div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><UserCheck className="w-4 h-4 text-pink-500" /> 4,320</div>
                  <div className="text-[10px] text-slate-500">Active Chats</div>
                  <div className="text-[10px] text-emerald-500 font-semibold mt-1">↑ 28%</div>
               </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="flex flex-col gap-2">
                 <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Conversation Trends</div>
                 {/* Fake line chart */}
                 <div className="relative h-24 w-full flex items-end gap-1.5 justify-between">
                    <div className="absolute top-2 right-0 bg-sky-500 text-white text-[11px] px-1.5 py-0.5 rounded shadow">12.4K</div>
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[20%] rounded-t border-t-2 border-sky-400" />
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[40%] rounded-t border-t-2 border-sky-400" />
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[30%] rounded-t border-t-2 border-sky-400" />
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[60%] rounded-t border-t-2 border-sky-400" />
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[100%] rounded-t border-t-2 border-sky-400" />
                    <div className="w-1/6 bg-sky-100 dark:bg-sky-900/30 h-[80%] rounded-t border-t-2 border-sky-400" />
                 </div>
                 <div className="flex justify-between text-[8px] text-slate-400 mt-1">
                   <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                 </div>
               </div>

               <div className="flex flex-col gap-2">
                 <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Message Breakdown</div>
                 <div className="flex items-center gap-4 mt-2">
                   {/* Fake donut chart ring */}
                   <div className="w-16 h-16 rounded-full border-4 border-slate-100 relative shrink-0">
                     <div className="absolute inset-[-4px] rounded-full border-4 border-sky-400" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 50%)' }} />
                     <div className="absolute inset-[-4px] rounded-full border-4 border-pink-400" style={{ clipPath: 'polygon(50% 50%, 0 50%, 0 0, 50% 0)' }} />
                     <div className="absolute inset-[-4px] rounded-full border-4 border-emerald-400" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0)' }} />
                   </div>
                   <div className="flex flex-col gap-1.5 w-full">
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-sky-400" /> Customer Queries</span> <span className="font-bold">45%</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-pink-400" /> Order Updates</span> <span className="font-bold">25%</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Campaign Messages</span> <span className="font-bold">20%</span>
                     </div>
                     <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-300" /> Other</span> <span className="font-bold">10%</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </ScrollSlideSection>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            WHY CHOOSE US
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            Why Choose Our WhatsApp Solutions?
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {whyChooseUs.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className="bg-transparent border border-slate-200 dark:border-slate-700/80 p-5 rounded-2xl transition-all flex flex-col gap-3 group h-full hover:shadow-md">
                  <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <FeatureIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1 leading-tight group-hover:text-sky-600 dark:group-hover:text-sky-400">{feature.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{feature.desc}</p>
                  </div>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 6. USE CASES SECTION fully borderless to match reference image */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            USE CASES
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Built for Every Business Need
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {useCases.map((useCase, idx) => {
            const CaseIcon = useCase.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className="bg-transparent dark:bg-transparent p-5 rounded-2xl shadow-none transition-all flex flex-col items-center justify-center gap-3 text-center group border-0 h-full">
                  <div className={`w-12 h-12 rounded-xl ${useCase.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <CaseIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {useCase.title}
                  </span>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-50 via-blue-50/50 to-pink-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-900 dark:text-white mb-2 leading-snug">
              Ready to Automate Your WhatsApp Communication?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              Let's turn conversations into opportunities with powerful WhatsApp solutions.
            </p>
          </div>
          <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm shrink-0 cursor-pointer z-10">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
              Get a Quote <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}


function MobileAppsView() {
  const mobileServices = [
    { title: 'iOS App Development', desc: 'High-performance, secure, and scalable apps for iPhone and iPad using Swift and modern frameworks.', icon: Smartphone, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: 'Android App Development', desc: 'Feature-rich Android apps with modern UI/UX and robust performance using Kotlin.', icon: ShoppingCart, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' },
    { title: 'Cross-Platform Development', desc: 'Build once, run everywhere with Flutter or React Native for faster time-to-market.', icon: Layers, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
    { title: 'UI/UX Design', desc: 'Intuitive and engaging designs that deliver exceptional user experiences.', icon: Layout, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: 'App Maintenance & Support', desc: 'Keep your app secure, updated and running smoothly with our ongoing support.', icon: Gauge, color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
    { title: 'App Consulting', desc: 'Turn your idea into a successful product with expert guidance and technical consulting.', icon: Compass, color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400' }
  ];

  const processSteps = [
    { num: '1', title: 'Discover', desc: 'Understand your goals and requirements', icon: Search },
    { num: '2', title: 'Design', desc: 'Create UI/UX and interactive prototypes', icon: Layout },
    { num: '3', title: 'Develop', desc: 'Build, test and iterate with agility', icon: Code },
    { num: '4', title: 'Launch', desc: 'Deploy to App Store and Google Play', icon: Rocket },
    { num: '5', title: 'Grow', desc: 'Ongoing support and feature updates', icon: BarChart3 }
  ];

  const whyChooseGrid = [
    { title: 'Expert Development Team', desc: 'Skilled and experienced professionals', icon: Users, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: 'On-Time Delivery', desc: 'Commitment to deadlines', icon: Clock, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
    { title: 'Transparent Process', desc: 'Regular updates and clear communication', icon: MessageSquare, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: 'Scalable Solutions', desc: 'Apps ready for future growth', icon: TrendingUp, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' }
  ];

  const industryCards = [
    { title: 'Retail & E-commerce', icon: ShoppingBag, color: 'text-pink-600 bg-pink-50 dark:bg-pink-950/40 dark:text-pink-400' },
    { title: 'Healthcare', icon: Heart, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400' },
    { title: 'Education', icon: GraduationCap, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: 'Real Estate', icon: Building2, color: 'text-sky-600 bg-sky-50 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: 'Food & Hospitality', icon: Utensils, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400' },
    { title: 'Logistics', icon: Truck, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400' }
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden bg-transparent">
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
            <span className="text-sky-600 dark:text-sky-400 font-semibold">Mobile App Development</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-3 flex items-center justify-start gap-2">
                MOBILE APP DEVELOPMENT
              </h4>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.5rem] font-normal leading-[1.12] tracking-tight mb-5 text-slate-900 dark:text-white">
                Powerful Mobile Apps for a <span className="text-sky-600 dark:text-sky-400">Smarter Tomorrow</span>
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                We design and develop high-performance mobile applications for Android and iOS that deliver seamless user experiences, solve real business problems, and create lasting value.
              </p>

              {/* Signature CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Discuss Your App Idea <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    Explore Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Startup Metrics Row */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight mb-1">100+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Apps Delivered</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight mb-1">250+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Years of Experience</div>
                </div>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Visual: Dual Smartphone Mockup matching reference image */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[540px] flex items-center justify-center py-6">
                
                {/* Dual Phone Frames Container */}
                <div className="relative flex items-center justify-center gap-4 sm:gap-6">
                  
                  {/* Left Phone: iOS App */}
                  <div className="relative w-[210px] sm:w-[250px] h-[410px] sm:h-[480px] rounded-[36px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800 -rotate-6 transition-transform duration-500 hover:rotate-0">
                    <div className="w-full h-full rounded-[28px] bg-gradient-to-b from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 p-4 flex flex-col justify-between overflow-hidden relative border border-slate-200/50 dark:border-slate-700/50">
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-b-xl z-20"></div>
                      
                      <div className="mt-6">
                        <span className="text-[10px] font-semibold text-sky-600 uppercase tracking-widest block mb-1">iOS App</span>
                        <h4 className="text-lg font-normal text-slate-900 dark:text-white leading-tight">Beautiful iOS Apps</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Smooth, Secure, Scalable.</p>
                      </div>

                      {/* Mock App UI Card */}
                      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col gap-2">
                        <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-xs">
                          
                        </div>
                        <div className="h-2 w-24 bg-sky-200 dark:bg-sky-900 rounded-full"></div>
                        <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center self-end text-xs font-bold shadow-md">
                        →
                      </div>
                    </div>

                    {/* Floating Apple Icon Badge */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white text-lg font-bold">
                      
                    </div>
                  </div>

                  {/* Right Phone: Android App */}
                  <div className="relative w-[210px] sm:w-[250px] h-[410px] sm:h-[480px] rounded-[36px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800 rotate-6 transition-transform duration-500 hover:rotate-0 mt-8">
                    <div className="w-full h-full rounded-[28px] bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-4 flex flex-col justify-between overflow-hidden relative border border-slate-200/50 dark:border-slate-700/50">
                      {/* Camera hole */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rounded-full z-20"></div>

                      <div className="mt-6">
                        <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-widest block mb-1">Android App</span>
                        <h4 className="text-lg font-normal text-slate-900 dark:text-white leading-tight">Powerful Android Apps</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Custom, Flexible, Future-Ready.</p>
                      </div>

                      {/* Mock App UI Card */}
                      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col gap-2">
                        <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                          🤖
                        </div>
                        <div className="h-2 w-24 bg-emerald-200 dark:bg-emerald-900 rounded-full"></div>
                        <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center self-end text-xs font-bold shadow-md">
                        →
                      </div>
                    </div>

                    {/* Floating Android Icon Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-emerald-500 text-lg font-bold">
                      🤖
                    </div>
                  </div>

                </div>
              </div>
            </ScrollSlideSection>

          </div>

        </div>
      </section>

      {/* 2. OUR SERVICES SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR SERVICES
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            End-to-End Mobile App Development Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
            From idea to launch, we offer complete mobile app development services tailored to your business goals.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mobileServices.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-5 shrink-0 shadow-sm`}>
                      <CardIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                      {card.desc}
                    </p>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-normal text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 3. OUR DEVELOPMENT PROCESS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR DEVELOPMENT PROCESS
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            From Idea to Launch in Simple Steps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
            We follow a structured and agile process to deliver high-quality mobile applications.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-stretch relative">
          {processSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 100}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 p-5 rounded-2xl border-0 shadow-sm hover:shadow-md h-full flex flex-col justify-between relative group transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3 shrink-0">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-normal text-slate-900 dark:text-white block mb-1">
                      <span className="font-semibold text-sky-600 dark:text-sky-400 mr-1">{step.num}</span> {step.title}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-400">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            WHY CHOOSE US
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            Your Trusted Partner in Mobile App Development
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
            We combine technical expertise, creative design, and a user-first approach to build mobile apps that drive real business results.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: 4 Advantage Bullets */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseGrid.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                  <div className="bg-white dark:bg-slate-800/80 p-5 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all flex items-start gap-4 h-full">
                    <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                      <ItemIcon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-normal text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollSlideSection>
              );
            })}
          </div>

          {/* Right: Mobile App Graphic Container */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[480px] bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
              <div className="relative flex justify-center gap-4">
                
                {/* Phone 1 */}
                <div className="w-48 h-80 rounded-[28px] bg-slate-900 p-2 shadow-xl border-2 border-slate-800 overflow-hidden">
                  <div className="w-full h-full bg-slate-50 dark:bg-slate-900 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                      <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Good Morning!</span>
                      <span className="text-[10px] text-sky-600 font-bold">$12,850</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 bg-sky-100 dark:bg-sky-900/40 rounded-xl p-1.5 flex items-center justify-between text-[9px] text-slate-700 dark:text-slate-300">
                        <span>Recent Activity</span>
                        <span className="font-bold text-sky-600">+ $420</span>
                      </div>
                      <div className="h-8 bg-pink-100 dark:bg-pink-900/40 rounded-xl p-1.5 flex items-center justify-between text-[9px] text-slate-700 dark:text-slate-300">
                        <span>New Orders</span>
                        <span className="font-bold text-pink-600">18 items</span>
                      </div>
                    </div>
                    <div className="h-10 bg-slate-900 rounded-xl text-white flex items-center justify-center text-[10px] font-semibold">
                      App Analytics
                    </div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="w-48 h-80 rounded-[28px] bg-slate-900 p-2 shadow-xl border-2 border-slate-800 overflow-hidden mt-6">
                  <div className="w-full h-full bg-slate-50 dark:bg-slate-900 p-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest block">Discover</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Trendy Collections</span>
                      <div className="grid grid-cols-2 gap-1.5 mt-3">
                        <div className="h-16 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                        <div className="h-16 bg-sky-200 dark:bg-sky-900/50 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="h-8 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-[10px] font-semibold">
                      Featured Products
                    </div>
                  </div>
                </div>

                {/* Floating pill badge on bottom right */}
                <div className="absolute -bottom-4 right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg rounded-2xl p-3 flex items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">Apps that</span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">Make an Impact</span>
                  </div>
                </div>

              </div>
            </div>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            INDUSTRIES WE SERVE
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Mobile Apps for Every Industry
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industryCards.map((ind, idx) => {
            const IndIcon = ind.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 text-center group border-0 h-full">
                  <div className={`w-12 h-12 rounded-xl ${ind.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <IndIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-slate-800 dark:text-slate-200">
                    {ind.title}
                  </span>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-100/60 via-blue-50/70 to-pink-100/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-2">
              Have a Mobile App Idea?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              Let's turn your idea into a powerful mobile application for iOS and Android.
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
      </section>

    </div>
  );
}

function DigitalMarketingView() {
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
      <section className="relative pt-24 pb-12 sm:pt-32 lg:pt-36 lg:pb-24 min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        
        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-normal">Digital Marketing & SEO</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
             <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
               <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-3 flex items-center justify-start gap-2">
                 DIGITAL MARKETING & SEO
               </h4>
               <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-6 text-slate-900 dark:text-white">
                 Grow Your Brand<br />in the <span className="text-slate-900 dark:text-white font-normal inline-block">Digital World</span>
               </h1>
               <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
                 We create data-driven digital marketing strategies and SEO solutions that help your business get more visibility, attract the right audience, and achieve measurable growth.
               </p>
               
               <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
                  <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                      Discuss Your Goals <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white text-[#00016E] dark:bg-slate-900 dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] dark:border-sky-500 group-hover:border-transparent">
                      Explore Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
               </div>

               <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                 <div>
                   <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">100+</div>
                   <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Brands Promoted</div>
                 </div>
                 <div>
                   <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">250+</div>
                   <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Happy Clients</div>
                 </div>
                 <div>
                   <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">5+</div>
                   <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Years of Experience</div>
                 </div>
               </div>
             </ScrollSlideSection>

             <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex flex-col items-center justify-end">
                 <img src={digitalMarketingHeroImg} alt="Hero Graphic" className="w-full max-w-[700px] h-auto object-contain transform lg:scale-110" />
             </ScrollSlideSection>
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


function BrandingCreativeView() {
  const processSteps = [
    { num: '1', title: 'Discover', desc: 'Understand your business and goals', icon: Search },
    { num: '2', title: 'Strategize', desc: 'Create a tailored brand plan', icon: Target },
    { num: '3', title: 'Design', desc: 'Bring ideas to life with creativity', icon: PenTool },
    { num: '4', title: 'Refine', desc: 'Get feedback and perfect', icon: ShieldCheck },
    { num: '5', title: 'Deliver', desc: 'Launch your brand with confidence', icon: Rocket }
  ];

  const whyGrid = [
    { title: 'Strategic Approach', desc: 'Designs aligned with your business goals.', icon: Compass, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50' },
    { title: 'Creative Excellence', desc: 'Unique and original design solutions.', icon: Sparkles, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/50' },
    { title: 'Industry Experience', desc: 'Trusted by businesses across industries.', icon: Briefcase, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: 'Dedicated Support', desc: 'From concept to launch and beyond.', icon: Headphones, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/50' }
  ];

  const services = [
    { title: 'Brand Strategy', desc: 'Define your brand\'s purpose, positioning, and identity for long-term success.', color: 'bg-sky-50 text-sky-500 dark:bg-sky-950/40 dark:text-sky-400', icon: Layout },
    { title: 'Logo & Identity Design', desc: 'Create unique and memorable logos and visual identity systems that represent your brand.', color: 'bg-pink-50 text-pink-500 dark:bg-pink-950/40 dark:text-pink-400', icon: Package },
    { title: 'Marketing Collateral', desc: 'Brochures, business cards, presentations, and more to strengthen your brand presence.', color: 'bg-emerald-50 text-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-400', icon: FileText },
    { title: 'Social Media Creatives', desc: 'Scroll-stopping designs for social media that engage and grow your audience.', color: 'bg-purple-50 text-purple-500 dark:bg-purple-950/40 dark:text-purple-400', icon: Megaphone },
    { title: 'Packaging Design', desc: 'Creative packaging that makes your product stand out on every shelf.', color: 'bg-amber-50 text-amber-500 dark:bg-amber-950/40 dark:text-amber-400', icon: ShoppingBag },
    { title: 'UI/UX Design', desc: 'Modern and user-friendly designs for websites and applications.', color: 'bg-blue-50 text-blue-500 dark:bg-blue-950/40 dark:text-blue-400', icon: Smartphone }
  ];
  
  

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-12 sm:pt-32 lg:pt-36 lg:pb-24 min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        
        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-normal">Branding & Creative</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
             <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
               <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm flex items-center justify-start gap-2 mb-3">
                 BRANDING & CREATIVE
               </h4>
               <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-6 text-slate-900 dark:text-white">
                 Creative Brand Identity &amp; Strategy<br />for a <span className="text-slate-900 dark:text-white font-normal inline-block">Stronger Tomorrow</span>
               </h1>
               <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
                 We create meaningful brands and stunning creative designs that help your business stand out, connect with your audience, and leave a lasting impression.
               </p>
               
               <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
                  <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                      Discuss Your Brand <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white text-[#00016E] dark:bg-slate-900 dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] dark:border-sky-500 group-hover:border-transparent">
                      Explore Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
               </div>

               <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                 <div>
                   <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight mb-1 font-normal">100+</div>
                   <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Brands Created</div>
                 </div>
                 <div>
                   <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight mb-1 font-normal">250+</div>
                   <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Happy Clients</div>
                 </div>
                 <div>
                   <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight mb-1 font-normal">5+</div>
                   <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Years of Experience</div>
                 </div>
               </div>
             </ScrollSlideSection>

             <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex flex-col items-center justify-center">
                 <img src={brandingHeroImg} alt="Hero Graphic" className="w-full max-w-[650px] relative z-10 scale-100 lg:scale-110 object-contain drop-shadow-sm" />
             </ScrollSlideSection>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 border-t border-slate-200/60 dark:border-slate-800/60 mt-8">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
            OUR SERVICES
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
            Complete Branding &amp; Creative Solutions for Your Business
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-6 gap-4">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <ScrollSlideSection key={idx} delay={idx * 100 + "ms"} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-row gap-5">
                <div className={"w-14 h-14 rounded-xl flex items-center justify-center shrink-0 " + srv.color}>
                   <Icon className="w-6 h-6 fill-current opacity-80" />
                </div>
                <div className="flex flex-col justify-between items-start">
                   <h3 className="text-xl font-normal text-slate-900 dark:text-white mb-2">{srv.title}</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm font-normal mb-4">{srv.desc}</p>
                   <Link to="/contact" className="text-sky-600 dark:text-sky-400 text-sm font-normal flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </ScrollSlideSection>
            )
          })}
        </div>
      </section>

      {/* 3. OUR PROCESS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 bg-transparent">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
            OUR PROCESS
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
            From Ideas to Impact
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-md font-normal mt-4">
            We follow a strategic and collaborative process to create brands that inspire and deliver results.
          </p>
        </ScrollSlideSection>
        
        <ScrollSlideSection direction="up" delay="200ms" className="w-full">
           <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
             <div className="flex items-start lg:justify-between min-w-[800px] lg:min-w-0 pt-4">
               {processSteps.map((step, idx) => {
                 const StepIcon = step.icon;
                 return (
                   <div key={idx} className="flex relative flex-1 items-start text-left">
                      <div className="flex flex-col items-start px-2">
                        <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 text-sky-500 border border-sky-100 flex items-center justify-center shrink-0 shadow-sm relative z-10 mb-5">
                          <StepIcon className="w-6 h-6 opacity-90" />
                        </div>
                        <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="font-semibold text-sky-700 dark:text-sky-400 text-xl">{step.num}</span> {step.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-[140px] font-normal">{step.desc}</p>
                      </div>
                      {idx !== processSteps.length - 1 && (
                         <div className="absolute top-7 left-full w-full h-[1px] bg-slate-200 dark:bg-slate-700 -z-0 transform -translate-x-[50%]">
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

      {/* 4. OUR WORK */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-8 border-t border-slate-200/60 dark:border-slate-800/60">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
            OUR WORK
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
            Creative Work That Makes a Difference
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-normal mt-4">
            A glimpse of our recent branding and creative projects across various industries.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="relative inline-flex h-12 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 gap-2 text-sm z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                View All Projects <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
              <div className="h-48 bg-slate-900 flex items-center justify-center relative overflow-hidden p-6 group">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 blur-2xl absolute center" />
                <img src={brandingHeroImg} alt="Lumina" className="h-full object-contain filter saturate-50 group-hover:saturate-100 transition-all opacity-80 group-hover:scale-105 group-hover:opacity-100" />
              </div>
              <div className="py-4 px-2 font-normal text-slate-900 dark:text-slate-300 text-sm text-center border-t border-slate-100 dark:border-slate-800">
                 Logo &amp; Brand Identity
              </div>
           </div>
           
           <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
              <div className="h-48 bg-[#E9E4DB] flex items-center justify-center relative overflow-hidden p-4 group">
                <img src={brandingHeroImg} alt="Leafy" className="h-full object-contain filter group-hover:scale-105 transition-all w-1/2 opacity-70" />
              </div>
              <div className="py-4 px-2 font-normal text-slate-900 dark:text-slate-300 text-sm text-center border-t border-slate-100 dark:border-slate-800">
                 Packaging Design
              </div>
           </div>

           <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
              <div className="h-48 bg-[#F0F4FF] flex items-center justify-center relative overflow-hidden group">
                <img src={brandingHeroImg} alt="Nexa" className="h-full object-cover filter group-hover:scale-105 transition-all opacity-40 grayscale group-hover:grayscale-0" />
              </div>
              <div className="py-4 px-2 font-normal text-slate-900 dark:text-slate-300 text-sm text-center border-t border-slate-100 dark:border-slate-800">
                 Brand Collateral
              </div>
           </div>

           <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
              <div className="h-48 bg-pink-50 flex items-center justify-center relative overflow-hidden group">
                <img src={brandingHeroImg} alt="Social" className="h-full object-cover filter group-hover:scale-105 transition-all opacity-60 mix-blend-multiply" />
              </div>
              <div className="py-4 px-2 font-normal text-slate-900 dark:text-slate-300 text-sm text-center border-t border-slate-100 dark:border-slate-800">
                 Social Media Creatives
              </div>
           </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 bg-sky-50/50 dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800/60">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col items-start text-left">
              <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
                WHY CHOOSE US
              </h4>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
                Your Creative Partner<br/>for Brand Success
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal mb-10">
                We combine strategy, creativity, and industry expertise to build brands that create real business impact.
              </p>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full">
                 {whyGrid.map((item, idx) => (
                   <div key={idx} className="flex flex-col gap-3">
                     <div className={"w-12 h-12 rounded-xl flex items-center justify-center shadow-sm " + item.color}>
                       <item.icon className="w-5 h-5 fill-current opacity-80" />
                     </div>
                     <div>
                       <h4 className="text-base font-normal text-slate-900 dark:text-white mb-1">{item.title}</h4>
                       <p className="text-xs text-slate-500 font-normal leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </ScrollSlideSection>

            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 flex justify-end">
               <div className="relative w-full max-w-[600px] h-[400px] bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm flex items-center justify-center border border-slate-200 dark:border-slate-700">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300/30 blur-2xl rounded-full"></div>
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-sky-300/30 blur-2xl rounded-full"></div>
                  <img src={brandingHeroImg} alt="Why Choose Us Graphic" className="w-[85%] h-[85%] object-contain relative z-10 opacity-90" />
               </div>
            </ScrollSlideSection>
         </div>
      </section>
      
      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-8 mb-4">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              LET\'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white mb-4">
              Have a branding project in mind?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal max-w-xl">
              Let\'s turn your ideas into a powerful brand that people remember.
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


function CloudInfrastructureView() {
  const processSteps = [
    { num: '01', title: 'Assess', desc: 'Understand your business goals and current infrastructure.', icon: Search },
    { num: '02', title: 'Architect', desc: 'Design a secure and scalable cloud solution.', icon: Layout },
    { num: '03', title: 'Migrate', desc: 'Seamlessly move your applications and data.', icon: RefreshCw },
    { num: '04', title: 'Secure', desc: 'Implement best practices for security and compliance.', icon: ShieldCheck },
    { num: '05', title: 'Optimize', desc: 'Continuous monitoring and cost optimization.', icon: TrendingUp }
  ];

  const whyGrid = [
    { title: 'Reliable Infrastructure', icon: Database, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: 'Scalable Solutions', icon: Maximize, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: 'Enterprise-Grade Security', icon: ShieldCheck, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: 'Cost Optimization', icon: DollarSign, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' },
    { title: '24/7 Monitoring & Support', icon: Clock, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50' }
  ];

  const services = [
    { title: 'Cloud Migration & Modernization', desc: 'Seamless migration to the cloud with minimal downtime and improved performance.', color: 'bg-sky-50 text-sky-500 dark:bg-sky-950/40 dark:text-sky-400', icon: Cloud },
    { title: 'AWS / Azure / Google Cloud Infrastructure', desc: 'Design and manage robust infrastructure on leading cloud platforms.', color: 'bg-pink-50 text-pink-500 dark:bg-pink-950/40 dark:text-pink-400', icon: Server },
    { title: 'DevOps & CI/CD', desc: 'Automate your development lifecycle with modern DevOps practices and CI/CD pipelines.', color: 'bg-emerald-50 text-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-400', icon: Infinity },
    { title: 'Cloud Security', desc: 'Protect your data, applications, and infrastructure with advanced security practices.', color: 'bg-purple-50 text-purple-500 dark:bg-purple-950/40 dark:text-purple-400', icon: Shield },
    { title: 'Infrastructure Monitoring', desc: 'Proactive monitoring and alerting to ensure high availability and optimal performance.', color: 'bg-amber-50 text-amber-500 dark:bg-amber-950/40 dark:text-amber-400', icon: Activity },
    { title: 'Backup & Disaster Recovery', desc: 'Ensure business continuity with reliable backup and disaster recovery solutions.', color: 'bg-purple-50 text-purple-500 dark:bg-purple-950/40 dark:text-purple-400', icon: Database }
  ];
  


  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-8 sm:pt-28 lg:pt-28 lg:pb-12 min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        
        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-normal">Cloud & Infrastructure</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
             <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
               <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm flex items-center justify-start gap-2 mb-3">
                 CLOUD & INFRASTRUCTURE
               </h4>
               <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-normal leading-[1.12] tracking-tight mb-6 text-slate-900 dark:text-white">
                 Scalable Cloud Infrastructure<br />for a <span className="text-slate-900 dark:text-white font-normal inline-block">Stronger Tomorrow</span>
               </h1>
               <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
                 We design, build, and manage secure, scalable, and high-performance cloud environments that help your business grow without limits.
               </p>
               
               <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
                  <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                      Discuss Your Cloud Project <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white text-[#00016E] dark:bg-slate-900 dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] dark:border-sky-500 group-hover:border-transparent">
                      View Our Cloud Solutions <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
               </div>

               <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                 <div>
                   <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight mb-1 font-normal">100+</div>
                   <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Cloud Deployments</div>
                 </div>
                 <div>
                   <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight mb-1 font-normal">250+</div>
                   <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Happy Clients</div>
                 </div>
                 <div>
                   <div className="text-slate-900 dark:text-white text-2xl sm:text-3xl tracking-tight mb-1 font-normal">5+</div>
                   <div className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal mt-1">Years of Experience</div>
                 </div>
               </div>
             </ScrollSlideSection>

             <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex flex-col items-center justify-center">
                 <img src={cloudBgImg} alt="Hero Graphic" className="w-full max-w-[650px] relative z-10 scale-100 lg:scale-110 object-contain drop-shadow-sm mix-blend-multiply dark:mix-blend-normal" />
             </ScrollSlideSection>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 border-t border-slate-200/60 dark:border-slate-800/60 mt-8">
        <ScrollSlideSection direction="up" className="mb-10 text-left flex flex-col items-start lg:flex-row lg:justify-between lg:items-end">
          <div className="max-w-xl">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              OUR SERVICES
            </h4>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Cloud &amp; Infrastructure Services
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-md font-normal mt-4 lg:mt-0 text-left lg:text-right">
            End-to-end cloud solutions to help you modernize, scale, and stay secure in a fast-changing digital world.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-6 gap-4">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <ScrollSlideSection key={idx} delay={idx * 100 + "ms"} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-row gap-5">
                <div className={"w-14 h-14 rounded-xl flex items-center justify-center shrink-0 " + srv.color}>
                   <Icon className="w-6 h-6 fill-current opacity-80" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-between items-start">
                   <h3 className="text-xl font-normal text-slate-900 dark:text-white mb-2">{srv.title}</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm font-normal mb-4">{srv.desc}</p>
                   <Link to="/contact" className="text-sky-600 dark:text-sky-400 text-sm font-normal flex items-center gap-1 group-hover:gap-2 transition-all group">Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                </div>
              </ScrollSlideSection>
            )
          })}
        </div>
      </section>
      
      {/* 3. OUR CLOUD APPROACH */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 bg-sky-50/50 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollSlideSection direction="up" className="lg:col-span-5 flex flex-col items-start text-left">
              <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
                OUR CLOUD APPROACH
              </h4>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-6">
                Modern Architecture for a Scalable Future
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal mb-10">
                We build secure, resilient, and high-performing cloud infrastructure tailored to your business needs using industry best practices and modern technologies.
              </p>
              
              <ul className="space-y-4 w-full text-slate-700 dark:text-slate-300 font-normal">
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Highly Available &amp; Scalable</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Secure by Design</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Automated &amp; Cost-Optimized</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" /> Multi-Cloud Expertise</li>
              </ul>
            </ScrollSlideSection>

            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-7 flex justify-end">
               <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center border border-slate-100 dark:border-slate-700 p-8">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-sky-300/30 blur-2xl rounded-full"></div>
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-300/30 blur-2xl rounded-full"></div>
                  <img src={cloudBgImg} alt="Cloud Approach Architecture" className="w-full object-contain relative z-10 scale-90 mix-blend-multiply dark:mix-blend-normal" />
               </div>
            </ScrollSlideSection>
         </div>
      </section>

      {/* 4. WHY CHOOSE ZAVYX */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 mb-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left flex flex-col items-start lg:flex-row lg:justify-between lg:items-end">
          <div className="max-w-xl">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              WHY CHOOSE ZAVYX
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Your Trusted Cloud Transformation Partner
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-sm font-normal mt-4 lg:mt-0 max-w-sm text-left lg:text-right">
            We combine deep technical expertise with a customer-first approach to deliver real business impact.
          </p>
        </ScrollSlideSection>

        <div className="flex flex-wrap lg:grid lg:grid-cols-5 gap-4">
           {whyGrid.map((item, idx) => (
             <ScrollSlideSection key={idx} delay={idx*60 + "ms"} direction="up" className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center flex-1 min-w-[200px]">
                <div className={"w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm " + item.color}>
                  <item.icon className="w-6 h-6 fill-current opacity-80" strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-normal text-slate-900 dark:text-white leading-tight">{item.title}</h4>
             </ScrollSlideSection>
           ))}
        </div>
      </section>
      
      {/* 5. SUCCESS STORIES */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 bg-slate-100/50 dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800/60">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
            REAL RESULTS
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
            Success Stories in the Cloud
          </h2>
        </ScrollSlideSection>

        <ScrollSlideSection direction="up" delay="100ms" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
           <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
             <img src={cloudBgImg} alt="Healthcare Dashboard Case Study" className="w-full h-auto object-cover opacity-90 saturate-50 hover:saturate-100 transition-all mix-blend-multiply dark:mix-blend-normal" />
           </div>
           <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 text-left">
             <div className="bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Case Study</div>
             <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white leading-snug">
               Cloud Modernization for a Growing Healthcare Platform
             </h3>
             <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed mb-6">
               We helped a healthcare client migrate from on-premise infrastructure to AWS, improving system performance, scalability, and security while reducing operational costs.
             </p>
             <div className="grid grid-cols-3 gap-4 w-full relative pt-6 border-t border-slate-100 dark:border-slate-700">
                <div className="flex flex-col">
                  <div className="text-sky-600 dark:text-sky-400 text-2xl sm:text-3xl font-normal tracking-tight">60%</div>
                  <div className="text-slate-500 text-xs sm:text-sm font-normal mt-1">Faster Performance</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sky-600 dark:text-sky-400 text-2xl sm:text-3xl font-normal tracking-tight">40%</div>
                  <div className="text-slate-500 text-xs sm:text-sm font-normal mt-1">Cost Reduction</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sky-600 dark:text-sky-400 text-2xl sm:text-3xl font-normal tracking-tight">99.9%</div>
                  <div className="text-slate-500 text-xs sm:text-sm font-normal mt-1">Uptime Achieved</div>
                </div>
             </div>
           </div>
        </ScrollSlideSection>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-12 bg-transparent">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
            OUR PROCESS
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
            A Simple Path to Cloud Success
          </h2>
        </ScrollSlideSection>
        
        <ScrollSlideSection direction="up" delay="200ms" className="w-full">
           <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
             <div className="flex items-start lg:justify-between min-w-[800px] lg:min-w-0 pt-4">
               {processSteps.map((step, idx) => {
                 const StepIcon = step.icon;
                 return (
                   <div key={idx} className="flex relative flex-1 items-start text-left">
                      <div className="flex flex-col items-start px-2">
                        <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 text-sky-500 border border-sky-100 flex items-center justify-center shrink-0 shadow-sm relative z-10 mb-5">
                          <StepIcon className="w-6 h-6 opacity-90" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="font-semibold text-sky-700 dark:text-sky-400 text-xl">{step.num}</span> {step.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-[140px] font-normal">{step.desc}</p>
                      </div>
                      {idx !== processSteps.length - 1 && (
                         <div className="absolute top-7 left-full w-full h-[1px] bg-sky-200 dark:bg-slate-700 -z-0 transform -translate-x-[50%]">
                           <ArrowRight className="absolute -right-3 -top-2 w-4 h-4 text-sky-400" />
                         </div>
                      )}
                   </div>
                 )
               })}
             </div>
           </div>
        </ScrollSlideSection>
      </section>
      
      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mt-8 mb-4">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm mb-2">
              LET\'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white mb-4">
              Ready to Build a Future-Ready Cloud?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal max-w-xl">
              Let\'s turn your ideas into secure, scalable, and high-performing cloud solutions.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
             <Link to="/contact" className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                  Discuss Your Project <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </span>
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}


function CrmErpSystemsView() {
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
              <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-3 flex items-center gap-2">
                CRM & ERP SYSTEMS
              </h4>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.7rem] font-normal leading-[1.14] tracking-tight mb-5 text-slate-900 dark:text-white">
                Unified Business Management for a <br className="hidden sm:inline" />
                <span className="text-sky-600 dark:text-sky-400 font-normal">Stronger Tomorrow</span>
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 font-normal">
                Streamline your operations, strengthen customer relationships, and drive growth with an integrated CRM & ERP solution.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
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

              {/* Stats Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800">
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">100+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Businesses Transformed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">250+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">5+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Years of Experience</div>
                </div>
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
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Increase in Sales</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">30%</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Operational Efficiency</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">60%</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Faster Reporting</div>
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
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              FAQ
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-normal block mb-1">
              Got more questions? We're here to help.
            </span>
            <Link to="/contact" className="text-sky-600 dark:text-sky-400 font-medium text-sm hover:underline inline-flex items-center gap-1">
              Contact Us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollSlideSection>

        {/* 2-Column Accordion FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 40}ms`} direction="up">
                <div 
                  onClick={() => toggleFaq(idx)}
                  className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 cursor-pointer shadow-sm hover:shadow transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-normal text-slate-900 dark:text-white">
                      {faq.q}
                    </h3>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  {isOpen && (
                    <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3 animate-in fade-in-0 duration-200">
                      {faq.a}
                    </p>
                  )}
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

    </div>
  );
}

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const rawKey = decodeURIComponent(serviceId || '').toLowerCase();
  const normalizedKey = rawKey.replace(/[\s_]+/g, '-');

  if (
    normalizedKey === 'websites-web-apps' || 
    normalizedKey === 'websites' || 
    normalizedKey === 'web-apps'
  ) {
    return <WebsitesWebAppsView />;
  }
  if (
    normalizedKey === 'cloud-infrastructure' || 
    normalizedKey === 'cloud'
  ) {
    return <CloudInfrastructureView />;
  }
  if (
    normalizedKey === 'digital-marketing-seo' || 
    normalizedKey === 'digital-marketing' || 
    normalizedKey === 'seo'
  ) {
    return <DigitalMarketingView />;
  }
  if (
    normalizedKey === 'branding-creative' || 
    normalizedKey === 'branding' || 
    normalizedKey === 'creative'
  ) {
    return <BrandingCreativeView />;
  }
  if (
    normalizedKey === 'e-commerce-stores' || 
    normalizedKey === 'ecommerce-stores' || 
    normalizedKey === 'ecommerce' ||
    normalizedKey === 'e-commerce'
  ) {
    return <EcommerceStoresView />;
  }
  if (
    normalizedKey === 'whatsapp-api-bots' || 
    normalizedKey === 'whatsapp-api' || 
    normalizedKey === 'whatsapp'
  ) {
    return <WhatsAppApiBotsView />;
  }
  if (
    normalizedKey === 'mobile-apps' || 
    normalizedKey === 'mobile'
  ) {
    return <MobileAppsView />;
  }
  if (
    normalizedKey === 'ai-automation' || 
    normalizedKey === 'ai'
  ) {
    return <AiAutomationView />;
  }
  if (
    normalizedKey === 'crm-erp-systems' || 
    normalizedKey === 'crm-erp' || 
    normalizedKey === 'crm' || 
    normalizedKey === 'erp'
  ) {
    return <CrmErpSystemsView />;
  }
  return <WebsitesWebAppsView />;
}

function AiAutomationView() {
  const whatsappServices = [
    { title: 'Intelligent Workflow Automation', desc: 'Automate repetitive chat tasks and streamline business workflows via WhatsApp Business API.', icon: Workflow, color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400' },
    { title: 'AI Chatbots & Virtual Assistants', desc: 'Build intelligent assistants for customer support, internal operations, and lead qualification 24/7.', icon: Bot, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400' },
    { title: 'Document & Data Automation', desc: 'Extract, process, and send instant messaging receipts, order updates, and notifications.', icon: FileText, color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400' },
    { title: 'Predictive Analytics & Insights', desc: 'Turn your conversation data into accurate predictions and actionable growth insights.', icon: BarChart3, color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400' },
    { title: 'AI Content & Process Intelligence', desc: 'Leverage AI to analyze, generate and optimize business content and processes.', icon: Megaphone, color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
    { title: 'Custom AI Integrations', desc: 'Integrate AI into your existing systems with tailored solutions for your business.', icon: Cpu, color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400' }
  ];

  const workflowSteps = [
    { num: '1', title: 'Discover', desc: 'Understand your business needs' },
    { num: '2', title: 'Automate', desc: 'Design and build AI solutions' },
    { num: '3', title: 'Integrate', desc: 'Connect with your existing systems' },
    { num: '4', title: 'Optimize', desc: 'Monitor, improve and scale' }
  ];

  const departmentSolutions = [
    { title: 'Sales & Marketing', icon: TrendingUp, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' },
    { title: 'Customer Support', icon: Headphones, color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/40' },
    { title: 'Finance & Accounting', icon: CreditCard, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' },
    { title: 'HR & People Ops', icon: Users, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40' },
    { title: 'Operations & Supply Chain', icon: Package, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' },
    { title: 'Analytics & Business Intel', icon: BarChart3, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/40' }
  ];

  const whyChooseGrid = [
    { title: 'Certified Expertise', desc: 'Skilled and experienced AI professionals.', icon: Award, color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400' },
    { title: 'Custom Solutions', desc: 'Tailored conversation flows for your business needs.', icon: Sparkles, color: 'bg-pink-50 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400' },
    { title: 'Secure Implementation', desc: 'Enterprise-grade security, end-to-end encryption & compliance.', icon: ShieldCheck, color: 'bg-sky-50 text-sky-600 dark:bg-sky-900/40 dark:text-sky-400' },
    { title: 'Continuous Optimization', desc: 'Ongoing bot tuning, support, and performance improvement.', icon: RefreshCw, color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400' }
  ];

  const aiTechLogos = [
    { name: 'Google Cloud', url: officialTechLogos['Google Cloud'] },
    { name: 'AWS', url: officialTechLogos['AWS'] },
    { name: 'Microsoft Azure', url: officialTechLogos['Microsoft Azure'] },
    { name: 'OpenAI', url: officialTechLogos['OpenAI'] },
    { name: 'Slack', url: officialTechLogos['Slack'] },
    { name: 'Microsoft 365', url: officialTechLogos['Microsoft 365'] },
    { name: 'Databases', url: officialTechLogos['PostgreSQL'] },
    { name: 'APIs', url: officialTechLogos['GraphQL'] }
  ];

  return (
    <div className="bg-slate-50/50 dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-16 relative overflow-hidden">
      
      {/* 1. HERO SECTION WITH ACCENTS */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden bg-transparent">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-gradient-to-bl from-sky-200/60 via-blue-100/30 to-transparent rounded-bl-[160px] -z-10 hidden lg:block opacity-90 blur-3xl pointer-events-none" />
        
        {/* Soft pink accent geometry on top right */}
        <div className="absolute top-12 right-0 w-32 h-64 bg-pink-300/20 dark:bg-pink-900/10 rounded-l-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-[1350px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 font-normal">
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-sky-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-600 dark:text-sky-400 font-semibold">AI Automation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl">
              <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-3 flex items-center justify-start gap-2">
                AI & AUTOMATION
              </h4>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.5rem] font-normal leading-[1.15] tracking-tight mb-5 text-slate-900 dark:text-white">
                Intelligent Automation for a <span className="text-sky-600 dark:text-sky-400 font-normal">Smarter Tomorrow</span>
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed mb-6 font-normal">
                Leverage the power of WhatsApp API and AI automation to reduce manual work, improve efficiency, and enable scalable business operations for a future-ready enterprise.
              </p>

              {/* Signature CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Explore Solutions <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    View Our Work <ArrowRight className="w-5 h-5 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Startup Metrics Row below buttons matching reference image */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">100+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Automations Delivered</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">250+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight">5+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Years of Experience</div>
                </div>
              </div>
            </ScrollSlideSection>

            {/* Hero Right Hub Diagram Visual matching reference image */}
            <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[620px] aspect-square bg-transparent rounded-3xl p-6 sm:p-8 border-0 flex items-center justify-center overflow-hidden">
                
                {/* Background Dotted Grid pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Central Node Hub */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-600 dark:to-blue-700 text-white flex flex-col items-center justify-center p-3 shadow-2xl shadow-sky-500/30 group">
                  <div className="absolute -inset-1 rounded-[26px] bg-sky-400/30 animate-pulse -z-10" />
                  <Bot className="w-10 h-10 sm:w-12 sm:h-12 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-center leading-tight">AI Automation</span>
                </div>

                {/* Floating Connected Nodes around central hub matching reference image */}
                {/* Node 1: AI Assistant (Top Left) */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">AI Assistant</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Natural Language Processing</div>
                  </div>
                </div>

                {/* Node 2: Document Processing (Top Right) */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Document Processing</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">OCR & Data Extraction</div>
                  </div>
                </div>

                {/* Node 3: Predictive Analytics (Far Top Right) */}
                <div className="absolute top-28 -right-2 sm:top-32 sm:right-2 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Predictive Analytics</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Data-Driven Insights</div>
                  </div>
                </div>

                {/* Node 4: Chatbot 24/7 (Middle Left) */}
                <div className="absolute top-32 -left-2 sm:top-36 sm:left-2 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Chatbot</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">24/7 Instant Support</div>
                  </div>
                </div>

                {/* Node 5: Workflow Automation (Middle Right) */}
                <div className="absolute bottom-10 right-4 sm:bottom-12 sm:right-6 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Workflow Automation</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Automate Repetitive Tasks</div>
                  </div>
                </div>

                {/* Node 6: Data Intelligence (Bottom Left) */}
                <div className="absolute bottom-8 left-6 sm:bottom-10 sm:left-8 bg-white dark:bg-slate-800/90 border-0 shadow-md rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Data Intelligence</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Unify • Analyze • Grow</div>
                  </div>
                </div>

              </div>
            </ScrollSlideSection>

          </div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            OUR SERVICES
          </h4>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-xl">
              AI-Powered Solutions Built for Your Business
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal">
              Leverage the power of AI and automation to reduce manual work, improve efficiency, and enable scalable business operations for a future-ready enterprise.
            </p>
          </div>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatsappServices.map((srv, idx) => {
            const SrvIcon = srv.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${srv.color} flex items-center justify-center mb-5 shrink-0 shadow-sm`}>
                      <SrvIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                      {srv.desc}
                    </p>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 3. HOW AI AUTOMATION WORKS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            HOW IT WORKS
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            From Idea to Impact in 4 Simple Steps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl font-normal">
            Our streamlined process ensures successful AI implementation with measurable results.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {workflowSteps.map((step, idx) => (
            <ScrollSlideSection key={idx} delay={`${idx * 100}ms`} direction="up">
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border-0 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between relative group">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-bold text-sm flex items-center justify-center shrink-0 border border-sky-200 dark:border-sky-800">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-normal text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 items-center justify-center text-sky-600 shadow-sm">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            </ScrollSlideSection>
          ))}
        </div>
      </section>

      {/* 4. TRANSFORM YOUR OPERATIONS SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <ScrollSlideSection direction="up" className="lg:col-span-5 flex flex-col text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              TRANSFORM YOUR OPERATIONS
            </h4>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-4">
              Achieve More with AI and Automation
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Our AI solutions help you eliminate manual work, improve accuracy, and unlock new opportunities for growth.
            </p>

            {/* 4 Bullet Feature list matching reference image */}
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">Reduce Manual Work</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Automate repetitive and time-consuming tasks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">Faster Decisions</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Get real-time insights and make smarter decisions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">Fewer Errors</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Minimize human errors and ensure consistency.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">Scalable Operations</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Grow your business without operational limits.</p>
                </div>
              </div>
            </div>
          </ScrollSlideSection>

          {/* Right Dashboard Mock Visual matching reference image */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-slate-900 text-white p-5 sm:p-6">
              
              {/* Top Dashboard Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-xs">
                    ZA
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">ZAVYX AI Dashboard</h4>
                    <p className="text-[11px] text-emerald-400 font-normal flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Your AI systems are running smoothly.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full font-normal">Live Stats</span>
                </div>
              </div>

              {/* 3 Metric Stat Cards */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
                  <div className="text-xs text-slate-400 mb-1 font-normal">Tasks Automated</div>
                  <div className="text-xl font-bold text-white">124</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">+12% vs last week</div>
                </div>

                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
                  <div className="text-xs text-slate-400 mb-1 font-normal">Accuracy Rate</div>
                  <div className="text-xl font-bold text-white">96%</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">+2% improvement</div>
                </div>

                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60">
                  <div className="text-xs text-slate-400 mb-1 font-normal">Hours Saved</div>
                  <div className="text-xl font-bold text-white">2.4k</div>
                  <div className="text-[10px] text-sky-400 font-semibold">+18% total efficiency</div>
                </div>
              </div>

              {/* Workflow Activity Chart & AI Assistant Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8 bg-slate-800/60 rounded-xl p-4 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-300">Workflow Activity</span>
                    <span className="text-[10px] text-slate-400">Last 7 days</span>
                  </div>
                  {/* Wave Trend Line SVG */}
                  <div className="h-28 w-full flex items-end">
                    <svg className="w-full h-full text-sky-400 overflow-visible" viewBox="0 0 300 80" fill="none">
                      <path d="M0 60 Q 50 10, 100 45 T 200 20 T 300 35" stroke="currentColor" strokeWidth="3" fill="none" />
                      <path d="M0 60 Q 50 10, 100 45 T 200 20 T 300 35 L 300 80 L 0 80 Z" fill="url(#blue-grad)" opacity="0.2" />
                      <defs>
                        <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="sm:col-span-4 bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-semibold text-slate-200">AI Assistant</span>
                    </div>
                    <div className="bg-slate-900/90 rounded-lg p-2.5 text-[11px] text-slate-300 font-normal leading-relaxed border border-slate-800">
                      "How can I help automate your workflow today?"
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Status: Active</span>
                    <span className="text-emerald-400 font-medium">Online</span>
                  </div>
                </div>
              </div>

            </div>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 5. SOLUTIONS FOR EVERY DEPARTMENT SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            AI ACROSS YOUR BUSINESS
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Solutions for Every Department
          </h2>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {departmentSolutions.map((dept, idx) => {
            const DeptIcon = dept.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 60}ms`} direction="up">
                <div className="bg-transparent dark:bg-transparent p-5 rounded-2xl shadow-none transition-all flex flex-col items-center justify-center gap-3 text-center group border-0 h-full">
                  <div className={`w-12 h-12 rounded-xl ${dept.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    <DeptIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-slate-800 dark:text-slate-200">
                    {dept.title}
                  </span>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>
      </section>

      {/* 6. TECHNOLOGY & INTEGRATION SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            TECHNOLOGY & INTEGRATION
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-2">
            Seamless Integration with Your Existing Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
            We integrate with your existing tools and infrastructure to ensure a smooth and secure AI implementation.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8">
          {aiTechLogos.map((tech, idx) => (
            <ScrollSlideSection key={idx} delay={`${idx * 40}ms`} direction="up">
              <div className="flex flex-col items-center justify-center gap-3 group py-2">
                <img src={tech.url} alt={tech.name} className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110 filter drop-shadow-sm" />
                <span className="text-sm sm:text-base font-normal text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {tech.name}
                </span>
              </div>
            </ScrollSlideSection>
          ))}
        </div>
      </section>

      {/* 7. WHY CHOOSE US & SUCCESS STORY SECTION */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <ScrollSlideSection direction="up" className="mb-10 text-left">
          <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
            WHY CHOOSE US
          </h4>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Your Trusted Partner in AI Transformation
          </h2>
        </ScrollSlideSection>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {whyChooseGrid.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <ScrollSlideSection key={idx} delay={`${idx * 80}ms`} direction="up">
                <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4 h-full">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    <ItemIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollSlideSection>
            );
          })}
        </div>

        {/* SUCCESS STORY Box matching reference image */}
        <ScrollSlideSection direction="up" delay="100ms">
          <div className="bg-gradient-to-r from-sky-50/90 via-blue-50/50 to-pink-50/80 dark:from-slate-800/90 dark:via-slate-800/80 dark:to-slate-800/90 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-sky-600 dark:text-sky-400 font-semibold tracking-widest text-xs uppercase mb-2 block">
                SUCCESS STORY
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white mb-3">
                Automating Document Processing for a Leading Logistics Company
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
                We implemented an AI-powered document processing solution that automated invoice and shipment document handling, resulting in 70% faster processing and 90% higher accuracy.
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">70%</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Faster Processing</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">90%</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Higher Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-normal text-sky-600 dark:text-sky-400 tracking-tight">50+</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal">Hours Saved Weekly</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-sky-400 to-blue-600 text-white flex items-center justify-center shadow-xl shadow-sky-500/20">
                <Bot className="w-12 h-12 sm:w-14 sm:h-14" />
              </div>
            </div>
          </div>
        </ScrollSlideSection>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sky-100/60 via-blue-50/70 to-pink-100/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          
          <div className="relative z-10 text-left">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2">
              LET'S BUILD TOGETHER
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-2">
              Ready to Automate Your Business?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal">
              Let's discuss how AI can create real impact for your business.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm shrink-0 cursor-pointer z-10"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
              Get a Quote <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}


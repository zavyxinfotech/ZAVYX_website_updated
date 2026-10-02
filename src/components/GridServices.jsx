import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, ShoppingCart, Database, MessageCircle, Bot,
  Smartphone, TrendingUp, PenTool, Cloud, ArrowRight
} from 'lucide-react';
import ScrollAnimatedHeading from './ScrollAnimatedHeading';

import imgWeb from '../../assets/images/website_web_apps_home_page.webp';
import imgEcom from '../../assets/images/E_commerce_home_page.webp';
import imgCrm from '../../assets/images/CRM_ERP_services.webp';
import imgWa from '../../assets/images/WhatsApp_API_and_chatbots.webp';
import imgAi from '../../assets/images/AI_Automation_home_page.webp';
import imgMob from '../../assets/images/mobile_apps.webp';
import imgSeo from '../../assets/images/Digital_marketing_SEO_home_page.webp';
import imgBrand from '../../assets/images/Branding_Creative_home_page.webp';
import imgCloud from '../../assets/images/Cloud_infrastructure_Home_pagejpeg.webp';

export default function GridServices() {
  const services = [
    { icon: Globe, title: 'Websites & Web Apps', desc: 'High-performance modern web apps tailored for speed, SEO, and engagement.', path: '/services/websites-web-apps', iconColor: 'text-sky-600', bgColor: 'bg-sky-600', glowColor: 'from-sky-600/10', image: imgWeb },
    { icon: ShoppingCart, title: 'E-commerce Stores', desc: 'Scalable custom storefronts optimized for maximum conversion and fast checkouts.', path: '/services/ecommerce-stores', iconColor: 'text-pink-600', bgColor: 'bg-pink-600', glowColor: 'from-pink-600/10', image: imgEcom },
    { icon: Database, title: 'CRM & ERP Systems', desc: 'Custom enterprise software to streamline workflow, inventory, and relations.', path: '/services/crm-erp-systems', iconColor: 'text-green-500', bgColor: 'bg-green-500', glowColor: 'from-green-500/10', image: imgCrm },
    { icon: MessageCircle, title: 'WhatsApp API & Bots', desc: 'Automated WhatsApp workflows for real-time client engagement and support.', path: '/services/whatsapp-api-bots', iconColor: 'text-amber-500', bgColor: 'bg-amber-500', glowColor: 'from-amber-500/10', image: imgWa },
    { icon: Bot, title: 'AI & Automation', desc: 'Intelligent AI bots and process automation to cut costs and increase output.', path: '/services/ai-automation', iconColor: 'text-sky-600', bgColor: 'bg-sky-600', glowColor: 'from-sky-600/10', image: imgAi },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform apps engineered for fluid user experience.', path: '/services/mobile-apps', iconColor: 'text-pink-600', bgColor: 'bg-pink-600', glowColor: 'from-pink-600/10', image: imgMob },
    { icon: TrendingUp, title: 'Digital Marketing & SEO', desc: 'Data-driven scaling strategies ensuring top-tier rankings and lead flow.', path: '/services/digital-marketing-seo', iconColor: 'text-green-500', bgColor: 'bg-green-500', glowColor: 'from-green-500/10', image: imgSeo },
    { icon: PenTool, title: 'Branding & Creative', desc: 'Premium visual identity systems positioning you at the pinnacle of industry.', path: '/services/branding-creative', iconColor: 'text-amber-500', bgColor: 'bg-amber-500', glowColor: 'from-amber-500/10', image: imgBrand },
    { icon: Cloud, title: 'Cloud & Infrastructure', desc: 'Cloud infrastructure management, security hardening, and stable deployments.', path: '/services/cloud-infrastructure', iconColor: 'text-sky-600', bgColor: 'bg-sky-600', glowColor: 'from-sky-600/10', image: imgCloud }
  ];

  return (
    // pt-32 adds essential massive gap separating gracefully from absolute attached hero boundaries beneath
    <section className="pt-8 sm:pt-20 lg:pt-40 pb-6 sm:pb-16 lg:pb-0 min-h-0 sm:min-h-screen flex flex-col justify-center bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section: Matches About ZAVYX section alignment and tagline */}
        <div className="flex flex-col items-start text-left max-w-4xl mb-10 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm">OUR SERVICES</span>
            <span className="w-8 h-[2px] bg-sky-500 inline-block"></span>
          </div>
          <ScrollAnimatedHeading
            text="Comprehensive Digital Solutions"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4 text-left justify-start w-full"
          />
          <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl lg:text-2xl font-normal max-w-3xl leading-relaxed text-left">
            Tailored technological capabilities engineered to drive growth, automation, and operational efficiency within your business architecture.
          </p>
        </div>

        {/* Mesh Connected Grid Layout with perfectly mapped inner borders */}
        {/* Parent container holds NO borders, completely unbounding the outside rim */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-transparent shadow-none">
          {services.map((svc, idx) => {
            const Icon = svc.icon;

            // Mathematically mapping inner-mesh borders tightly mapping 3x3 array 
            // Eliminates outside bounding box lines perfectly
            const isRightEdge = (idx + 1) % 3 === 0;
            const isBottomEdge = idx >= 6;

            let borderClasses = "border-slate-200 dark:border-slate-800/80 ";
            // Base mobile borders (everything but absolute last has bottom border)
            if (idx === 8) {
              borderClasses += "border-b-0 ";
            } else {
              borderClasses += "border-b-[1px] ";
            }

            // Clean md/lg overrides (3x3 grid layout)
            borderClasses += "md:border-r-0 md:border-b-0 "; // Reset baseline
            if (!isRightEdge) borderClasses += "md:border-r-[1px] "; // Inner vertical seams
            if (!isBottomEdge) borderClasses += "md:border-b-[1px] "; // Inner horizontal seams

            return (
              <Link
                key={idx}
                to={svc.path}
                className={`sticky top-[15vh] md:relative md:top-auto bg-white dark:bg-slate-900 z-10 group flex flex-col items-center text-center p-4 lg:p-6 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 overflow-hidden cursor-pointer ${borderClasses}`}
              >
                {/* Dynamically mapped minimal color shade overlay matching brand token */}
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Precision left border highlight mapped to literal logo/shade colors natively */}
                <div className={`absolute left-0 top-0 bottom-0 w-[4px] ${svc.bgColor} scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center z-20`}></div>

                {/* Sliding Image Background on Hover */}
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] z-0 pointer-events-none opacity-0 group-hover:opacity-100 overflow-hidden">
                  <img src={svc.image} className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" alt={svc.title} />
                </div>

                {/* Hover States: Top-left Title & Bottom-right Arrow */}
                <h3 className="absolute top-4 left-4 lg:top-6 lg:left-6 text-lg lg:text-xl font-normal text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  {svc.title}
                </h3>
                <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 text-white">
                  <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>

                {/* Default Idle Content (Fades out on hover) */}
                <div className="flex flex-col items-center transition-opacity duration-500 group-hover:opacity-0 relative z-20">
                  {/* Clean Icon Wrapper: NO border, NO background, NO shadow */}
                  <div className="mb-3 p-1.5 flex items-center justify-center bg-transparent border-0 shadow-none relative z-20">
                    <Icon className={`w-8 h-8 lg:w-10 lg:h-10 ${svc.iconColor} transition-colors duration-300`} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg lg:text-xl font-normal text-slate-900 dark:text-white mb-2 transition-colors relative z-20 lg:whitespace-nowrap">
                    {svc.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg lg:text-xl font-normal leading-relaxed md:leading-snug max-w-[300px] lg:max-w-[340px] relative z-20">
                    {svc.desc}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import logoUrl from '../../assets/logo/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden relative pt-16 md:pt-24 flex flex-col justify-between">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full mb-10 md:my-auto">
        
        {/* Top Section: Standard 4 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col lg:pr-8">
            <Link to="/">
              <img src={logoUrl} alt="ZAVYX Infotech" className="h-10 md:h-12 w-auto object-contain object-left mb-6 dark:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.8))_drop-shadow(0_0_2px_rgba(255,255,255,0.5))] transition-all duration-300" />
            </Link>
            <p className="text-[14px] md:text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Empowering growing businesses with intelligent web architecture, seamless automation, and scalable CRM environments.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-slate-500 hover:text-sky-500 hover:border-sky-300 transition-colors">
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-slate-500 hover:text-pink-500 hover:border-pink-300 transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={2} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-300 transition-colors">
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-base md:text-[17px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Quick Links</h3>
            <hr className="border-slate-200 dark:border-slate-700/80 my-4 lg:my-6 w-full max-w-[200px]" />
            <div className="flex flex-col gap-3 md:gap-4">
              <Link to="/" className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">About Us</Link>
              <Link to="/services" className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Services</Link>
              <Link to="/contact" className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Contact Us</Link>
              <Link to="#" className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col">
            <h3 className="text-base md:text-[17px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Our Services</h3>
            <hr className="border-slate-200 dark:border-slate-700/80 my-4 lg:my-6 w-full max-w-[200px]" />
            <div className="flex flex-col gap-3 md:gap-4">
              <Link to="/services/websites-web-apps" className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors block truncate">Websites & Web Apps</Link>
              <Link to="/services/crm-erp-systems" className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors block truncate">CRM & ERP Systems</Link>
              <Link to="/services/mobile-apps" className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors block truncate">Mobile Apps</Link>
              <Link to="/services/ai-automation" className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors block truncate">AI & Automation</Link>
              <Link to="/services/cloud-infrastructure" className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors block truncate">Cloud Solutions</Link>
             </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h3 className="text-base md:text-[17px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Get In Touch</h3>
            <hr className="border-slate-200 dark:border-slate-700/80 my-4 lg:my-6 w-full" />
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 font-medium">+91 63827 21178</span>
              <span className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 font-medium">hello@zavyx.in</span>
              <div className="flex flex-col gap-1 max-w-sm mt-1">
                <span className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 font-semibold leading-snug">TeesZone Clothing Private Limited.</span>
                <span className="text-[13px] md:text-[14px] text-slate-500 dark:text-slate-400 leading-snug">#2155, Fortune City, Global Market – Texvalley, NH 544 Bengaluru–Cochin National Highway, Chithode, Erode – 638102, Tamil Nadu, India</span>
              </div>
              <span className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 font-medium mt-1">Mon–Fri, 9:30 AM – 6:00 PM IST</span>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright Bar Only */}
      <div className="w-full text-center z-10 py-6 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 mt-10 lg:mt-16">
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-[0.15em]">
           © {new Date().getFullYear()} ZAVYX InfoTech. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

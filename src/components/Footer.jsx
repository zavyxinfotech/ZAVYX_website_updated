import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logoUrl from '../../assets/logo/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020813] to-[#01040a] border-t border-slate-800/80 overflow-hidden relative pt-16 md:pt-24 flex flex-col justify-between">
      
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-sky-900/10 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/10 blur-[100px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full mb-10 md:my-auto">
        
        {/* Top Section: Standard 4 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col lg:pr-8">
            <Link to="/">
              <img src={logoUrl} alt="ZAVYX Infotech" className="h-10 md:h-12 w-auto object-contain object-left mb-6 [filter:drop-shadow(0_0_12px_rgba(255,255,255,0.7))_drop-shadow(0_0_4px_rgba(255,255,255,0.5))] transition-all duration-300 hover:scale-105 origin-left" />
            </Link>
            <p className="text-[14px] md:text-[15px] text-slate-400 leading-relaxed mb-8 font-medium">
              Empowering growing businesses with intelligent web architecture, seamless automation, and scalable CRM environments.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/50 shadow-sm flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/50 hover:bg-slate-800 transition-all">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/50 shadow-sm flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-400/50 hover:bg-slate-800 transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/50 shadow-sm flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-500/50 hover:bg-slate-800 transition-all">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-base md:text-[17px] font-bold text-white uppercase tracking-wider shadow-sm">Quick Links</h3>
            <hr className="border-slate-800 my-4 lg:my-6 w-full max-w-[200px]" />
            <div className="flex flex-col gap-3 md:gap-4">
              <Link to="/" className="text-[15px] md:text-base text-slate-400 hover:text-sky-400 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-[15px] md:text-base text-slate-400 hover:text-sky-400 font-medium transition-colors">About Us</Link>
              <Link to="/services" className="text-[15px] md:text-base text-slate-400 hover:text-sky-400 font-medium transition-colors">Services</Link>
              <Link to="/contact" className="text-[15px] md:text-base text-slate-400 hover:text-sky-400 font-medium transition-colors">Contact Us</Link>
              <Link to="#" className="text-[15px] md:text-base text-slate-400 hover:text-sky-400 font-medium transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col">
            <h3 className="text-base md:text-[17px] font-bold text-white uppercase tracking-wider">Our Services</h3>
            <hr className="border-slate-800 my-4 lg:my-6 w-full max-w-[200px]" />
            <div className="flex flex-col gap-3 md:gap-4">
              <Link to="/services/websites-web-apps" className="text-[15px] md:text-base text-slate-400 hover:text-sky-400 font-medium transition-colors block truncate">Websites & Web Apps</Link>
              <Link to="/services/crm-erp-systems" className="text-[15px] md:text-base text-slate-400 hover:text-emerald-400 font-medium transition-colors block truncate">CRM & ERP Systems</Link>
              <Link to="/services/mobile-apps" className="text-[15px] md:text-base text-slate-400 hover:text-amber-400 font-medium transition-colors block truncate">Mobile Apps</Link>
              <Link to="/services/ai-automation" className="text-[15px] md:text-base text-slate-400 hover:text-rose-400 font-medium transition-colors block truncate">AI & Automation</Link>
              <Link to="/services/cloud-infrastructure" className="text-[15px] md:text-base text-slate-400 hover:text-sky-400 font-medium transition-colors block truncate">Cloud Solutions</Link>
             </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h3 className="text-base md:text-[17px] font-bold text-white uppercase tracking-wider">Get In Touch</h3>
            <hr className="border-slate-800 my-4 lg:my-6 w-full" />
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-[15px] md:text-base text-slate-300 font-medium">+91 63827 21178</span>
              <span className="text-[15px] md:text-base text-slate-300 font-medium">hello@zavyx.in</span>
              <div className="flex flex-col gap-1 max-w-sm mt-1">
                <span className="text-[15px] md:text-base text-slate-300 font-bold leading-snug">TeesZone Clothing Private Limited.</span>
                <span className="text-[13px] md:text-[14px] text-slate-400 leading-relaxed max-w-[90%]">#2155, Fortune City, Global Market – Texvalley, NH 544 Bengaluru–Cochin National Highway, Chithode, Erode – 638102, Tamil Nadu, India</span>
              </div>
              <span className="text-[15px] md:text-base text-sky-400 font-semibold mt-1">Mon–Fri, 9:30 AM – 6:00 PM IST</span>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright Bar Only */}
      <div className="w-full text-center z-10 py-6 border-t border-slate-800/60 bg-[#01040a]/80 mt-10 lg:mt-16 relative">
        <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-[0.15em]">
           © {new Date().getFullYear()} ZAVYX InfoTech. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

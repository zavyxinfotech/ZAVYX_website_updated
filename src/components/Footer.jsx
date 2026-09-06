import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden relative pt-20 flex flex-col min-h-[90vh] md:h-screen justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-10 md:my-auto">
        
        {/* Top Section: Layout matched to provided reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">Quick Links</h3>
            <hr className="border-slate-300 dark:border-slate-700 my-4 w-full" />
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">About Us</Link>
              <Link to="/services" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Services</Link>
              <Link to="/contact" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Contact Us</Link>
              <Link to="#" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors mt-2">Privacy Policy</Link>
              <Link to="#" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">Our Services</h3>
            <hr className="border-slate-300 dark:border-slate-700 my-4 w-full" />
            <div className="flex flex-col gap-3">
              <Link to="/services/websites-web-apps" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Websites & Web Apps</Link>
              <Link to="/services/crm-erp-systems" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">CRM & ERP Systems</Link>
              <Link to="/services/mobile-apps" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Mobile Apps</Link>
              <Link to="/services/ai-automation" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">AI & Automation</Link>
              <Link to="/services/cloud-infrastructure" className="text-base md:text-lg text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Cloud Solutions</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">Get In Touch</h3>
            <hr className="border-slate-300 dark:border-slate-700 my-4 w-full" />
            <div className="flex flex-col gap-3">
              <span className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">+91 63827 21178</span>
              <span className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">hello@zavyx.in</span>
              <span className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-sm">TeesZone Clothing Private Limited. #2155, Fortune City, Global Market – Texvalley, NH 544 Bengaluru–Cochin National Highway, Chithode, Erode – 638102, Tamil Nadu, India</span>
              <span className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">Mon–Fri, 9:30 AM – 6:00 PM IST</span>
              
              <Link 
                to="/contact" 
                className="mt-6 w-max px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-600 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-sky-500 dark:hover:border-sky-500 transition-colors shadow-sm"
              >
                Send a message
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Massive Typography Banner Bottom matched to reference UI fading into background perfectly */}
      <div className="absolute bottom-0 left-0 w-full select-none flex justify-center pointer-events-none z-0">
        <h1 
          className="text-[22vw] sm:text-[24vw] md:text-[26vw] font-black tracking-tighter text-center w-full text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-emerald-500 via-amber-500 to-rose-500 opacity-[0.06] dark:opacity-[0.08] translate-y-6 md:translate-y-8 leading-none"
        >
          ZAVYX
        </h1>
      </div>
      
      {/* Copyright Bar Overlay */}
      <div className="absolute bottom-2 md:bottom-6 w-full text-center z-10 pointer-events-auto">
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-[0.2em]">
           © {new Date().getFullYear()} ZAVYX InfoTech
        </p>
      </div>

    </footer>
  );
}

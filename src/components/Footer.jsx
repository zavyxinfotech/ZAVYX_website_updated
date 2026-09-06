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
            <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">Quick Links</h3>
            <hr className="border-slate-300 dark:border-slate-700 my-4 w-full" />
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">About Us</Link>
              <Link to="/services" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Services</Link>
              <Link to="/contact" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Contact Us</Link>
              <Link to="#" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors mt-2">Privacy Policy</Link>
              <Link to="#" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">Our Services</h3>
            <hr className="border-slate-300 dark:border-slate-700 my-4 w-full" />
            <div className="flex flex-col gap-3">
              <Link to="/services/websites-web-apps" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Websites & Web Apps</Link>
              <Link to="/services/crm-erp-systems" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">CRM & ERP Systems</Link>
              <Link to="/services/mobile-apps" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Mobile Apps</Link>
              <Link to="/services/ai-automation" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">AI & Automation</Link>
              <Link to="/services/cloud-infrastructure" className="text-sm md:text-base text-slate-600 dark:text-slate-400 hover:text-sky-500 font-medium transition-colors">Cloud Solutions</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">Get In Touch</h3>
            <hr className="border-slate-300 dark:border-slate-700 my-4 w-full" />
            <div className="flex flex-col gap-3">
              <span className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">+91 93608 04323</span>
              <span className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">vasukip2004@gmail.com</span>
              <span className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">Tamil Nadu, India</span>
              
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
      <div className="w-full select-none flex justify-center items-end pointer-events-none relative z-0 overflow-hidden leading-[0.75]">
        <h1 
          className="text-[25vw] sm:text-[26vw] md:text-[27.5vw] font-black tracking-tighter text-center w-full text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900"
        >
          ZAVYX
        </h1>
      </div>
      
      {/* Copyright Bar Overlay */}
      <div className="absolute bottom-2 md:bottom-6 w-full text-center z-10 pointer-events-auto">
        <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-[0.2em]">
           © {new Date().getFullYear()} ZAVYX InfoTech
        </p>
      </div>

    </footer>
  );
}

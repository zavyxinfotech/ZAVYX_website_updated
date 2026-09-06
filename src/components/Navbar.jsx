import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import logoUrl from '../../assets/logo/logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const servicesList = [
    { title: 'Websites & Web Apps', path: '/services/websites-web-apps', color: 'text-sky-600 bg-sky-50' },
    { title: 'E-commerce Stores', path: '/services/ecommerce-stores', color: 'text-rose-600 bg-rose-50' },
    { title: 'CRM & ERP Systems', path: '/services/crm-erp-systems', color: 'text-emerald-600 bg-emerald-50' },
    { title: 'WhatsApp API & Bots', path: '/services/whatsapp-api-bots', color: 'text-emerald-600 bg-emerald-50' },
    { title: 'AI & Automation', path: '/services/ai-automation', color: 'text-sky-600 bg-sky-50' },
    { title: 'Mobile Apps (iOS & Android)', path: '/services/mobile-apps', color: 'text-rose-600 bg-rose-50' },
    { title: 'Digital Marketing & SEO', path: '/services/digital-marketing-seo', color: 'text-amber-600 bg-amber-50' },
    { title: 'Branding & Creative', path: '/services/branding-creative', color: 'text-rose-600 bg-rose-50' },
    { title: 'Cloud & Infrastructure', path: '/services/cloud-infrastructure', color: 'text-sky-600 bg-sky-50' },
  ];

  const aboutList = [
    { title: 'Company Overview', path: '/about#company' },
    { title: 'Mission & Vision', path: '/about#mission' },
    { title: 'Our Team', path: '/about#team' },
    { title: 'Tech Capabilities', path: '/about#capabilities' },
    { title: 'Our Culture', path: '/about#culture' },
    { title: 'Careers', path: '/about#careers' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl md:rounded-xl px-4 md:px-6 py-4 md:py-3 mt-0 md:mt-4 relative z-50 shadow-sm md:shadow-none">
        
        {/* Brand Logo - Aligned Left */}
        <div className="flex-[0.5] md:flex-1">
          <Link to="/" className="inline-flex items-center gap-2 relative z-50 transition-all">
            <img 
              src={logoUrl} 
              alt="ZAVYX Infotech" 
              className="h-9 md:h-12 lg:h-14 w-auto object-contain dark:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.8))_drop-shadow(0_0_2px_rgba(255,255,255,0.5))] transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links - Aligned Center */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
          
          <Link 
            to="/" 
            className={`text-slate-800 dark:text-slate-100 font-semibold hover:text-sky-600 dark:hover:text-sky-400 transition-colors relative py-1 ${
              location.pathname === '/' ? 'text-sky-600 dark:text-sky-400 border-b-2 border-sky-500' : ''
            }`}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-slate-800 dark:text-slate-100 font-semibold hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 cursor-pointer">
              About Us
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400" />
            </button>

            <div className="absolute top-[calc(100%+26px)] left-1/2 -translate-x-1/2 w-64 bg-white dark:bg-slate-900 rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="flex flex-col gap-1">
                {aboutList.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/80 dark:hover:bg-slate-800 rounded-xl transition-all font-medium"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link 
              to="/services" 
              className={`flex items-center gap-1 text-slate-800 dark:text-slate-100 font-semibold hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 ${
                location.pathname.startsWith('/services') ? 'text-sky-600 dark:text-sky-400 border-b-2 border-sky-500' : ''
              }`}
            >
              Services
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400" />
            </Link>

            <div className="absolute top-[calc(100%+26px)] left-1/2 -translate-x-1/2 w-[740px] bg-white dark:bg-slate-900 rounded-2xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 grid grid-cols-2 gap-2">
              {servicesList.map((svc, idx) => (
                <Link
                  key={idx}
                  to={svc.path}
                  className="px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/80 dark:hover:bg-slate-800 rounded-xl transition-all font-medium flex items-center justify-between group/link"
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${svc.color.split(' ')[0].replace('text', 'bg')}`}></span>
                    {svc.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all text-sky-600" />
                </Link>
              ))}
            </div>
          </div>

          <Link 
            to="/contact" 
            className={`text-slate-800 dark:text-slate-100 font-semibold hover:text-sky-600 dark:hover:text-sky-400 transition-colors relative py-1 ${
              location.pathname === '/contact' ? 'text-sky-600 dark:text-sky-400 border-b-2 border-sky-500' : ''
            }`}
          >
            Contact
          </Link>

        </nav>

        {/* Right Nav Block Placeholder for centering logic */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          <button 
            onClick={toggleDark}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Toggle Hamburger (Clean 3 lines only no background) */}
        <div className="md:hidden flex-[0.5] flex justify-end shrink-0 gap-2 items-center z-50 relative">
          <button 
            onClick={toggleDark}
            className="p-1 rounded-full text-slate-800 focus:outline-none"
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 bg-transparent border-none focus:outline-none text-slate-900 dark:text-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Sidebar Dropdown (Glassmorphism Layout with Scroll) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 right-0 mx-4 mt-2 bg-white/90 dark:bg-slate-900/95 backdrop-blur-3xl rounded-2xl flex flex-col origin-top animate-in zoom-in-95 duration-200 z-40 max-h-[75vh] overflow-y-auto shadow-xl">
          
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-4 border-b border-slate-200/50 dark:border-slate-800/80 transition-colors shrink-0"
          >
            <span className="font-bold text-slate-800 dark:text-slate-100 text-[16px]">Home</span>
          </Link>

          {/* About Us Dropdown - Mobile */}
          <div className="flex flex-col border-b border-slate-200/50 dark:border-slate-800/80 shrink-0">
            <div className="flex items-center justify-between px-6 py-4">
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-slate-800 dark:text-slate-100 text-[16px] flex-1"
              >
                About Us
              </Link>
              <button 
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="p-1 text-slate-800 dark:text-slate-100 focus:outline-none"
              >
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileAboutOpen ? 'rotate-180 text-sky-600 dark:text-sky-400' : ''}`} />
              </button>
            </div>
            
            {mobileAboutOpen && (
              <div className="flex flex-col bg-slate-100/40 dark:bg-slate-800/40 backdrop-blur-md pl-6 py-2">
                {aboutList.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-2 text-[14px] font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown - Mobile */}
          <div className="flex flex-col border-b border-slate-200/50 dark:border-slate-800/80 shrink-0">
            <div className="flex items-center justify-between px-6 py-4">
              <Link 
                to="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-slate-800 dark:text-slate-100 text-[16px] flex-1"
              >
                Services
              </Link>
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="p-1 text-slate-800 dark:text-slate-100 focus:outline-none"
              >
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180 text-sky-600 dark:text-sky-400' : ''}`} />
              </button>
            </div>
            
            {mobileServicesOpen && (
              <div className="flex flex-col bg-slate-100/40 dark:bg-slate-800/40 backdrop-blur-md pl-6 py-2">
                {servicesList.map((svc, idx) => (
                  <Link
                    key={idx}
                    to={svc.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-2 text-[14px] font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-2"
                  >
                    {svc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-4 transition-colors shrink-0"
          >
            <span className="font-bold text-slate-800 dark:text-slate-100 text-[16px]">Contact</span>
          </Link>

        </div>
      )}
    </header>
  );
}

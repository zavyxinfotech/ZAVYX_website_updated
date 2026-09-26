import React, { useRef, useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Headphones, 
  ArrowRight, 
  ChevronRight, 
  ExternalLink, 
  ChevronDown, 
  CheckCircle2,
  MessageCircle,
  Monitor,
  Smartphone
} from 'lucide-react';

import contactHeroImg from '../../assets/images/contact_hero_person_call.png';

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const formattedMessage = 
      `*New Project Inquiry - ZAVYX Infotech*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Service Interested In:* ${formData.service || 'Not specified'}\n` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/916382721178?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const mapUrl = "https://www.google.com/maps/search/?api=1&query=%232155%2C%20Fortune%20City%2C%20Global%20Market%20%E2%80%93%20Texvalley%2C%20NH%20544%20Bengaluru%E2%80%93Cochin%20National%20Highway%2C%20Chithode%2C%20Erode%20%E2%80%93%20638102%2C%20Tamil%20Nadu%2C%20India";

  return (
    <div className="bg-white dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300 font-sans pb-20 lg:pb-12">
      
      {/* 1. HERO SECTION WITH ZAVYX LOGO COLOR BACKGROUND ACCENTS */}
      <section className="relative min-h-[100dvh] lg:min-h-0 flex flex-col justify-center lg:block pt-24 lg:pt-24 pb-4 lg:pb-14 overflow-hidden bg-transparent">
        {/* Decorative Background Accents using ZAVYX Logo Color Theme */}
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-gradient-to-bl from-sky-100/70 via-pink-100/40 to-amber-100/40 rounded-bl-[140px] -z-10 hidden lg:block opacity-80 dark:from-sky-900/30 dark:via-pink-900/20 dark:to-amber-900/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-16 top-20 w-72 h-72 bg-sky-100/70 rounded-full blur-3xl -z-10 opacity-70 dark:bg-sky-900/20 pointer-events-none"></div>
        <div className="absolute left-1/3 top-40 w-64 h-64 bg-pink-100/60 rounded-full blur-3xl -z-10 opacity-60 dark:bg-pink-900/20 pointer-events-none"></div>
        <div className="absolute right-12 bottom-10 w-80 h-80 bg-emerald-100/60 rounded-full blur-3xl -z-10 opacity-60 dark:bg-emerald-900/20 pointer-events-none"></div>
        <div className="absolute left-1/4 bottom-0 w-60 h-60 bg-amber-100/60 rounded-full blur-3xl -z-10 opacity-50 dark:bg-amber-900/20 pointer-events-none"></div>

        <div className="max-w-[1350px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-8 lg:gap-14 lg:items-center">
          
          {/* Hero Left Content */}
          <ScrollSlideSection direction="up" className="lg:col-span-6 flex flex-col text-left max-w-xl lg:max-w-2xl order-1">
            <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs sm:text-sm uppercase mb-2 sm:mb-4 flex items-center justify-start gap-2">
              GET IN TOUCH
            </h4>
            <h1 className="text-4xl min-[400px]:text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] leading-tight font-normal tracking-tight mb-2 sm:mb-4 text-slate-900 dark:text-white">
              Let's Build <br className="hidden sm:block"/>
              Something Great <br className="hidden sm:block"/>
              <span className="text-slate-900 dark:text-white">Together.</span>
            </h1>
            <p className="block text-slate-600 dark:text-slate-300 text-[14px] min-[400px]:text-[15px] sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed mb-3 sm:mb-6 font-normal max-w-xl lg:max-w-2xl">
              Have a project in mind or need expert advice? We're here to help. Reach out to us and we'll respond within 24 business hours.
            </p>

            {/* CTA Buttons Row - DESKTOP ONLY */}
            <div className="hidden lg:flex flex-wrap items-center gap-4 sm:gap-5 mt-2 mb-2">
              <a
                href="tel:+916382721178"
                className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                  Schedule a Call <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="https://wa.me/916382721178"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-max shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#00016E] font-semibold px-6 sm:px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                  Chat on WhatsApp <ArrowRight className="w-5 h-5 text-[#00016E] group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </ScrollSlideSection>

          {/* Hero Right Image - Clean Circular Frame with ZAVYX Logo Gradient Arc & Badges (No Grey Disc, No Dotted Lines) */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-6 relative flex justify-center lg:justify-end order-2 mt-4 lg:mt-0">
            <div className="relative w-full max-w-[280px] min-[400px]:max-w-[400px] sm:max-w-[590px] aspect-square flex items-center justify-center p-2 sm:p-4 group cursor-pointer">

              {/* Orbiting Curved Gradient Arc Ring using ZAVYX Logo Colors (No Dotted Track) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="zavyxLogoArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00a8ff" />
                    <stop offset="35%" stopColor="#ff007a" />
                    <stop offset="70%" stopColor="#ffc000" />
                    <stop offset="100%" stopColor="#00b84c" />
                  </linearGradient>
                </defs>
                {/* ZAVYX Logo Color Gradient Arc Line */}
                <circle cx="250" cy="250" r="225" fill="none" stroke="url(#zavyxLogoArcGradient)" strokeWidth="4" strokeLinecap="round" strokeDasharray="1413" strokeDashoffset="420" className="transition-all duration-700 group-hover:rotate-45 transform origin-center" />
              </svg>

              {/* Clean Main Circular Hero Image Frame */}
              <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden shadow-2xl border-2 border-slate-100 dark:border-slate-800">
                <img 
                  src={contactHeroImg} 
                  alt="ZAVYX Tech Specialist on Client Call" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Circular Icon Badges Aligned EXACTLY ON the Circle Line */}
              {/* Badge 1 - Left Edge (Monitor Icon in ZAVYX Cyan Blue) */}
              <div className="absolute top-[50%] left-[5%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center z-20 transition-all duration-300 group-hover:scale-110">
                <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-[#00a8ff]" />
              </div>

              {/* Badge 2 - Top Right Edge (Smartphone Icon in ZAVYX Hot Magenta Pink) */}
              <div className="absolute top-[18.2%] left-[81.8%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center z-20 transition-all duration-300 group-hover:scale-110">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff007a]" />
              </div>

              {/* Badge 3 - Bottom Right Edge (Headphones Icon in ZAVYX Vibrant Green) */}
              <div className="absolute top-[81.8%] left-[81.8%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center z-20 transition-all duration-300 group-hover:scale-110">
                <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#00b84c]" />
              </div>
            </div>
          </ScrollSlideSection>

          {/* MOBILE ONLY CTA BUTTONS (Single Line Inline row) */}
          <ScrollSlideSection direction="up" className="lg:hidden flex flex-row items-center w-full gap-2 min-[400px]:gap-3 order-3 mt-4 sm:mt-6 mb-2">
              <a
                href="tel:+916382721178"
                className="relative flex-1 inline-flex h-12 min-[400px]:h-14 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-2 min-[400px]:px-4 text-[12px] min-[400px]:text-sm z-10 transition-all border border-[#00016E] group-hover:border-transparent whitespace-nowrap text-center">
                  Schedule Call <ArrowRight className="w-3.5 h-3.5 min-[400px]:w-4 min-[400px]:h-4 text-white group-hover:translate-x-1" />
                </span>
              </a>

              <a
                href="https://wa.me/916382721178"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-1 inline-flex h-12 min-[400px]:h-14 overflow-hidden rounded-md p-[2px] group shadow-sm cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#00016E] font-semibold px-2 min-[400px]:px-4 text-[12px] min-[400px]:text-sm z-10 transition-all border border-[#00016E] group-hover:border-transparent whitespace-nowrap text-center">
                  WhatsApp <ArrowRight className="w-3.5 h-3.5 min-[400px]:w-4 min-[400px]:h-4 text-[#00016E] group-hover:translate-x-1" />
                </span>
              </a>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 2. CONTACT INFO 4-CARDS ROW - No Shadows */}
      <section className="py-8 sm:py-12 max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: LOCATION */}
          <ScrollSlideSection delay="0ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 transition-all duration-300 flex flex-col justify-between h-full group shadow-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] dark:bg-slate-700 text-[#0284c7] dark:text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 block lg:hidden group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-[11px] font-normal text-slate-400 dark:text-slate-400 tracking-widest uppercase block mb-1">
                  LOCATION
                </span>
                <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2">
                  Visit Us At
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  ZAVYX InfoTech (TeesZone Clothing Private Limited), #2155, Fortune City, Global Market – Texvalley, NH 544 Bengaluru–Cochin National Highway, Chithode, Erode – 638102, Tamil Nadu, India.
                </p>
              </div>
            </div>
          </ScrollSlideSection>

          {/* Card 2: 24/7 SERVICE */}
          <ScrollSlideSection delay="100ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 transition-all duration-300 flex flex-col justify-between h-full group shadow-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fef3c7] dark:bg-slate-700 text-[#d97706] dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 block lg:hidden group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-[11px] font-normal text-slate-400 dark:text-slate-400 tracking-widest uppercase block mb-1">
                  24/7 SERVICE
                </span>
                <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2">
                  Call Us On
                </h3>
                <p className="text-sm sm:text-base font-normal text-slate-800 dark:text-slate-200 mb-3">
                  +91 63827 21178
                </p>
              </div>
              <a 
                href="tel:+916382721178" 
                className="text-xs sm:text-sm font-normal text-[#0284c7] dark:text-sky-400 hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-2"
              >
                Call Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollSlideSection>

          {/* Card 3: DROP A LINE */}
          <ScrollSlideSection delay="200ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 transition-all duration-300 flex flex-col justify-between h-full group shadow-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ffe4e6] dark:bg-slate-700 text-[#e11d48] dark:text-rose-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 block lg:hidden group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-[11px] font-normal text-slate-400 dark:text-slate-400 tracking-widest uppercase block mb-1">
                  DROP A LINE
                </span>
                <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2">
                  Mail Address
                </h3>
                <p className="text-sm sm:text-base font-normal text-slate-800 dark:text-slate-200 mb-3 break-all">
                  hello@zavyx.in
                </p>
              </div>
              <a 
                href="mailto:hello@zavyx.in" 
                className="text-xs sm:text-sm font-normal text-[#0284c7] dark:text-sky-400 hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-2"
              >
                Send Email <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollSlideSection>

          {/* Card 4: OFFICE HOURS */}
          <ScrollSlideSection delay="300ms" direction="up">
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 transition-all duration-300 flex flex-col justify-between h-full group shadow-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#dcfce7] dark:bg-slate-700 text-[#16a34a] dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 block lg:hidden group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-[11px] font-normal text-slate-400 dark:text-slate-400 tracking-widest uppercase block mb-1">
                  OFFICE HOURS
                </span>
                <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2">
                  Opening Time
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  Mon – Fri: 9:30 AM – 6:00 PM IST
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-500 font-normal mt-1">
                  Saturday & Sunday (Closed)
                </p>
              </div>
            </div>
          </ScrollSlideSection>

        </div>
      </section>

      {/* 3. SEND A MESSAGE FORM & OUR LOCATION MAP - No Outer Card Borders, No Shadows */}
      <section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Form (No outer card border box, no shadow) */}
          <ScrollSlideSection direction="up" className="lg:col-span-7 flex flex-col">
            <div>
              <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs uppercase mb-3 block">
                SEND A MESSAGE
              </h4>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white mb-2">
                Tell Us About Your Project
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal mb-8">
                Fill out the form and our team will get back to you soon.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 text-center shadow-none">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="text-lg font-normal text-slate-900 dark:text-white mb-1">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal">Thank you for reaching out. We will get back to you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 px-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0284c7] transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 px-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0284c7] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Service Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 px-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0284c7] transition-all"
                      />
                    </div>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 px-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0284c7] transition-all cursor-pointer"
                      >
                        <option value="" disabled className="text-slate-400">Service Interested In</option>
                        <option value="Websites & Web Apps">Websites & Web Apps</option>
                        <option value="E-commerce Stores">E-commerce Stores</option>
                        <option value="CRM & ERP Systems">CRM & ERP Systems</option>
                        <option value="WhatsApp API & Bots">WhatsApp API & Bots</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="Mobile Apps">Mobile Apps</option>
                        <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                        <option value="Branding & Creative">Branding & Creative</option>
                        <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 px-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0284c7] transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Signature Homepage Animated Border Button */}
                  <button
                    type="submit"
                    className="relative inline-flex h-12 sm:h-14 overflow-hidden rounded-md p-[2px] group w-full shadow-none cursor-pointer"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-8 gap-2 text-base sm:text-lg z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                      Send Message <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </ScrollSlideSection>

          {/* Right Column: Map (No outer card border box, no shadow) */}
          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-5 flex flex-col">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sky-600 dark:text-sky-400 font-normal tracking-widest text-xs uppercase block mb-1">
                    OUR LOCATION
                  </h4>
                  <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white">
                    Find Us Here
                  </h2>
                </div>
                
                {/* Signature Homepage Animated Border Button style for Open in Maps */}
                <a 
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-10 overflow-hidden rounded-md p-[2px] group shadow-none"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-4 gap-1.5 text-xs sm:text-sm z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    Open in Maps <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="relative w-full h-[320px] lg:h-[380px] rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-700 mt-2 shadow-none">
                <iframe
                  title="ZAVYX Location Map"
                  src="https://maps.google.com/maps?q=%232155%2C%20Fortune%20City%2C%20Global%20Market%20%E2%80%93%20Texvalley%2C%20NH%20544%20Bengaluru%E2%80%93Cochin%20National%20Highway%2C%20Chithode%2C%20Erode%20%E2%80%93%20638102%2C%20Tamil%20Nadu%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter dark:brightness-[0.85] dark:contrast-[1.1]"
                ></iframe>
              </div>
            </div>
          </ScrollSlideSection>

        </div>
      </section>

    </div>
  );
}

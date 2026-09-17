import React, { useRef, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { AnimatedHeroText } from '../components/HeroEffects';

const ScrollSlideSection = ({ children, className = '', delay='0ms', direction = 'left' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1, rootMargin: '50px 0px 50px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translateClass = direction === 'left' ? '-translate-x-12' : 
                         direction === 'right' ? 'translate-x-12' : 
                         direction === 'up' ? 'translate-y-12' : '-translate-y-12';

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
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-[#050B14] text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300">
      <style>{`
        @keyframes floatMinimal {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-minimal {
          animation: floatMinimal 5s ease-in-out infinite;
        }
      `}</style>
      
      {/* 1. HERO SECTION NO BACKGROUND IMAGE */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-transparent">
        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center text-center">
          <ScrollSlideSection direction="up" className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              <AnimatedHeroText text="Contact & Support" />
            </h1>
          </ScrollSlideSection>
        </div>
      </section>

      {/* 2. INFO CARDS SECTION */}
      <section className="py-16 sm:py-24 relative bg-transparent dark:bg-slate-900 z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-10 sm:-mt-16 rounded-[40px] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.1)] mb-10 overflow-hidden">
        <ScrollSlideSection direction="up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-normal tracking-widest text-sky-700 bg-sky-100 border border-sky-300 uppercase mb-4 shadow-sm">
            Contact Info
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
            <span className="text-rose-500 font-normal">Contact</span> & Join Together
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Reach out via form, email, or direct call. We respond within 24 business hours with project estimations and technical guidance.
          </p>
        </ScrollSlideSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {/* Card 1: Location */}
          <ScrollSlideSection delay="0ms" direction="up" className="group bg-white dark:bg-slate-800 rounded-none p-8 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-slate-900 text-sky-500 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
               <MapPin className="w-8 h-8" />
            </div>
            <h4 className="text-[10px] font-normal text-slate-400 uppercase tracking-widest mb-2">Location...</h4>
            <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-3 group-hover:text-sky-500 transition-colors">Visit Us At</h3>
            <p className="text-lg font-normal text-slate-500 dark:text-slate-400 leading-[1.6]">
              TeesZone Clothing Pvt Ltd. #2155, Fortune City, Global Market – Texvalley, Erode – 638102, Tamil Nadu.
            </p>
          </ScrollSlideSection>

          {/* Card 2: Phone */}
          <ScrollSlideSection delay="100ms" direction="up" className="group bg-white dark:bg-slate-800 rounded-none p-8 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-slate-900 text-amber-500 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
               <Phone className="w-8 h-8" />
            </div>
            <h4 className="text-[10px] font-normal text-slate-400 uppercase tracking-widest mb-2">24/7 Service...</h4>
            <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors">Call Us On</h3>
            <a href="tel:+916382721178" className="text-lg font-normal text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-colors block">
              Tel: +91 63827 21178
            </a>
          </ScrollSlideSection>

          {/* Card 3: Mail */}
          <ScrollSlideSection delay="200ms" direction="up" className="group bg-white dark:bg-slate-800 rounded-none p-8 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-slate-900 text-rose-500 flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
               <Mail className="w-8 h-8" />
            </div>
            <h4 className="text-[10px] font-normal text-slate-400 uppercase tracking-widest mb-2">Drop a Line...</h4>
            <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-3 group-hover:text-rose-500 transition-colors">Mail Address</h3>
            <a href="mailto:hello@zavyx.in" className="text-lg font-normal text-slate-500 dark:text-slate-400 hover:text-rose-500 transition-colors block break-all">
              hello@zavyx.in
            </a>
          </ScrollSlideSection>

          {/* Card 4: Hours */}
          <ScrollSlideSection delay="300ms" direction="up" className="group bg-white dark:bg-slate-800 rounded-none p-8 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-slate-900 text-emerald-500 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
               <Clock className="w-8 h-8" />
            </div>
            <h4 className="text-[10px] font-normal text-slate-400 uppercase tracking-widest mb-2">Office Hours...</h4>
            <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">Opening Time</h3>
            <p className="text-lg font-normal text-slate-500 dark:text-slate-400">
              Mon–Fri: 9:30 AM – 6:00 PM IST<br />
              Saturday & Sunday (Closed)
            </p>
          </ScrollSlideSection>
        </div>
      </section>

      {/* 3. REACH & GET IN TOUCH FORM SECTION */}
      <section className="py-20 relative bg-transparent dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Image + Floating Card */}
            <ScrollSlideSection direction="left" className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full flex justify-center items-end pb-8">
              {/* Back placeholder/decoration */}
              <div className="absolute top-10 left-4 sm:left-10 w-[80%] h-[80%] bg-sky-100 dark:bg-slate-800 rounded-[40px] -z-10 transform -rotate-3 transition-transform duration-500 hover:rotate-0"></div>
              
              {/* Main Image */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Representative" 
                className="h-[95%] w-[90%] object-cover object-top rounded-[40px] rounded-bl-sm shadow-xl"
              />

              {/* Floating Live Chat Card */}
              <div className="absolute top-[20%] lg:top-[30%] -left-2 sm:left-4 lg:-left-8 bg-gradient-to-br from-rose-500 to-rose-600 rounded-[30px] p-5 sm:p-6 text-white w-[220px] sm:w-[260px] shadow-[0_20px_40px_-5px_rgba(244,63,94,0.4)] animate-float-minimal border border-rose-400/30">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-md shadow-inner">
                   <HeadphonesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                 </div>
                 <h4 className="text-base sm:text-lg font-normal mb-2 leading-tight drop-shadow-md">Chat With Live !</h4>
                 <p className="text-[10px] sm:text-xs text-rose-100 mb-4 opacity-90 leading-relaxed font-normal">
                   Porto erat gravida adipisci quibusdam faucibus diem molestiae? Ante, arcu, commodo.
                 </p>
                 <button className="relative inline-flex h-10 overflow-hidden rounded-md p-[2px] group w-max shadow-sm">
                   <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-white text-[#00016E] font-normal px-4 gap-2 text-xs z-10 transition-all border border-slate-200 group-hover:border-transparent">
                     Let's Chat <ArrowRight className="w-3.5 h-3.5 text-[#00016E] group-hover:translate-x-1 transition-transform" />
                   </span>
                 </button>
              </div>
            </ScrollSlideSection>

            {/* Right Map */}
            <ScrollSlideSection direction="right" className="bg-white dark:bg-slate-800 p-0 h-[350px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden flex flex-col relative group">
              <iframe
                title="ZAVYX Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.781329241517!2d77.6712349!3d11.339678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f4c39b925b3%3A0xc3b8a1c89008bc5b!2sTexvalley!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter dark:brightness-[0.85] dark:contrast-[1.1] transition-all duration-700 group-hover:filter-none"
              ></iframe>
            </ScrollSlideSection>

          </div>
        </div>
      </section>



    </div>
  );
}

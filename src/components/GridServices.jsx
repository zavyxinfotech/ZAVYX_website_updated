import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, ShoppingCart, Database, MessageCircle, Bot, 
  Smartphone, TrendingUp, PenTool, Cloud, ArrowRight
} from 'lucide-react';
import ScrollAnimatedHeading from './ScrollAnimatedHeading';

const AnimatedServiceCard = ({ svc, borderClasses, index }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.05, rootMargin: '200px 0px 50px 0px' });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = svc.icon;

  return (
    <Link 
      ref={ref}
      to={svc.path}
      className={`group relative flex flex-col items-center text-center p-4 lg:p-6 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] overflow-hidden cursor-pointer ${borderClasses} ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
    >
      {/* Pop-up Image from the bottom line */}
      <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-all duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] z-0 pointer-events-none opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <img src={svc.image} className="w-full h-full object-cover" alt="" />
      </div>

      {/* Bottom Right Edge Fade-In Arrow */}
      <div className="absolute right-6 bottom-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[400ms] ease-out z-20 text-white">
        <ArrowRight className="w-6 h-6" strokeWidth={2} />
      </div>

      {/* Existing Background glowing effects */}
      <div className={`absolute inset-0 bg-gradient-to-br ${svc.glowColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0`}></div>
      <div className={`absolute left-0 top-0 bottom-0 w-[4px] ${svc.bgColor} scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center z-10`}></div>
      
      <h3 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-4 transition-colors duration-[400ms] relative z-10 lg:whitespace-nowrap">
        {svc.title}
      </h3>

      <div className={`mb-3 p-3.5 rounded-full ${svc.minimalBg} dark:bg-slate-800/50 shadow-sm transition-all duration-[400ms] group-hover:bg-sky-50 dark:group-hover:bg-slate-800 border-2 border-transparent group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] relative z-10 group-hover:opacity-0 group-hover:scale-95`}>
        <Icon className={`w-8 h-8 lg:w-10 lg:h-10 ${svc.minimalColor} group-hover:${svc.iconColor} transition-colors duration-300`} strokeWidth={1.5} />
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-[15px] lg:text-base font-normal leading-relaxed md:leading-snug max-w-[280px] lg:max-w-[320px] relative z-10 group-hover:opacity-0 group-hover:scale-95 transition-all duration-[400ms]">
        {svc.desc}
      </p>
    </Link>
  );
};

export default function GridServices() {
  const services = [
    { icon: Globe, title: 'Websites & Web Apps', desc: 'High-performance modern web apps tailored for speed, SEO, and engagement.', path: '/services/websites-web-apps', iconColor: 'text-sky-500', minimalColor: 'text-sky-500/60', minimalBg: 'bg-sky-500/5', bgColor: 'bg-sky-500', glowColor: 'from-sky-500/10', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80' },
    { icon: ShoppingCart, title: 'E-commerce Stores', desc: 'Scalable custom storefronts optimized for maximum conversion and fast checkouts.', path: '/services/ecommerce-stores', iconColor: 'text-rose-500', minimalColor: 'text-rose-500/60', minimalBg: 'bg-rose-500/5', bgColor: 'bg-rose-500', glowColor: 'from-rose-500/10', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80' },
    { icon: Database, title: 'CRM & ERP Systems', desc: 'Custom enterprise software to streamline workflow, inventory, and relations.', path: '/services/crm-erp-systems', iconColor: 'text-emerald-500', minimalColor: 'text-emerald-500/60', minimalBg: 'bg-emerald-500/5', bgColor: 'bg-emerald-500', glowColor: 'from-emerald-500/10', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
    { icon: MessageCircle, title: 'WhatsApp API & Bots', desc: 'Automated WhatsApp workflows for real-time client engagement and support.', path: '/services/whatsapp-api-bots', iconColor: 'text-amber-500', minimalColor: 'text-amber-500/60', minimalBg: 'bg-amber-500/5', bgColor: 'bg-amber-500', glowColor: 'from-amber-500/10', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80' },
    { icon: Bot, title: 'AI & Automation', desc: 'Intelligent AI bots and process automation to cut costs and increase output.', path: '/services/ai-automation', iconColor: 'text-sky-500', minimalColor: 'text-sky-500/60', minimalBg: 'bg-sky-500/5', bgColor: 'bg-sky-500', glowColor: 'from-sky-500/10', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform apps engineered for fluid user experience.', path: '/services/mobile-apps', iconColor: 'text-rose-500', minimalColor: 'text-rose-500/60', minimalBg: 'bg-rose-500/5', bgColor: 'bg-rose-500', glowColor: 'from-rose-500/10', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80' },
    { icon: TrendingUp, title: 'Digital Marketing & SEO', desc: 'Data-driven scaling strategies ensuring top-tier rankings and lead flow.', path: '/services/digital-marketing-seo', iconColor: 'text-amber-500', minimalColor: 'text-amber-500/60', minimalBg: 'bg-amber-500/5', bgColor: 'bg-amber-500', glowColor: 'from-amber-500/10', image: 'https://images.unsplash.com/photo-1432888117286-3ee44053e198?auto=format&fit=crop&w=600&q=80' },
    { icon: PenTool, title: 'Branding & Creative', desc: 'Premium visual identity systems positioning you at the pinnacle of industry.', path: '/services/branding-creative', iconColor: 'text-rose-500', minimalColor: 'text-rose-500/60', minimalBg: 'bg-rose-500/5', bgColor: 'bg-rose-500', glowColor: 'from-rose-500/10', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80' },
    { icon: Cloud, title: 'Cloud & Infrastructure', desc: 'Cloud infrastructure management, security hardening, and stable deployments.', path: '/services/cloud-infrastructure', iconColor: 'text-emerald-500', minimalColor: 'text-emerald-500/60', minimalBg: 'bg-emerald-500/5', bgColor: 'bg-emerald-500', glowColor: 'from-emerald-500/10', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    // pt-12 (mobile) lg:pt-40 adds essential massive gap separating gracefully from absolute attached hero boundaries beneath
    <section className="pt-12 lg:pt-40 lg:py-0 min-h-[80vh] flex flex-col justify-center bg-transparent transition-colors duration-300">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <ScrollAnimatedHeading 
             text="COMPREHENSIVE DIGITAL SOLUTIONS" 
             className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.1] tracking-tight mb-4 lg:mb-6 text-slate-900 dark:text-white uppercase text-center transition-opacity" 
          />
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base md:text-lg lg:text-xl font-normal max-w-4xl mx-auto leading-relaxed">
            Tailored technological capabilities engineered to drive growth, automation, <br className="hidden sm:block" /> 
            and operational efficiency within your business architecture.
          </p>
        </div>

        {/* Mesh Connected Grid Layout with perfectly mapped inner borders */}
        {/* Parent container holds NO borders, completely unbounding the outside rim */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-transparent shadow-none">
          {services.map((svc, idx) => {
            
            // Mathematically mapping inner-mesh borders tightly mapping 3x3 array 
            // Eliminates outside bounding box lines perfectly
            const isRightEdge = (idx + 1) % 3 === 0;
            const isBottomEdge = idx >= 6;
            
            let borderClasses = "";

            return (
              <AnimatedServiceCard 
                key={idx} 
                svc={svc} 
                borderClasses={borderClasses} 
                index={idx}
              />
            )
          })}
        </div>

      </div>
    </section>
  );
}

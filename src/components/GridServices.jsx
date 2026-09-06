import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, ShoppingCart, Database, MessageCircle, Bot, 
  Smartphone, TrendingUp, PenTool, Cloud
} from 'lucide-react';
import ScrollAnimatedHeading from './ScrollAnimatedHeading';

export default function GridServices() {
  const services = [
    { icon: Globe, title: 'Websites & Web Apps', desc: 'High-performance modern web apps tailored for speed, SEO, and engagement.', path: '/services/websites-web-apps', iconColor: 'text-sky-500', bgColor: 'bg-sky-500', glowColor: 'from-sky-500/10' },
    { icon: ShoppingCart, title: 'E-commerce Stores', desc: 'Scalable custom storefronts optimized for maximum conversion and fast checkouts.', path: '/services/ecommerce-stores', iconColor: 'text-rose-500', bgColor: 'bg-rose-500', glowColor: 'from-rose-500/10' },
    { icon: Database, title: 'CRM & ERP Systems', desc: 'Custom enterprise software to streamline workflow, inventory, and relations.', path: '/services/crm-erp-systems', iconColor: 'text-emerald-500', bgColor: 'bg-emerald-500', glowColor: 'from-emerald-500/10' },
    { icon: MessageCircle, title: 'WhatsApp API & Bots', desc: 'Automated WhatsApp workflows for real-time client engagement and support.', path: '/services/whatsapp-api-bots', iconColor: 'text-green-500', bgColor: 'bg-green-500', glowColor: 'from-green-500/10' },
    { icon: Bot, title: 'AI & Automation', desc: 'Intelligent AI bots and process automation to cut costs and increase output.', path: '/services/ai-automation', iconColor: 'text-indigo-500', bgColor: 'bg-indigo-500', glowColor: 'from-indigo-500/10' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform apps engineered for fluid user experience.', path: '/services/mobile-apps', iconColor: 'text-purple-500', bgColor: 'bg-purple-500', glowColor: 'from-purple-500/10' },
    { icon: TrendingUp, title: 'Digital Marketing & SEO', desc: 'Data-driven scaling strategies ensuring top-tier rankings and lead flow.', path: '/services/digital-marketing-seo', iconColor: 'text-amber-500', bgColor: 'bg-amber-500', glowColor: 'from-amber-500/10' },
    { icon: PenTool, title: 'Branding & Creative', desc: 'Premium visual identity systems positioning you at the pinnacle of industry.', path: '/services/branding-creative', iconColor: 'text-pink-500', bgColor: 'bg-pink-500', glowColor: 'from-pink-500/10' },
    { icon: Cloud, title: 'Cloud & Infrastructure', desc: 'Cloud infrastructure management, security hardening, and stable deployments.', path: '/services/cloud-infrastructure', iconColor: 'text-cyan-500', bgColor: 'bg-cyan-500', glowColor: 'from-cyan-500/10' }
  ];

  return (
    // pt-32 adds essential massive gap separating gracefully from absolute attached hero boundaries beneath
    <section className="pt-24 lg:pt-40 lg:py-0 min-h-screen flex flex-col justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <ScrollAnimatedHeading 
             text="COMPREHENSIVE DIGITAL SOLUTIONS" 
             className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight drop-shadow-sm leading-tight text-center" 
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
                className={`group relative flex flex-col items-center text-center p-4 lg:p-6 transition-all duration-300 hover:bg-white dark:hover:bg-slate-900/40 overflow-hidden cursor-pointer ${borderClasses}`}
              >
                {/* Dynamically mapped minimal color shade overlay matching brand token */}
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Precision left border highlight mapped to literal logo/shade colors natively */}
                <div className={`absolute left-0 top-0 bottom-0 w-[4px] ${svc.bgColor} scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center z-10`}></div>
                
                {/* Floating Icon Wrapper */}
                <div className="mb-3 p-3.5 rounded-full bg-white dark:bg-slate-800/50 shadow-sm transition-all duration-300 group-hover:bg-sky-50 dark:group-hover:bg-slate-800 border-2 border-transparent group-hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] relative z-10">
                  <Icon className={`w-8 h-8 lg:w-10 lg:h-10 text-slate-700 dark:text-slate-300 group-hover:${svc.iconColor} transition-colors duration-300`} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors relative z-10 lg:whitespace-nowrap">
                  {svc.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-[15px] lg:text-base font-medium leading-relaxed md:leading-snug max-w-[280px] lg:max-w-[320px] relative z-10">
                  {svc.desc}
                </p>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  );
}

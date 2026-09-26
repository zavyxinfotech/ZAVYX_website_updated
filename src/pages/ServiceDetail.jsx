import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import WebsitesWebAppsView from './services/WebsitesWebAppsView';
import EcommerceStoresView from './services/EcommerceStoresView';
import WhatsAppApiBotsView from './services/WhatsAppApiBotsView';
import MobileAppsView from './services/MobileAppsView';
import DigitalMarketingView from './services/DigitalMarketingView';
import BrandingCreativeView from './services/BrandingCreativeView';
import CloudInfrastructureView from './services/CloudInfrastructureView';
import CrmErpSystemsView from './services/CrmErpSystemsView';
import AiAutomationView from './services/AiAutomationView';

const MobileProcessRotator = ({ steps }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
     const onScroll = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const progress = -rect.top / (rect.height - window.innerHeight);
        let idx = Math.floor(progress * steps.length);
        if (idx < 0) idx = 0;
        if (idx >= steps.length) idx = steps.length - 1;
        setActiveIndex(idx);
     };
     window.addEventListener('scroll', onScroll, { passive: true });
     return () => window.removeEventListener('scroll', onScroll);
  }, [steps.length]);

  const step = steps[activeIndex];
  if (!step) return null;

  return (
    <div ref={containerRef} className="block md:hidden pb-10" style={{ height: `${steps.length * 80}vh` }}>
       <style>{`
         @keyframes rotIn {
           0% { transform: rotate(-180deg) scale(0.3); opacity: 0; }
           100% { transform: rotate(0deg) scale(1); opacity: 1; }
         }
         @keyframes fadeUpIn {
           0% { transform: translateY(20px); opacity: 0; }
           100% { transform: translateY(0); opacity: 1; }
         }
         .rot-anim { animation: rotIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
         .fade-anim { animation: fadeUpIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
       `}</style>
       <div className="sticky top-[20vh] flex flex-col items-center z-50">
          <div className="bg-white dark:bg-slate-800/90 p-8 rounded-3xl border border-sky-200/50 dark:border-sky-800/50 shadow-[0_10px_40px_rgba(14,165,233,0.15)] flex flex-col items-center text-center w-full max-w-[90vw] overflow-hidden">
             <div key={activeIndex} className="flex flex-col items-center w-full">
                <div 
                   className="w-20 h-20 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-lg mb-6 rot-anim"
                   dangerouslySetInnerHTML={{ __html: step.iconSvg }}
                />
                <span className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3 fade-anim" style={{ animationDelay: '0.1s' }}>
                   STEP {step.num || `0${activeIndex+1}`}
                </span>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 fade-anim" style={{ animationDelay: '0.2s' }}>
                   {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed fade-anim" style={{ animationDelay: '0.3s' }}>
                   {step.desc}
                </p>
             </div>
          </div>
       </div>
    </div>
  );
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const rawKey = decodeURIComponent(serviceId || '').toLowerCase();
  const normalizedKey = rawKey.replace(/[\s_]+/g, '-');

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    import('react-dom/client').then(({ createRoot }) => {
      const grids = new Set();
      document.querySelectorAll('.process-step-group').forEach(el => {
         const grid = el.closest('.grid');
         if (grid) grids.add(grid);
      });
      
      grids.forEach((grid, gIdx) => {
         if (grid.dataset.injected) return;
         grid.dataset.injected = "true";
         
         const steps = [];
         Array.from(grid.querySelectorAll('.process-step-group')).forEach(child => {
            const num = child.querySelector('span')?.innerText || '';
            const title = child.querySelector('h3')?.innerText || '';
            const desc = child.querySelector('p')?.innerText || '';
            const svgEl = child.querySelector('svg');
            const iconSvg = svgEl ? svgEl.outerHTML : '';
            steps.push({ num, title, desc, iconSvg });
         });

         grid.style.display = 'none';

         const mountPoint = document.createElement('div');
         mountPoint.id = 'mobile-process-carousel-' + gIdx;
         grid.parentNode.insertBefore(mountPoint, grid);

         const root = createRoot(mountPoint);
         root.render(<MobileProcessRotator steps={steps} />);
      });
    });

    return; // Block previous logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const groupNode = entry.target;
        if (entry.isIntersecting) {
          groupNode.querySelectorAll('[class*="group-hover:"]').forEach(node => {
            const classes = Array.from(node.classList);
            classes.forEach(c => {
              if (c.startsWith('group-hover:')) {
                const baseClass = c.replace('group-hover:', '');
                if (!node.classList.contains(baseClass)) {
                  node.classList.add(baseClass);
                  const stored = node.getAttribute('data-mobile-active-classes') || '';
                  node.setAttribute('data-mobile-active-classes', (stored + ' ' + baseClass).trim());
                }
              }
            });
          });
        } else {
          groupNode.querySelectorAll('[data-mobile-active-classes]').forEach(node => {
            const activeClasses = node.getAttribute('data-mobile-active-classes').split(' ');
            activeClasses.forEach(c => {
              if (c) node.classList.remove(c);
            });
            node.removeAttribute('data-mobile-active-classes');
          });
        }
      });
    }, { threshold: 0.6, rootMargin: '-20% 0px -40% 0px' });

    const timer = setTimeout(() => {
      document.querySelectorAll('.process-step-group').forEach(el => observer.observe(el));
    }, 500);

    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [normalizedKey]);

  if (
    normalizedKey === 'websites-web-apps' || 
    normalizedKey === 'websites' || 
    normalizedKey === 'web-apps'
  ) {
    return <WebsitesWebAppsView />;
  }
  if (
    normalizedKey === 'cloud-infrastructure' || 
    normalizedKey === 'cloud'
  ) {
    return <CloudInfrastructureView />;
  }
  if (
    normalizedKey === 'digital-marketing-seo' || 
    normalizedKey === 'digital-marketing' || 
    normalizedKey === 'seo'
  ) {
    return <DigitalMarketingView />;
  }
  if (
    normalizedKey === 'branding-creative' || 
    normalizedKey === 'branding' || 
    normalizedKey === 'creative'
  ) {
    return <BrandingCreativeView />;
  }
  if (
    normalizedKey === 'e-commerce-stores' || 
    normalizedKey === 'ecommerce-stores' || 
    normalizedKey === 'ecommerce' ||
    normalizedKey === 'e-commerce'
  ) {
    return <EcommerceStoresView />;
  }
  if (
    normalizedKey === 'whatsapp-api-bots' || 
    normalizedKey === 'whatsapp-api' || 
    normalizedKey === 'whatsapp'
  ) {
    return <WhatsAppApiBotsView />;
  }
  if (
    normalizedKey === 'mobile-apps' || 
    normalizedKey === 'mobile'
  ) {
    return <MobileAppsView />;
  }
  if (
    normalizedKey === 'ai-automation' || 
    normalizedKey === 'ai'
  ) {
    return <AiAutomationView />;
  }
  if (
    normalizedKey === 'crm-erp-systems' || 
    normalizedKey === 'crm-erp' || 
    normalizedKey === 'crm' || 
    normalizedKey === 'erp'
  ) {
    return <CrmErpSystemsView />;
  }
  return <WebsitesWebAppsView />;
}

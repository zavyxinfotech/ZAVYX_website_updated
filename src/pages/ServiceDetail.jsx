import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

const WebsitesWebAppsView = lazy(() => import('./services/WebsitesWebAppsView'));
const EcommerceStoresView = lazy(() => import('./services/EcommerceStoresView'));
const WhatsAppApiBotsView = lazy(() => import('./services/WhatsAppApiBotsView'));
const MobileAppsView = lazy(() => import('./services/MobileAppsView'));
const DigitalMarketingView = lazy(() => import('./services/DigitalMarketingView'));
const BrandingCreativeView = lazy(() => import('./services/BrandingCreativeView'));
const CloudInfrastructureView = lazy(() => import('./services/CloudInfrastructureView'));
const CrmErpSystemsView = lazy(() => import('./services/CrmErpSystemsView'));
const AiAutomationView = lazy(() => import('./services/AiAutomationView'));

const ViewLoader = () => (
  <div className="flex items-center justify-center w-full min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-slate-200 dark:border-slate-800 border-t-sky-500 rounded-full animate-spin"></div>
  </div>
);

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const rawKey = decodeURIComponent(serviceId || '').toLowerCase();
  const normalizedKey = rawKey.replace(/[\s_]+/g, '-');

  const renderView = () => {
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
  };

  return (
    <Suspense fallback={<ViewLoader />}>
      {renderView()}
    </Suspense>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';
import WebsitesWebAppsView from './services/WebsitesWebAppsView';
import EcommerceStoresView from './services/EcommerceStoresView';
import WhatsAppApiBotsView from './services/WhatsAppApiBotsView';
import MobileAppsView from './services/MobileAppsView';
import DigitalMarketingView from './services/DigitalMarketingView';
import BrandingCreativeView from './services/BrandingCreativeView';
import CloudInfrastructureView from './services/CloudInfrastructureView';
import CrmErpSystemsView from './services/CrmErpSystemsView';
import AiAutomationView from './services/AiAutomationView';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const rawKey = decodeURIComponent(serviceId || '').toLowerCase();
  const normalizedKey = rawKey.replace(/[\s_]+/g, '-');

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

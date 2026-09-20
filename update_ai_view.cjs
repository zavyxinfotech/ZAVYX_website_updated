const fs = require('fs');
let code = fs.readFileSync('src/pages/ServiceDetail.jsx', 'utf8');

const whatsappStart = code.lastIndexOf('function WhatsAppApiBotsView');
if (whatsappStart === -1) {
    console.error('Could not find WhatsAppApiBotsView');
    process.exit(1);
}

const mobileStart = code.lastIndexOf('function MobileAppsView');
let aiViewHTML = code.substring(whatsappStart, mobileStart);

// Rename function
aiViewHTML = aiViewHTML.replace('function WhatsAppApiBotsView', 'function AiAutomationView');

// Fix Services Array
aiViewHTML = aiViewHTML.replace('Marketing & Campaign Intelligence', 'AI Content & Process Intelligence');
aiViewHTML = aiViewHTML.replace('Run targeted WhatsApp broadcasts, engage prospects, and optimize conversion journeys.', 'Leverage AI to analyze, generate and optimize business content and processes.');
aiViewHTML = aiViewHTML.replace('Custom WhatsApp API Integrations', 'Custom AI Integrations');
aiViewHTML = aiViewHTML.replace('Integrate WhatsApp Business API into your existing systems and workflows seamlessly.', 'Integrate AI into your existing systems with tailored solutions for your business.');

// Fix Why Choose Us text
aiViewHTML = aiViewHTML.replace('Skilled and experienced Meta & WhatsApp API specialists.', 'Skilled and experienced AI professionals.');

// Fix Tech Logos
aiViewHTML = aiViewHTML.replace("const whatsappTechLogos = [", "const aiTechLogos = [");
aiViewHTML = aiViewHTML.replace(/whatsappTechLogos/g, 'aiTechLogos');
aiViewHTML = aiViewHTML.replace("{ name: 'WhatsApp', url: officialTechLogos['WhatsApp'] },", "{ name: 'Google Cloud', url: officialTechLogos['Google Cloud'] },");
aiViewHTML = aiViewHTML.replace("{ name: 'Meta', url: officialTechLogos['Meta'] },", "{ name: 'AWS', url: officialTechLogos['AWS'] },");
aiViewHTML = aiViewHTML.replace(/\{ name: 'Node\.js', url: officialTechLogos\['Node\.js'\] \},/, "{ name: 'Microsoft Azure', url: officialTechLogos['Microsoft Azure'] },");
aiViewHTML = aiViewHTML.replace(/\{ name: 'FastAPI', url: officialTechLogos\['FastAPI'\] \},/, "{ name: 'Slack', url: officialTechLogos['Slack'] },");
aiViewHTML = aiViewHTML.replace(/\{ name: 'Docker', url: officialTechLogos\['Docker'\] \},/, "{ name: 'Microsoft 365', url: officialTechLogos['Microsoft 365'] },");
aiViewHTML = aiViewHTML.replace(/\{ name: 'PostgreSQL', url: officialTechLogos\['PostgreSQL'\] \},/, "{ name: 'Databases', url: officialTechLogos['PostgreSQL'] },");
aiViewHTML = aiViewHTML.replace(/\{ name: 'AWS', url: officialTechLogos\['AWS'\] \}/, "{ name: 'APIs', url: officialTechLogos['GraphQL'] }");

// Fix Breadcrumbs and Tags
aiViewHTML = aiViewHTML.replace(
  '<span className="text-sky-600 dark:text-sky-400 font-semibold">WhatsApp API & Chatbots</span>',
  '<span className="text-sky-600 dark:text-sky-400 font-semibold">AI Automation</span>'
);
aiViewHTML = aiViewHTML.replace('WHATSAPP API & AUTOMATION', 'AI & AUTOMATION');

// Hero Content
aiViewHTML = aiViewHTML.replace(/Intelligent WhatsApp Messaging for a <span className="text-sky-600 dark:text-sky-400 font-normal">Smarter Tomorrow<\/span>/g, 'Intelligent Automation for a <span className="text-sky-600 dark:text-sky-400 font-normal">Smarter Tomorrow</span>');
aiViewHTML = aiViewHTML.replace(/We design and implement WhatsApp solutions that help you automate, engage, and grow — tailored to your business needs\./g, 'Leverage the power of AI and automation to reduce manual work, improve efficiency, and enable scalable business operations for a future-ready enterprise.');

// Hero Buttons
aiViewHTML = aiViewHTML.replace('Discuss Your Project', 'Explore AI Solutions');
aiViewHTML = aiViewHTML.replace('Discuss Your App Idea', 'Explore AI Solutions');

// Services Title
aiViewHTML = aiViewHTML.replace('OUR WHATSAPP API & BOT SOLUTIONS', 'OUR SERVICES');
aiViewHTML = aiViewHTML.replace('WhatsApp API & Bot Solutions for Modern Businesses', 'AI-Powered Solutions Built for Your Business');

// How it works
aiViewHTML = aiViewHTML.replace('HOW IT WORKS', 'HOW AI AUTOMATION WORKS');
aiViewHTML = aiViewHTML.replace(/Understand your business & customer messaging needs\./, 'Understand your business needs');
aiViewHTML = aiViewHTML.replace(/Design smart conversation flows & AI bot solutions\./, 'Design and build AI solutions');
aiViewHTML = aiViewHTML.replace(/Connect WhatsApp API with your existing systems\./, 'Connect with your existing systems');
aiViewHTML = aiViewHTML.replace(/Monitor, improve chat responses & scale effortlessly\./, 'Monitor, improve and scale');

// Success Story Section
aiViewHTML = aiViewHTML.replace('Real Apps. Real Results.', 'Automating Document Processing for a Leading Logistics Company');
// Wait, the "Success story" title says "SUCCESS STORY", "Automating Document Processing for a Leading Logistics Company".
aiViewHTML = aiViewHTML.replace(
  'We developed a feature-rich e-commerce mobile app for an emerging brand, resulting in higher customer engagement, increased sales, and a seamless shopping experience.',
  'We implemented an AI-powered document processing solution that automated invoice and shipment document handling, resulting in 70% faster processing and 90% higher accuracy.'
);
aiViewHTML = aiViewHTML.replace('Increase in Downloads', 'Faster Processing');
aiViewHTML = aiViewHTML.replace('Higher Conversions', 'Higher Accuracy');
aiViewHTML = aiViewHTML.replace('Repeat Customers', 'Hours Saved Weekly');

// Title in bottom CTA
aiViewHTML = aiViewHTML.replace('Ready to grow your online store?', 'Ready to Automate Your Business?');
aiViewHTML = aiViewHTML.replace("Let's turn your store ideas into a high-converting digital platform.", "Let's discuss how AI can create real impact for your business.");

const oldAiStart = code.lastIndexOf('function AiAutomationView');
if (oldAiStart === -1) {
    console.error('Could not find AiAutomationView');
    process.exit(1);
}

// Ensure the end is at the end of file (or find the last bracket)
code = code.substring(0, oldAiStart) + aiViewHTML;

fs.writeFileSync('src/pages/ServiceDetail.jsx', code);
console.log('Successfully replaced AiAutomationView code');

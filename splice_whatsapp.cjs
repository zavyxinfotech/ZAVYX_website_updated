const fs = require('fs');
let code = fs.readFileSync('src/pages/ServiceDetail.jsx', 'utf8');

const whatsappStart = code.lastIndexOf('function WhatsAppApiBotsView');
if (whatsappStart === -1) {
    console.error('Could not find WhatsAppApiBotsView');
    process.exit(1);
}

const mobileStart = code.lastIndexOf('function AiAutomationView');
if (mobileStart === -1) {
    console.error('Could not find AiAutomationView');
    process.exit(1);
}

let newView = fs.readFileSync('whatsapp_update.jsx', 'utf8');

// Replace everything between whatsappStart and mobileStart (which includes MobileAppsView, wait!)
// Ah! The order is WhatsAppApiBotsView -> MobileAppsView -> AiAutomationView
const endOfWhatsapp = code.lastIndexOf('function MobileAppsView');

code = code.substring(0, whatsappStart) + newView + '\n\n' + code.substring(endOfWhatsapp);

fs.writeFileSync('src/pages/ServiceDetail.jsx', code);
console.log('Successfully replaced WhatsAppApiBotsView');

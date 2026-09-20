const fs = require('fs');
let code = fs.readFileSync('src/pages/ServiceDetail.jsx', 'utf8');

const whatsappStart = code.lastIndexOf('WhatsAppApiBotsView');
if (whatsappStart !== -1) {
  let subcode = code.substring(whatsappStart);
  subcode = subcode.replace(/<section className="relative pt-36 pb-12 sm:pt-44 lg:pt-52 sm:pb-16 overflow-hidden">/, 
    '<section className="relative pt-24 pb-12 sm:pt-32 lg:pt-36 lg:pb-24 min-h-[85vh] flex flex-col justify-center overflow-hidden">');
  code = code.substring(0, whatsappStart) + subcode;
  fs.writeFileSync('src/pages/ServiceDetail.jsx', code);
  console.log('Successfully aligned hero padding to exact home page size');
} else {
  console.log('Could not find WhatsAppApiBotsView');
}

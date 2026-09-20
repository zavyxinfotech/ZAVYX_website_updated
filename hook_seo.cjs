const fs = require('fs');
let code = fs.readFileSync('src/pages/ServiceDetail.jsx', 'utf8');

if (code.indexOf('function DigitalMarketingView()') === -1) {
  // Use the exact string from gen_seo.cjs
  const injectedCode = fs.readFileSync('gen_seo.cjs', 'utf8');
  const componentStr = injectedCode.substring(injectedCode.indexOf('function DigitalMarketingView'), injectedCode.lastIndexOf('`;'));
  
  const exportIndex = code.indexOf('export default function ServiceDetail() {');
  code = code.substring(0, exportIndex) + componentStr + '\\n\\n' + code.substring(exportIndex);
  
  // Hook up router
  code = code.replace(
    /if \(currentServiceKey === 'e-commerce-stores'\) \{/,
    `if (currentServiceKey === 'digital-marketing-seo') {\\n    return <DigitalMarketingView />;\\n  }\\n  if (currentServiceKey === 'e-commerce-stores') {`
  );

  fs.writeFileSync('src/pages/ServiceDetail.jsx', code);
  console.log('Appended DigitalMarketingView and updated router successfully.');
} else {
  console.log('DigitalMarketingView already exists!');
}

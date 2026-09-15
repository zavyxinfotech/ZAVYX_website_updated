const fs = require('fs');

const files = [
  'src/pages/Contact.jsx',
  'src/pages/Services.jsx',
  'src/pages/ServiceDetail.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/font-bold/g, 'font-normal');
  content = content.replace(/font-semibold/g, 'font-normal');
  content = content.replace(/font-medium/g, 'font-normal');
  content = content.replace(/font-black/g, 'font-normal');
  fs.writeFileSync(file, content);
  console.log(`Replaced fonts in ${file}`);
}

const fs = require('fs');
let code = fs.readFileSync('src/pages/ServiceDetail.jsx', 'utf8');

// 1. Add ArrowDown to imports
code = code.replace(/ArrowUpRight\n\} from 'lucide-react';/, "ArrowUpRight,\n  ArrowDown\n} from 'lucide-react';");

// 2. Fix HOW IT WORKS section
const howItWorksStart = code.indexOf('{/* Interactive Flowchart exactly as in WhatsApp mock */}');
const howItWorksEnd = code.indexOf('</section>', howItWorksStart);
let hiwText = code.substring(howItWorksStart, howItWorksEnd);

// Changing the structural classes
hiwText = hiwText.replace(
  /<div className="min-w-\[900px\] flex items-stretch justify-between relative px-2">/,
  '<div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between lg:justify-between relative px-2 gap-10 lg:gap-0 lg:min-w-[900px]">'
);
// Make the horizontal line hide on mobile
hiwText = hiwText.replace(
  /<div className="absolute top-1\/4 left-10 right-10 h-0\.5 bg-slate-200 dark:bg-slate-700\/60 z-0"><\/div>/,
  '<div className="hidden lg:block absolute top-1/4 left-10 right-10 h-0.5 bg-slate-200 dark:bg-slate-700/60 z-0"></div>\n               <div className="lg:hidden absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-slate-200 dark:bg-slate-700/60 z-0"></div>'
);
// Fixing the widths of steps
hiwText = hiwText.replace(/className="relative z-10 flex flex-col items-center w-1\/5"/g, 'className="relative z-10 flex flex-col items-center w-full lg:w-1/5 max-w-[280px] lg:max-w-none"');
// Add arrow downs
hiwText = hiwText.replace(/<ArrowRight className="absolute -right-6 top-1\/2 -translate-y-1\/2 w-4 h-4 text-sky-400 hidden lg:block" \/>/g, '<ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />\n                   <ArrowDown className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 text-sky-400" />');
// Remove custom-scrollbar min min width to allow stack
hiwText = hiwText.replace(/<div className="relative overflow-x-auto custom-scrollbar pb-6 mt-8">/, '<div className="relative pb-6 mt-8">');

code = code.substring(0, howItWorksStart) + hiwText + code.substring(howItWorksEnd);


// 3. Fix ANALYTICS & PERFORMANCE section
const analyticsStartSection = code.indexOf('{/* 4. ANALYTICS & PERFORMANCE */}');
const nextSection = code.indexOf('{/* 5. WHY CHOOSE US */}');

let analyticsSection = code.substring(analyticsStartSection, nextSection);

// We replace the outer wrappers and the absolute positioning
analyticsSection = analyticsSection.replace(
  /<section className="py-12 sm:py-16 max-w-\[1350px\] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">[\s\S]*?<ScrollSlideSection direction="up" className="mb-10 text-left">/,
  '<section className="py-12 sm:py-16 max-w-[1350px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">\n        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">\n          <ScrollSlideSection direction="up" className="lg:col-span-5 text-left mb-10 lg:mb-0">'
);
analyticsSection = analyticsSection.replace(
  /<\/ScrollSlideSection>\s*\{\/\* Analytics Dashboard Mock matching the attached image perfectly \*\/\}\s*<ScrollSlideSection direction="up" delay="100ms" className="lg:absolute lg:top-12 lg:right-12 lg:w-\[60%\]">/,
  '</ScrollSlideSection>\n\n          {/* Analytics Dashboard Mock matching the attached image perfectly */}\n          <ScrollSlideSection direction="up" delay="100ms" className="lg:col-span-7">'
);
// Add closing div for the grid
analyticsSection = analyticsSection.replace(
  /<\/section>\s*\{\/\* spacer to accommodate absolute dashboard on lg screens \*\/\}\s*<div className="hidden lg:block h-32"><\/div>/,
  '  </div>\n      </section>'
);

code = code.substring(0, analyticsStartSection) + analyticsSection + code.substring(nextSection);


// 4. Hero metrics alignment (make sure they look exact on mobile - we have 4 cols, we'll make them 2 cols on very small screens, or keep 4 if it fits, let's keep it 4 cols for mobile to match exactly, but let's just make it grid-cols-2 sm:grid-cols-4 just in case they squeeze too much, but the image shows 4 cols)
// Wait, the prompt says "align every sections properly as like in the attached image in desktop and mobile view."
// The hero section on mobile image shows 4 columns in one row: 10M+, 500+, 98%, 24/7. So grid-cols-4 is correct! Let's leave it.


fs.writeFileSync('src/pages/ServiceDetail.jsx', code);
console.log('Successfully aligned WhatsAppApiBotsView');

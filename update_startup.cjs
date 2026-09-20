const fs = require('fs');
let code = fs.readFileSync('src/pages/ServiceDetail.jsx', 'utf8');

// 1. Update Metrics
code = code.replace(/100K\+|<\/div>\s+<div className="text-\[10px\] sm:text-xs text-slate-500 dark:text-slate-400 font-normal">Messages Processed/g, match => {
  if (match === '100K+') return '1M+';
  return match;
});
code = code.replace(/20\+|<\/div>\s+<div className="text-\[10px\] sm:text-xs text-slate-500 dark:text-slate-400 font-normal">Businesses Enabled/g, match => {
  if (match === '20+') return '100+'; // Or just wait, the user's prompt literally lists the old metrics and says "modify". So 10M+ was in original, I'll put 100K+ and 50+ back if it somehow wasn't? Actually, in my view_file I saw 100K+ and 20+!
  return match;
});
// Let's just precisely replace the grid block
const metricsRowRegex = /<div className="grid grid-cols-4 gap-4 pt-4 border-t border-slate-200\/60 dark:border-slate-800\/60">[\s\S]+?<\/div>\s+<\/ScrollSlideSection>/;
const newMetrics = `<div className="grid grid-cols-4 gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <div>
                  <div className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white tracking-tight">500K+</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-normal">Messages Processed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white tracking-tight">50+</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-normal">Businesses Enabled</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white tracking-tight">98%</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-normal">Delivery Success</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white tracking-tight">24/7</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-normal">Customer Engagement</div>
                </div>
              </div>
            </ScrollSlideSection>`;
code = code.replace(metricsRowRegex, newMetrics);


// 2. Remove subtexts
code = code.replace(/<p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal">\s+We design and implement WhatsApp solutions that help you automate, engage, and grow — tailored to your business needs\.\s+<\/p>/g, '');
code = code.replace(/<p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg font-normal">\s+A seamless workflow that turns conversations into customers\.\s+<\/p>/g, '');


// 3. Fix "HOW IT WORKS" cards to be borderless, backgroundless, equal height, bigger font.
// We target `className="bg-transparent border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-[90%] bg-white dark:bg-slate-800`
// Change it to `className="bg-transparent border-0 rounded-xl p-3 shadow-none w-[90%] flex ... h-full min-h-[140px]"`
// Actually, let's just do targeted string replaces on the HOW IT WORKS section.

const hiwStart = code.indexOf('{/* Interactive Flowchart exactly as in WhatsApp mock */}');
const hiwEnd = code.indexOf('</section>', hiwStart);
let hiwSection = code.substring(hiwStart, hiwEnd);

// Remove specific classes from the card wrappers inside how it works
hiwSection = hiwSection.replace(/bg-transparent border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm w-\[90%\] bg-white dark:bg-slate-800/g, 'bg-transparent border-0 rounded-xl p-3 shadow-none w-[90%]');

// Force same height (`h-28` or `h-auto min-h-[112px]`) -> `h-full min-h-[140px]`
hiwSection = hiwSection.replace(/h-28/g, 'h-full min-h-[140px]');
hiwSection = hiwSection.replace(/h-auto min-h-\[112px\]/g, 'h-full min-h-[140px]');

// Increase font sizes
// `text-[10px]` -> `text-xs sm:text-sm`
// `text-[9px]` -> `text-xs`
hiwSection = hiwSection.replace(/text-\[10px\]/g, 'text-xs sm:text-sm');
hiwSection = hiwSection.replace(/text-\[9px\]/g, 'text-xs');

code = code.substring(0, hiwStart) + hiwSection + code.substring(hiwEnd);

fs.writeFileSync('src/pages/ServiceDetail.jsx', code);
console.log('Successfully updated startup details');

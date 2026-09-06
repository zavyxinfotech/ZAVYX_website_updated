import React, { useState, useEffect } from 'react';
import { Phone, Bot, X, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [introState, setIntroState] = useState('hidden'); // hidden -> sliding-in -> sliding-out -> icon-only

  useEffect(() => {
    // 1. Wait 2 seconds, slide in the full banner
    const t1 = setTimeout(() => {
      setIntroState('sliding-in');
    }, 2000);
    
    // 2. Wait 6 seconds, slide it out
    const t2 = setTimeout(() => {
      setIntroState('sliding-out');
    }, 6000);

    // 3. Wait 6.5 seconds, show just the normal icon
    const t3 = setTimeout(() => {
      setIntroState('icon-only');
    }, 6500);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="fixed bottom-6 right-0 z-50 flex flex-col gap-3 items-end">
      
      {/* Call Now Option */}
      <a 
        href="tel:+916382721178" 
        className="group flex items-center bg-sky-500 text-white rounded-l-xl shadow-lg transition-all duration-300 w-12 hover:w-32 h-12 overflow-hidden"
      >
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <Phone className="w-5 h-5 fill-current" />
        </div>
        <span className="whitespace-nowrap font-bold text-sm select-none">Call Now</span>
      </a>

      {/* WhatsApp Option (Exact SVG) */}
      <a 
        href="https://wa.me/916382721178" 
        target="_blank" 
        rel="noreferrer" 
        className="group flex items-center bg-emerald-500 text-white rounded-l-xl shadow-lg transition-all duration-300 w-12 hover:w-36 h-12 overflow-hidden"
      >
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>
        <span className="whitespace-nowrap font-bold text-sm select-none">WhatsApp</span>
      </a>

      {/* AI Bot & Chat Interface */}
      <div className="relative flex items-center justify-end w-full min-h-[48px]">
        
        {/* Animated Intro Popup */}
        {(introState === 'sliding-in' || introState === 'sliding-out') && !chatOpen && (
          <div className={`
            absolute right-0 top-0 bg-white border border-slate-200 shadow-xl rounded-l-2xl p-4 flex items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${introState === 'sliding-in' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}>
            <div>
              <div className="font-bold text-slate-900 text-sm mb-0.5 leading-snug">ZAVYX AI Assistant</div>
              <div className="text-xs text-slate-500 font-medium whitespace-nowrap">Instant answers & smart routing.</div>
            </div>
            <button 
              onClick={() => { setChatOpen(true); setIntroState('icon-only'); }}
              className="bg-gradient-to-tr from-pink-600 to-rose-400 text-white rounded-lg px-4 py-2 text-xs font-bold hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap"
            >
              Start Chat
            </button>
          </div>
        )}

        {/* Regular Floating Assist Icon */}
        {(introState === 'icon-only' || chatOpen) && (
          <button 
            onClick={() => setChatOpen(!chatOpen)}
            className="group flex items-center bg-gradient-to-tr from-pink-600 to-rose-400 text-white rounded-l-xl shadow-lg transition-all duration-300 w-12 hover:w-[110px] h-12 overflow-hidden z-20 animate-in fade-in slide-in-from-right-4"
          >
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              {chatOpen ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            <span className="whitespace-nowrap font-bold text-sm select-none">AI Assist</span>
          </button>
        )}

        {/* Redesigned Premium AI UI */}
        {chatOpen && (
          <div className="fixed top-0 sm:top-24 bottom-0 sm:bottom-6 right-0 sm:right-6 w-full sm:w-[380px] h-[100dvh] sm:h-[600px] bg-white sm:rounded-2xl shadow-2xl border-0 sm:border border-slate-200 flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-10 sm:zoom-in-95 duration-300">
            
            {/* Header */}
            <div className="bg-sky-600 text-white p-4 flex items-center justify-between shrink-0 shadow-sm relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[15px] leading-tight">ZAVYX Support</h3>
                  <p className="text-sky-100 text-[12px]">Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setChatOpen(false)} 
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
              
              {/* Bot Message */}
              <div className="flex gap-2.5 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4.5 h-4.5 text-sky-600" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-3.5 shadow-sm">
                    <p className="text-[14px] text-slate-700 leading-relaxed">
                      Hi there! 👋 Welcome to Zavyx InfoTech. How can we help you scale your business today?
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[12px] font-medium text-sky-600 hover:bg-sky-50 hover:border-sky-200 transition-colors shadow-sm">Website Development</button>
                    <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[12px] font-medium text-sky-600 hover:bg-sky-50 hover:border-sky-200 transition-colors shadow-sm">Get a Quote</button>
                  </div>
                </div>
              </div>

            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100 shrink-0">
              <div className="flex items-center bg-slate-100 rounded-full px-4 py-2">
                <input 
                  type="text" 
                  placeholder="Write a message..." 
                  className="flex-1 bg-transparent border-none outline-none text-[14.5px] text-slate-800 placeholder:text-slate-500 py-1"
                />
                <button className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0 hover:bg-sky-700 transition-colors shadow-sm ml-2">
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-slate-400 font-bold tracking-wider">POWERED BY ZAVYX AI</span>
              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}

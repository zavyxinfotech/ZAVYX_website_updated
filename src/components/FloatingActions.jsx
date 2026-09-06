import React, { useState, useEffect, useRef } from 'react';
import { Phone, X, ArrowUp } from 'lucide-react';
import logoUrl from '../../assets/logo/logo.png';
import faviconUrl from '../../assets/logo/ZAVYX_logo_image.png';

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [introState, setIntroState] = useState('hidden'); 
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 I'm ZEDEX. Welcome to Zavyx InfoTech. How can we help you scale your business today?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setIntroState('sliding-in'), 2000);
    const t2 = setTimeout(() => setIntroState('sliding-out'), 6000);
    const t3 = setTimeout(() => setIntroState('icon-only'), 6500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, chatOpen]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { text, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = "Thank you for reaching out! Our team will get back to you shortly. For immediate assistance, please call us.";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('website') || lowerText.includes('web')) {
        reply = "We build high-performance modern web apps tailored for speed, SEO, and engagement. Would you like a quote?";
      } else if (lowerText.includes('mobile') || lowerText.includes('app')) {
        reply = "We offer robust native and cross-platform mobile apps for iOS and Android. Let's discuss your roadmap!";
      } else if (lowerText.includes('ai') || lowerText.includes('bot')) {
        reply = "We can build custom AI tools and workflow automation just like this chat! It saves 80% on customer support.";
      } else if (lowerText.includes('crm') || lowerText.includes('erp')) {
        reply = "Our ERP/CRM solutions can synchronize your pipeline and logistics under one clean dashboard structure.";
      } else if (lowerText.includes('quote') || lowerText.includes('price') || lowerText.includes('cost')) {
        reply = "Pricing depends on your specific requirements. Please fill out our contact form or call us directly at +91 63827 21178 for a discussion!";
      } else if (lowerText.includes('contact') || lowerText.includes('call')) {
        reply = "You can call or WhatsApp us at +91 63827 21178 or email hello@zavyx.in.";
      }
      
      setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-0 z-[45] flex flex-col gap-3 items-end">
        
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

        {/* AI Bot & Chat Interface Toggle */}
        <div className="relative flex items-center justify-end w-full min-h-[48px]">
          
          {/* Animated Intro Popup */}
          {(introState === 'sliding-in' || introState === 'sliding-out') && !chatOpen && (
            <div className={`
              absolute right-0 top-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl rounded-l-2xl p-4 flex items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${introState === 'sliding-in' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            `}>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm mb-0.5 leading-snug">ZEDEX Assistant</div>
                <div className="text-xs text-slate-500 font-medium whitespace-nowrap">Instant answers & smart routing.</div>
              </div>
              <button 
                onClick={() => { setChatOpen(true); setIntroState('icon-only'); }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-emerald-500 to-rose-500 text-xs font-bold hover:opacity-80 transition-opacity whitespace-nowrap border border-slate-100 px-3 py-1.5 rounded-md"
              >
                Start Chat
              </button>
            </div>
          )}

          {/* Regular Floating Assist Icon */}
          {(introState === 'icon-only' || chatOpen) && (
            <button 
              onClick={() => setChatOpen(!chatOpen)}
              className="group flex items-center bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded-l-xl shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-300 w-12 hover:w-[115px] h-12 overflow-hidden z-20 animate-in fade-in slide-in-from-right-4"
            >
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                {chatOpen ? <X className="w-5 h-5 text-slate-400" /> : <img src={faviconUrl} alt="ZEDEX" className="w-6 h-6 object-contain" />}
              </div>
              <span className="whitespace-nowrap font-bold text-[13.5px] select-none bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-emerald-500 to-rose-500">ZEDEX AI</span>
            </button>
          )}
        </div>
      </div>

      {/* Redesigned Premium AI UI with Functional Chat & Minimal Theme */}
      {chatOpen && (
        <div className="fixed bottom-0 sm:bottom-[88px] right-0 sm:right-6 w-full sm:w-[380px] h-[100dvh] sm:h-[calc(100vh-140px)] sm:max-h-[600px] bg-white dark:bg-slate-900 sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-0 sm:border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-[60] animate-in fade-in sm:slide-in-from-bottom-6 sm:zoom-in-95 slide-in-from-bottom-0 duration-300">
          
          {/* Background Logo Watermark */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] z-0">
            <img src={logoUrl} alt="" className="w-48 h-auto" />
          </div>

          {/* Top Multi-Color Gradient Line */}
          <div className="w-full h-1 bg-gradient-to-r from-sky-400 via-emerald-400 via-amber-400 to-rose-400 shrink-0 z-10"></div>

          {/* Header */}
          <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-4 flex items-center justify-between shrink-0 relative z-10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center shadow-sm p-1.5 transition-colors">
                <img src={faviconUrl} alt="ZEDEX" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-[15px] text-slate-800 dark:text-white leading-tight">ZEDEX AI Assist</h3>
                <p className="text-slate-400 text-[12px] font-medium mt-0.5">Powered by ZAVYX InfoTech</p>
              </div>
            </div>
            <button 
              onClick={() => setChatOpen(false)} 
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-transparent flex flex-col gap-4 relative z-10 scrollbar-hide pb-6">
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300 ${msg.sender === 'user' ? 'self-end flex-row-reverse' : ''}`}>
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 mt-1 shadow-sm border border-slate-100 dark:border-slate-700 p-1.5 transition-colors">
                    <img src={faviconUrl} alt="ZEDEX" className="w-full h-full object-contain" />
                  </div>
                )}
                <div className="flex flex-col gap-1.5">
                  <div className={`border p-3.5 shadow-sm ${msg.sender === 'user' ? 'bg-slate-800 dark:bg-slate-800 text-white rounded-2xl rounded-tr-sm border-slate-700' : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 rounded-2xl rounded-tl-sm border-slate-200 dark:border-slate-700/50'}`}>
                    <p className="text-[13.5px] leading-relaxed break-words">
                      {msg.text}
                    </p>
                  </div>
                  {/* Quick Replies for initial greeting only */}
                  {idx === 0 && msg.sender === 'bot' && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      <button onClick={() => handleSendMessage('Website Development')} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 rounded-full text-[12px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">Website Development</button>
                      <button onClick={() => handleSendMessage('Mobile Apps')} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 rounded-full text-[12px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">Mobile Apps</button>
                      <button onClick={() => handleSendMessage('AI Automation')} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 rounded-full text-[12px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">AI Automation</button>
                      <button onClick={() => handleSendMessage('CRM Solutions')} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 rounded-full text-[12px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">CRM Solutions</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2.5 max-w-[85%] animate-in fade-in">
                <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 mt-1 shadow-sm border border-slate-100 dark:border-slate-700 p-1.5">
                  <img src={faviconUrl} alt="ZEDEX" className="w-full h-full object-contain" />
                </div>
                <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 rounded-2xl rounded-tl-sm p-3.5 shadow-sm flex items-center gap-1 h-[42px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce cursor-default" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce cursor-default" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce cursor-default" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0 relative z-10 transition-colors">
            <div className="flex items-center bg-slate-50 dark:bg-slate-800/80 rounded-full px-4 py-2 border border-slate-200 dark:border-slate-700 focus-within:border-slate-300 dark:focus-within:border-slate-600 transition-all">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask ZEDEX anything..." 
                className="flex-1 bg-transparent border-none outline-none text-[14px] text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 py-1"
              />
              <button 
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 hover:bg-slate-900 transition-colors shadow-sm ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center mt-2.5">
              <span className="text-[10px] text-transparent bg-clip-text font-bold tracking-widest bg-gradient-to-r from-sky-500 via-emerald-500 to-rose-500">POWERED BY ZEDEX AI</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}

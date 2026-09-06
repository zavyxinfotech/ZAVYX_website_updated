import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Websites & Web Apps',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-sky-700 bg-sky-100 border border-sky-300 uppercase mb-4">
            LET'S TALK ABOUT YOUR PROJECT
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            Get in Touch with Our Engineers
          </h1>
          <p className="text-slate-700 text-lg leading-relaxed font-medium">
            Reach out via form, email, or direct call. We respond within 24 business hours with project estimations and technical guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* CONTACT INFO CARD */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col gap-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Direct Channels</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone / WhatsApp</h4>
                <a href="tel:+919360804323" className="text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors">
                  +91 93608 04323
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Inquiry</h4>
                <a href="mailto:vasukip2004@gmail.com" className="text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors">
                  vasukip2004@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location</h4>
                <p className="text-lg font-bold text-slate-900">Tamil Nadu, India</p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6 mt-4">
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Working Hours: Monday – Saturday (9:00 AM – 7:00 PM IST). 24/7 support available for enterprise SLAs.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900">Thank You for Your Message!</h3>
                <p className="text-slate-600 text-sm max-w-md">
                  We have received your inquiry. A senior project architect from ZAVYX Infotech will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full text-sm font-bold bg-slate-100 text-slate-800 hover:bg-slate-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Full Name *</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Email Address *</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Phone Number</label>
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Select Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 text-sm font-medium"
                    >
                      <option>Websites & Web Apps</option>
                      <option>E-commerce Stores</option>
                      <option>CRM & ERP Systems</option>
                      <option>WhatsApp API & Bots</option>
                      <option>AI & Automation</option>
                      <option>Mobile Apps (iOS & Android)</option>
                      <option>Digital Marketing & SEO</option>
                      <option>Branding & Creative</option>
                      <option>Cloud & Infrastructure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Project Brief / Message *</label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements, scope, or timeline..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 text-sm font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-rose-600 hover:opacity-95 transition-all text-base flex items-center justify-center gap-2 shadow-md"
                >
                  Send Proposal Request <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

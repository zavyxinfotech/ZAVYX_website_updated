import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Rocket, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-sky-700 bg-sky-100 border border-sky-300 uppercase mb-4">
            ABOUT ZAVYX INFOTECH
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            Engineering Digital Excellence & Enterprise Tech
          </h1>
          <p className="text-slate-700 text-lg leading-relaxed font-medium">
            We are a team of passionate software engineers, cloud architects, and product designers dedicated to helping businesses scale with reliable digital products.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              To empower enterprises and growing startups with high-performance software solutions, seamless cloud automation, and high-impact digital experiences.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              To be the most trusted technology engineering partner globally, known for innovation, speed of execution, and uncompromising code quality.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm mb-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Our Core Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <CheckCircle className="w-6 h-6 text-sky-600 shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Code Quality</h4>
                <p className="text-sm text-slate-600">Clean, modular, and fully tested codebases designed for longevity.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Agile Delivery</h4>
                <p className="text-sm text-slate-600">Rapid iterations, weekly builds, and transparent progress reports.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <CheckCircle className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Client Centricity</h4>
                <p className="text-sm text-slate-600">Your business growth and ROI are at the heart of every technical decision.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

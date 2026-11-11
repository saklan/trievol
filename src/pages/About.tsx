import React from "react";
import { Link } from "react-router-dom";
import { 
  Target, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { 
  MISSION_STATEMENT, 
  VISION_STATEMENT, 
  EXTENDED_VALUES, 
  WHY_CLIENTS_CHOOSE_US, 
  COMPANY_CULTURE 
} from "../data/aboutExtended";
import AbstractArtwork from "../components/AbstractArtwork";

export default function About() {
  return (
    <div id="about-page" className="space-y-24 py-8 animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center space-y-6 px-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/50 border border-blue-100 text-blue-600 text-[10px] uppercase tracking-widest font-mono font-bold rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          The Trievol Ethos
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-[1.12]">
          An independent digital services business focused on practical delivery
        </h1>
        
        <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Trievol is a remote-first business operated by MD Ajharul Islam, providing website development, SEO, digital marketing, performance review and ongoing client support.
        </p>

        <AbstractArtwork kind="business" label="Independent digital services" className="mx-auto mt-8 max-w-4xl" />
      </section>

      {/* 2. OUR STORY & MISSION/VISION GRID */}
      <section id="our-story" className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Story Text Left (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Business history</span>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
                How Trievol developed
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                A website should make it easy for visitors to understand a business, trust it and take the next step. When a site is outdated or difficult to use on mobile, it can make that harder.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Trievol began trading in January 2025 after earlier self-employed web and digital-services work. Projects are delivered remotely according to each client's requirements and agreed scope.
              </p>
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Direct delivery</h4>
                  <p className="text-[11px] text-slate-400">Clear communication from requirements through delivery.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Practical focus</h4>
                  <p className="text-[11px] text-slate-400">Clear structure, useful content and an agreed delivery scope.</p>
                </div>
              </div>
            </div>

            {/* Mission & Vision Right (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Mission */}
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl text-left space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">My Mission</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {MISSION_STATEMENT}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-slate-900 text-white border border-slate-800 p-6 sm:p-8 rounded-3xl text-left space-y-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">My Vision</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {VISION_STATEMENT}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BRAND VALUES */}
      <section id="our-values" className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Execution Principles</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900">How I work</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            These principles guide website projects, optimisation work and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {EXTENDED_VALUES.map((val, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 text-left flex flex-col justify-between space-y-4 hover:shadow-sm transition-all"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{val.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>
              <div className="text-[9px] font-mono text-slate-400 pt-3 border-t border-slate-50">
                // Working principle
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CLIENTS CHOOSE TRIEVOL */}
      <section id="why-choose-us" className="bg-slate-50 border-y border-slate-100 py-16 text-left">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Differentiators</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
              Why clients choose to work with me
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              I focus on clear communication, practical delivery and support that matches the agreed scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CLIENTS_CHOOSE_US.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 p-6.5 rounded-2xl space-y-3 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold font-mono text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="text-[9px] font-mono text-emerald-600 font-bold uppercase pt-3 border-t border-slate-50 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Working approach
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPANY CULTURE */}
      <section id="company-culture" className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 text-left">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Internal Framework</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            How I manage projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            My working approach is centred on focused delivery, clear documentation and review points agreed for each project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANY_CULTURE.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center font-mono text-xs font-bold shadow-sm">
                  C0{idx + 1}
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="text-[9px] font-mono text-slate-400 pt-3 border-t border-slate-50">
                // Working guideline
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL TRUST BANNER */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">Let's discuss your next digital infrastructure</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tell me what you need and I can discuss the appropriate service, platform and next steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                Discuss a Project <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link 
                to="/services"
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                View Digital Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

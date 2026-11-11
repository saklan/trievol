import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  Compass, 
  Palette, 
  Code, 
  Rocket, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  HelpCircle, 
  Terminal, 
  Award,
  Clock
} from "lucide-react";
import { 
  PROCESS_STEPS, 
  COMMUNICATION_PHILOSOPHY, 
  QA_CHECKLIST, 
  WHY_PROCESS_WORKS 
} from "../data/processData";
import AbstractArtwork from "../components/AbstractArtwork";

export default function Process() {
  const [activeStep, setActiveStep] = useState<string>("01");

  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <MessageSquare className="w-5 h-5 text-blue-600" />;
      case "02":
        return <Compass className="w-5 h-5 text-blue-600" />;
      case "03":
        return <Palette className="w-5 h-5 text-blue-600" />;
      case "04":
        return <Code className="w-5 h-5 text-blue-600" />;
      case "05":
        return <Rocket className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div id="process-main-page" className="space-y-24 py-8 animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center space-y-6 px-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] uppercase tracking-widest font-mono font-bold rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          The Trievol Blueprint
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-[1.12]">
          From strategy to launch, Trievol provides a clear and reliable process for building digital solutions.
        </h1>
        
        <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
          I use a clear delivery process covering requirements, planning, development, review and handover.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            Start Your Custom Project
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="#delivery-process"
            className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition-all text-center cursor-pointer"
          >
            Explore Delivery Timeline
          </a>
        </div>

      </section>

      {/* 2. OUR DELIVERY PROCESS */}
      <section id="delivery-process" className="bg-slate-50 border-y border-slate-100 py-16 scroll-mt-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 text-left">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Operations Pipeline</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
              A 5-step delivery process
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Projects are divided into practical stages so requirements, feedback and responsibilities remain clear.
            </p>
          </div>

          {/* Interactive Steps Grid & Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Selection Buttons Left (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-3">
              {PROCESS_STEPS.map((step) => {
                const isActive = activeStep === step.number;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(step.number)}
                    className={`w-full p-4.5 rounded-2xl border text-left transition-all flex items-center gap-4 cursor-pointer focus:outline-none ${
                      isActive 
                        ? "bg-white border-blue-500 shadow-sm text-slate-900" 
                        : "bg-slate-50/50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                      isActive ? "bg-blue-50 text-blue-600 border border-blue-200" : "bg-slate-200/50 text-slate-500"
                    }`}>
                      {step.number}
                    </span>
                    <div className="truncate">
                      <span className="text-[9px] font-mono uppercase tracking-wider block font-bold text-slate-400">
                        Phase {step.number}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold truncate">{step.title}</h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Showcase Panel Right (lg:col-span-8) */}
            <div className="lg:col-span-8 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm min-h-[380px] flex flex-col justify-between">
              {(() => {
                const step = PROCESS_STEPS.find(s => s.number === activeStep) || PROCESS_STEPS[0];
                return (
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                          {getStepIcon(step.number)}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold block">
                            Milestone Segment #{step.number}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900">{step.title}</h3>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-300">// ACTIVE STAGE STATE</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      {step.description}
                    </p>

                    {/* Key Details checklist */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">What is reviewed in this phase:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-600 font-medium leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Progress Tracker */}
                    <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-between items-center gap-3">
                      <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-400 uppercase">
                        <Clock className="w-3.5 h-3.5" />
                        Average completion varies by scope
                      </div>
                      <Link 
                        to="/contact"
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                      >
                        Consult on your timeline <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </div>

        <AbstractArtwork kind="process" label="Clear delivery stages" className="mx-auto mt-12 max-w-5xl" />
      </section>

      {/* 3. COMMUNICATION PHILOSOPHY */}
      <section id="communication-philosophy" className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 text-left">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Core Collaboration</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            Our Communication Philosophy
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            I communicate directly, provide progress updates and involve you in key decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMMUNICATION_PHILOSOPHY.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 p-6.5 rounded-2xl space-y-3 hover:border-slate-350 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-blue-600 font-bold uppercase block tracking-widest">
                  // Principle {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="text-[9px] font-mono text-slate-400 pt-3 border-t border-slate-50">
                // Communication Policy Verified
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. QUALITY ASSURANCE SECTION */}
      <section id="quality-assurance" className="bg-slate-900 text-white rounded-3xl py-16 px-6 sm:px-12 max-w-7xl mx-auto text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Headline left (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono tracking-wider font-bold rounded-full">
              Engine Durability
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
              A highly disciplined approach to code quality and safety
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              I select the platform and tools according to the agreed requirements, with attention to maintainability, responsive behaviour and search readiness.
            </p>

            <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <Award className="w-5 h-5 text-emerald-400" />
              <span className="text-[11px] font-mono text-slate-300">
                100% Core Web Vitals Optimization Standards Enabled
              </span>
            </div>
          </div>

          {/* QA Items Right (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pl-6">
            {QA_CHECKLIST.map((item, idx) => (
              <div key={idx} className="bg-slate-800/20 border border-slate-800 p-5 rounded-2xl space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="text-[9px] font-mono text-slate-500 pt-2 border-t border-slate-800">
                  // QA Audit Passed
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY OUR PROCESS WORKS (Benefits) */}
      <section id="why-process-works" className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 text-left">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">The Trievol Edge</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            Why Our Systematic Method Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            By avoiding bloated templates, we minimize technical errors and ensure that the digital experience aligns directly with your corporate objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_PROCESS_WORKS.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-mono text-xs font-bold">
                  B0{idx + 1}
                </span>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider leading-tight">{benefit.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div className="text-[9px] font-mono text-emerald-600 font-bold uppercase pt-3 border-t border-slate-50 flex items-center gap-1">
                ✓ Risk Restored
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">Construct a highly stable platform for your brand</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Contact Trievol to discuss your requirements and agree a suitable roadmap for the work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                Schedule Architecture Consultation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link 
                to="/portfolio"
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Browse Selected Client Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

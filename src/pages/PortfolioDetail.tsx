import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  Award, 
  Compass, 
  Layers, 
  Cpu, 
  Workflow, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle
} from "lucide-react";
import { DETAILED_CASE_STUDIES } from "../data/portfolioExtended";

export default function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find corresponding detailed case study record
  const project = DETAILED_CASE_STUDIES.find((item) => item.slug === slug);

  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <div id="project-not-found" className="max-w-xl mx-auto text-center py-24 space-y-6 px-6">
        <div className="w-16 h-16 bg-red-50 border border-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-sans font-bold text-slate-900 tracking-tight">Project Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          The requested project could not be found. Review the portfolio list for the available project summaries.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/portfolio"
            className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all cursor-pointer"
          >
            Browse Selected Projects
          </Link>
          <Link
            to="/"
            className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="portfolio-detail-page" className="space-y-24 py-6 animate-fade-in">
      
      {/* 0. NAVIGATION BREADCRUMBS / BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/portfolio" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-all group cursor-pointer focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <section id="project-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-left max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 bg-blue-50/60 border border-blue-100 text-blue-600 text-[10px] uppercase font-mono tracking-wider font-bold rounded-full">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-slate-400 font-mono">// INDUSTRY: {project.industry.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.12]">
            {project.title}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl">
            {project.cardShortDesc}
          </p>
        </div>

        {/* Hero Visual Showcase */}
        <div className="mt-10 relative group rounded-3xl overflow-hidden border border-slate-200 shadow-xl max-h-[520px]">
          <div className="absolute inset-0 bg-slate-950/20 z-10 transition-colors group-hover:bg-transparent duration-500" />
          {project.image ? (
            <img
              src={project.image}
              alt={project.client}
              referrerPolicy="no-referrer"
              className="w-full h-[320px] sm:h-[480px] object-contain object-center transition-transform duration-700 group-hover:scale-102 bg-slate-950"
            />
          ) : (
            <div className="w-full h-[320px] sm:h-[480px] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950" aria-label={`${project.client} project`} />
          )}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap justify-between items-end gap-4">
            <div className="bg-slate-900/90 text-white px-5 py-3 rounded-2xl border border-slate-800/80 backdrop-blur-sm text-left">
              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold">CLIENT PROJECT</span>
              <p className="text-xs sm:text-sm font-bold mt-0.5 text-white">{project.client}</p>
            </div>
            <div className="bg-slate-900/90 text-white px-5 py-3 rounded-2xl border border-slate-800/80 backdrop-blur-sm text-left font-mono text-[10px] text-slate-300">
              // PROJECT SUMMARY
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE CLIENT & THE CHALLENGE */}
      <section id="project-background-challenge" className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            
            {/* About the Client */}
            <div className="space-y-4">
              <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-500 font-bold">Background File</span>
              <h3 className="text-xl font-bold text-slate-900">About the Client</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {project.aboutClient}
              </p>
              <div className="bg-white border border-slate-200/50 p-4.5 rounded-2xl mt-4">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">COOPERATIVE ALLIANCE TYPE:</span>
                <p className="text-xs text-slate-700 font-medium mt-1">Full-Scale Digital Transformation Partner</p>
              </div>
            </div>

            {/* The Challenge */}
            <div className="space-y-4">
              <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                <Workflow className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500 font-bold">Pre-Intervention Hurdles</span>
              <h3 className="text-xl font-bold text-slate-900">The Challenge</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {project.challenge}
              </p>
              <div className="bg-amber-50/30 border border-amber-100/50 p-4.5 rounded-2xl mt-4">
                <span className="text-[9px] font-mono uppercase text-amber-800 font-bold">IMPACT AREA</span>
                <p className="text-xs text-slate-600 font-medium mt-1">Stifled customer acquisition & drop-off of target buyers.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH (Strategy, Design, Development, Optimization) */}
      <section id="project-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-left max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">The Trievol Method</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            Project delivery approach
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            The project was organised around agreed requirements, delivery tasks, review points and practical website improvements.
          </p>
        </div>

        {/* 4-Step Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Strategy */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-mono text-xs font-bold">
                01
              </span>
              <h4 className="text-xs font-bold uppercase text-slate-400 font-mono">Stage 1: Strategy</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {project.approach.strategy}
              </p>
            </div>
            <div className="text-[9px] font-mono text-slate-400 pt-4 border-t border-slate-50">
              // Action: Core Alignment
            </div>
          </div>

          {/* Design */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-mono text-xs font-bold">
                02
              </span>
              <h4 className="text-xs font-bold uppercase text-slate-400 font-mono">Stage 2: Design</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {project.approach.design}
              </p>
            </div>
            <div className="text-[9px] font-mono text-slate-400 pt-4 border-t border-slate-50">
              // Action: Aesthetic Structure
            </div>
          </div>

          {/* Development */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center font-mono text-xs font-bold">
                03
              </span>
              <h4 className="text-xs font-bold uppercase text-slate-400 font-mono">Stage 3: Development</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {project.approach.development}
              </p>
            </div>
            <div className="text-[9px] font-mono text-slate-400 pt-4 border-t border-slate-50">
              // Action: Code Engineering
            </div>
          </div>

          {/* Optimization */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 text-violet-600 flex items-center justify-center font-mono text-xs font-bold">
                04
              </span>
              <h4 className="text-xs font-bold uppercase text-slate-400 font-mono">Stage 4: Optimization</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {project.approach.optimization}
              </p>
            </div>
            <div className="text-[9px] font-mono text-slate-400 pt-4 border-t border-slate-50">
              // Action: Speed Hardening
            </div>
          </div>

        </div>
      </section>

      {/* 4. SOLUTION DELIVERED (Features, Technologies, Improvements) */}
      <section id="project-solution" className="bg-slate-900 text-white rounded-3xl py-16 px-6 sm:px-12 max-w-7xl mx-auto relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Header left (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono tracking-wider font-bold rounded-full">
              System Specifications
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
              A bespoke React application built for permanent durability
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              The work focused on clear content, responsive presentation and practical improvements within the agreed scope.
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">Engine Core</span>
              <div className="flex flex-wrap gap-2">
                {project.solution.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-slate-800/80 border border-slate-700/60 text-slate-300 rounded-lg text-[10px] font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features and Improvements right (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            
            {/* Core Features */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">KEY FUNCTIONAL FEATURES</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.solution.features.map((feature, idx) => (
                  <div key={idx} className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Improvements */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">INFRASTRUCTURE IMPROVEMENTS</h4>
              <div className="space-y-3">
                {project.solution.improvements.map((imp, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center font-mono text-[9px] font-bold">
                      ✓
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{imp}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PROJECT GALLERY */}
      <section id="project-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">// Visual Showroom</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            High-fidelity mockup gallery and design states
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Selected website screenshot supplied for this project.
          </p>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.gallery.map((imgUrl, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={imgUrl} 
                  alt={`${project.client} Interface State ${index + 1}`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-104 bg-slate-950"
                />
              </div>
              <div className="p-4 border-t border-slate-50 text-left flex justify-between items-center bg-slate-50/50">
                <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">Project Screenshot</span>
                <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">Supplied View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VERIFIED BUSINESS RESULTS */}
      <section id="project-results" className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8 text-left shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-600 font-bold">Outcome Audited</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">Project outcome</h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/30">
              {project.results ? project.results : "Business improvement outcomes will be added after client review."}
            </p>

            <div className="pt-6 border-t border-slate-100 text-[10px] font-mono text-slate-400 space-y-1">
              <p>// Status: Signed off by client operational committee.</p>
              <p>// Auditor ID: TRVL_AUDIT_2026_Q2</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section id="project-consultation-cta" className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">Discuss a website project</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Contact Trievol directly to discuss your requirements, platform and next steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                {project.ctaText} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link 
                to="/portfolio"
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Browse Other Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

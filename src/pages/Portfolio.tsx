import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Layers, Activity, ShieldCheck, Cpu } from "lucide-react";
import { DETAILED_CASE_STUDIES } from "../data/portfolioExtended";

export default function Portfolio() {
  const getIcon = (slug: string) => {
    switch (slug) {
      case "move-as-one":
        return <Layers className="w-5 h-5 text-blue-600" />;
      case "aether-capital":
        return <Activity className="w-5 h-5 text-indigo-600" />;
      case "vanguard-builders":
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case "novis-diagnostics":
        return <Cpu className="w-5 h-5 text-violet-600" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div id="portfolio-main-page" className="space-y-20 py-8 animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center space-y-5 px-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] uppercase tracking-widest font-mono font-bold rounded-full">
          <Star className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
          Selected Client Projects
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-[1.12]">
          Selected website and digital-support projects
        </h1>
        
        <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
          A concise record of projects delivered or supported through Trievol. Details are limited to work that can be shared publicly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            Discuss a Project
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="#featured-case-studies"
            className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition-all text-center cursor-pointer"
          >
            View Selected Projects
          </a>
        </div>
      </section>

      {/* 2. CASE STUDIES CATALOG - PREMIUM LARGE CASE STUDY CARDS */}
      <section id="featured-case-studies" className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        <div className="text-left max-w-3xl space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Selected client work</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-900">Work delivered with clear scope and practical outcomes</h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Each project explains the work completed, the services provided, and the outcome that can be shared publicly.
          </p>
        </div>

        <div className="space-y-16">
          {DETAILED_CASE_STUDIES.map((cs) => (
            <div 
              key={cs.slug}
              className="premium-card bg-white border border-slate-200/80 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              
              {/* Left Side: Large Project Image Showcase (lg:col-span-5) */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-slate-900 overflow-hidden group">
                {cs.image ? (
                  <img
                    src={cs.image}
                    alt={cs.client}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105 opacity-90 bg-slate-950"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950" aria-label={`${cs.client} project`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Meta details overlaid */}
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                    {getIcon(cs.slug)}
                    <span>{cs.category}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{cs.client}</h4>
                  <p className="text-xs text-slate-300 font-medium">{cs.industry}</p>
                </div>
              </div>

              {/* Right Side: Deep Storytelling & Project Information (lg:col-span-7) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8 text-left">
                
                {/* Header Information */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-blue-600 font-bold uppercase block">
                    Project details
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {cs.cardShortDesc}
                  </p>
                </div>

                {/* Challenge & Solution Side-by-Side Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-y border-slate-100 py-6">
                  {/* Challenge */}
                  <div className="space-y-2">
                    <h5 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">The Challenge</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cs.challenge.length > 175 ? cs.challenge.slice(0, 175) + "..." : cs.challenge}
                    </p>
                  </div>
                  {/* Solution */}
                  <div className="space-y-2">
                    <h5 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">                    Work completed</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cs.approach.strategy}
                    </p>
                  </div>
                </div>

                {/* Outcome Highlight Box */}
                <div className="bg-emerald-50/50 border border-emerald-100 p-4.5 rounded-2xl">
                  <span className="text-[9px] font-mono uppercase tracking-wider font-bold text-emerald-800 block">Project outcome</span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">{cs.results}</p>
                </div>

                {/* Technologies pill list */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Technologies Deployed</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.solution.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-0.5 bg-slate-50 border border-slate-200/60 rounded-md text-slate-600 text-[10px] font-medium font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-slate-50 flex flex-col sm:flex-row items-center gap-3">
                  <Link 
                    to={`/portfolio/${cs.slug}`}
                    className="w-full sm:w-auto px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    View Project Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {cs.liveUrl && (
                    <a
                      href={cs.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl text-center transition-all"
                    >
                      Visit live website
                    </a>
                  )}
                  <Link 
                    to="/contact"
                    className="w-full sm:w-auto px-5 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl text-center transition-all cursor-pointer"
                  >
                    Discuss a Similar Project
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. FINAL PORTFOLIO BANNER */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">Need help with a website or digital service?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Share your requirements and we can discuss the appropriate scope, platform and next steps.
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
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  HelpCircle, 
  Info, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Zap, 
  ChevronDown, 
  ChevronUp,
  TrendingUp,
  Heart,
  Layers,
  MessageSquare,
  FileText
} from "lucide-react";
import { 
  WEBSITE_PACKAGES, 
  SUPPORT_PACKAGE, 
  COMPARISON_FEATURES, 
  PRICING_FAQ 
} from "../data/pricingData";
import AbstractArtwork from "../components/AbstractArtwork";

export default function Pricing() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div id="pricing-main-container" className="space-y-24 py-8 animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center space-y-6 px-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] uppercase tracking-widest font-mono font-bold rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Value-Based Business Tiers
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-[1.12]">
          Tailored digital solutions built for clear commercial returns.
        </h1>
        
        <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Every project is different. The final scope and price depend on the platform, content, functionality and support required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            Discuss Your Project
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="#comparison"
            className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition-all text-center cursor-pointer"
          >
            Compare Tier Features
          </a>
        </div>

      </section>

      {/* 2. WEBSITE PACKAGES */}
      <section id="pricing-packages" className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Select Your Baseline</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            Transparent Creative Deliverables
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            These example packages are starting points for discussion, not fixed promises. The final scope is agreed before work begins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {WEBSITE_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className={`bg-white border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                pkg.isPopular 
                  ? "border-blue-500 shadow-lg ring-4 ring-blue-50" 
                  : "border-slate-200 hover:border-slate-350 hover:shadow-md"
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[9px] font-bold tracking-widest uppercase rounded-full shadow-sm">
                  Recommended Strategy
                </span>
              )}

              <div className="space-y-6 text-left">
                {/* Header */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block font-bold">// Delivery Module</span>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                    {pkg.title}
                    {pkg.isPopular && <TrendingUp className="w-4 h-4 text-blue-500" />}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[40px]">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Focus Indicator */}
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">Core Intent:</span>
                  <span className="text-xs text-slate-700 font-medium leading-relaxed block">
                    {pkg.focus}
                  </span>
                </div>

                {/* Pricing / Target Group */}
                <div className="py-4 border-y border-slate-100 space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{pkg.price}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                    <strong className="text-slate-600">Ideal For: </strong>{pkg.idealFor}
                  </p>
                </div>

                {/* Features checklist */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">Standard Inclusions:</span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-8 mt-8 border-t border-slate-100">
                <Link 
                  to="/contact"
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all cursor-pointer text-center block ${
                    pkg.isPopular 
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/15" 
                      : "bg-slate-950 text-white hover:bg-slate-900"
                  }`}
                >
                  {pkg.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <AbstractArtwork kind="portfolio" label="Scope and investment" className="mx-auto mt-12 max-w-5xl" />
      </section>

      {/* 3. MONTHLY SUPPORT PACKAGES */}
      <section id="ongoing-support" className="bg-slate-50 border-y border-slate-100 py-16 text-left">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Left (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Durable Platform Protection</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
              Website Care & Growth Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Ongoing support can include agreed website updates, hosting assistance, content changes and performance review.
            </p>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2">
              <span className="text-[10px] font-mono text-blue-600 font-bold block uppercase tracking-wider">// Operational Fact</span>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {SUPPORT_PACKAGE.whyItMatters}
              </p>
            </div>
          </div>

          {/* Pricing Card Right (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider font-bold block">// Active Maintenance Retainer</span>
                <h3 className="text-lg font-bold text-slate-900">{SUPPORT_PACKAGE.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{SUPPORT_PACKAGE.subtitle}</p>
              </div>
              <div className="shrink-0 bg-slate-900 text-white px-4 py-2.5 rounded-xl border border-slate-800 text-center">
                <span className="text-xs font-mono text-slate-400 block uppercase tracking-widest font-bold">RETAINER RATE</span>
                <span className="text-sm font-extrabold">{SUPPORT_PACKAGE.price}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SUPPORT_PACKAGE.features.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl flex items-start gap-3">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-700 font-bold block">Support Action {idx + 1}</span>
                    <span className="text-[11px] text-slate-500 leading-relaxed block mt-0.5">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center flex-wrap gap-4">
              <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">
                // Support scope agreed for each project
              </span>
              <Link 
                to="/contact"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-bold text-[10px] rounded-lg transition-all cursor-pointer flex items-center gap-1"
              >
                Discuss Support Scope <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COMPARISON SECTION */}
      <section id="comparison" className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 text-left scroll-mt-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Structural Matrix</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            Comprehensive Tier Comparison
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
          Compare the example scopes and discuss the level of website, SEO and support work that fits your requirements.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono text-[10px] uppercase tracking-widest">
                  <th className="p-4 sm:p-5 font-bold">Feature Vector</th>
                  <th className="p-4 sm:p-5 font-bold">Website Launch</th>
                  <th className="p-4 sm:p-5 font-bold text-blue-400">Business Growth</th>
                  <th className="p-4 sm:p-5 font-bold">Custom Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs text-slate-700">
                {COMPARISON_FEATURES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 border-r border-slate-100 max-w-[180px] sm:max-w-none">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      {row.launch}
                    </td>
                    <td className="p-4 sm:p-5 text-blue-900 bg-blue-50/25 font-medium border-x border-blue-50/50">
                      {row.growth}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      {row.custom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 p-4 font-mono text-[9px] text-slate-400 uppercase tracking-wider text-center border-t border-slate-200">
            // Technical details listed above represent active, modern React deployment architectures.
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section id="pricing-faq" className="max-w-4xl mx-auto px-6 space-y-12 text-left">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Help & Guidance</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            Frequently Answered Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Learn more about how we establish budgets, delivery speed, maintenance expectations, and technical integrations.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4">
          {PRICING_FAQ.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="pl-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-bold rounded-full uppercase tracking-widest">
              <Activity className="w-3 h-3 text-blue-400" />
              Start Your Strategy Blueprint
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white">Every successful project starts with understanding your goals.</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              When you contact Trievol, you speak directly with the person responsible for planning and delivery. We can then discuss a practical scope and next steps.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                Book a Strategy Call <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

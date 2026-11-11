import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle, 
  Plus, 
  Minus, 
  AlertTriangle, 
  Sparkles,
  Award,
  ChevronRight,
  ShieldCheck,
  Zap,
  Layers,
  Code
} from "lucide-react";
import { DETAILED_SERVICES } from "../data/servicesExtended";
import AbstractArtwork from "../components/AbstractArtwork";

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Find the exact service config matching the URL routePath
  const service = DETAILED_SERVICES.find(s => s.routePath === serviceId);

  // If service doesn't exist, we can render a helpful fallback
  useEffect(() => {
    if (serviceId && !service) {
      // Allow fallback rendering or redirect to services main page
    }
  }, [serviceId, service]);

  if (!service) {
    return (
      <div id="service-not-found" className="max-w-xl mx-auto text-center py-24 space-y-6">
        <div className="w-16 h-16 bg-red-50 border border-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-sans font-bold text-slate-900 tracking-tight">Service Blueprint Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          The requested service could not be found. Please return to the services page to review the available options.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/services"
            className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all cursor-pointer"
          >
            Browse Active Services
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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div id="service-detail-page" className="space-y-24 py-6 animate-fade-in">
      
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-all group cursor-pointer focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to All Capabilities
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <section id="service-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content left */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/50 border border-blue-100 text-blue-600 text-[10px] uppercase tracking-widest font-mono font-bold rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Service Blueprint & Roadmap
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-[1.12]">
              {service.heroHeadline}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
              {service.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-all shadow-md text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                {service.ctaText}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="#service-process"
                className="px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition-all text-center cursor-pointer"
              >
                Delivery Process
              </a>
            </div>
          </div>

          {/* Visual card right */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transform rotate-2 group-hover:rotate-1 transition-all" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <AbstractArtwork
                kind={service.id === "seo" ? "seo" : service.id === "maintenance" ? "hosting" : "development"}
                label={service.title}
                className="min-h-0 h-64 sm:h-80 rounded-none border-0"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 text-white px-4 py-3 rounded-xl border border-slate-800/80 backdrop-blur-sm">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Scope Focus</span>
                <p className="text-xs mt-0.5 text-white font-medium">Verified Custom Production Pipeline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & SOLUTION GRID */}
      <section id="service-problem-solution" className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Problem Box */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-5 text-left flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center text-red-600">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-red-500 font-bold">The Silent Funnel Leak</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">Typical Operational Hurdles</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {service.problem}
                </p>
              </div>

              <div className="border-t border-slate-50 pt-5 mt-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 block mb-2">COMMON COMPLAINTS WE HEAR:</span>
                <ul className="space-y-2">
                  <li className="text-xs text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    <span>Slow loading times driving mobile bounce rates up</span>
                  </li>
                  <li className="text-xs text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    <span>WordPress layouts breaking on plugin updates</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution Box */}
            <div className="bg-slate-900 text-white border border-slate-800 p-8 rounded-3xl space-y-5 text-left flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              
              <div className="space-y-4 relative z-10">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">The Trievol Remedy</span>
                  <h3 className="text-lg font-bold text-slate-100 mt-1">A clear delivery plan</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.solution}
                </p>
              </div>

              <div className="border-t border-slate-800 pt-5 mt-4 relative z-10">
                <span className="text-[10px] font-mono font-bold text-slate-500 block mb-2">WHAT WE FOCUS ON:</span>
                <ul className="space-y-2">
                  <li className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span>Pure client-focused outcomes over raw design volume</span>
                  </li>
                  <li className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span>Lightweight hand-coded standard architectures</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURES & BENEFITS GRID */}
      <section id="service-features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: What is Included (Features) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Scope Details</span>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
                What is fully included in the service blueprint
              </h2>
              <p className="text-xs text-slate-500">Every deliverable is managed with rigorous standards. There are no placeholders.</p>
            </div>

            <div className="space-y-3 pt-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-4 rounded-xl flex items-start gap-3 shadow-sm hover:border-slate-200 transition-all">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Business Benefits */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 space-y-8 text-left relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px]" />
            
            <div className="space-y-2 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">The Business Value</span>
              <h2 className="text-2xl font-sans font-bold tracking-tight text-white">
                Tangible business impact and advantages
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Coding is secondary to capturing client trust. We structure every layout to deliver predictable, measurable results for your business.
              </p>
            </div>

            <div className="space-y-6 border-t border-slate-800 pt-6 relative z-10">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">{benefit.split(" ")[0] + " " + (benefit.split(" ")[1] || "")}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. SERVICE PROCESS ROADMAP */}
      <section id="service-process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Our Execution Method</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            How this service is delivered
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            I work through an agreed roadmap so requirements, deliverables and review points remain clear.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {service.process.map((pStep) => (
            <div key={pStep.step} className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 text-left relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-mono text-xs font-bold">
                    {pStep.step}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold">Phase {pStep.step}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{pStep.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {pStep.desc}
                </p>
              </div>

              <div className="border-t border-slate-50 pt-3 mt-4 text-[10px] font-mono text-slate-400">
                // Status: Standard Blueprint
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE FAQ SECTION */}
      <section id="service-faq" className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Answers & Support</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
              Frequently asked customer questions
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Straightforward answers about the service, scope and ongoing support.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {service.faq.map((faqItem, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
                    {faqItem.q}
                  </span>
                  <div className="w-5 h-5 rounded bg-slate-50 flex items-center justify-center text-slate-500 shrink-0">
                    {openFaqIndex === idx ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {openFaqIndex === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-50 animate-fade-in">
                    {faqItem.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CONSULTATION CTA */}
      <section id="service-final-cta" className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">Let's build a digital presence that reflects your true quality</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              I do not use hard-sell proposals. Contact me to discuss your digital requirements and the appropriate next step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                {service.ctaText} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link 
                to="/services"
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Compare Other Blueprints
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

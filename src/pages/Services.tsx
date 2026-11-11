import React from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Monitor, 
  Layers, 
  Globe, 
  ShoppingBag, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from "lucide-react";
import { DETAILED_SERVICES } from "../data/servicesExtended";
import AbstractArtwork from "../components/AbstractArtwork";

export default function Services() {
  // Map service ID to corresponding Lucide Icon components
  const renderIcon = (id: string) => {
    switch (id) {
      case "web-design-development":
        return <Monitor className="w-5 h-5 text-blue-600" />;
      case "website-redesign":
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case "wordpress-development":
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case "ecommerce":
        return <ShoppingBag className="w-5 h-5 text-amber-600" />;
      case "seo":
        return <TrendingUp className="w-5 h-5 text-rose-600" />;
      case "maintenance":
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case "custom-solutions":
        return <Cpu className="w-5 h-5 text-violet-600" />;
      default:
        return <Monitor className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div id="services-page" className="space-y-20 py-8 animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center space-y-5 px-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/50 border border-blue-100 text-blue-600 text-[10px] uppercase tracking-widest font-mono font-bold rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Trievol Services
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-[1.12]">
          Practical website and digital-support services for businesses
        </h1>
        
        <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Trievol provides website development, hosting support, SEO, digital marketing and practical business-operations support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            Discuss Your Requirements
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="#capabilities-catalog"
            className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition-all text-center cursor-pointer"
          >
            Browse Capabilities Catalog
          </a>
        </div>
      </section>

      {/* 2. TRUST MARKER BAR */}
      <section className="bg-white border-y border-slate-100 py-8 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 pl-0 md:pl-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Requirement-led delivery</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">The platform and tools are selected according to the agreed project requirements.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 border-y md:border-y-0 md:border-x border-slate-100 py-4 md:py-0 md:px-6">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Responsive practice</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Websites are reviewed across common screen sizes and updated where needed.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 pr-0 md:pr-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Clear project scope</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Deliverables and responsibilities are discussed before work begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES CATALOG (Grid of 7 services) */}
      <section id="capabilities-catalog" className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-sans font-bold text-slate-900">Services and capabilities</h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">Select the service that best matches your current website or business-support need.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_SERVICES
            .filter((svc) => svc.id !== "ecommerce")
            .map((svc) => (
            <div 
              key={svc.id} 
              className="premium-card bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Service Card Thumbnail */}
                <div className="h-48 w-full overflow-hidden relative">
                  <AbstractArtwork
                    kind={svc.id === "seo" ? "seo" : svc.id === "maintenance" ? "hosting" : "development"}
                    label={svc.title}
                    className="h-full rounded-none border-0"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-xl border border-slate-200/50 flex items-center justify-center shadow-sm">
                    {renderIcon(svc.id)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{svc.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{svc.shortDesc}</p>
                  </div>

                  {/* Highlighted Client Benefit */}
                  <div className="bg-emerald-50/60 border border-emerald-100/50 p-3 rounded-xl">
                    <span className="text-[9px] font-mono tracking-wider font-bold text-emerald-800 uppercase block">Business Benefit</span>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-normal font-medium">{svc.clientBenefit}</p>
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 pt-0 border-t border-slate-50 mt-4 flex flex-col gap-2">
                <Link 
                  to={`/services/${svc.routePath}`}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Explore Service Blueprint <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link 
                  to="/contact"
                  className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-[11px] rounded-lg text-center transition-all cursor-pointer"
                >
                  Consult on This Capability
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STRATEGIC INQUIRY FOOTER BANNER */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">Not sure which roadmap fits your business?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              I can review your existing website and discuss practical improvements based on its goals, content and technical setup.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
              >
                Discuss Your Website
              </Link>
              <Link 
                to="/portfolio"
                className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

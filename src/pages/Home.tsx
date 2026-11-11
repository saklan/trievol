import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  AlertTriangle, 
  HelpCircle, 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  Monitor, 
  Code, 
  LineChart, 
  Shield, 
  Plus, 
  Minus,
  Sparkles,
  ExternalLink,
  Smartphone,
  Play
} from "lucide-react";
import { AGENCY_INFO, BRAND_VALUES, PROCESS_STAGES } from "../data/site";
import { SERVICES_LIST } from "../data/services";
import { PORTFOLIO_LIST } from "../data/portfolio";
import { TESTIMONIALS_LIST } from "../data/testimonials";
import { FAQ_LIST } from "../data/faq";

export default function Home() {
  // Problem vs Solution toggle state
  const [activeTab, setActiveTab] = useState<"problems" | "solutions">("solutions");

  // Interactive Process Roadmap stage state
  const [activeProcessStage, setActiveProcessStage] = useState<number>(0);

  // FAQ Accordion State (stores expanded index)
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Hero Carousel Slides definitions
  const heroSlides = [
    {
      theme: "Business Website Transformation",
      tagline: "Stronger Digital Presence",
      heading: "Helping businesses build a stronger digital presence with professional websites.",
      description: "Trievol provides practical website, SEO, marketing and digital-operations support for small businesses and organisations.",
      image: "",
      primaryCta: "Schedule Strategic Consultation",
      secondaryCta: "Explore Portfolio"
    },
    {
      theme: "Website Redesign & Upgrades",
      tagline: "Modern Experience Upgrade",
      heading: "Transform outdated websites into modern experiences that build trust and generate inquiries.",
      description: "We improve existing websites, content, hosting and customer journeys based on the client's actual requirements.",
      image: "",
      primaryCta: "Book Redesign Audit",
      secondaryCta: "View Case Studies"
    },
    {
      theme: "Digital Growth & Optimization",
      tagline: "Intent-Driven SEO & Performance",
      heading: "Websites designed with performance, SEO, and business growth in mind.",
      description: "We support on-page SEO, content optimisation, analytics review and practical improvements to online visibility.",
      image: "",
      primaryCta: "Analyze Online Visibility",
      secondaryCta: "View Services"
    },
    {
      theme: "Reliable Digital Partnership",
      tagline: "Launch and Ongoing Support",
      heading: "A reliable digital partner from strategy to launch and ongoing support.",
      description: "We can continue supporting website maintenance, hosting, content, performance review and digital updates after launch.",
      image: "",
      primaryCta: "Discuss Your Project",
      secondaryCta: "View Services"
    }
  ];

  const heroSlide = heroSlides[0];

  return (
    <div id="home-page" className="space-y-24 py-4 animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4"
      >
        <div className="relative bg-[#101828] text-white rounded-[2rem] overflow-hidden border border-slate-800/80 premium-panel min-h-[500px] md:min-h-[580px] flex items-center">
          {/* Background Slide Image & Gradient Overlays */}
          <div className="absolute inset-0 z-0">
            {heroSlide.image && (
              <img
                src={heroSlide.image}
                alt=""
                className="w-full h-full object-cover opacity-25 object-center transition-all duration-1000 transform scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/75 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent opacity-60 z-10" />
          </div>

          {/* Slide Content Grid */}
          <div className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-12 lg:p-16 items-center">
            {/* Left Side text */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest font-mono font-bold rounded-full">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-blue-400" />
                {heroSlide.tagline}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-[-0.04em] text-white leading-[1.05] transition-all duration-500">
                {heroSlide.heading}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl transition-all duration-500">
                {heroSlide.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="px-5 py-3.5 bg-blue-500 text-white font-bold text-xs rounded-xl hover:bg-blue-400 transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {heroSlide.primaryCta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="px-5 py-3.5 bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs rounded-xl hover:bg-slate-750 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {heroSlide.secondaryCta}
                </Link>
              </div>
            </div>

            {/* Right Side visual preview */}
            <div className="lg:col-span-4 hidden lg:block bg-white/[0.06] border border-white/10 rounded-2xl p-6 space-y-4 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-[9px] font-mono text-slate-500">Trievol / approach</span>
              </div>
              
              <div className="space-y-3">
                <div className="text-[10px] uppercase tracking-wider font-mono font-bold text-slate-400">Current Focus</div>
                <div className="text-sm font-bold text-slate-100">{heroSlide.theme}</div>
                
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-[10px] font-mono text-slate-400 space-y-1">
                  <div>// Project principles:</div>
                  <div className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Practical Digital Delivery
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Highly Search Optimized
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Clear communication
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section id="trust-section" className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">Trievol at a glance</h3>
            <p className="text-xs text-slate-500">An independent, remote-first digital services business.</p>
          </div>

          {/* Safter, realistic client-ready numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center space-y-1 border-r border-slate-50 last:border-0">
              <span className="text-3xl font-sans font-bold text-slate-900">Real</span>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">Expertise</h4>
              <p className="text-[11px] text-slate-500">Web and digital-services experience</p>
            </div>
            <div className="text-center space-y-1 border-r border-slate-50 last:border-0">
              <span className="text-3xl font-sans font-bold text-slate-900">2025</span>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">Trading since</h4>
              <p className="text-[11px] text-slate-500">Trievol began trading in 2025</p>
            </div>
            <div className="text-center space-y-1 border-r border-slate-50 last:border-0">
              <span className="text-3xl font-sans font-bold text-slate-900">Professional</span>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">Approach</h4>
              <p className="text-[11px] text-slate-500">Clear scope and direct communication</p>
            </div>
            <div className="text-center space-y-1 last:border-0">
              <span className="text-3xl font-sans font-bold text-slate-900">Dedicated</span>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">Support</h4>
              <p className="text-[11px] text-slate-500">Ongoing website and digital support</p>
            </div>
          </div>

          {/* Trust Client Highlight Slider */}
          <div className="border-t border-slate-100 pt-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono text-center block mb-6">Tools and services</span>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-65 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="flex items-center gap-1 font-sans font-bold text-sm text-slate-700">
                <span className="p-1 bg-blue-50 text-blue-600 rounded">CMS</span> WordPress
              </div>
              <div className="flex items-center gap-1 font-sans font-bold text-sm text-slate-700">
                <span className="p-1 bg-slate-50 text-slate-800 rounded">Code</span> PHP and JavaScript
              </div>
              <div className="flex items-center gap-1 font-sans font-bold text-sm text-slate-700">
                <span className="p-1 bg-violet-50 text-violet-600 rounded">Web</span> HTML and CSS
              </div>
              <div className="flex items-center gap-1 font-sans font-bold text-sm text-slate-700">
                <span className="p-1 bg-indigo-50 text-indigo-600 rounded">SEO</span> Content optimisation
              </div>
              <div className="flex items-center gap-1 font-sans font-bold text-sm text-slate-700">
                <span className="p-1 bg-emerald-50 text-emerald-600 rounded">Ops</span> Hosting and DNS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section id="problem-section" className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <div className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-gradient-to-br from-slate-100 via-slate-50 to-red-50 min-h-[320px] md:min-h-[400px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent_45%)]"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-slate-200 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-[11px] font-mono text-red-600 font-bold uppercase tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Common Digital Pitfalls
              </p>
              <p className="text-xs text-slate-700 mt-1">Slow load speeds and clunky layouts drive over 60% of prospects straight to the competitors.</p>
            </div>
          </div>

          {/* Content Right */}
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 font-mono">The Challenge</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
              Is your current website actively turning away potential clients?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In today's highly competitive market, an outdated website acts as a silent funnel leak. If visitors face slow loading speeds, generic visual builders, or messy mobile navigation, they exit. 
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                  <span className="text-xs font-bold">!</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Severe Credibility Damage</h4>
                  <p className="text-[11px] text-slate-500">Clear website content helps businesses explain their services and reach customers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                  <span className="text-xs font-bold">!</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Poor Search Ranking Visibility</h4>
                  <p className="text-[11px] text-slate-500">Google actively deprioritizes slow websites built on clunky WordPress page builders.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                  <span className="text-xs font-bold">!</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Friction-Filled Inquiry Booking</h4>
                  <p className="text-[11px] text-slate-500">Bloated form fields and confusing customer paths exhaust prospects, leading to lost leads.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section id="solution-section" className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <div className="space-y-6 text-left order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono">The Remedy</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
              Bespoke digital architecture built to convert interest into revenue
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Trievol focuses on clear, maintainable websites built around the client's requirements, with responsive layouts and practical performance review.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Hand-Coded Performance</h4>
                  <p className="text-[11px] text-slate-500">Practical performance and content improvements support a clearer online presence.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Intent-Driven SEO Copywriting</h4>
                  <p className="text-[11px] text-slate-500">We target precise psychological terms searched by serious executive decision-makers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Frictionless Client Pathways</h4>
                  <p className="text-[11px] text-slate-500">Clear enquiry fields designed to make contacting Trievol simple and straightforward.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Right */}
          <div className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-lg order-1 lg:order-2 bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50 min-h-[320px] md:min-h-[400px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_45%)]"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-slate-200 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-[11px] font-mono text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> The Trievol Standard
              </p>
              <p className="text-xs text-slate-700 mt-1">Clear layouts and useful content aligned with the client's requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES PREVIEW WITH RELEVANT THUMBNAIL IMAGES */}
      <section id="services-preview-section" className="bg-slate-50 border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Trievol Services</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
              Meticulous capabilities customized for growth
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              We design, build, optimise, and support websites and digital services around each client's requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Website Design & Development",
                description: "We plan and deliver websites using the platform and tools that fit the agreed requirements, including WordPress and custom web development.",
                icon: <Monitor className="w-5 h-5 text-blue-600" />,
                image: "",
                benefits: ["Bespoke layout architecture", "High-contrast typography", "Optimized mobile viewports"]
              },
              {
                title: "Website Redesign",
                description: "Improve an existing website's structure, presentation, mobile layout and content clarity.",
                icon: <Layers className="w-5 h-5 text-indigo-600" />,
                image: "",
                benefits: ["Modern responsive restructuring", "Preserved organic search rankings", "Polished credibility indicators"]
              },
              {
                title: "SEO Optimization",
                description: "Review website structure, search terms and content opportunities to improve online visibility.",
                icon: <LineChart className="w-5 h-5 text-emerald-600" />,
                image: "",
                benefits: ["High-intent search mapping", "Core Web Vital optimization", "Metadata & schema injection"]
              },
              {
                title: "Website Maintenance & Hosting",
                description: "Website maintenance, hosting support, content updates, performance review and developer assistance.",
                icon: <Shield className="w-5 h-5 text-amber-600" />,
                image: "",
                benefits: ["Content and website updates", "Hosting and domain assistance", "Performance review"]
              },
              {
                title: "WordPress Development",
                description: "WordPress development, content structure and practical support for business websites.",
                icon: <Code className="w-5 h-5 text-indigo-600" />,
                image: "",
                benefits: ["WordPress page development", "Content structure", "Practical maintenance support"]
              },
              {
                title: "Custom Digital Systems",
                description: "Custom website or marketing-operations systems shaped around an agreed business workflow.",
                icon: <Code className="w-5 h-5 text-violet-600" />,
                image: "",
                benefits: ["Workflow and requirements mapping", "Marketing or administration interfaces", "Agreed system development"]
              }
            ].map((svc, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col"
              >
                {/* Service Card Thumbnail */}
                <div className="h-44 w-full overflow-hidden relative bg-gradient-to-br from-slate-100 via-blue-50 to-white">
                  {svc.image && (
                    <img
                      src={svc.image}
                      alt=""
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-3 left-3 w-10 h-10 bg-white/95 rounded-xl border border-slate-200/50 flex items-center justify-center shadow-sm">
                    {svc.icon}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{svc.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">{svc.description}</p>
                    
                    <div className="space-y-2 border-t border-slate-50 pt-4">
                      {svc.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link 
                      to="/contact" 
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                    >
                      Inquire Capability <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
            >
              View Full Services Spec Sheet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. EXPANDED PORTFOLIO SECTION (Large Featured Case Studies) */}
      <section id="portfolio-preview-section" className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Selected Client Projects</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            Practical digital work delivered for real clients
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            A concise selection of website projects and ongoing support work.
          </p>
        </div>

        {/* Large featured case study cards layout */}
        <div className="space-y-12">
          {PORTFOLIO_LIST.map((project, idx) => (
            <div 
              key={idx} 
              className="border border-slate-200 bg-white rounded-3xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Image Side (large, left-right alternating for rhythm) */}
              <div className={`lg:col-span-5 h-72 lg:h-auto min-h-[280px] relative overflow-hidden ${
                idx % 2 === 1 ? "lg:order-last" : ""
              }`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.client}
                    className="absolute inset-0 w-full h-full object-contain object-center bg-slate-950"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950" aria-label={`${project.client} project`} />
                )}
                <div className="absolute inset-0 bg-slate-900/10" />
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wide rounded-full">
                      {project.industry}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">{project.client}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h3>

                  {/* Challenge vs Solution layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1.5 border-l-2 border-slate-100 pl-3">
                      <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">The Challenge:</span>
                      <p className="text-xs text-slate-600 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="space-y-1.5 border-l-2 border-blue-100 pl-3">
                      <span className="text-[10px] uppercase font-mono font-bold text-blue-600 block">Our Solution:</span>
                      <p className="text-xs text-slate-600 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Outcome & Tech Footer */}
                <div className="border-t border-slate-100 pt-6 space-y-4">
                  <div className="bg-emerald-50/50 border border-emerald-100/50 p-4 rounded-xl">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-emerald-700 block mb-1">Project record:</span>
                    <span className="text-xs font-bold text-slate-800">{project.metrics}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-mono font-medium text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-blue-600 cursor-pointer"
                    >
                      Inquire on Similar Blueprint <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
          >
            Explore Selected Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. WHY CHOOSE TRIEVOL */}
      <section id="why-choose-us" className="bg-slate-900 text-white border-y border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">The Trievol Edge</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-100 tracking-tight">
              Why clients work with Trievol
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              We focus on clear communication, practical delivery and continued support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Experience & Quality */}
            <div className="border border-slate-800 bg-slate-950 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Senior Craftsmanship Only</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                You communicate directly with the person responsible for understanding requirements and delivering the agreed work.
              </p>
            </div>

            {/* Performance-Oriented Quality */}
            <div className="border border-slate-800 bg-slate-950 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Performance-Oriented Code</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our lightweight React and Tailwind frontends mean maximum loading speed, absolute responsive compliance across mobile, and complete security against plugin failures.
              </p>
            </div>

            {/* Direct Communication */}
            <div className="border border-slate-800 bg-slate-950 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Direct Partner Communication</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Say goodbye to clunky layers of sales staff and account managers. Speak directly to developers. We provide crystal-clear updates, scheduled metrics, and straight advice.
              </p>
            </div>

            {/* Long-term Partnership Care */}
            <div className="border border-slate-800 bg-slate-950 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Ongoing Website Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We support your expansion on an ongoing basis. We active-guard your platform, deliver continuous SEO adjustments, and compile fresh updates so you never lag behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROCESS SECTION WITH TEAM PLANNING IMAGE */}
      <section id="process-timeline-section" className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title and planning stock image */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Our Signature Roadmap</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
              Our signature 4-stage delivery process
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              We structure each project around agreed requirements, deliverables, review points and handover.
            </p>

            <div className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-white"></div>
              <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-white bg-slate-950/60 px-2 py-0.5 rounded">
                // Phase 1 Discovery Session
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Process stages */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-4 border-b border-slate-200 pb-2">
              {PROCESS_STAGES.map((stage, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProcessStage(idx)}
                  className={`py-3 text-center cursor-pointer border-b-2 transition-all relative ${
                    activeProcessStage === idx
                      ? "border-blue-600 text-blue-600 font-bold"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <span className="block text-[10px] font-bold font-mono text-slate-400">Stage {stage.num}</span>
                  <span className="text-[11px] hidden sm:inline-block mt-1">{stage.title.split(" & ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Stage Content Card */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-xs font-bold border border-blue-100">
                  {PROCESS_STAGES[activeProcessStage].num}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {PROCESS_STAGES[activeProcessStage].title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {PROCESS_STAGES[activeProcessStage].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 block mb-1.5">Deliverables:</span>
                  <ul className="space-y-1">
                    <li className="text-[11px] text-slate-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Detailed strategy mapping</span>
                    </li>
                    <li className="text-[11px] text-slate-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Full responsive layout validation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 block mb-1.5">Outcome Target:</span>
                  <div className="bg-blue-50 text-blue-800 p-2.5 rounded-lg text-[10px] font-semibold leading-normal">
                    Establishing crystal-clear client-team alignment prior to any code generation.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {TESTIMONIALS_LIST.length > 0 && (
      <section id="testimonials-section" className="bg-slate-50 border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Client Endorsements</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
              What our partners say about us
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Real testimonials demonstrating the tangible outcomes that clean custom code introduces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_LIST.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="inline-block px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold rounded-lg uppercase tracking-wide">
                    {testimonial.metricsResult || "Verified Client"}
                  </span>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 font-bold text-slate-800 flex items-center justify-center text-xs">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-[10px] text-slate-400">{testimonial.role}, <span className="font-semibold">{testimonial.company}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* 10. FAQ SECTION */}
      <section id="faq-section" className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Answering Key Questions</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Have questions about our services or ongoing support? Read below.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isExpanded = expandedFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="border border-slate-200/80 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-300"
              >
                <button
                  onClick={() => setExpandedFaqIndex(isExpanded ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-blue-600 transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="shrink-0 p-1 bg-slate-50 border border-slate-200 rounded">
                    {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. FINAL CTA WITH PROFESSIONAL CONSULTATION IMAGE */}
      <section id="final-cta-section" className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Consultation stock image side */}
            <div className="lg:col-span-5 h-64 lg:h-auto min-h-[250px] relative bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_55%)]"></div>
            </div>

            {/* Form/Action side */}
            <div className="lg:col-span-7 p-8 sm:p-12 text-left space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 font-mono">
                Get Started on Establishing Digital Authority
              </span>

              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight leading-tight">
                Ready to convert visitor interest into qualified client leads?
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Book a complimentary 20-minute strategy call. We will review your legacy website speed, outline intent-driven keywords, and design custom visual cues tailored directly to your commercial strategy.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 max-w-sm">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Book Discovery Session <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Email Developer
                </a>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-[10px] font-mono text-slate-500">
                <span>Direct client communication</span>
                <span>•</span>
                <span>No clunky templates</span>
                <span>•</span>
                <span>Responsive website support</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

import React, { useState, useRef } from "react";
import { 
  Mail, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Check, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Building, 
  User, 
  Globe, 
  Calendar, 
  DollarSign,
  Phone,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Send,
  Sparkle
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  CONTACT_FAQS, 
  TRUST_POINTS, 
  SERVICE_OPTIONS, 
  BUSINESS_GOALS, 
  BUDGET_OPTIONS, 
  TIMELINE_OPTIONS, 
  SOCIAL_CHANNELS 
} from "../data/contactData";
import AbstractArtwork from "../components/AbstractArtwork";

export default function Contact() {
  // Step tracker
  const [step, setStep] = useState<number>(1);
  
  // Step 1 Form States: About You
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  // Step 2 Form States: Project Details
  const [selectedService, setSelectedService] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");

  // Step 3 Form States: Budget & Timeline
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");

  // Status & Validation
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stepError, setStepError] = useState("");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const formSectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Step-by-Step validation helpers
  const handleNextStep = () => {
    setStepError("");
    if (step === 1) {
      if (!name.trim()) {
        setStepError("Full Name is required.");
        return;
      }
      if (!email.trim() || !email.includes("@")) {
        setStepError("A valid Email address is required.");
        return;
      }
      if (!company.trim()) {
        setStepError("Company Name is required.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!selectedService) {
        setStepError("Please select a primary service.");
        return;
      }
      if (!projectDescription.trim() || projectDescription.length < 15) {
        setStepError("Please describe your project details (minimum 15 characters).");
        return;
      }
      if (!selectedGoal) {
        setStepError("Please select your primary business goal.");
        return;
      }
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setStepError("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setStepError("");

    if (!selectedBudget) {
      setStepError("Please select an indicative budget range.");
      return;
    }
    if (!selectedTimeline) {
      setStepError("Please select an estimated project timeline.");
      return;
    }

    // Success Submission - State saved and summary shown
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setLocation("");
    setSelectedService("");
    setCurrentUrl("");
    setProjectDescription("");
    setSelectedGoal("");
    setSelectedBudget("");
    setSelectedTimeline("");
    setIsSubmitted(false);
    setStep(1);
    setStepError("");
  };

  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "facebook":
        return <Facebook className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      default:
        return <Twitter className="w-4 h-4" />;
    }
  };

  return (
    <div id="contact-page-root" className="space-y-24 py-8 animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center space-y-6 px-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] uppercase tracking-widest font-mono font-bold rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Project Enquiry
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-[1.12]">
          Let's discuss your next digital project.
        </h1>
        
        <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Tell me about your website, SEO, hosting, support or custom digital-system requirements. I will review the details and reply with practical next steps.
        </p>

        <div className="pt-3">
          <button
            onClick={scrollToForm}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer group"
          >
            Start an Enquiry
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <AbstractArtwork kind="business" label="Direct project enquiry" className="mx-auto mt-12 max-w-5xl" />
      </section>

      {/* 2. TWO-COLUMN: CONTACT INFO & PROJECT ENQUIRY FORM */}
      <section ref={formSectionRef} className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-6">
        
        {/* Left Column: Direct channels (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-6 text-left">
          <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-6 shadow-sm">
            <div>
              <span className="text-[9px] font-mono text-blue-600 font-bold uppercase tracking-widest block">// Contact details</span>
              <h3 className="text-lg font-bold text-slate-900">Contact Trievol</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Contact Trievol directly to discuss your website, SEO, hosting or ongoing support requirements.
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-100">
              {/* Email channel */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 shrink-0">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block font-bold">Email</span>
                  <a href="mailto:trievolteam@gmail.com" className="text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors">
                    trievolteam@gmail.com
                  </a>
                </div>
              </div>

              {/* Physical/Mailing Context */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 shrink-0">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block font-bold">Working model</span>
                  <span className="text-xs font-semibold text-slate-800 leading-relaxed block">
                    Remote-first service
                  </span>
                </div>
              </div>

              {/* Response policy */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block font-bold">Response policy</span>
                  <span className="text-xs font-semibold text-slate-800 block">
                    Email response after review
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Social channel</span>
              <div className="flex items-center gap-2.5">
                {SOCIAL_CHANNELS.map((ch) => (
                  <a
                    key={ch.name}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8.5 h-8.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer"
                    title={ch.name}
                  >
                    {renderSocialIcon(ch.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Operational Policy Note */}
          <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Direct collaboration</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Your enquiry is reviewed by the person responsible for understanding the requirements and discussing the next steps.
            </p>
          </div>
        </div>

        {/* Right Column: Multi-step Enquiry Form (lg:col-span-8) */}
        <div id="project-enquiry-form-section" className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm text-left relative overflow-hidden">
          
          {isSubmitted ? (
            /* Submission Summary Panel */
            <div className="space-y-6 py-4 animate-fade-in">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">Project Strategy Briefing Received Successfully</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Thank you, <strong>{name}</strong>. We will review your project details and follow up by email at <strong>{email}</strong>.
                </p>
              </div>

              {/* Submitted Details Review Card */}
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-250/50 pb-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">// Strategic Summary</span>
                  <span className="text-[9px] font-mono bg-blue-50 border border-blue-100 text-blue-600 px-1.5 py-0.5 rounded uppercase font-bold">PROPOSAL STAGING</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium block">Lead Contact:</span>
                    <span className="text-slate-800 font-bold block">{name} ({company})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Service Requested:</span>
                    <span className="text-slate-800 font-bold block">{selectedService}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Key Business Goal:</span>
                    <span className="text-slate-800 font-bold block">{selectedGoal}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block">Estimated Budget / Timeline:</span>
                    <span className="text-slate-800 font-bold block">{selectedBudget} ({selectedTimeline})</span>
                  </div>
                </div>

                {phone && (
                  <div className="text-xs border-t border-slate-200/40 pt-2.5">
                    <span className="text-slate-400 font-medium block">Consultant Hotline Call:</span>
                    <span className="text-slate-800 font-bold">{phone} {location && `(Location: ${location})`}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center flex-wrap gap-4">
                <Link
                  to="/"
                  className="px-5 py-3 bg-slate-900 hover:bg-slate-850 text-white font-bold text-xs rounded-xl transition-all text-center cursor-pointer"
                >
                  Return to Home
                </Link>
                <button
                  onClick={handleResetForm}
                  className="px-5 py-3 bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Submit Another Project Form
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form Content */
            <form onSubmit={handleSubmitForm} className="space-y-6">
              
              {/* Header Tab Titles */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-5 gap-4">
                <div>
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider block">PROJECT ENQUIRY</span>
                  <h3 className="text-lg font-bold text-slate-900">Tell me about your project</h3>
                </div>
                
                {/* Visual Steps Indicator */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center">
                      <div className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center border transition-all ${
                        step === num 
                          ? "bg-blue-600 text-white border-blue-500 shadow-sm" 
                          : step > num 
                            ? "bg-emerald-50 text-emerald-600 border-emerald-200" 
                            : "bg-slate-50 text-slate-400 border-slate-200"
                      }`}>
                        {step > num ? <Check className="w-3.5 h-3.5" /> : num}
                      </div>
                      {num < 3 && <div className={`w-4 h-[2px] transition-all ${step > num ? "bg-emerald-350" : "bg-slate-100"}`} />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Title & Subtitle banner */}
              <div className="bg-slate-50 border border-slate-100/60 px-4.5 py-3 rounded-2xl flex items-center gap-3">
                <span className="w-7 h-7 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-slate-500 shadow-sm">
                  0{step}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {step === 1 && "About Your Business"}
                    {step === 2 && "Core Digital Requirements"}
                    {step === 3 && "Indicative Budget & Timeline"}
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    {step === 1 && "Share your name, organisation and contact details."}
                    {step === 2 && "Describe your project goal and preferred services."}
                    {step === 3 && "Share your approximate budget and preferred timing."}
                  </p>
                </div>
              </div>

              {/* Validation error line */}
              {stepError && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl flex items-center gap-2.5 animate-pulse">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span className="font-semibold">{stepError}</span>
                </div>
              )}

              {/* STEP 1 FIELDS */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 text-slate-400">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. David Vance"
                          className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-1.5">
                        Company Name *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 text-slate-400">
                          <Building className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Vance Corporate Holdings"
                          className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email address */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 text-slate-400">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. david@vanceholdings.com"
                          className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Number (Optional) */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 text-slate-400">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +1 (555) 019-2834"
                          className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-1.5">
                      Business Location / City (Optional)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3 text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Austin, Texas"
                        className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 FIELDS */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  {/* Select Service Interest */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-2">
                      What service are you primarily interested in? *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {SERVICE_OPTIONS.map((opt) => {
                        const isSelected = selectedService === opt;
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setSelectedService(opt)}
                            className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all focus:outline-none ${
                              isSelected 
                                ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Optional current URL */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-1.5">
                      Current Website URL (Optional)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3 text-slate-400">
                        <Globe className="w-4 h-4" />
                      </span>
                      <input
                        type="url"
                        value={currentUrl}
                        onChange={(e) => setCurrentUrl(e.target.value)}
                        placeholder="e.g. https://yourbusiness.com"
                        className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project requirements */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-1.5">
                      Tell us about your project requirements *
                    </label>
                    <textarea
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Briefly describe what you wish to build, your core audiences, or any current performance barriers you are experiencing."
                      rows={4}
                      className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Select main business goal */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-2">
                      Main Business Goal *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUSINESS_GOALS.map((goal) => {
                        const isSelected = selectedGoal === goal;
                        return (
                          <button
                            type="button"
                            key={goal}
                            onClick={() => setSelectedGoal(goal)}
                            className={`px-3 py-2 rounded-xl border text-xs font-semibold transition-all focus:outline-none ${
                              isSelected 
                                ? "bg-slate-900 text-white border-slate-900 shadow-sm" 
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {goal}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 FIELDS */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  
                  {/* Budget Options */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-2">
                      Indicative Project Budget Range *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {BUDGET_OPTIONS.map((b) => {
                        const isSelected = selectedBudget === b;
                        return (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setSelectedBudget(b)}
                            className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between focus:outline-none ${
                              isSelected 
                                ? "bg-blue-600 text-white border-blue-600 shadow-sm font-bold" 
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <span className="text-xs">{b}</span>
                            <DollarSign className={`w-4 h-4 ${isSelected ? "text-white" : "text-slate-400"}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline Options */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-2">
                      Target Project Timeline *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {TIMELINE_OPTIONS.map((t) => {
                        const isSelected = selectedTimeline === t;
                        return (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setSelectedTimeline(t)}
                            className={`p-3.5 rounded-xl border text-center text-xs font-semibold transition-all focus:outline-none ${
                              isSelected 
                                ? "bg-slate-900 text-white border-slate-900 shadow-sm" 
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Back / Next Form Control Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-4 py-2.5 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">
                    // Verification Staged
                  </span>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-blue-500/10"
                  >
                    Continue Requirements
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-emerald-500/10"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send Project Request
                  </button>
                )}
              </div>

            </form>
          )}

        </div>
      </section>

      {/* 4. WHY WORK WITH TRIEVOL SECTION */}
      <section id="why-work-with-us" className="bg-slate-50 border-y border-slate-100 py-16 text-left">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">What you can expect</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
              What you can expect from Trievol
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              I focus on practical work, clear scope and support that matches the agreed requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_POINTS.map((pt, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-mono text-xs font-bold">
                    T0{idx + 1}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{pt.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
                <div className="text-[9px] font-mono text-emerald-600 font-bold uppercase pt-3 border-t border-slate-50">
                  ✓ Service standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section id="contact-faqs" className="max-w-4xl mx-auto px-6 space-y-12 text-left">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Common questions</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 tracking-tight">
            Before you enquire
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Read answers about response times, project fit and ongoing support.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {CONTACT_FAQS.map((faq, idx) => {
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
      <section className="max-w-5xl mx-auto px-6 text-center animate-fade-in">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-bold rounded-full uppercase tracking-widest">
              <Sparkle className="w-3.5 h-3.5" />
              Next steps
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Have a project idea? Let's discuss how Trievol can help.
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              I can review your requirements and discuss an appropriate service, timeline and budget range before work begins.
            </p>
            <div className="pt-4">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                Send Project Request <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

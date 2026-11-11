export interface PricingPackage {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  idealFor: string;
  focus: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface SupportPackage {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  whyItMatters: string;
}

export interface ComparisonRow {
  feature: string;
  launch: string | boolean;
  growth: string | boolean;
  custom: string | boolean;
}

export interface PricingFaq {
  question: string;
  answer: string;
}

export const WEBSITE_PACKAGES: PricingPackage[] = [
  {
    id: "launch",
    title: "Website Launch",
    subtitle: "Build a clear and credible digital presence.",
    price: "Discuss scope",
    idealFor: "Businesses that need a clear website with agreed pages and deliverables.",
    focus: "Building a credible online presence around the client's requirements.",
    features: [
      "Professional business website (up to 5 modular pages)",
      "Adaptive responsive design (mobile, tablet, desktop)",
      "High-contrast editorial typography and spacing layouts",
      "Lead collection form & social system triggers",
      "Essential on-page SEO schema configuration",
      "Core Web Vitals load-speed optimization"
    ],
    ctaText: "Request Discovery Call"
  },
  {
    id: "growth",
    title: "Business Growth Website",
    subtitle: "A broader website scope for established or growing businesses.",
    price: "Discuss scope",
    idealFor: "Businesses requiring broader content, functionality or platform support.",
    focus: "Improving the website journey and supporting practical business goals.",
    features: [
      "Bespoke custom UI design tailored completely to your brand",
      "Advanced functionality (blogs, interactive guides, service hubs)",
      "High-authority SEO structural foundation (keyword schema)",
      "Performance optimization (advanced asset compilation)",
      "Conversion-focused layouts & A/B optimized content architecture",
      "Analytics reporting dashboards & goal event triggers",
      "Direct developer channels throughout visual creation steps"
    ],
    ctaText: "Launch Growth Audit",
    isPopular: true
  },
  {
    id: "custom",
    title: "Custom Digital Solution",
    subtitle: "Tailored digital work based on a defined requirement.",
    price: "Custom Quote",
    idealFor: "Projects requiring specific functionality or technical support.",
    focus: "Addressing agreed website or digital-service requirements.",
    features: [
      "Bespoke application development (React, server-side APIs)",
      "Custom databases, robust user accounts, or secure portals",
      "Third-party system synchronizations (CRMs, Google Workspace, billing)",
      "High-security configurations & client data access protection",
      "Direct communication about requirements and delivery",
      "Support options discussed according to the project"
    ],
    ctaText: "Schedule Blueprint Session"
  }
];

export const SUPPORT_PACKAGE: SupportPackage = {
  title: "Website Care & Growth",
  subtitle: "Keep website updates, hosting assistance and performance review organised after launch.",
  price: "Discuss scope",
  features: [
    "Core system updates & dependency monitoring",
    "Continuous real-time security monitoring & vulnerability sweeps",
    "Technical support time for visual & functional adjustments",
    "Priority content changes, text edits, and graphic updates",
    "Ongoing speed, core metrics, and loading checks"
  ],
  whyItMatters: "Websites need occasional content, hosting and performance attention. An agreed support arrangement helps keep updates organised after launch."
};

export const COMPARISON_FEATURES: ComparisonRow[] = [
  {
    feature: "Design",
    launch: "Premium Modular Templates",
    growth: "100% Bespoke Custom UI",
    custom: "Advanced Tailored Experience"
  },
  {
    feature: "Core Pages Included",
    launch: "Up to 5 Pages",
    growth: "Up to 12 Pages",
    custom: "Unlimited Scopes"
  },
  {
    feature: "Development",
    launch: "React & Tailwind CSS",
    growth: "React, TypeScript & Custom Assets",
    custom: "Full-Stack Web Systems / APIs"
  },
  {
    feature: "SEO Schema Setup",
    launch: "Essential On-Page",
    growth: "Full Strategy & Local Optimizations",
    custom: "Custom High-Volume Content Schema"
  },
  {
    feature: "Analytics & Event Tracking",
    launch: "Basic Google Analytics",
    growth: "Advanced Conversion & Goal Tracking",
    custom: "Custom Funnels & CRM Data Logs"
  },
  {
    feature: "Database & Backend Support",
    launch: "No",
    growth: "Basic Forms Integrations",
    custom: "Cloud Databases & Secure Users Portals"
  },
  {
    feature: "Custom Functionality",
    launch: "Standard Forms",
    growth: "Interactive calculators, blogs, resource hubs",
    custom: "Full custom-built business logic"
  },
  {
    feature: "Direct Support Channels",
    launch: "Email Support",
    growth: "Priority Slack Channel",
    custom: "Dedicated Tech Director & Instant Dev Comms"
  },
  {
    feature: "Maintenance Retainer Eligible",
    launch: "Yes",
    growth: "Yes",
    custom: "Discussed according to scope"
  }
];

export const PRICING_FAQ: PricingFaq[] = [
  {
    question: "Why don't you show fixed, exact prices for every project?",
    answer: "Every business has unique workflows, compliance constraints, and transaction pipelines. A fixed-price commodity model forces developers to cut corners or use clunky pre-made themes. By presenting 'Starting from' scopes, we preserve the budget for customized, performance-driven strategy while matching your exact brand needs."
  },
  {
    question: "How long does a website project usually take from kickoff to launch?",
    answer: "The timeline depends on the agreed pages, content, platform and functionality. I will discuss the expected stages and review points before work begins."
  },
  {
    question: "Can you redesign or migrate our existing website?",
    answer: "Yes, we frequently reconstruct existing websites. We carefully map your old structure to prevent any SEO search ranking drops, redesign the visual assets to boost user confidence, and rewrite the underlying code in clean React to drastically reduce load times."
  },
  {
    question: "Do you provide ongoing technical support and platform hosting?",
    answer: "Absolutely. Through our Website Care & Growth plans, we manage servers, execute security patches, monitor performance degradation, and make text/image adjustments so your internal staff can focus purely on running the business."
  },
  {
    question: "Can you work with and integrate our existing business tools?",
    answer: "Yes. Whether you use specific CRMs (HubSpot, Salesforce), automation platforms (Zapier), scheduling systems (Calendly), or security portals, we build clean integration pipelines so your website feeds prospects directly into your operational systems."
  }
];

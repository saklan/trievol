export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface CommunicationPhilosophyItem {
  title: string;
  description: string;
}

export interface QaCheckItem {
  title: string;
  description: string;
}

export interface BenefitCardItem {
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description: "Every successful project begins with absolute clarity on your commercial goals and target users. We spend time learning your market space so the final platform behaves exactly how your prospective buyers expect.",
    details: [
      "In-depth discussion around business priorities and core metrics",
      "Identification of user personas, customer journeys, and conversion funnels",
      "Analysis of key operational requirements and third-party integrations"
    ]
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "I document the requirements, deliverables and assumptions before development begins so the scope is clear.",
    details: [
      "Creation of an intuitive website structural map and responsive page layouts",
      "Detailed planning of website copy, imagery placement, and authority elements",
      "Selection of the correct technical framework (Vite, React, TypeScript, server-side APIs)"
    ]
  },
  {
    number: "03",
    title: "Design & Experience",
    description: "I create visual layouts around clear content, readable typography and the intended audience.",
    details: [
      "Development of lightweight interactive page layouts for client review",
      "Meticulous custom typography pairing (Inter, Space Grotesk, JetBrains Mono)",
      "Structured, transparent feedback loops directly with the lead visual designers"
    ]
  },
  {
    number: "04",
    title: "Development & Testing",
    description: "I develop using the platform and tools that fit the agreed requirements, with attention to responsive behaviour and maintainability.",
    details: [
      "Modular components structured cleanly in a Git-tracked production workspace",
      "Rigorous local verification for fluid responsiveness across phones, tablets, and desktops",
      "Optimization of asset sizes to achieve top Core Web Vitals speed scores"
    ]
  },
  {
    number: "05",
    title: "Launch & Ongoing Support",
    description: "After review, I support handover and can discuss ongoing website, hosting or content support where required.",
    details: [
      "Zero-downtime production launch and final configuration reviews",
      "Detailed onboarding walk-throughs for administrative tools and text updates",
      "Optional long-term maintenance retainers covering security updates and regular backups"
    ]
  }
];

export const COMMUNICATION_PHILOSOPHY: CommunicationPhilosophyItem[] = [
  {
    title: "Regular Structured Updates",
    description: "You receive clear progress updates and review points appropriate to the agreed project scope."
  },
  {
    title: "Absolute Transparency",
    description: "We document every design asset, layout logic, and code decision. All code resides in structured repositories, ensuring you always own your digital assets completely."
  },
  {
    title: "Direct Expert Collaboration",
    description: "No intermediate managers or sales buffers. You discuss refinements, adjustments, and strategies directly with the senior developers writing your code."
  },
  {
    title: "Collaborative Decisions",
    description: "We present technical choices in simple, business-focused terms, explaining the trade-offs of speed, complexity, and maintenance to help you decide."
  }
];

export const QA_CHECKLIST: QaCheckItem[] = [
  {
    title: "Adaptive Responsive Verification",
    description: "We verify every visual layout on actual physical devices, testing how text, spacing, and buttons adjust to different display sizes."
  },
  {
    title: "Cross-Browser Compatibility",
    description: "We run automated visual test suites across modern engines (Chrome, Safari, Firefox, Edge) to ensure uniform styling and interaction mechanics."
  },
  {
    title: "Strict Performance Checks",
    description: "We analyze code weight, minimize third-party scripts, and implement lazy-loading routines to keep initial page load speeds well under one second."
  },
  {
    title: "Modern Security Boundaries",
    description: "We use server-side proxies to hide API keys, secure contact endpoints, and implement clean security headers to prevent unauthorized inquiries."
  }
];

export const WHY_PROCESS_WORKS: BenefitCardItem[] = [
  {
    title: "Clear, Documented Expectations",
    description: "By structuring plans, layouts, and code modules beforehand, we remove the risk of scope creep and unexpected billing adjustments."
  },
  {
    title: "Seamless Team Collaboration",
    description: "Direct engineering communication ensures that your brand's operational goals are translated into clean interactive features without translation loss."
  },
  {
    title: "Reduced Technical Risk",
    description: "Our reliance on standard, hand-coded React means your website has zero dependencies on fragile page builders, security flaws, or database bloat."
  },
  {
    title: "Highly Predictable Outcomes",
    description: "Testing visual layouts at every step ensures that the final production release matches your brand's real-world stature with absolute precision."
  }
];

export interface ServiceItem {
  id: string;
  iconName: "monitor" | "code" | "chart" | "shield";
  title: string;
  description: string;
  deliverables: string[];
}

export interface PricingPlan {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "design",
    iconName: "monitor",
    title: "Custom UI/UX & Brand Design",
    description: "Bespoke high-end designs styled from scratch to communicate market authority, credibility, and brand premiumness.",
    deliverables: [
      "Custom component layouts",
      "Visual identity alignment",
      "High-conversion architecture",
      "Frictionless interactive prototyping"
    ]
  },
  {
    id: "development",
    iconName: "code",
    title: "Bespoke Web Development",
    description: "Robust, high-performance web applications engineered using native technologies, custom CMS, and high-speed delivery.",
    deliverables: [
      "Tailwind & CSS architecture",
      "State-driven user dashboards",
      "Secure interactive buyer portals",
      "Fluid lightweight micro-interactions"
    ]
  },
  {
    id: "seo",
    iconName: "chart",
    title: "Intent-Driven SEO & Copywriting",
    description: "Search engine strategy targeting high-intent buyer keywords and conversion-optimized sales text designed to convince.",
    deliverables: [
      "Buyer persona copywriting",
      "Search engine indexing strategy",
      "High-value intent keyword discovery",
      "In-depth competitor analysis"
    ]
  },
  {
    id: "sla",
    iconName: "shield",
    title: "Website Maintenance & Support",
    description: "Agreed website updates, hosting assistance, content changes and practical performance review.",
    deliverables: [
      "Website and content updates",
      "Hosting and domain support",
      "Performance review",
      "Direct communication"
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Growth Blueprint",
    price: "$4,500",
    period: "One-time setup",
    description: "For mid-sized regional businesses looking to replace static styling with a fast, bespoke high-converting brochure.",
    features: [
      "Bespoke high-contrast design (Up to 5 pages)",
      "Tailwind CSS responsive engineering",
      "Essential Intent-driven SEO optimization",
      "Direct developer email support",
      "Agreed post-launch support"
    ],
    isPopular: false
  },
  {
    title: "Enterprise Authority",
    price: "$8,500",
    period: "One-time setup",
    description: "For fast-growing B2B firms, financial groups, or high-end service companies that require complete visual dominance.",
    features: [
      "Complete bespoke custom UI system (Up to 12 pages)",
      "Fully custom responsive React dashboard structures",
      "Advanced SEO blueprint & keyword plan",
      "Copywriting guide & content strategy",
      "Agreed post-launch support",
      "Interactive customer inquiry forms"
    ],
    isPopular: true
  },
  {
    title: "Continuous Domination",
    price: "$1,200",
    period: "per month retainer",
    description: "Comprehensive recurring service for scaling firms that need continuous strategic updates and proactive system support.",
    features: [
      "Ongoing design modifications & page builds",
      "Monthly keyword tracking & SEO audits",
      "Active server-side optimization & code updates",
      "Dedicated weekly consultant feedback",
      "Support according to the agreed scope"
    ],
    isPopular: false
  }
];

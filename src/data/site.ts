export interface AgencyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  copyright: string;
}

export interface BrandValue {
  title: string;
  description: string;
}

export const AGENCY_INFO: AgencyInfo = {
  name: "Trievol",
  tagline: "Beyond Code. Business Results.",
  description: "A remote-first digital services business providing website design, development, and ongoing website support.",
  email: "trievolteam@gmail.com",
  copyright: `© ${new Date().getFullYear()} Trievol. All rights reserved.`
};

export const BRAND_VALUES: BrandValue[] = [
  {
    title: "Clear communication",
    description: "We discuss requirements, deliverables and project responsibilities before work begins."
  },
  {
    title: "Practical delivery",
    description: "We focus on useful websites, content and digital support that match the client's needs."
  },
  {
    title: "Responsible work",
    description: "We work within the agreed scope and explain limitations or changes when they arise."
  },
  {
    title: "Continued support",
    description: "Where agreed, we continue with website updates, maintenance, SEO and performance review after delivery."
  }
];

export const PROCESS_STAGES = [
  {
    num: "01",
    title: "Discovery & UX Blueprint",
    description: "Before work begins, we clarify the client's goals, audience, required pages and agreed deliverables."
  },
  {
    num: "02",
    title: "Bespoke Aesthetic Design",
    description: "Our design system features pixel-perfect typography pairings, precise margins, and balanced negative space. No generic visual templates or heavy builders."
  },
  {
    num: "03",
    title: "Clean Production Engineering",
    description: "We write lean, responsive React components styled with Tailwind CSS, ensuring lightweight bundle sizes, lightning-fast loads, and complete SEO-friendliness."
  },
  {
    num: "04",
    title: "Launch & ongoing support",
    description: "We help with launch tasks and can continue with agreed website updates, hosting assistance and performance review."
  }
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string; // Keep path ready for replacing later
  initials: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "MD Ajharul Islam",
    role: "Independent Digital Services Consultant",
    bio: "Leads Trievol's client work, website delivery, SEO, digital marketing, performance review and ongoing business-support services.",
    image: "",
    initials: "MAI",
    email: "trievolteam@gmail.com"
  }
];

export const TEAM_APPROACH = [
  {
    title: "Direct Strategic Connection",
    description: "We completely eliminate intermediate sales buffers. You speak directly with the senior designers and developers responsible for your platform's success."
  },
  {
    title: "Bespoke Clean Architecture",
    description: "No clunky templates or heavy, slow plugins. We write modular, high-performance web systems styled natively with Tailwind CSS."
  },
  {
    title: "Business-Driven Priority",
    description: "We analyze target user flows, transaction models, and authority indicators to design digital pathways that actively drive inquiries."
  }
];

export const TEAM_WHY_US = [
  "Direct communication with the person responsible for delivery",
  "Deep understanding of commercial goals and high-intent pipelines",
  "Rigorous engineering roadmap utilizing clean git revisions & staging environments",
  "Dedicated long-term support retainers guarding uptime and security"
];

export interface ContactFaq {
  question: string;
  answer: string;
}

export interface TrustPoint {
  title: string;
  description: string;
}

export const CONTACT_FAQS: ContactFaq[] = [
  {
    question: "How quickly will Trievol respond to my inquiry?",
    answer: "I review each enquiry and reply by email with next steps when I have enough information to understand the request."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. I work remotely with clients and can coordinate updates by email or another agreed communication method."
  },
  {
    question: "Can you redesign or modernise our existing website?",
    answer: "Yes. I can review the existing website, improve its structure and presentation, and discuss practical content or technical updates within the agreed scope."
  },
  {
    question: "Do you provide technical maintenance and support after launch?",
    answer: "Yes, ongoing support may include website updates, content changes, hosting assistance and performance review, depending on the agreed scope."
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: "Direct communication",
    description: "You communicate directly with the person responsible for planning and delivering the work."
  },
  {
    title: "Clear scope",
    description: "Deliverables, responsibilities and practical next steps are discussed before work begins."
  },
  {
    title: "Practical delivery",
    description: "The platform and tools are selected according to the website's requirements and existing setup."
  },
  {
    title: "Ongoing support",
    description: "Where agreed, support can include website updates, hosting assistance, content changes and performance review."
  }
];

export const SERVICE_OPTIONS = [
  "New Website",
  "Website Redesign",
  "WordPress Development",
  "SEO and Content Optimisation",
  "Website Maintenance and Hosting Support",
  "Custom Digital Systems and Marketing Operations"
];

export const BUSINESS_GOALS = [
  "Generate more enquiries",
  "Improve online credibility",
  "Improve search visibility",
  "Update website content",
  "Manage hosting or domains",
  "Improve performance",
  "Improve marketing or business operations",
  "Other"
];

export const BUDGET_OPTIONS = [
  "Under £1,000",
  "£1,000 - £3,000",
  "£3,000 - £7,500",
  "£7,500+",
  "Prefer not to say"
];

export const TIMELINE_OPTIONS = [
  "ASAP",
  "1-3 months",
  "3-6 months",
  "Planning stage"
];

export const SOCIAL_CHANNELS = [
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61579401186832", iconName: "facebook" }
];

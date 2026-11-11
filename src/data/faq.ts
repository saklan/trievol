export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Do you use pre-built templates or website builders like WordPress/Webflow?",
    answer: "No. We believe pre-built templates and bloated page builders look highly generic and suffer from slow performance and poor security. We custom-design every visual element from scratch in professional design systems and hand-code our frontends in clean, semantic React and Tailwind CSS. This ensures your digital asset is highly unique, blazingly fast, and completely secure."
  },
  {
    question: "What is your typical project delivery timeline?",
    answer: "A standard custom web presence ranges from 4 to 8 weeks depending on the complexity of the custom integrations and the scope of pages. This includes our comprehensive discovery, custom design system creation, component development, strategic SEO setup, and thorough cross-browser testing phases."
  },
  {
    question: "How does your intent-driven SEO strategy work?",
    answer: "Rather than chasing high-volume, low-intent vanity keywords, we map out the exact psychological search paths of high-ticket decision-makers. We construct a technical and content blueprint targeting high-intent commercial terms, backed by authoritative copywriting that speaks directly to your ideal client's pain points and trust requirements."
  },
  {
    question: "What can ongoing support include?",
    answer: "Ongoing support can include agreed website updates, content changes, hosting assistance, performance review and practical SEO work. The exact scope is discussed before work begins."
  },
  {
    question: "Who will I actually be working with during the engagement?",
    answer: "You work directly with senior designers and frontend developers. We have eliminated bloated middle management and outsourced support pools. This ensures direct accountability, crystal-clear communication, and pixel-level precision throughout the lifecycle of your project."
  }
];

export interface AboutValue {
  title: string;
  desc: string;
}

export interface CultureItem {
  title: string;
  desc: string;
}

export interface WhyChooseUsItem {
  title: string;
  desc: string;
}

export const MISSION_STATEMENT = "I help clients improve their websites and digital operations through clear communication, practical delivery and ongoing support.";

export const VISION_STATEMENT = "To build a dependable remote-first digital services business through useful client work and long-term professional relationships.";

export const EXTENDED_VALUES: AboutValue[] = [
  {
    title: "Client-First Execution",
    desc: "I align each layout and feature with the client's goals, audience and agreed scope."
  },
  {
    title: "Quality Craftsmanship",
    desc: "I choose practical technologies for each brief, including React, TypeScript or WordPress where they are appropriate."
  },
  {
    title: "Transparent Communication",
    desc: "You communicate directly with me, with clear milestones, practical explanations and updates throughout the project."
  },
  {
    title: "Continuous Improvement",
    desc: "I review websites and digital content against the agreed goals and identify practical opportunities for improvement."
  },
  {
    title: "Long-Term Partnership",
    desc: "After launch, I can provide agreed website updates, content support, hosting assistance and practical improvements."
  }
];

export const WHY_CLIENTS_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Direct Strategic Communication",
    desc: "You communicate directly with the person handling your project, without unnecessary layers between requirements and delivery."
  },
  {
    title: "Understanding Business Objectives",
    desc: "I clarify your audience, priorities and desired outcome before recommending a website or digital-support approach."
  },
  {
    title: "Professional Development Process",
    desc: "I use an organised delivery process, version control and staging or review steps where they are useful for the project."
  },
  {
    title: "Reliable Long-Term Support",
    desc: "Support arrangements can include agreed maintenance, content updates, hosting assistance and performance review."
  }
];

export const COMPANY_CULTURE: CultureItem[] = [
  {
    title: "How I Work",
    desc: "I work in focused stages so requirements, content and implementation can be reviewed before the project is completed."
  },
  {
    title: "How I Communicate",
    desc: "I keep requirements, decisions and agreed changes clear so the project remains understandable to the client."
  },
  {
    title: "How Projects Are Managed",
    desc: "Projects are delivered in agreed stages, with review points and access to a preview environment when the project requires one."
  }
];

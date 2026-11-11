import ahmedFarmImage from "../assets/portfolio/ahmed-farm.jpg";
import firstLaneImage from "../assets/portfolio/first-lane-education.jpg";
import yamenTailorsImage from "../assets/portfolio/yamen-tailors.jpg";

export interface CaseStudyApproach {
  strategy: string;
  design: string;
  development: string;
  optimization: string;
}

export interface CaseStudySolution {
  features: string[];
  technologies: string[];
  improvements: string[];
}

export interface DetailedCaseStudy {
  slug: string;
  client: string;
  industry: string;
  category: string;
  title: string;
  image: string;
  liveUrl?: string;
  aboutClient: string;
  challenge: string;
  approach: CaseStudyApproach;
  solution: CaseStudySolution;
  gallery: string[];
  results: string;
  scope: string[];
  ctaText: string;
  cardShortDesc: string;
}

export const DETAILED_CASE_STUDIES: DetailedCaseStudy[] = [
  {
    slug: "ahmed-farm",
    client: "Ahmed Farm",
    industry: "Agriculture",
    category: "Website development and ongoing management",
    title: "Website delivery for a multipurpose agro farm",
    cardShortDesc: "Website built for Ahmed Farm, with management continuing since June 2025.",
    image: ahmedFarmImage,
    liveUrl: "https://ahmedfarm.com/",
    aboutClient: "Ahmed Farm is a client website project delivered through Trievol.",
    challenge: "The business needed a clear online presence for its farming activities and enquiries.",
    approach: {
      strategy: "Discussed the business information and audience before planning the website structure.",
      design: "Presented the farm's services and information through a clear public-facing layout.",
      development: "Built and launched the website through Trievol.",
      optimization: "Continued website management according to the client's requirements."
    },
    solution: {
      features: ["Business website delivery", "Service and business information", "Ongoing website management"],
      technologies: ["WordPress", "HTML/CSS", "Content management"],
      improvements: ["Clearer online business presence", "Continuing management since June 2025"]
    },
    gallery: [ahmedFarmImage],
    results: "Website management has continued since June 2025.",
    scope: ["Website development", "Content presentation", "Ongoing management"],
    ctaText: "Discuss a Website Project"
  },
  {
    slug: "first-lane-education",
    client: "First Lane Education",
    industry: "Education",
    category: "Website and ongoing support",
    title: "Website delivery and ongoing digital support",
    cardShortDesc: "Website project started on 7 September 2025, completed on 10 November 2025, and continuing with ongoing management.",
    image: firstLaneImage,
    liveUrl: "https://firstlaneeducation.co.uk/",
    aboutClient: "First Lane Education is a client project supported by Trievol.",
    challenge: "The project required a business website and continued digital support.",
    approach: {
      strategy: "Gathered requirements and planned the website around the client's communication and service needs.",
      design: "Structured the website content and presentation for clear navigation and practical use.",
      development: "I delivered the website through Trievol and provided ongoing management after completion.",
      optimization: "Continued to review and update the website as required."
    },
    solution: {
      features: ["Business website delivery", "Client communication and project delivery", "Ongoing website management"],
      technologies: ["WordPress", "SEO", "Content optimisation"],
      improvements: ["Completed project delivery", "Continuing support relationship"]
    },
    gallery: [firstLaneImage],
    results: "Completed on 10 November 2025; ongoing management continues.",
    scope: ["Website delivery", "SEO and content support", "Ongoing management"],
    ctaText: "Discuss a Website Project"
  },
  {
    slug: "yamen-tailors",
    client: "Yamen Tailors & Garments",
    industry: "Tailoring and garments",
    category: "Website development",
    title: "A Bengali-language business website",
    cardShortDesc: "Website built in October 2026 for a local tailoring and garments business.",
    image: yamenTailorsImage,
    liveUrl: "https://www.yamentailors.com/",
    aboutClient: "Yamen Tailors & Garments is a public client website project.",
    challenge: "The business needed a clear online presence for local customers.",
    approach: {
      strategy: "Clarified the business information and audience before preparing the website content.",
      design: "Presented the business information in a clear, mobile-friendly format.",
      development: "I delivered the public website through Trievol and configured the required website structure.",
      optimization: "Applied practical search and social-sharing improvements where required."
    },
    solution: {
      features: ["Bengali-language business presentation", "Mobile-friendly layout", "Search and social-sharing metadata"],
      technologies: ["WordPress", "PHP", "HTML/CSS"],
      improvements: ["Clearer online business information", "Improved mobile presentation"]
    },
    gallery: [yamenTailorsImage],
    results: "Website built in October 2026; public website available at yamentailors.com.",
    scope: ["Website development", "Content presentation", "Basic SEO support"],
    ctaText: "Discuss a Website Project"
  }
];

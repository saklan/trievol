import ahmedFarmImage from "../assets/portfolio/ahmed-farm.jpg";
import firstLaneImage from "../assets/portfolio/first-lane-education.jpg";
import yamenTailorsImage from "../assets/portfolio/yamen-tailors.jpg";

export interface CaseStudy {
  client: string;
  industry: string;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: string;
  scope: string[];
  technologies: string[];
  image: string;
  liveUrl?: string;
}

export const PORTFOLIO_LIST: CaseStudy[] = [
  {
    client: "Ahmed Farm",
    industry: "Agriculture",
    category: "Website development and ongoing management",
    title: "Website delivery for a multipurpose agro farm",
    challenge: "The business needed a clear online presence for its farming activities and enquiries.",
    solution: "I built the website and continue to manage it according to the client's requirements.",
    metrics: "Website management ongoing since June 2025.",
    scope: ["Website development", "Content presentation", "Ongoing management"],
    technologies: ["WordPress", "HTML/CSS", "Content management"],
    image: ahmedFarmImage,
    liveUrl: "https://ahmedfarm.com/"
  },
  {
    client: "First Lane Education",
    industry: "Education",
    category: "Website and ongoing support",
    title: "Website delivery with continuing management",
    challenge: "The project required a business website and continued digital support.",
    solution: "I delivered the website through Trievol and continue to manage it as required.",
    metrics: "Started 7 September 2025; completed 10 November 2025; ongoing management.",
    scope: ["Website delivery", "SEO and content support", "Ongoing management"],
    technologies: ["WordPress", "SEO", "Content optimisation"],
    image: firstLaneImage,
    liveUrl: "https://firstlaneeducation.co.uk/"
  },
  {
    client: "Yamen Tailors & Garments",
    industry: "Tailoring and garments",
    category: "Website development",
    title: "A Bengali-language business website",
    challenge: "The business needed a clear online presence for local customers.",
    solution: "I delivered a public-facing business website through Trievol with mobile and search presentation in mind.",
    metrics: "Website built in October 2026; public website available at yamentailors.com.",
    scope: ["Website development", "Content presentation", "Basic SEO support"],
    technologies: ["WordPress", "PHP", "HTML/CSS"],
    image: yamenTailorsImage,
    liveUrl: "https://www.yamentailors.com/"
  }
];

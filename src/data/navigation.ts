export interface NavLink {
  label: string;
  path: string;
  description: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/", description: "Agency home and core value proposition" },
  { label: "Services", path: "/services", description: "Digital and business-support capabilities" },
  { label: "Portfolio", path: "/portfolio", description: "Selected client projects" },
  { label: "About", path: "/about", description: "Business history and leadership" },
  { label: "Contact", path: "/contact", description: "Contact Trievol" }
];

export const AGENCY_INFO = {
  name: "Trievol",
  tagline: "Beyond Code. Business Results.",
  description: "A remote-first digital services business providing website design, development, and ongoing website support.",
  email: "trievolteam@gmail.com",
  copyright: `© ${new Date().getFullYear()} Trievol. All rights reserved.`
};

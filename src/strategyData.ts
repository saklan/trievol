export interface StrategySection {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  description: string;
  pillars?: { title: string; content: string }[];
  details: string[];
  metrics?: { label: string; value: string; desc: string }[];
  actionItems?: string[];
}

export const strategyData: StrategySection[] = [
  {
    id: "brand-strategy",
    title: "1. Brand Strategy",
    subtitle: "Core identity, USP, and market positioning for elite brand trust.",
    icon: "Shield",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    description: "Move Trievol away from technical jargon and self-service AI branding. Establish Trievol as a premium, business-outcome-driven digital partner that blends engineering precision with commercial strategy.",
    pillars: [
      {
        title: "Mission Statement",
        content: "To bridge the gap between technical complexity and business growth by designing, developing, and optimizing high-performance web ecosystems that drive real-world revenue."
      },
      {
        title: "Vision",
        content: "To become the premier mid-market digital agency recognized for transforming passive business websites into reliable, predictable lead-generation assets."
      },
      {
        title: "Core Values",
        content: "商业化设计 (Commercial-First Design), Technical Integrity, Process Transparency, and Continuous Improvement (Kaizen)."
      },
      {
        title: "The Ultimate USP",
        content: "We don't build digital brochures. We engineer high-converting web pipelines. Trievol combines strategic business consulting, psychology-driven user experience, and modern technical architecture to drive measurable client growth."
      }
    ],
    details: [
      "Why Clients Choose Us: Businesses don't want a website; they want the customer inquiries, brand authority, and automated operations that a professional website provides. Trievol delivers on these high-level outcomes, not just lines of code.",
      "The 'Anti-AI Website Generator' Stance: Clients associate raw AI generators with low quality, security risks, duplicate templates, and lack of brand soul. Trievol positions internal tools strictly as speed-of-execution accelerators, passing efficiency gains and premium polish directly to clients while providing custom, hand-crafted strategic oversight.",
      "Agency-Grade Delivery: Providing transparent communication, structured milestones, dedicated project managers, and guaranteed service level agreements (SLAs) that cheap freelancers or low-cost agencies can't match."
    ],
    metrics: [
      { label: "Target Client Retention", value: "92%", desc: "Focusing on recurring maintenance and continuous optimization services." },
      { label: "Average Project Value Shift", value: "+150%", desc: "Moving from $1,500 low-tier websites to $4,500+ outcome-based pricing models." }
    ],
    actionItems: [
      "Remove any public-facing references to 'AI generator' or template-cloning platforms.",
      "Rewrite all service headlines to focus on 'revenue growth' and 'industry credibility' instead of tech stacks.",
      "Train the sales and consulting team on value-based discovery call frameworks."
    ]
  },
  {
    id: "customer-profile",
    title: "2. Ideal Customer Profile",
    subtitle: "Focusing on high-value clients with budget and long-term retention potential.",
    icon: "Users",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    description: "Stop trying to win cheap projects from budget-strapped solopreneurs. Focus marketing and positioning directly on established mid-sized businesses, professional services, and fast-growing service providers who value trust over the lowest price.",
    pillars: [
      {
        title: "Ideal Target Segments",
        content: "Professional Service Providers (Law firms, accounting practices, specialized consultancies), Premium Local Service Businesses (High-end remodelers, commercial HVAC, specialized clinics), and B2B Technology/SaaS companies needing high-credibility websites."
      },
      {
        title: "The Champion Persona",
        content: "Company Founders, Managing Partners, and Marketing Directors of $1M - $10M ARR businesses who are frustrated by a website that makes them look smaller or less competent than they actually are."
      },
      {
        title: "Common Pain Points",
        content: "1) Low lead volume despite driving organic/paid traffic. 2) Current website is embarrassing or outdated. 3) Tired of unreliable freelancers who disappear post-launch. 4) Inability to update their own site content without breaking it."
      }
    ],
    details: [
      "Buying Motivations: Risk mitigation is the #1 driver for professional clients. They will happily pay 3x more for Trievol if they feel absolutely certain the project will be delivered on time, look spectacular, and won't crash or expose client data.",
      "Messaging Strategy: Target their desire for status, market leadership, and operational peace of mind. Address their fears of technical failure by showcasing a rigid, foolproof delivery roadmap.",
      "Qualification Criteria: The ideal prospect has a dedicated marketing budget, understands that a website is a profit center (not an expense), and has a lifetime customer value high enough to justify investing in professional customer acquisition."
    ],
    metrics: [
      { label: "Minimum Project Budget", value: "$3,500", desc: "Allows full strategic deployment, custom responsive design, and tailored SEO setup." },
      { label: "Lifetime Client Value Target", value: "$12,000", desc: "Includes initial build, ongoing maintenance, and quarterly search optimization campaigns." }
    ],
    actionItems: [
      "Create 3 distinct landing page copy variations targeted at: Professional Services, High-Ticket Trades, and B2B SaaS.",
      "Implement a lead pre-qualification questionnaire on the book call step to filter out low-budget requests."
    ]
  },
  {
    id: "website-architecture",
    title: "3. Website Architecture",
    subtitle: "A professional, multi-page layout map engineered for trust and SEO.",
    icon: "Layers",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    description: "A single landing page signals a temporary project. A true professional agency needs a comprehensive, multi-page structure that creates deep authority, targets specialized keywords for local SEO, and guides prospects down a structured conversion funnel.",
    pillars: [
      {
        title: "1. Homepage",
        content: "Purpose: Establish immediate credibility, filter traffic to specific services, and address direct user pain points."
      },
      {
        title: "2. Services & Individual Pages",
        content: "Purpose: Individual optimized landing pages targeting specific high-value keywords (e.g., 'B2B Website Redesign Solutions', 'Custom WordPress Agency Services')."
      },
      {
        title: "3. Interactive Portfolio & Case Studies",
        content: "Purpose: Prove results with data-backed transformations, wireframes, performance metrics, and client quotes."
      },
      {
        title: "4. Our Process & Strategic Methodology",
        content: "Purpose: Reduce friction and establish expert authority by revealing our signature 4-stage delivery process."
      },
      {
        title: "5. Pricing & Investment Packages",
        content: "Purpose: Set expectations, filter out low-value inquiries, and build transparency by showcasing comprehensive tier pricing."
      },
      {
        title: "6. About Us & Trust Hub",
        content: "Purpose: Humanize the brand, share Trievol's vision of design integrity, and introduce leadership."
      },
      {
        title: "7. Lead Gen & Contact Hub",
        content: "Purpose: Multi-step interactive strategy consultation booking platform (direct calendar & discovery questions)."
      }
    ],
    details: [
      "Individual Service Pages: Crucial for SEO ranking. General digital marketing terms are too broad. We must target high-intent search terms such as 'Premium Dental Clinic Web Development' or 'Enterprise Web Redesign' using structured parent-child URL architectures.",
      "The Portfolio Structure: Every case study must follow the 'Situation -> Challenge -> Solution -> Business Result' storytelling framework, proving we understand how design directly impacts the bottom line."
    ],
    metrics: [
      { label: "Target Page Count", value: "12 - 15", desc: "Core authoritative pages targeting dedicated SEO and local terms." },
      { label: "Sitemap Depth", value: "2 Tiers", desc: "Clean parent-child nested routes for superior search crawlability." }
    ],
    actionItems: [
      "Map out wireframes for each internal service page with custom feature sections.",
      "Write dedicated keyword outlines for local and service-specific SEO-focused subpages."
    ]
  },
  {
    id: "homepage-strategy",
    title: "4. Homepage Conversion Strategy",
    subtitle: "An intentional 11-step customer journey to turn clicks into booked calls.",
    icon: "Zap",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    description: "Every pixel on the homepage must serve a psychological purpose. We guide the visitor from initial intrigue, through friction-reducing social proof, into an active realization of their problems, and finally, a clear, low-risk path to action.",
    pillars: [
      {
        title: "Step 1: The Premium Hero Header",
        content: "A compelling value-driven hook that names the outcome we deliver, a descriptive sub-headline, and two contrasting primary/secondary CTAs."
      },
      {
        title: "Step 2: Social Proof / Trust Bar",
        content: "A row of high-contrast client logos, certifications, and high-rating stars (e.g. Google Reviews) instantly establishing authority."
      },
      {
        title: "Step 3: The Problem Statement (Pain Alignment)",
        content: "Boldly state the current issues businesses face (outdated design, disappearing freelancers, missed opportunities) so they feel understood."
      },
      {
        title: "Step 4: The Core Solution (The Turnkey Agency)",
        content: "Introduce Trievol as the reliable antidote—explaining how we replace chaotic development cycles with technical and strategic peace of mind."
      },
      {
        title: "Step 5: High-Intent Services Grid",
        content: "Direct access cards pointing to individual service pages, with clear business benefits attached to each card."
      },
      {
        title: "Step 6: Featured Case Studies Carousel",
        content: "Big, beautiful visual representations of past success, focusing on actual ROI metrics (e.g. +40% increase in conversions)."
      },
      {
        title: "Step 7: The Why Choose Us Value Anchor",
        content: "Highlighting our specific differentiators: hand-crafted code, strategic marketing expertise, and robust ongoing SLAs."
      },
      {
        title: "Step 8: Interactive Process Walkthrough",
        content: "A simple, logical 3 or 4 step progression showing how frictionless it is to work with us from initial call to launch and growth."
      },
      {
        title: "Step 9: Social Proof / Video or Rich Testimonials",
        content: "Detailed testimonials with client photos, job titles, and specific praise on our professionalism, response time, and communication."
      },
      {
        title: "Step 10: Interactive FAQ Accordion",
        content: "Address the most common friction points (ownership of the site, timeline guarantees, update access, SEO integration)."
      },
      {
        title: "Step 11: Final Call to Action (The Direct Pivot)",
        content: "A bold, beautiful final banner inviting them to schedule an audit or strategy session, leaving zero doubt on what to do next."
      }
    ],
    details: [
      "Psychology of the Hero: Visitors decide to stay or leave in 2.8 seconds. We do not use vague marketing fluff like 'We design the future.' We state clearly what we do and who we serve.",
      "The Double-CTA Approach: Offer a low-friction action (e.g. 'View Our Work') alongside a high-intent action ('Book Strategy Call') to convert different stages of buyer awareness."
    ],
    actionItems: [
      "Assemble and polish high-contrast mockup images of responsive layouts to display in the featured carousel.",
      "Write clear, plain-language answers to common client objections for the homepage FAQ."
    ]
  },
  {
    id: "service-positioning",
    title: "5. Service Positioning",
    subtitle: "Framing our technical capabilities as invaluable business assets.",
    icon: "Target",
    color: "bg-red-50 text-red-600 border-red-100",
    description: "Stop selling 'code, plugins, or SEO.' Sell the business outcome: credibility, visibility, automated lead pipelines, and stress-free operation.",
    pillars: [
      {
        title: "1. Website Redesign Solutions",
        content: "Value Pitch: Your website is the digital storefront of your business. If it looks amateur, prospects assume your services are too. We modernize your brand to match your true level of professional excellence."
      },
      {
        title: "2. Custom Web Application Development",
        content: "Value Pitch: Scalable, lightning-fast solutions built on React, Node.js, and modern APIs. Perfect for businesses looking to automate workflows, build custom SaaS apps, or scale operational portals."
      },
      {
        title: "3. Strategic SEO & Intentional Traffic",
        content: "Value Pitch: ranking on Google is useless if the traffic doesn't buy. We map buyer intent, optimize your on-page copy, and construct authoritative pipelines to secure high-ticket leads."
      },
      {
        title: "4. Proactive Website Maintenance & SLAs",
        content: "Value Pitch: Eliminate the anxiety of broken pages, security vulnerabilities, or hosting crashes. We provide 24/7 monitoring, weekly security audits, and dedicated support hours."
      }
    ],
    details: [
      "The Pricing & Package Strategy: Move away from hourly estimates. Frame projects in outcome-based tiers (e.g., Growth Tier, Professional Tier, Enterprise Tier) with clear deliverables so the client feels they are investing in a concrete, pre-defined asset.",
      "WordPress vs. Custom Stack: Position WordPress as the ultimate user-friendly content machine for marketing teams, and custom modern stacks (React/Vite) for elite-level performance, custom portals, and absolute zero-maintenance security."
    ],
    actionItems: [
      "Structure detailed pricing tables for three standard packages with fixed deliverables.",
      "Define SLA support plans (response time limits, emergency support line) to sell as a recurring monthly retainer."
    ]
  },
  {
    id: "trust-building",
    title: "6. Trust Building Strategy",
    subtitle: "Foolproof credibility mechanics that eliminate client buying hesitation.",
    icon: "Lock",
    color: "bg-green-50 text-green-600 border-green-100",
    description: "Trust is the ultimate currency of B2B relationships. High-value clients are highly risk-averse. Every page of Trievol's website must act as a trust-multiplier by eliminating potential points of doubt.",
    pillars: [
      {
        title: "Interactive Project Milestones",
        content: "Give clients absolute transparency. Show them our live tracking portal where they can watch design drafts, code iterations, and SEO audits advance in real-time."
      },
      {
        title: "Guarantees & Skin in the Game",
        content: "Address the dread of late delivery. Offer a 'On-Time Delivery Guarantee'—if we miss the milestone, we refund a percentage of the contract price per day. This instantly shows our agency-level confidence."
      },
      {
        title: "Detailed Case Studies over 'Portfolio Grids'",
        content: "Instead of just showing static screenshots of a website home page, we show 'Before' and 'After' comparisons, performance speed upgrades, structural changes, and actual business growth stories."
      },
      {
        title: "Humanizing and Leadership Profile",
        content: "Introduce the founding partners and key strategists. Highlight professional achievements, client-first philosophy, and technical contributions to the industry."
      }
    ],
    details: [
      "Process Transparency: The biggest fear clients have is paying a deposit and then hearing nothing for weeks. By publishing our detailed signature process and offering a dedicated Client Strategy Portal, we show we are an established enterprise, not a side-gig freelancer.",
      "Clean Code and Page Speed Badges: Live-test our own website speed (aiming for 99+ on Google Lighthouse) and use that live performance metrics badge directly on our site to prove our technical mastery."
    ],
    actionItems: [
      "Select three outstanding client websites and draft in-depth ROI-focused case studies.",
      "Draft the legal language and operating steps for our Signature On-Time Delivery Guarantee."
    ]
  },
  {
    id: "competitor-analysis",
    title: "7. Competitor Analysis & Positioning",
    subtitle: "Carving out a highly profitable territory far above cheap competition.",
    icon: "TrendingUp",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    description: "Trievol must refuse to play the race-to-the-bottom price game. By clearly differentiating from freelancers, builders, and expensive legacy networks, we position our services as the highest ROI choice.",
    pillars: [
      {
        title: "vs. Independent Freelancers",
        content: "Freelancers are cheap but highly volatile. They lack strategic business expertise, often disappear when issues arise, and struggle to manage complex full-stack needs. Trievol represents institutional reliability, deep technical breadth, and long-term retainer support."
      },
      {
        title: "vs. Low-Cost offshore Providers",
        content: "Offshore providers are famous for extreme communication barriers, generic templates, and zero commercial strategic direction. Trievol is a localized business-growth advisory partner that translates your company values into elite digital designs."
      },
      {
        title: "vs. DIY Builders (Wix, Squarespace)",
        content: "Builders make website creation easy, but they look generic, load incredibly slow, and completely fail at custom workflows and SEO strategy. Trievol engineers high-converting customized sales engines built for elite brand authority and scalability."
      },
      {
        title: "vs. Massive Legacy Agencies",
        content: "Large traditional agencies charge $20k-$50k overhead, pass your project to junior interns, and take 6 months to ship. Trievol delivers senior executive strategy, rapid development cycles, and high-performance custom code at a fraction of the cost."
      }
    ],
    details: [
      "The Sweet Spot Strategy: Position Trievol exactly in the 'High-Execution Mid-Market' segment—providing enterprise-grade quality and strategic thinking, but with the speed, responsiveness, and fair investment scaling of an agile partner.",
      "The Value Anchor: Never say 'we are cheaper.' Always say 'we are highly aligned with your commercial growth, ensuring every dollar invested directly moves your bottom line.'"
    ],
    actionItems: [
      "Create an interactive 'How We Compare' interactive matrix on the homepage and about page.",
      "Draft sales objection guides for the advisory team to confidently navigate comparisons during sales calls."
    ]
  },
  {
    id: "website-messaging",
    title: "8. Website Messaging & Copywriting",
    subtitle: "High-impact, conversion-focused taglines and headlines.",
    icon: "MessageSquare",
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    description: "Elite digital agency copywriting is clear, benefit-led, and highly professional. We ditch generic corporate fluff and speak directly to the client's desire for growth, stability, and market authority.",
    pillars: [
      {
        title: "Hero Headline Options",
        content: "Option A: 'We Don't Just Build Websites. We Build Business Pipelines.' | Option B: 'Beyond Code. We Engineer Digital Authority.' | Option C: 'Beautiful Design Backed by Technical Precision and Commercial Strategy.'"
      },
      {
        title: "Sub-Headline Templates",
        content: "Template: 'Trievol partners with established professional services and growing brands to design, build, and maintain high-converting web ecosystems. No freelancers. No template shortcuts. Just absolute strategic alignment.'"
      },
      {
        title: "Primary Call to Action (CTA) Formulas",
        content: "Formula A: 'Book a Strategy Consultation' | Formula B: 'Request a Free Website Conversion Audit' | Formula C: 'Explore Our Case Studies'"
      },
      {
        title: "Value Proposition Anchor",
        content: "Anchor: 'For companies that have outgrown basic web builders and need a serious, reliable digital partner to scale their online presence, secure leads, and optimize daily operations.'"
      }
    ],
    details: [
      "The Tone of Voice: Sophisticated, confident, authoritative, yet approachable and deeply collaborative. We speak like successful business consultants who happen to be world-class designers and engineers.",
      "Avoiding Tech-Babble: Never write 'We specialize in TypeScript, React, Vite, and Node API architecture.' Write 'We leverage high-performance web systems that load in less than 1.2 seconds, ensuring you never lose a prospect due to a slow website.'"
    ],
    actionItems: [
      "Create a centralized brand voice guide to ensure all external communications (website, emails, social) are unified.",
      "Write clean, engaging introductory bios for team profiles on the About page."
    ]
  },
  {
    id: "design-direction",
    title: "9. Design Direction & Visual Identity",
    subtitle: "A premium, modern visual guidelines package representing absolute authority.",
    icon: "Compass",
    color: "bg-pink-50 text-pink-600 border-pink-100",
    description: "The visual style of the website must radiate status, security, and technical expertise. We want to align with premium modern brands like Stripe, Vercel, and Linear, which use ultra-sleek, clean typography and responsive micro-animations.",
    pillars: [
      {
        title: "Aesthetic Core Mood",
        content: "Premium, clean, crisp, high-contrast, professional, and trustworthy."
      },
      {
        title: "Color Palette Scheme",
        content: "Primary Accent: Deep Corporate Blue (blue-600) for security and action. Secondary Accent: Elegant Indigo/Slate for authority and modern feel. Background: Crisp Off-Whites (slate-50/50) with ample breathing space. Slate-900 for bold headings."
      },
      {
        title: "Typography Pairings",
        content: "Display Headings: Space Grotesk / Inter (Bold, crisp kerning, tracking-tight). Body Text: Inter (Medium, high legibility, generous line spacing). Data Indicators: JetBrains Mono (For technical precision, numbers, metrics)."
      },
      {
        title: "Visual Assets & Grid Style",
        content: "Rounded Card Architecture (3xl corners), thin slate-100 borders, subtle background grid alignments, crisp vector icons, and real mockup showcases. No generic stock photos; use custom generated UI illustrations or real team portraits."
      }
    ],
    details: [
      "Micro-Animations: Rely on layout transitions and smooth button hover scaling (e.g. 102% zoom, transition-all duration-300). Avoid chaotic spinning elements. The movement must feel calculated and executive.",
      "Layout and Negative Space: Embrace vertical grids. Content should breathe. Generous top and bottom paddings (py-24 or py-32) on sections to emphasize quality. Cluttered interfaces communicate desperation and budget constraints."
    ],
    actionItems: [
      "Configure standard Tailwind configuration files with customized palette definitions and modern font families.",
      "Create a set of high-resolution graphic standards for client wireframe displays."
    ]
  },
  {
    id: "lead-generation",
    title: "10. Lead Generation & Growth Engine",
    subtitle: "Turning the new website into a reliable, automated 24/7 client funnel.",
    icon: "MousePointerClick",
    color: "bg-teal-50 text-teal-600 border-teal-100",
    description: "A gorgeous website is a failure if it doesn't convert. We establish multiple lead-acquisition hooks designed for different levels of buyer intent—including an irresistible high-value lead magnet and interactive consulting schedules.",
    pillars: [
      {
        title: "Irresistible Lead Magnet",
        content: "The 'Free Digital Footprint & Competitor SEO Audit'—instead of just asking for a call, offer them a personalized 10-minute video review of their website, highlighting exactly where they are losing customers. This establishes immense goodwill and trust before they even talk to a salesperson."
      },
      {
        title: "The Frictionless Discovery Funnel",
        content: "A 3-step qualification form that asks: 1) What is your current website URL? 2) What is your primary business goal? 3) What is your estimated project budget? This screens out low-budget leads while gathering deep context for our strategy call."
      },
      {
        title: "Strategic Exit-Intent Callouts",
        content: "When a user moves their cursor to leave the page, trigger a subtle, elegant slider offering a free checklist: '10 Crucial Elements of a High-Converting Business Website in 2026.'"
      },
      {
        title: "Continuous Organic Search SEO Campaigns",
        content: "Targeting high-intent informational queries like 'How to redesign a law firm website' or 'Best CMS for HVAC companies' in our blog/resources hub, pulling organic traffic directly into our lead magnets."
      }
    ],
    details: [
      "Automated Booking & CRM Sync: Connect the multi-step form directly to a booking calendar and automatically feed lead information into our agency CRM (like HubSpot). Send pre-call preparation materials automatically via email to increase show rates.",
      "Retargeting Pixel Strategy: Install analytics tracking pixels on our pages to run high-value, educational LinkedIn and Google search retargeting ads, keeping Trievol top-of-mind for warm prospects."
    ],
    actionItems: [
      "Draft the template and structure for our Free Website Conversion Audit video recording script.",
      "Integrate our scheduling tool with the agency lead intake form for seamless calendar bookings."
    ]
  }
];

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface DetailedService {
  id: string;
  routePath: string;
  title: string;
  heroHeadline: string;
  heroDescription: string;
  image: string;
  problem: string;
  solution: string;
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  faq: ServiceFaq[];
  shortDesc: string;
  clientBenefit: string;
  ctaText: string;
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: "web-design-development",
    routePath: "web-design-development",
    title: "Website Design & Development",
    shortDesc: "Business websites planned and developed around the client's requirements, platform and audience.",
    clientBenefit: "Establishes a clear, professional online presence around the client's requirements.",
    ctaText: "Schedule Web Strategy Session",
    heroHeadline: "High-Performance Custom Websites Designed for Business Scale",
    heroDescription: "A custom-engineered website designed to represent your exact business stature. Lightweight, fast, and completely search-optimized from the first line of code.",
    image: "",
    problem: "Slow templates and cookie-cutter page builders create a generic brand image and fail to hold visitor attention, leading to missed client inquiries and wasted traffic.",
    solution: "We hand-code lightweight React platforms from scratch. Every pixel and line of text is structured to highlight your credibility and guide visitors smoothly toward booking consultations.",
    features: [
      "Custom UI/UX component layouts built completely from scratch",
      "Responsive layout and clear content structure",
      "Practical performance and search-readiness review",
      "Frictionless consultation booking funnel integration",
      "Custom schema markup and semantic HTML structure"
    ],
    benefits: [
      "Establish Immediate Professional Brand Authority",
      "Maintain Pristine Performance on Mobile, Tablet, and Desktop",
      "Build a Continuous Asset Independent of Fragile Plugins"
    ],
    process: [
      { step: "1", title: "Discovery & Strategy", desc: "Aligning on your business goals, target clients, and core message." },
      { step: "2", title: "Visual Prototyping", desc: "Designing responsive layout concepts and typography structures." },
      { step: "3", title: "Clean Engineering", desc: "Developing the site using clean, modern React and Tailwind CSS." },
      { step: "4", title: "Launch & SEO Audit", desc: "Rigorous viewport checks, custom schema setup, and production deployment." }
    ],
    faq: [
      { q: "Which platform can you work with?", a: "The platform is selected according to the project requirements. This can include WordPress or a modern custom web stack." },
      { q: "Is the website mobile-friendly?", a: "Absolutely. Every block of code is optimized to scale beautifully across mobile devices, tablets, and ultra-wide screens." },
      { q: "How long does a custom development project take?", a: "A typical high-end business website takes between 4 to 8 weeks depending on the complexity of layouts and integrations." }
    ]
  },
  {
    id: "website-redesign",
    routePath: "website-redesign",
    title: "Website Redesign & Modernization",
    shortDesc: "Improve an existing website's structure, presentation, mobile layout and content clarity.",
    clientBenefit: "Improves structure, presentation and usability on an existing website.",
    ctaText: "Book Web Redesign Audit",
    heroHeadline: "Transform Outdated Websites Into Fast, High-Trust Corporate Assets",
    heroDescription: "Your business has scaled, but does your digital presence reflect it? We upgrade outdated setups with polished layouts, improved user pathways, and modern coding systems.",
    image: "",
    problem: "Outdated styling, broken mobile layouts, and slow load times degrade visitor trust. Prospective buyers assume a lagging digital presence equals a lagging operational standard.",
    solution: "We execute a complete visual and technical modernization. We retain your valuable search engine rankings while introducing high-contrast typography, fluid layouts, and clear consultation CTA tunnels.",
    features: [
      "SEO link preservation and detailed redirect mapping",
      "High-contrast color scheme and typography modernization",
      "Mobile-first responsive navigation restructuring",
      "Friction-free intake form and funnel modernization",
      "Conversion rate optimization (CRO) visual audit"
    ],
    benefits: [
      "Match Your Real-World Brand Stature Perfectly",
      "Reduce Visitor Bounce Rates Immediately upon Deployment",
      "Maintain and Build Upon Your Historic SEO Value Securely"
    ],
    process: [
      { step: "1", title: "Legacy Evaluation", desc: "Auditing existing content, high-performing links, and conversion bottlenecks." },
      { step: "2", title: "UX & Style Alignment", desc: "Drafting high-end typography and color pairings to elevate brand feel." },
      { step: "3", title: "Modern Framework Build", desc: "Rebuilding on clean modern code while safely preserving legacy SEO URLs." },
      { step: "4", title: "Migration & Launch", desc: "Mapping proper redirects, deploying to secure servers, and verifying speed metrics." }
    ],
    faq: [
      { q: "Can you help protect existing search visibility during a redesign?", a: "We review the existing structure and plan practical redirects and metadata updates where required." },
      { q: "Can we keep our current logo and branding guidelines?", a: "Yes. We adapt to your established color codes, logos, and typography while elevating layout hierarchy and spacing for a premium feel." },
      { q: "How do we know if we need a redesign?", a: "If your site is slow, difficult to navigate on mobile, or hasn't been updated in 3+ years, a modernization will immediately boost visitor trust and conversions." }
    ]
  },
  {
    id: "wordpress-development",
    routePath: "wordpress-development",
    title: "WordPress Development",
    shortDesc: "WordPress development, content structure and practical support for business websites.",
    clientBenefit: "Provides a manageable WordPress website with practical content and maintenance support.",
    ctaText: "Inquire Custom WordPress Build",
    heroHeadline: "Robust, Secure WordPress Platforms Built Without Bloated Plugins",
    heroDescription: "For teams who require the editorial flexibility of WordPress but refuse to compromise on security, load speed, or responsive design.",
    image: "",
    problem: "WordPress is popular but often ends up bogged down with dozens of third-party plugins that conflict, slow down loading, and leave your primary brand asset open to hacking.",
    solution: "We build tailored Gutenberg blocks and clean, light custom themes. Your team gets easy editorial control without the performance compromises and security vulnerabilities of generic builder plugins.",
    features: [
      "Hand-coded custom templates independent of pre-made frameworks",
      "Custom block components tailored for easy content publishing",
      "Core speed optimization and active database cleaning",
      "Advanced firewall and login safety protocols",
      "Direct API connection options for secure CRM syncing"
    ],
    benefits: [
      "Simple, Stress-Free Content Editing for Your Marketing Team",
      "Highly Secure and Resilient Against Security Vulnerabilities",
      "Sub-Second Mobile Load Times with Clean Gutenberg Code"
    ],
    process: [
      { step: "1", title: "Structure Planning", desc: "Defining clear custom post types and the exact editing blocks your team needs." },
      { step: "2", title: "Custom Code Execution", desc: "Writing clean, standard PHP/Gutenberg code to eliminate bloated visual plugins." },
      { step: "3", title: "Security Tuning", desc: "Implementing robust firewall boundaries and auto-backup schedules." },
      { step: "4", title: "Client Instruction", desc: "A brief recorded walkthrough teaching your staff how to publish pages seamlessly." }
    ],
    faq: [
      { q: "Can you work with an existing WordPress website?", a: "Yes. We can work with an existing WordPress installation, subject to access, scope and the condition of the site." },
      { q: "Is WordPress secure?", a: "Standard WordPress with cheap plugins is highly vulnerable. Our custom WordPress setups use hardened server firewalls, secure PHP practices, and zero unstable plugins to ensure total peace of mind." },
      { q: "Will our marketing team be able to update content easily?", a: "Yes. We build clear custom fields and visual blocks so you can swap out text, update images, and add blog posts in seconds without breaking layouts." }
    ]
  },
  {
    id: "ecommerce",
    routePath: "ecommerce",
    title: "E-commerce Websites",
    shortDesc: "High-speed custom storefronts and frictionless checkout flows. Optimized for lightning checkout speeds, Stripe payments, and clean inventory connections.",
    clientBenefit: "Supports clear product and service presentation where an online catalogue is required.",
    ctaText: "Consult E-commerce Strategy",
    heroHeadline: "Frictionless Checkout Journeys Engineered to Boost Digital Sales",
    heroDescription: "Bespoke online retail platforms designed to turn casual browsers into lifetime customers. Fast, secure, and optimized for high-volume transactions.",
    image: "",
    problem: "Clunky shopping carts, slow product pages, and complex multi-step checkout sequences tire mobile shoppers, driving up cart abandonment rates and bleeding revenue.",
    solution: "We build streamlined checkout systems with instant page loads, elegant product sorting filters, and secure modern payment integrations like Stripe and Apple Pay.",
    features: [
      "Ultra-fast product listings and filter components",
      "Secure single-page checkout flow with local session caching",
      "Polished Stripe and premium API payment integrations",
      "Strategic upselling and post-purchase customer paths",
      "Lightweight inventory, tax, and automated receipt pathways"
    ],
    benefits: [
      "Significantly Reduce Abandoned Cart Leakage and Friction",
      "Perfect Mobile Shopping Flow for High-Conversion Social Traffic",
      "Fast Inventory Synchronization and Simple Administration Panels"
    ],
    process: [
      { step: "1", title: "Catalog Strategy", desc: "Analyzing your product inventory, customer segments, and checkout flow paths." },
      { step: "2", title: "Frictionless UX Design", desc: "Structuring lightning-fast cart access and quick-buy buttons." },
      { step: "3", title: "Safe Storefront Build", desc: "Engineering the digital storefront with premium SSL payment proxy routes." },
      { step: "4", title: "Payment & Order Audit", desc: "Thorough transaction testing, automated emails, and inventory sync check." }
    ],
    faq: [
      { q: "Which e-commerce platforms do you build on?", a: "We build custom, high-speed Shopify setups (using headless frameworks or clean liquid themes), or custom React storefronts connected to secure serverless inventory systems." },
      { q: "How do you protect customer transaction data?", a: "We utilize highly secure payment Gateways (like Stripe) that handle tokenized payments directly. Sensitive customer credit card data is never stored on your server." },
      { q: "Can we integrate this with our external inventory or shipping software?", a: "Yes. We construct secure API connectors to automatically sync products, orders, and tracking details with major ERP/shipping providers." }
    ]
  },
  {
    id: "seo",
    routePath: "seo",
    title: "SEO Optimization",
    shortDesc: "Practical SEO work covering website structure, search terms, content and visibility improvements.",
    clientBenefit: "Improves website structure and content so search engines and visitors can understand it more clearly.",
    ctaText: "Request Technical SEO Audit",
    heroHeadline: "Dominate Search Results for High-Intent Commercial Queries",
    heroDescription: "Improve the structure and content of your website so customers and search engines can understand your services.",
    image: "",
    problem: "Most SEO agencies focus on generic 'traffic metrics' rather than revenue. Driving thousands of unqualified visitors yields zero sales while costing massive marketing budgets.",
    solution: "We review relevant search terms, content structure and technical issues, then recommend practical improvements.",
    features: [
      "Technical crawl budget audit and XML schema injection",
      "High-intent buyer keyword discovery and competitor indexing",
      "Conversion-optimized metadata, headings, and alt tags",
      "Core Web Vital page-speed fine-tuning and responsive checks",
      "Custom Google Search Console tracking and monthly reporting"
    ],
    benefits: [
      "Attract Pre-Qualified Inquiries with Higher Purchase Intent",
      "Build Everlasting Digital Equity on Google Search Results",
      "Outrank Outdated Competitor Portals with Clean Technical Code"
    ],
    process: [
      { step: "1", title: "Search intent review", desc: "Identifying relevant search terms and content opportunities for the intended audience." },
      { step: "2", title: "Technical Optimization", desc: "Cleaning code structures, adding JSON-LD schemas, and boosting page speeds." },
      { step: "3", title: "Targeted Copywriting", desc: "Optimizing landing page content to naturally target key search topics." },
      { step: "4", title: "Reporting Setup", desc: "Configuring real-time Search Console triggers and keyword tracker lines." }
    ],
    faq: [
      { q: "How long does it take to see results from SEO?", a: "SEO is a compounding asset. Technical optimizations can yield ranking changes in 2 to 4 weeks, while major competitive search keywords take 3 to 6 months to mature." },
      { q: "Do you guarantee search rankings?", a: "No. Search results depend on many factors. We provide practical SEO and content work without promising a specific ranking." },
      { q: "What is the difference between technical SEO and standard content SEO?", a: "Technical SEO ensures Google's search crawlers can easily read, load, and index your code. Standard SEO focuses on keyword density and text quality. We execute both for complete dominance." }
    ]
  },
  {
    id: "maintenance",
    routePath: "maintenance",
    title: "Website Maintenance & Support",
    shortDesc: "Ongoing website maintenance, content updates, hosting support and performance review.",
    clientBenefit: "Keeps agreed website updates, hosting assistance and performance review organised.",
    ctaText: "Select Support Plan",
    heroHeadline: "Ongoing Website Maintenance and Support",
    heroDescription: "Keep your website content, hosting and performance under regular review after launch.",
    image: "",
    problem: "Websites are target assets for server crashes, outdated dependencies, and unexpected database errors. Leaving a site unattended results in slow performance or critical downtime.",
    solution: "We provide agreed website updates, hosting assistance, content changes and performance review according to the support scope.",
    features: [
      "Agreed website and hosting review",
      "Weekly dependency patching and security vulnerability sweeps",
      "Encrypted cloud backups (stored off-site with easy recovery)",
      "Performance fine-tuning and monthly Core Web Vital audits",
      "Direct 1-on-1 strategic developer consultation allocations"
    ],
    benefits: [
      "Eliminate the Worry of Unexpected Server Crashes and Downtime",
      "Continuous Speed Audits Keep Load Times Sub-Second on Mobile",
      "Immediate Senior Developer Access Whenever You Need an Update"
    ],
    process: [
      { step: "1", title: "Asset Integration", desc: "Placing secure monitoring scripts and establishing robust cloud backup pathways." },
      { step: "2", title: "Base Security Audit", desc: "Performing an initial sweep for security vulnerabilities and stale libraries." },
      { step: "3", title: "Routine Support Loop", desc: "Executing weekly patches, speed tuning, and code adjustments." },
      { step: "4", title: "Strategic Iteration", desc: "Discussing performance metrics monthly to keep layouts optimized for business targets." }
    ],
    faq: [
      { q: "What happens if my website has a problem?", a: "Contact us with the details and we will review the issue and explain the available next steps." },
      { q: "Are custom content edits included in maintenance?", a: "Yes. Our monthly plans allocate dedicated developer hours that you can use for text changes, uploading images, adding blog posts, or building new visual blocks." },
      { q: "Can you maintain a website that you didn't build?", a: "Yes, but we first conduct a thorough technical onboarding audit to inspect the existing code quality, server setup, and security posture." }
    ]
  },
  {
    id: "custom-solutions",
    routePath: "custom-solutions",
    title: "Custom Digital Solutions",
    shortDesc: "Custom website or marketing-operations systems shaped around an agreed business workflow.",
    clientBenefit: "Can address a defined digital requirement where the standard service options are not suitable.",
    ctaText: "Propose Custom Project",
    heroHeadline: "Custom Digital Systems for Defined Business Workflows",
    heroDescription: "Where a standard website is not enough, I can discuss a custom system for marketing, administration, reporting or another defined operational requirement.",
    image: "",
    problem: "Standard tools do not always match the way a business manages marketing, enquiries, records or internal processes.",
    solution: "I map the required workflow and discuss an appropriate custom web interface or system within the agreed technical scope.",
    features: [
      "Workflow and requirements mapping",
      "Marketing or administration interface planning",
      "Custom forms, reporting views or content workflows",
      "Database and API requirements review where applicable",
      "Agreed access and data-handling considerations"
    ],
    benefits: [
      "Organise a defined business workflow",
      "Reduce unnecessary manual steps where practical",
      "Create a system shaped around the agreed requirements"
    ],
    process: [
      { step: "1", title: "Requirement Mapping", desc: "Understanding your operational flows, databases, and specific portal targets." },
      { step: "2", title: "UX Wireframing", desc: "Prototyping data paths, user permissions, and entry forms." },
      { step: "3", title: "System development", desc: "Building the agreed interface, forms, reports or integrations." },
      { step: "4", title: "Review and handover", desc: "Testing the agreed workflow and explaining the delivered system." }
    ],
    faq: [
      { q: "Can this connect to an existing system?", a: "That depends on the available access, documentation and agreed technical scope. I can review the requirement before confirming feasibility." },
      { q: "Can you help with marketing or operations workflows?", a: "Yes. We can discuss defined workflows such as content management, enquiry handling, reporting or administration support." },
      { q: "What is the timeline for a custom system?", a: "The timeline depends on the requirements, integrations and review points. It will be discussed before work begins." }
    ]
  }
].filter((service) => service.id !== "ecommerce");

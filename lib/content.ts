export const nav = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Hafez Ramlan",
  role: "Marketing Manager",
  status: "Actively seeking Product Marketing roles",
  based: "Milwaukee, WI",
  contact: "hafezoramlan@gmail.com",
  tagline:
    "Campaigns are my day job. Building the tools behind them is where I have the most fun.",
};

export const metrics = [
  { value: "45%", label: "Increase in sales pipeline from campaigns I ran" },
  { value: "4+ yrs", label: "Years in marketing, GTM, and analytics" },
  { value: "3", label: "Working tools I've built to prove my ideas" },
];

export const approach = {
  eyebrow: "Why I build things",
  heading: "I'd rather show you than tell you",
  body:
    "Most marketers show you a slide deck. I like to build something you can actually click through instead. Project 1 turns a business idea into a tool a buyer can play with. Project 2 shows I can build in a new, technical area most marketers stay away from. Project 3 turns one of my resume stats into a working model you can test yourself. Different topics, same idea: if something is hard to explain, build it instead of describing it.",
};

export type Project = {
  number: string;
  status: "Live" | "Coming soon";
  title: string;
  oneLiner: string;
  problem: string;
  build: string;
  outcome: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  disclaimer?: string;
};

export const projects: Project[] = [
  {
    number: "Project 01",
    status: "Live",
    title: "Atomix Pod Studio",
    oneLiner: "A tool that lets buyers configure their own warehouse setup and see the results instantly.",
    problem:
      "My employer, Atomix, runs a fulfillment model where each brand gets its own dedicated team, instead of sharing one warehouse line with everyone else. That's a hard thing to explain in a slide deck. Buyers need to feel the difference, not just read about it.",
    build:
      "An interactive tool where you set your own packaging, extras, turnaround time, and quality checks, and watch the setup and a live spec sheet update instantly, including estimated speed, cost, and accuracy.",
    outcome:
      "Turns an internal idea into something a customer can try for themselves. Shows I can think about positioning, design, and how a business actually runs, all in one project.",
    tags: ["Positioning", "Interactive design", "Business modeling"],
    link: "https://atomix-pod-studio.netlify.app/",
    linkLabel: "Try the tool",
    disclaimer:
      "This is an independent project I built to explore the idea. It's not an official Atomix product, and it doesn't use any real company data.",
  },
  {
    number: "Project 02",
    status: "Live",
    title: "AI Visibility Audit",
    oneLiner: "A tool that checks how visible your brand is inside AI chatbots like ChatGPT.",
    problem:
      "People are increasingly finding brands through AI chatbots like ChatGPT and Perplexity, not just Google. Most marketers have no way to check how visible their brand actually is inside those tools.",
    build:
      "A web app I built from scratch that asks ChatGPT and Perplexity real questions, checks whether and how a brand gets mentioned, scans the brand's website for the technical signals AI tools look for, and turns all of it into a simple score.",
    outcome:
      "Shows I can build real, working software, not just talk about a marketing trend. This is a genuinely new skill most marketers don't have yet.",
    tags: ["Built from scratch", "AI search", "Website analysis"],
    link: "https://ai-visibility-audit-hafez.netlify.app/",
    linkLabel: "Try the tool",
  },
  {
    number: "Project 03",
    status: "Live",
    title: "Pipeline Model",
    oneLiner: "A tool that shows how marketing spend turns into new business, using my own real results as the basis.",
    problem:
      "Elsewhere on this site I mention a 45% increase in sales pipeline from campaigns I ran. That's a strong number, but a number by itself asks people to just take my word for it.",
    build:
      "An interactive model where you can set your own marketing budget and channel mix, and see the estimated results, built using the same kind of analysis I use day to day in Google Analytics and Looker Studio.",
    outcome:
      "Turns a resume bullet point into something you can test yourself, rather than a claim you have to trust.",
    tags: ["Marketing analytics", "Budget modeling", "Interactive design"],
    link: "https://pipelline-model-hafez.netlify.app/",
    linkLabel: "Try the tool",
  },
];

export const skillGroups = [
  {
    group: "Running campaigns",
    items: [
      "Full campaign planning",
      "Lead generation",
      "Go-to-market planning",
      "Paid advertising",
      "Account-based marketing",
    ],
  },
  {
    group: "Content & search",
    items: [
      "Content strategy",
      "SEO",
      "Keyword research",
      "Storytelling",
      "Brand messaging",
      "Copywriting",
    ],
  },
  {
    group: "Data & tools",
    items: [
      "Google Analytics (GA4)",
      "Looker Studio",
      "HubSpot",
      "Salesforce",
      "SEMrush",
      "Ahrefs",
    ],
  },
  {
    group: "Design & building",
    items: [
      "Figma",
      "Canva",
      "Adobe Creative Suite",
      "AI-assisted workflows",
      "AI search visibility (AEO)",
    ],
  },
];

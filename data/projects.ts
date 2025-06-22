export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  frontend: string[];
  backend: string[];
  database: string | null;
}

export const projects: Project[] = [
  {
    title: "Kinimini Multivendor Ecommerce",
    description:
      "Multivendor Ecommerce Site with admin panels for vendors , admin.",
    logo: "/kinimini.png",
    link: "https://kinimini.com.np/",
    slug: "driwwwle",
    frontend: ["Next.js", "Tailwind", "Shadcn UI"],
    backend: ["Node.js"],
    database: "MongoDB",
  },
  {
    title: "Hyberlab IT Solutions Profile",
    description: "Official website of Hyberlab IT Solutions, an IT Company.",
    logo: "/hyberlab.png",
    link: "https://www.hyberlab.com/",
    slug: "vscode-portfolio",
    frontend: ["Next.js", "Tailwind", "React-query"],
    backend: [],
    database: null,
  },
  {
    title: "Siddhartha Hardwares",
    description: "A Website for electronic item seller.",
    logo: "/Siddhartha.png",
    link: "https://www.siddharthahardwares.com/",
    slug: "subtrackt",
    frontend: ["Next.js", "Tailwind"],
    backend: ["Node.js"],
    database: null,
  },
  {
    title: "SND Cares",
    description: "A basic website for local hardware shop.",
    logo: "/SND cares.png",
    link: "https://www.sndcares.com/",
    slug: "coolify-vscode-extension",
    frontend: ["Next.js","Tailwind","Material UI"],
    backend: [],
    database: null,
  },
];

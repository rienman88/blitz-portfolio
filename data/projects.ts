import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Blitz DFIR",

    description:
      "AI-assisted Digital Forensics and Incident Response platform focused on evidence correlation, explainable findings and analyst-driven investigations.",

    technologies: [
      "Python",
      "DFIR",
      "AI",
      "SQLite",
    ],

    githubUrl:
      "https://github.com/rienman88/Blitz-DFIR",

    logo:
      "/project-logos/blitz-dfir.png",
  },

  {
    title: "Identity Security Lab - Github Status : Private - In-progress, available upon request",

    description:
      "Identity and Access Management laboratory built using Keycloak, OpenLDAP, Docker and enterprise authentication workflows.",

    technologies: [
      "Keycloak",
      "OpenLDAP",
      "Docker",
      "IAM",
    ],

    githubUrl:
      "https://github.com/rienman88",

    logo:
      "/project-logos/identity-lab.png",
  },

  {
    title: "Security Platform Engineering Lab - Github Status : Private - Future Development",

    description:
      "Linux-based platform engineering environment for infrastructure automation, security services and identity platforms.",

    technologies: [
      "Linux",
      "Docker",
      "Security",
      "Networking",
    ],

    githubUrl:
      "https://github.com/rienman88",

    logo:
      "/project-logos/platform-lab.png",
  },
];

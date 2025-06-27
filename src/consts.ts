import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Hi, I'm Vijay",
  EMAIL: "vijaytembugade21@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Vijay Tembugade | Porfolio",
  DESCRIPTION:
    "Vijay Tembugade is a software engineer with a passion for building innovative solutions. Explore my portfolio to see my work and projects.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/vijaytembugade",
  },
  {
    NAME: "github",
    HREF: "https://github.com/vijaytembugade",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/vijaytembugade",
  },
];

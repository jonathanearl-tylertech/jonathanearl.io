export type Project = {
  projectType: 'fun' | 'personal' | 'group' | 'learning'
  name: string,
  imgUrl: string,
  description: string,
  demoUrl: string,
  githubUrl: string,
  technologies: string[],
};


export const projects: Project[] = [
  {
    projectType: 'learning',
    name: 'fig',
    imgUrl: undefined,
    description: 'An instagram clone',
    demoUrl: undefined,
    githubUrl: undefined,
    technologies: [],
  },
  {
    projectType: 'personal',
    name: 'jonathanearl.io',
    imgUrl: undefined,
    description: 'My current portfolio',
    demoUrl: '/',
    githubUrl: 'https://github.com/whattheearl/jonathanearl.io',
    technologies: [],
  },
];
export type Project = {
    name: string,
    imgUrl: string,
    description: string,
    demoUrl: string,
    githubUrl: string,
    technologies: string[],
};


export const projects: Project[] = [
    {
        name: 'fig',
        imgUrl: undefined,
        description: 'An instagram clone',
        demoUrl: undefined,
        githubUrl: undefined,
        technologies: [],
    },
    {
        name: 'jonathanearl.io',
        imgUrl: undefined,
        description: 'My current portfolio',
        demoUrl: '/',
        githubUrl: 'https://github.com/whattheearl/jonathanearl.io',
        technologies: [],
    },
];
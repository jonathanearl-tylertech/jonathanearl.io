import bkmrkrImage from '../images/projects/bkmrkr-small.jpg';
import figImage from '../images/projects/kg-slim.png';
import gameGui from '../images/projects/game_gui-small.jpg';
import jonathanearlioImage from '../images/projects/jonathanearlio.png';

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
    projectType: 'personal',
    name: 'jonathanearl.io',
    imgUrl: jonathanearlioImage,
    description: 'My current portfolio',
    demoUrl: '/',
    githubUrl: 'https://github.com/whattheearl/jonathanearl.io',
    technologies: ['React', 'Gatsby'],
  },
  {
    projectType: 'learning',
    name: 'bkmrkr',
    imgUrl: bkmrkrImage,
    description: 'A chrome extension for bookmarking projects and events',
    demoUrl: undefined,
    githubUrl: undefined,
    technologies: ['react'],
  },
  {
    projectType: 'learning',
    name: 'fig',
    imgUrl: figImage,
    description: 'An instagram clone',
    demoUrl: undefined,
    githubUrl: undefined,
    technologies: ['react', 'node', 'openid connect'],
  },
  {
    projectType: 'group',
    name: 'Javscript Game Engine',
    imgUrl: gameGui,
    description: 'Capstone project for the University of Washington',
    demoUrl: '/',
    githubUrl: 'https://github.com/whattheearl/jonathanearl.io',
    technologies: ['Javascript', 'Canvas', 'HTML', 'CSS'],
  },
];
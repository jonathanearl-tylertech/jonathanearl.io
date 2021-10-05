import { ISkills } from '../models/ISkills';

export const SKILLS: ISkills = {
  frontend: [
    { name: 'react', width: 'w-5/6' },
    { name: 'angular', width: 'w-4/6' },
    { name: 'HTML', width: 'w-6/6' },
    { name: 'CSS', width: 'w-3/6' },
  ],
  backend: [
    { name: 'express', width: 'w-5/6' },
    { name: '.net core', width: 'w-4/6' },
    { name: 'oauth', width: 'w-3/6' },
    { name: 'openid connect', width: 'w-4/6' },
  ] ,
  languages: [
    { name: 'javascipt', width: 'w-5/6' },
    { name: 'typescript', width: 'w-5/6' },
    { name: 'c#', width: 'w-4/6' },
  ],
  other: [
    { name: 'docker', width: 'w-5/6' },
    { name: 'linux', width: 'w-4/6' },
    { name: 'git', width: 'w-5/6' },
  ],
}
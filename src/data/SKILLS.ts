import { ISkills } from '../models/ISkills';

export const SKILLS: ISkills = {
  frontend: [
    { name: 'react', yearsOfExperience: 3 },
    { name: 'angular', yearsOfExperience: 3 },
    { name: 'HTML', yearsOfExperience: 6 },
    { name: 'CSS', yearsOfExperience: 4 },
  ],
  backend: [
    { name: 'express', yearsOfExperience: 3 },
    { name: '.net core', yearsOfExperience: 3 },
    { name: 'oauth', yearsOfExperience: 2 },
    { name: 'openid connect', yearsOfExperience: 2 },
  ] ,
  languages: [
    { name: 'javascipt', yearsOfExperience: 6 },
    { name: 'typescript', yearsOfExperience: 3 },
    { name: 'c#', yearsOfExperience: 4 },
  ],
  other: [
    { name: 'docker', yearsOfExperience: 3 },
    { name: 'linux', yearsOfExperience: 2 },
    { name: 'git', yearsOfExperience: 4 },
  ],
}
import { ISkillCatagories } from '../models/ISkills';

export const SKILL_CATAGORIES: ISkillCatagories = {
  frontend: {
    name: 'front-end',
    description: 'Responsibilities include adding new features like session management, creating new onboarding processes, and maintaining our packages.',
    skills: [
      { name: 'react', yearsOfExperience: 3 },
      { name: 'angular', yearsOfExperience: 3 },
      { name: 'HTML', yearsOfExperience: 6 },
      { name: 'CSS', yearsOfExperience: 4 },
    ]
  },
  backend: {
    name: 'back-end',
    description: 'Worked on across our .net core services to move our platform through several iterations, debugged issues using datadog with other teams',
    skills: [
      { name: 'express', yearsOfExperience: 3 },
      { name: '.net core', yearsOfExperience: 3 },
      { name: 'oauth', yearsOfExperience: 2 },
      { name: 'openid connect', yearsOfExperience: 2 },
    ]
  },
  languages: {
    name: 'languages',
    description: 'Full stack with typescript/javascript and C#.',
    skills: [
      { name: 'javascipt', yearsOfExperience: 6 },
      { name: 'typescript', yearsOfExperience: 3 },
      { name: 'c#', yearsOfExperience: 4 },
    ]
  },
  other: {
    name: 'other',
    description: '',
    skills: [
      { name: 'docker', yearsOfExperience: 3 },
      { name: 'linux', yearsOfExperience: 2 },
      { name: 'git', yearsOfExperience: 4 },
    ]
  },
}
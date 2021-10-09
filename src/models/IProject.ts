interface IGithub {
  stargazers_count: number;
  created_at: string;
  updated_at: string;
  html_url: string;
  homepage: string;
  topics: string[];
}

export enum ProjectType {
  'PERSONAL' = 'Personal',
  'WORK' = 'Work',
  'ACADEMIC' = 'Academic',
}

export interface IProject {
  name: string;
  type: ProjectType;
  summary: string;
  img: any;
  github: IGithub
}
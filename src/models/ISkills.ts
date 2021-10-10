export interface ISkill {
  name: string;
  yearsOfExperience: number;
}

export interface ISkillCatagory {
  name: string,
  description: string,
  skills: ISkill[]
}

export interface ISkillCatagories {
  frontend: ISkillCatagory;
  backend: ISkillCatagory;
  languages: ISkillCatagory;
  other: ISkillCatagory;
}
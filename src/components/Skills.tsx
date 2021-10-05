import React from 'react';
import { SkillList } from './SkillsList';
import { SKILLS } from '../data/SKILLS';

export const Skills = () => {
  return (
    <section className="flex flex-col px-4 mb-8">
      <div className="mb-4 text-gray-700 text-2xl capitalize font-bold">Skills</div>
      <SkillList name="Front-end" skills={SKILLS.frontend}/>
      <SkillList name="Back-end" skills={SKILLS.backend}/>
      <SkillList name="Languages" skills={SKILLS.languages}/>
      <SkillList name="Other" skills={SKILLS.other}/>
    </section>
  );
}
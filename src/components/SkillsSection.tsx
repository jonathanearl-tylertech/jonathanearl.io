import React from 'react';
import { SkillCard } from './SkilCard';
import { SKILLS } from '../data/SKILLS';

export const Skills = () => {
  return (
    <section className="flex flex-col px-4 mb-8">
      <div className="mb-4 text-gray-700 text-2xl capitalize font-bold">Skills</div>
      <SkillCard name="Front-end" skills={SKILLS.frontend}/>
      <SkillCard name="Back-end" skills={SKILLS.backend}/>
      <SkillCard name="Languages" skills={SKILLS.languages}/>
      <SkillCard name="Other" skills={SKILLS.other}/>
    </section>
  );
}
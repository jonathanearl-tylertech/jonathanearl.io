import React from 'react';
import { SkillCard } from './SkillCard';
import { SKILL_CATAGORIES } from '../data/SKILLS';

export const Skills = () => {
  const skillCards = Object.values(SKILL_CATAGORIES).map(catagory => (<SkillCard data={catagory}/>))
  return (
    <section className="flex flex-col mb-16 w-full max-w-screen-md mx-auto px-4 md:px-16">
      <div className="mb-4 text-gray-700 text-2xl capitalize font-bold">Skills</div>
      {skillCards}
    </section>
  );
}
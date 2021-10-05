import React from 'react';
import { ISkill } from '../models/ISkill';

export const SkillList = ({ name, skills }: { name: string, skills: ISkill[] }) => {
  const listItems = skills.map(skill => (
    <li className={`flex h-6 ${skill.width} bg-gray-200 mb-2 items-center`}>{skill.name}</li>)
  );

  return (
    <div className="mb-4">
      <div className="text-xl text-gray-500 mb-2">{name}</div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
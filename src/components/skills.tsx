import React from 'react';
import { frontend, backend, other } from '../data/skills';
import { SkillsCard } from '../components/skills-card';
import '../styles/index.scss';

export const Skills = () => {
  return (
    <section className="skills__section">
        <div className="skills__container">
            <SkillsCard title={"Front-end"} skills={frontend} index={1}></SkillsCard>
            <SkillsCard title={"Back-end"} skills={backend} index={2}></SkillsCard>
            <SkillsCard title={"Other"} skills={other} index={3}></SkillsCard>
        </div>
    </section>
  );
}
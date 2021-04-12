import React from 'react';
import styled from 'styled-components';
import { frontend, backend, other } from '../data/skills';
import { SkillsCard } from '../components/skills-card';

export const Skills = () => {
  return (
    <Section>
      <SkillsCard title={"Front-end"} skills={frontend} index={1}></SkillsCard>
      <SkillsCard title={"Back-end"} skills={backend} index={2}></SkillsCard>
      <SkillsCard title={"Other"} skills={other} index={3}></SkillsCard>
    </Section>
  );
}

const Section = styled.section`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 100px;
  @media (min-width: 481px) {
    margin: 200px auto;
  }
`;
import React from 'react';
import styled from 'styled-components';
import { frontend, backend, other } from '../data/skills';
import { SkillsCard } from '../components/skills-card';

const Row = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const Skills = () => {
  return (
    <Row>
      <SkillsCard title="Frontend" skills={frontend}></SkillsCard>
      <SkillsCard title="Backend" skills={backend}></SkillsCard>
      <SkillsCard title="Other" skills={other}></SkillsCard>
    </Row>
  );
}
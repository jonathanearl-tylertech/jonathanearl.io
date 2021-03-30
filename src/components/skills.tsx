import React from 'react';
import styled from 'styled-components';
import { frontend, backend, other } from '../data/skills';
import { SkillsCard } from '../components/skills-card';
import { SectionTitle } from './section-title';


export const Skills = () => {
  return (
    <Section>
      <SectionTitle count="02" title="Some things I know about"></SectionTitle>
      <Row>
        <SkillsCard title="Frontend" skills={frontend}></SkillsCard>
        <SkillsCard title="Backend" skills={backend}></SkillsCard>
        <SkillsCard title="Other" skills={other}></SkillsCard>
      </Row>
    </Section>
  );
}

const Section = styled.section`
    margin: 200px 0;
`;

const Row = styled.div`
    padding: 0 1em;
    display: grid;
    grid-gap: 90px;
    grid-template-columns: 1fr 1fr 1fr;
    height: 300px;
`;
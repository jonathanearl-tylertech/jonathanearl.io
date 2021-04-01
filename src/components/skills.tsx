import React from 'react';
import styled from 'styled-components';
import { frontend, backend, other } from '../data/skills';
import { SkillsCard } from '../components/skills-card';
import { SectionTitle } from './section-title';
import { colors } from '../styles/colors';


export const Skills = () => {
  return (
    <Section>
      <SectionTitle count="02" title="Some things I know about"></SectionTitle>
      <Background></Background>
      <SkillsCard title="Frontend" skills={frontend}></SkillsCard>
      <SkillsCard title="Backend" skills={backend}></SkillsCard>
      <SkillsCard title="Other" skills={other}></SkillsCard>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin: 200px 0 50px 0;
`;

const Background = styled.div`
  position: absolute;
  width: 20%;
  background-color: ${colors.navy};
  height: 75%;
  z-index: -100;
`;

const Row = styled.div`
  padding: 0 1em;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;
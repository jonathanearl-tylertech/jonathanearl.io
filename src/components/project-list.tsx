import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from '../components/project-card';
import { projects } from '../data/projects';

export const ProjectList = () => {
  return (
    <Section>
      {
        projects.map((project, index) => (<ProjectCard key={index} project={ project } reverse={index % 2 === 0}/>))
      }
    </Section>
  )
}

const Section = styled.section`
  max-width: 920px;
  margin: 0 auto 200px auto;
  margin-bottom: 200px;
`;
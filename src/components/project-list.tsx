import React from 'react';
import styled from 'styled-components';
import '../styles/index.scss';
import { ProjectCard } from '../components/project-card';
import { projects } from '../data/projects';

export const ProjectList = () => {
  return (
    <Section className="project__section">
      {
        projects.map((project, index) => (<ProjectCard key={index} project={ project } reverse={index % 2 === 0}/>))
      }
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 200px;
`;
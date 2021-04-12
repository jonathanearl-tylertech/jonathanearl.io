import React from 'react';
import styled from 'styled-components';
import { ProjectCardMobile } from '../components/project-card-mobile';
import { ProjectCard } from '../components/project-card';
import { projects } from '../data/projects';

export const ProjectList = () => {
  return (
    <Section>
      { projects.map((project, index) => (<ProjectCard key={`${project.name}`} project={project} reverse={index % 2 === 0} />)) }
      { projects.map((project) => (<ProjectCardMobile key={`${project.name}-mobile`} project={project} />)) }
    </Section>
  )
}

const Section = styled.section`
  max-width: 920px;
  width: 100%;
  @media (min-width: 481px) {
    margin: 0 auto 200px auto;
  }
`;
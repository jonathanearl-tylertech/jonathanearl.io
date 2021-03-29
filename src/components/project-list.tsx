import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from './project-card';
import { projects } from '../data/projects';

export const ProjectList = () => {
  return (
    <section>
      <Title>projects</Title>
      {
        projects.map(project => (<ProjectCard project={ project }/>))
      }
    </section>
  )
}

const Title = styled.h3`
  font-family: 'opensans-light';
  font-size: 16px;
  text-transform: capitalize;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    width: 47%;
    margin-right: 3%;
  }
`;
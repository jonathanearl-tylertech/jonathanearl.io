import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from './project-card';
import { projects } from '../data/projects';

export const ProjectList = () => {
  return (
    <section>
      <Title>
        <TitleNumber>.03</TitleNumber>
        <span>Some things i'm working on</span>
      </Title>
      {
        projects.map((project, index) => (<ProjectCard key={index} project={ project } reverse={index % 2 === 0}/>))
      }
    </section>
  )
}

const TitleNumber = styled.span`
  font-family: 'opensans-light';
  color: #F5DF4D;
  font-size: 18px;
  margin-right: .5em;
`;

const Title = styled.h3`
  font-family: 'opensans-bold';
  text-transform: capitalize;
  color: rgb(204, 214, 246);
  font-size: 26px;
  margin-bottom: 1em;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    width: 47%;
    margin-right: 3%;
  }
`;
import React from 'react';
import styled from 'styled-components';
import { Project } from '../data/projects';


export const ProjectCard = (props: { project: Project }) => {
  const { project } = props;
  return (
    <Card>
      <Col>
        <Title>{project.name}</Title>
        <Description>{project.description}</Description>
        <Row>
          <Button href={project.githubUrl}>Github</Button>
          <Button href={project.demoUrl}>Demo</Button>
        </Row>
      </Col>
      <Image src="https://place.dog/300/200" />
    </Card>
  );
}

const Card = styled.article`
  width: 100%;
  display: flex;
  margin-bottom: 2em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

const Image = styled.img`
  max-height: 300px;
  width: 65%;
  object-fit: cover;
`;

const Description = styled.div`
  margin-bottom: auto;
  font-family: 'opensans-light';
  font-size: 18px;
  padding: .5em;
  margin-bottom: .5em;
`;

const Title = styled.h3`
  font-family: 'opensans-bold';
  text-transform: capitalize;
  font-size: 28px;
`;

const Button = styled.a`
  border: 1px solid #777;
  border-radius: 4px;
  padding: .5em;
  margin-right: .5em;
`;
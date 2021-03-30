import React from 'react';
import styled from 'styled-components';
import { Project } from '../data/projects';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLink } from '@react-icons/all-files/fa/FaLink';
import { colors } from '../styles/colors';

export const ProjectCard = (props: { project: Project, reverse: boolean }) => {
  const { project, reverse } = props;
  const ImageVersion = reverse ? ReverseImageWrapper : ImageWrapper;
  const ColVersion = reverse ? ReverseCol : Col;

  return (
    <Card>
      <ColVersion>
        <ProjectLabel>{project.projectType} project</ProjectLabel>
        <Title>{project.name}</Title>
        <Description>{project.description}</Description>
        <Row>
          <Button href={project.githubUrl}>
            <FaGithub />
          </Button>
          <Button href={project.demoUrl}>
            <FaLink></FaLink>
          </Button>
        </Row>
      </ColVersion>
      <ImageVersion>
        <Image src="https://place.dog/300/200" />
      </ImageVersion>
    </Card>
  );
}


const Card = styled.article`
  position: relative;
  height: 300px;
  width: 100%;
  padding: 2em;
  display: flex;
  margin-bottom: 2em;
  justify-content: space-around;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 300px;
  width: 60%;
  background-color: ${colors.yellow};
  overflow: hidden;
  border-radius: 7px;
`;

const ReverseImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-height: 300px;
  width: 60%;
  background-color: ${colors.yellow};
  overflow: hidden;
  border-radius: 7px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: .7;
`;

const Col = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  height: 100%;
  z-index: 1000;
`;

const ReverseCol = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  z-index: 1000;
`;

const ProjectLabel = styled.h3`
  font-size: 13px;
  color: ${colors.yellow};
  text-transform: capitalize;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Description = styled.p`
  margin-bottom: auto;
  font-family: 'opensans-light';
  background-color: ${colors.navy};
  color: ${colors.grey};
  min-height: 150px;
  width: 100%;
  font-size: 18px;
  margin-bottom: .5em;
  border-radius: 7px;
  padding: 1em;
`;

const Title = styled.h3`
  font-family: 'opensans-bold';
  text-transform: capitalize;
  font-size: 28px;
  margin-bottom: 1em;
  color: ${colors.white};
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: .5em;
  color: ${colors.white};
  & > * {
    margin-right: .5em;
  }
`;
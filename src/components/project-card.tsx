import React from 'react';
import styled from 'styled-components';
import { Project } from '../data/projects';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLink } from '@react-icons/all-files/fa/FaLink';
import { colors } from '../styles/colors';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
  },
});

export const ProjectCard = (props: { project: Project, reverse: boolean }) => {
  const { project, reverse } = props;
  const ImageVersion = reverse ? ReverseImageWrapper : ImageWrapper;
  const ColVersion = reverse ? ReverseCol : Col;
  const classes = useStyles();

  return (
    <Card>
      <ColVersion>
        <ProjectLabel>{project.projectType} project</ProjectLabel>
        <Title>{project.name}</Title>
        <Description>
          <div>{project.description}</div>
          <TechnologyArea>
            { project.technologies.map(t => (<Chip key={t} className={classes.root} label={t}/>)) }
          </TechnologyArea>
        </Description>
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
        <Image src={project.imgUrl ? project.imgUrl : 'https://place.dog/300/200'} />
      </ImageVersion>
    </Card>
  );
}


const Card = styled.article`
  position: relative;
  height: 300px;
  width: 100%;
  display: flex;
  margin-bottom: 100px;
  justify-content: space-around;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 300px;
  width: 60%;
  background-color: #939597;
  overflow: hidden;
`;

const ReverseImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 300px;
  width: 60%;
  background-color: #939597;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: .2;
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

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: auto;
  background-color: #F5DF4D;
  color: #333;
  min-height: 125px;
  width: 100%;
  font-weight: 500;
  font-size: 22px;
  padding: 1em;
`;

const Title = styled.h3`
  text-transform: capitalize;
  font-size: 28px;
  margin-bottom: 1em;
  color: #333;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: .5em;
  color: #555;
  & > * {
    margin-right: .5em;
  }
`;

const TechnologyArea = styled.div`
  margin-top: auto;
  display: flex;
  & > * {
    margin-right: 1em;
  }
`;
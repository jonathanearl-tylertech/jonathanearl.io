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
        <DescriptionArea>
          <Description>{project.description}</Description>
          <TechnologyArea>
            { project.technologies.map(t => (<Chip key={t} className={classes.root} label={t}/>)) }
          </TechnologyArea>
        </DescriptionArea>
        <Row>
          <Button href={project.githubUrl}><FaGithub /> Github</Button>
          <Button href={project.demoUrl}><FaLink/> Demo</Button>
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
  margin-bottom: 100px;
  justify-content: space-around;
  align-items: center;
  display: none;
  @media (min-width: 481px) {
    display: flex;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 300px;
  width: 60%;
  background-color: ${colors.grey};
  overflow: hidden;
`;

const ReverseImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 300px;
  width: 60%;
  background-color: ${colors.grey};
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

const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: auto;
  background-color: ${colors.yellow};
  min-height: 125px;
  width: 100%;
  font-weight: 500;
  padding: 1em;
`;

const Description = styled.p`
  color: ${colors.black};
  margin-bottom: 1em;
`;

const Title = styled.h3`
  text-transform: capitalize;
  font-size: 28px;
  margin-bottom: 1em;
  color: ${colors.black};
`;

const Button = styled.a`
  display: ${props => (props.href? 'flex': 'none')};
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
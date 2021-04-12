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

export const ProjectCardMobile = (props: { project: Project, reverse: boolean }) => {
  const { project, reverse } = props;
  const classes = useStyles();

  return (
    <Card>
      <ProjectLabel>{project.projectType} project</ProjectLabel>
      <Title>{project.name}</Title>
      <Image src={project.imgUrl ? project.imgUrl : 'https://place.dog/300/200'} />
      <Description>
        <div>{project.description}</div>
        <TechnologyArea>
          {project.technologies.map(t => (<Chip key={`${t}-mobile`} className={classes.root} label={t} />))}
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
    </Card>
  );
}


const Card = styled.article`
  padding: 50px 8px;
  position: relative;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey};
  clip-path: polygon(0 0, 100% 12%, 100% 100%, 0 88%);
  @media (min-width: 481px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

const ProjectLabel = styled.h3`
  font-size: 13px;
  color: ${colors.yellow};
  text-transform: capitalize;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: auto;
  color: ${colors.black};
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
  color: ${colors.black};
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
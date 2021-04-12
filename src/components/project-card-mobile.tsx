import React from 'react';
import styled from 'styled-components';
import { Project } from '../data/projects';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLink } from '@react-icons/all-files/fa/FaLink';
import { colors } from '../styles/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
  },
});

export const ProjectCardMobile = (props: { project: Project }) => {
  const { project } = props;
  const classes = useStyles();

  return (
    <Card>
      <ProjectLabel>{project.projectType} project</ProjectLabel>
      <Title>{project.name}</Title>
      <Image src={project.imgUrl ? project.imgUrl : 'https://place.dog/300/200'} />
      <DescriptionArea>
        <Description>{project.description}</Description>
      </DescriptionArea>
      <Links>
        <Button href={project.githubUrl}>
          <FaGithub />
        </Button>
        <Button href={project.demoUrl}>
          <FaLink></FaLink>
        </Button>
      </Links>
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

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  color: ${colors.black};
  width: 100%;
  font-weight: 500;
  padding: 1em;
`;

const Description = styled.p`
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
  align-items: flex-end;
  font-size: 30px;
  color: #555;
  & > * {
    margin-right: 1em;
  }
`;
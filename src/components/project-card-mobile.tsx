import React from 'react';
import styled from 'styled-components';
import { Project } from '../data/projects';
import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { FaLink } from '@react-icons/all-files/fa/FaLink';
import { colors } from '../styles/colors';

export const ProjectCardMobile = (props: { project: Project }) => {
  const { project } = props;
  return (
    <Card>
      <Header>
        <Title>{`${project.name}`}</Title>
        <ProjectLabel>{project.projectType} project</ProjectLabel>
      </Header>
      <Image src={project.imgUrl ? project.imgUrl : 'https://place.dog/300/200'} />
      <Links>
        <Button href={project.githubUrl}>
          <FaGithubSquare />
        </Button>
        <Button href={project.demoUrl}>
          <FaLink></FaLink>
        </Button>
      </Links>
      <DescriptionArea>
        <Description>
          <Title>description</Title><span>{ project.description }</span>
        </Description>
        <TagArea>
          <Title>tech</Title>{ project.technologies.map(t => <Tag key={ t }>{`#${t.replace(' ', '-')}`}</Tag>)}
        </TagArea>
      </DescriptionArea>
    </Card>
  );
}

const Card = styled.article`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media (min-width: 481px) {
    display: none;
  }
`;

const Image = styled.img`
  min-height: 45vw;
  max-height: 100vw;
  max-width: 100%;
  object-fit: contain;
  background-color: #000;
  margin-bottom: 16px;
`;

const ProjectLabel = styled.h3`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${colors.grey};
  text-transform: lowercase;
`;

const TagArea = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Tag = styled.span`
  margin-right: 1ch;
  font-size: 14px;
  line-height: 18px;
  color: rgb(0, 55, 107);
  text-transform: lowercase;
`;

const Links = styled.ul`
  border-top: 1px solid rgb(229, 229, 229);
  display: flex;
  flex-direction: row;
  margin: -16px 0 0 0;
  padding: 0 8px 0 8px;
  box-sizing: border-box;
`;

const Button = styled.a`
  align-items: flex-end;
  font-size: 24px;
  padding: 8px;
  color: ${colors.black};
`;

const DescriptionArea = styled.div`
  letter-spacing: 0px;
  display: flex;
  flex-direction: column;
  color: ${colors.black};
  width: 100%;
  font-weight: 400;
  padding: 0 16px;
`;

const Description = styled.p`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.black};
  text-transform: lowercase;
`;

const Title = styled.span`
  margin-right: 1ch;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.black};
  text-transform: lowercase;
`;


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid rgb(229, 229, 229);
`;
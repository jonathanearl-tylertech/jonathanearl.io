import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors'

type Prop = { title: string, skills: string[], index: number };

export const SkillsCard = ({ title, skills, index }: Prop) => {

  return (
    <Card>
      <Header>
        <Title>{title}</Title>
      </Header>
      <SkillsList>
        { skills.map(skill => (<SkillsItem key={skill}>{skill}</SkillsItem>)) }
      </SkillsList>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  @media (min-width: 481px) {
    width: 320px;
  }
`;

const Header = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-right: 1em;
  width: 100%;
  background-position: center;
  background-size: cover;
  clip-path: polygon(0 50%, 100% 25%, 100% 75%, 0 100%);
  background-color: ${colors.yellow};
  height: 250px;
`;

const Title = styled.h3`
  display:flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 75%;
  width: 100%;
  color: ${colors.black};
  font-size: 24px;
  text-transform: capitalize;
  padding: 0 4px;
`;

const SkillsList = styled.ul`
`;

const SkillsItem = styled.li`
  color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;
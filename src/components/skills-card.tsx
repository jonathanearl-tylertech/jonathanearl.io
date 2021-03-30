import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

type Prop = { title: string, skills: string[] };

export const SkillsCard = ({ title, skills }: Prop) => {
  return (
    <Card>
      <Title>{title}</Title>
      <List>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </List>
    </Card>
  );
}

const Card = styled.article`
  background-color: ${colors.navy};
  padding: 1em;
`

const Title = styled.h2`
  color: ${colors.white};
  font-family: 'opensans'
`

const List = styled.ul`
  > * {
    display:flex;
    justify-content: flex-end;
    margin-left: auto;
    margin-bottom: .25em;
    font-family: "opensans-light";
  }
`;
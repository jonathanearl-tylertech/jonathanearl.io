import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors'; 

type prop = { count: string, title: string };

export const SectionTitle = ({ count, title } : prop) => {
  return (
    <Title>
    <TitleNumber>.{count}</TitleNumber>
    <span>{title}</span>
  </Title>
  );
}

const TitleNumber = styled.span`
  color: ${colors.yellow};
  font-size: 18px;
  margin-right: .5em;
`;

const Title = styled.h3`
  text-transform: capitalize;
  color: ${colors.white};
  font-size: 26px;
  margin-bottom: 1em;
`;

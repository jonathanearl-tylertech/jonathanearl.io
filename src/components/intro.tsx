import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../styles/colors';
import data from '../data/intro';

export const Intro = () => {
  return (
    
    <WindowArea>
      <WindowBar>
        <ColoredCircle color="#ff6961"></ColoredCircle>
        <ColoredCircle color="#fbfa93"></ColoredCircle>
        <ColoredCircle color="#77dd78"></ColoredCircle>
      </WindowBar>
      <ConsoleArea>
        <Title>name</Title>
        <TextArea>Jonathan Earl.</TextArea>
        <Title>description</Title>
        <TextArea>{data.description}</TextArea>
        <Title>note</Title>
        <TextArea>{data.note}</TextArea>
        <LabelArea>
          <Location>&nbsp;~/jonathanearl.io </Location>
          <LocationArrow></LocationArrow>
          <Branch> on main </Branch>
          <BranchArrow></BranchArrow>
        </LabelArea>
        <CursorArea>
          <span>❯&nbsp;</span><Cursor>&nbsp;</Cursor>
        </CursorArea>
      </ConsoleArea>
    </WindowArea>
  );
}


const ColoredCircle = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.color? props.color : 'white')};
`;

const BlinkAnimation = keyframes`
  0% { background-color: ${colors.black} }
  49% { background-color: ${colors.black} }
  50% { background-color: white }
  100% { background-color: white }
`;

const Cursor = styled.span`
  animation: ${BlinkAnimation} 1.5s linear infinite;
  background-color: #ddd;
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${colors.yellow};
  text-transform: uppercase;
  padding: 0 4px;
`;

const TextArea = styled.div`
  margin-left: 4em;
  padding: 0 4px;
  margin-bottom: 1em;
`;

const LabelArea = styled.div`
  /* font-size: 16px; */
`;

const CursorArea = styled.div`

`;

const Location = styled.span`
  background-color: ${colors.yellow};
  color: #333;
`;

const LocationArrow = styled.span`
  color: ${colors.yellow};
  background-color: orange;
`;

const Branch = styled.span`
  background-color: orange;
  color: ${colors.black};
`;

const BranchArrow = styled.span`
  color: orange;
`;

const WindowBar = styled.div`
  display: flex;
  padding: 4px;
  font-size: 12px;
  height: 20px;
  width: 100%;
  background-color: #ddd;
  & > * {
    margin-left: 4px;
  }
`;

const ConsoleArea = styled.div`
  height: 480px;
  width: 100%;
  background-color: #282828;
  color: ${colors.green};
  padding: 12px 0;
  box-sizing: border-box;
`;

const WindowArea = styled.div`
  font-family: 'meslo';
  margin: 100px auto;
  height: 500px;
  width: 900px;
  border-radius: 4px;
  overflow: hidden;
`;
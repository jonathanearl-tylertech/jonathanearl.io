import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

type Prop = { title: string, skills: string[] };

const useStyles = makeStyles((theme) => ({
  root: {
    color: colors.white,
    backgroundColor: colors.navy,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '.4em',
  },
}));

export const SkillsCard = ({ title, skills }: Prop) => {
  const classes = useStyles();

  return (
    <Card >
      <Title>{ title }</Title>
      <List>
        { skills.map(skill => <Chip className={classes.root} key={skill} label={skill} size="small"/>) }
      </List>
    </Card>
  );
}

const Card = styled.article`
  display: flex;
  padding: .5em;
`

const Title = styled.h2`
  text-align: right;
  margin-right: 1em;
  font-weight: 600;
  font-size: 22px;
  color: ${colors.white};
  font-family: 'opensans';
  width: 20%;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  display: flex;
  font-size: 12px;
  align-items: center;
  height: 100%;
  color: ${colors.grey};
  background-color: ${colors.navy};
  margin-left: auto;
  font-family: "opensans-light";
  border: 1px transparent ${colors.grey};
  border-radius: 4px;
  margin: .5em .5em;
  padding: 4px;
  min-width: 30px;
  justify-content: center;
`;
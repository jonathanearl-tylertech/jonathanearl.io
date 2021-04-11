import React from 'react';
import { Intro } from '../components/intro';
import { Layout } from '../components/layout';
import { Skills } from '../components/skills';
import { ProjectList } from '../components/project-list';
import '../styles/index.scss';

export default () => {
  return (
    <Layout>
      <Intro />
      <Skills/>
      <ProjectList/>
    </Layout>
  );
}
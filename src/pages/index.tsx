import React from 'react';
import { Layout } from '../components/layout';
import { Skills } from '../components/skills';
import { ProjectList } from '../components/project-list';

export default () => {
  return (
    <Layout>
      <Skills/>
      <ProjectList/>
    </Layout>
  );
}
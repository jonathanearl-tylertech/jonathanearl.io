import React from 'react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../data/PROJECTS';
import { IProject } from '../models/IProject';

export const ProjectSection = () => {
  const sortProjectByDateString = (a: IProject, b: IProject) => {
    const first =  new Date(a.github.updated_at).getUTCSeconds();
    const second = new Date(b.github.updated_at).getUTCSeconds();
    return second - first;
  }
  const projectList = PROJECTS.sort(sortProjectByDateString)
    .map(project => (<ProjectCard key={project.name} project={project} />));

  return (
    <section className="flex flex-col mb-8">
      <div className="mb-2 px-4 text-gray-700 text-2xl capitalize font-bold">Projects</div>
      <ol className="flex flex-col">
        {projectList}
      </ol>
    </section>
  );
}
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { IProject } from '../models/IProject';

export const ProjectCard = ({ project }: { project: IProject}) => {
  const tags = project.github.topics.map(topic => <span key={topic} className="mr-2">#{topic}</span>)

  return (
    <article className="flex flex-col mb-8">
      <div className="flex justify-between content-center px-4 py-2">
        <span className="flex text-xl text-gray-500 justify-between content-center">{project.name}</span>
        <span className="flex justify-between content-center">{project.type}</span>
      </div>
      <div className="flex w-full">
        <img className="h-full w-full" src={project.img} alt={project.name} />
      </div>
      <div className="flex justify-between px-4 py-2">
        <div className="flex">
          <AiOutlineStar className="text-2xl" href="https://github.com/whattheearl/jonathanearl.io"/>
          <span>13</span>
        </div>
        <span>More</span>
      </div>
      <div className="px-4">
        <ul className="mb-2">{tags}</ul>
      </div>
    </article>
  )
}
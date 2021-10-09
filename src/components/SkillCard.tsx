import React from 'react';
import { ISkill } from '../models/ISkill';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';


export const SkillCard = ({ name, skills }: { name: string, skills: ISkill[] }) => {
  const labels = Array.from(skills.values()).map(skill => skill.name);
  const yearsOfExperience = Array.from(skills.values()).map(skill => skill.yearsOfExperience);

  const data: ChartData = {
    labels: labels,
    datasets: [
      {
        data: yearsOfExperience,
        label: 'years of experience',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
  };

  return (
    <div className="mb-4">
      <div className="text-xl text-gray-500 mb-2 px-4 py-2">{name}</div>
      <Bar className="px-4" data={data} options={options} />
    </div>
  );
}
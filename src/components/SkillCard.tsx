import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { ISkillCatagory } from '../models/ISkills';


export const SkillCard = ({ data }: { data: ISkillCatagory }) => {
  const labels = data.skills.map(skill => skill.name);
  const yearsOfExperience = data.skills.map(skill => skill.yearsOfExperience);

  const chartData: ChartData = {
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
    maintainAspectRatio: false,
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
  };
  const height = 4 * data.skills.length;
  return (
    <div className="mb-4">
      <div className="text-xl text-gray-500 mb-2 py-2">{data.name}</div>
      <div className="flex">
        <Bar className={`mx-auto h-${height} md:px-0`} data={chartData} options={options} />
        <div className='hidden text-gray-500 w-full sm:block ml-4 pr-8 pt-1'>{data.description}</div>
      </div>
    </div>
  );
}
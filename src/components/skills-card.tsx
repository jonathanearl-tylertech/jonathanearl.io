import React from 'react';
import BackgroundImage from "gatsby-background-image"
import '../styles/index.scss';

type Prop = { title: string, skills: string[], index: number };


export const SkillsCard = ({ title, skills, index }: Prop) => {

  return (
    <div className={`skill skill--${index}`}>
      <div className={`skill__header skill__header--${index}`}>
        <div className={`skill__header-tint skill__header-tint--${index}`}>
          <h3 className="skill__title-container">
            <div className={`skill__title skill__title--${index}`}>{title}</div>
          </h3>
        </div>
      </div>
      <ul className="skill__list">
        {
          skills.map(skill => (<li className="skill__item">{skill}</li>))
        }
      </ul>
    </div>
  );
}

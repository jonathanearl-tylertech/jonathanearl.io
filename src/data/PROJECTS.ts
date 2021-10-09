import { IProject, ProjectType } from "../models/IProject";
import fig from '../images/fig.png';
import gameGui from '../images/game_gui.jpg'
import bkmrkr from '../images/bkmrkr.jpg';

export const PROJECTS: IProject[] = [
  {
    name: 'bkmrkr',
    type: ProjectType.PERSONAL,
    summary: 'Google chrome plugin for saving links',
    img: bkmrkr,
    github: {
      "homepage": "https://chrome.google.com/webstore/detail/bkmrkr/fpebadocnijkabapochompcgjedcbgno",
      "stargazers_count": 1,
      "created_at": "2018-09-16T00:41:12Z",
      "updated_at": "2019-01-19T01:51:39Z",  
      html_url: "https://github.com/whattheearl/NewTab",
      topics: ['react', 'chrome_extension']
    }
  },
  {
    name: "FIG",
    type: ProjectType.PERSONAL,
    img: fig,
    summary: "Instagram clone",
    github: {
      homepage: 'https://jonathanearl.io',
      created_at: '2018-07-31T05:45:11Z',
      updated_at: '2021-10-07T20:00:41Z',
      html_url: "https://github.com/whattheearl/fig",
      stargazers_count: 1,
      topics: ['react', 'tailwindcss', 'aws_s3', 'express']
    }
  },
  {
    name: "game_alpha",
    type: ProjectType.ACADEMIC,
    summary: "Extending game engine features",
    img: gameGui,
    github: {
      "homepage": '',
      "created_at": "2016-05-07T20:19:21Z",
      "updated_at": "2018-10-09T23:14:04Z",
      html_url: 'https://github.com/whattheearl/jonathanearl.io',
      stargazers_count: 1,
      topics: ['html', 'css', 'javascript']
    }
  }
]

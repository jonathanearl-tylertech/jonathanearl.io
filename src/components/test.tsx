import React from 'react';
import { Project } from '../data/projects';

export default ({ projects }) => {
    return (
        <div>
            <h1>test</h1>
            <h2>test2</h2>
            <div>{projects[0].name}</div>
        </div>
    )
}
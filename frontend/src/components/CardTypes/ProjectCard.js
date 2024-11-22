import React from 'react';
import { Link } from 'react-router-dom';

import './ProjectCard.css';

const ProjectCard = ({ title, description, backgroundImage, link }) => {
    console.log(backgroundImage);
    return (
        <div className='projectCard' style={{backgroundImage:`url(${backgroundImage})`, backgroundSize:'cover'}}>
            <div className='cardContents'>
                <h2>{title}</h2>
                <p>{description}</p>
                <Link className='cardButton' to={`/projects/${title}`}>Details</Link>
            </div>
        </div>
    );
}

export default ProjectCard;

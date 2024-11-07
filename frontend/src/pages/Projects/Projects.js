import React, { useEffect, useState } from 'react';
import './Projects.css';

import Carousel from '../../components/Carousel/Carousel.js';
import ProjectCard from '../../components/CardTypes/ProjectCard.js';

function Projects() {
    const [projects, setProjects] = useState([]);

    function getProjects() {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/projects`)
        .then((response) => response.json())
        .then((data) => {
            setProjects(data);
        })
        .catch((error) => console.error('Error fetching Projects:', error));
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className='mainContainer'>
            <div className='projectsWrapper'>
                <div className='profileHeader'>
                    <h1>Projects</h1>
                </div>
            </div>
            <Carousel items={
                projects.map(project => (
                    <ProjectCard key={project.id} title={project.name} description={project.description} backgroundImage={project.cover} link="/loftusco"/>
                ))
            } />
        </div>
    );
}


export default Projects;
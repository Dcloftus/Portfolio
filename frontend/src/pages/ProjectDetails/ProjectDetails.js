import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CardStack from '../../components/CardStack/CardStack';
import ImageCard from '../../components/CardTypes/ImageCard';

import './ProjectDetails.css';

const ProjectDetails = () => {
    const { name } = useParams(); // Get project name from URL
    const [project, setProject] = useState([]);

    function fetchProjectDetails() {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/projects/${name}`)
        .then((response) => response.json())
        .then((data) => {
            setProject(data);
        })
        .catch((error) => console.error('Error fetching Project:' + name, error));
    }

    useEffect(() => {
        fetchProjectDetails();
    }, [name]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mainContainer'>
            <div className='projectWrapper'>
                <div className='profileHeader'>
                    <h1>Project</h1>
                </div>
                <img src={project.logo}/>
                {project.main_description && (
                    project.main_description.map(desc => (
                        <p key={desc.id}>{desc.text}</p>
                    ))
                )}
                {project.video && project.video.length > 0 && (
                    project.video.map((videoUrl, index) => (
                        <video key={index} controls>
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ))
                )}
                <div className='imageSection'>
                    <div className='imageContainer'>
                        {project.spotlight && project.spotlight.length > 0 && (
                            <CardStack items={
                                project.spotlight.map(image => (
                                    <ImageCard key={project.id}image={image} />
                                ))
                            } />
                        )}
                    </div>
                    <div className='imageDesc'>
                        {project.image_description && (
                            project.image_description.map(imgDesc => (
                                <p key={imgDesc.id}>{imgDesc.text}</p>
                            ))
                        )}
                    </div>
                </div>

                {project.extra_detail && (
                    project.extra_detail.map(detail => (
                        <p key={detail.id}>{detail.text}</p>
                    ))
                )}
                <div className='overflowGrid'>
                    {project.overflow && project.overflow.length > 0 && (
                        project.overflow.map(image => (
                            <img key={image.id} src={image} />
                        ))
                    )}
                </div>
            </div>
    </div>
  );
};

export default ProjectDetails;

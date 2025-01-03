import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CardStack from '../../components/CardStack/CardStack';
import ImageCard from '../../components/CardTypes/ImageCard';

import './ProjectDetails.css';

const ProjectDetails = () => {
    const { name } = useParams(); // Get project name from URL
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);

    function fetchProjectDetails() {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/projects/${name}`)
        .then((response) => response.json())
        .then((data) => {
            setProject(data);
            setLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
            console.error('Error fetching Project:' + name, error)
            setLoading(false); // Set loading to false even if there's an error
        });
    }

    useEffect(() => {
        fetchProjectDetails();
    }, [name]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mainContainer'>
        {loading ? ( // Show loading animation if still loading
            <div className="detailsLoadingContainer">
                <div className='loadingElement' style={{height:'50px', width: '150px'}}/>
                <div className='loadingElement' style={{height:'50px', width: '250px'}}/>
                <div className='loadingParagraph'>
                    <div className='loadingElement' style={{height:'35px', width: '80%'}}/>
                    <div className='loadingElement' style={{height:'35px', width: '75%'}}/>
                    <div className='loadingElement' style={{height:'35px', width: '90%'}}/>
                </div>
                <div className='loadingParagraph'>
                    <div className='loadingElement' style={{height:'35px', width: '93%'}}/>
                    <div className='loadingElement' style={{height:'35px', width: '72%'}}/>
                    <div className='loadingElement' style={{height:'35px', width: '44%'}}/>
                </div>
                <div className='loadingElement' style={{height:'425px', width: '100%'}}/>
            </div>
        ) : (
            <div className='projectWrapper'>
                <div className='profileHeader'>
                    <h1>{name}</h1>
                </div>
                <img src={project.logo}/>
                {project.main_description && (
                    project.main_description.map(desc => (
                        <p key={desc.id}>{desc.text}</p>
                    ))
                )}
                {project.video && project.video.length > 0 && (
                    project.video.map((videoUrl, index) => (
                        <video key={index} autoPlay loop muted controls>
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
        )}
    </div>
  );
};

export default ProjectDetails;

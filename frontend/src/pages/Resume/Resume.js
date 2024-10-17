import React, { useEffect, useState } from 'react';
import './Resume.css';

import { ReactComponent as DateIcon } from '../../assets/icons/dateIcon.svg'
import { ReactComponent as PinIcon } from '../../assets/icons/pinIcon.svg'

function Resume() {
    const [profiles, setProfiles] = useState([]);
    const [experiences, setexperiences] = useState([]);

    function getProfile() {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/resume/profile`)
        .then((response) => response.json())
        .then((data) => {
            setProfiles(data);
        })
        .catch((error) => console.error('Error fetching profile:', error));
    }

    function getWorkExperience() {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/resume/workExperience`)
        .then((response) => response.json())
        .then((data) => {
            setexperiences(data);
        })
        .catch((error) => console.error('Error fetching experiences:', error));
    }

    useEffect(() => {
        getProfile();
        getWorkExperience();
    }, []);

    function getYearFromDate(dateString) {
        return dateString.split('-')[0];
    }
    
    return (
        <div className='mainContainer'>
            <div className='resumeWrapper'>
                <div className='profileWrapper'>
                    <div className='profileHeader'>
                        <h1>Profile</h1>
                        <button className='downloadButton'>Download PDF</button>
                    </div>
                    <br/>
                    {profiles.map(profile => (
                        <p key={profile.id}>{profile.profile_text}</p>
                    ))}
                </div>
                <div className='experienceWrapper'>
                    <h1>Work & Experiences</h1>
                    <div className='experienceContainer'>
                        <div className='timelineContainer'>
                            <div className='ballContainer'>
                                <div className='ball'/>
                            </div>
                            <div className='line'/>
                        </div>
                        {experiences.map(experience => (
                        <div key={experience.id} className='detailsContainer'>
                            <h2>{experience.position}</h2>
                            <h3>{experience.company.name}</h3>
                            <div className='labelContainer'>
                                <div className='labeledIcon'>
                                    <DateIcon className='icon' />
                                    <p>{getYearFromDate(experience.start_date)} - {experience.end_date == null ? "Present" : getYearFromDate(experience.end_date)}</p>
                                </div>
                                <div className='labeledIcon'>
                                    <PinIcon className='icon' />
                                    <p>{experience.company.location}</p>
                                </div>
                            </div>
                            {experience.job_descriptions.map(description =>(
                                <p className={description.bullet ? "bullet" : ""}
                                key={description.id}>{description.description}</p>
                            ))}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;

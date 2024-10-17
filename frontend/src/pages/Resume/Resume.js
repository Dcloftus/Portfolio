import React, { useEffect, useState } from 'react';
import './Resume.css';

import { ReactComponent as DateIcon } from '../../assets/icons/dateIcon.svg'
import { ReactComponent as PinIcon } from '../../assets/icons/pinIcon.svg'

function Resume() {
    const [profiles, setProfiles] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [educations, setEducations] = useState([]);

    function getProfile() {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/resume/profile`)
        .then((response) => response.json())
        .then((data) => {
            setProfiles(data);
        })
        .catch((error) => console.error('Error fetching Profile:', error));
    }

    function getWorkExperience() {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/resume/workExperience`)
        .then((response) => response.json())
        .then((data) => {
            setExperiences(data);
        })
        .catch((error) => console.error('Error fetching Experiences:', error));
    }

    function getEducation() {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/resume/education`)
        .then((response) => response.json())
        .then((data) => {
            setEducations(data);
        })
        .catch((error) => console.error('Error fetching Education:', error));
    }

    useEffect(() => {
        getProfile();
        getWorkExperience();
        getEducation();
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
                        {experiences.map((experience, index) => (
                        <div key={experience.id} className='experienceContainer'>
                            <div className='timelineContainer'>
                                <div className='ballContainer'>
                                    <div className='ball'/>
                                </div>
                                {index === experiences.length - 1 ? (
                                    <div className='endingLine'>
                                        <div className='line1'/>
                                        <div className='line2'/>
                                        <div className='line3'/>
                                    </div>
                                ) : 
                                    <div className='line'/>
                                }
                            </div>
                            <div className='detailsContainer'>
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
                        </div>
                    ))}
                </div>
                <div className='experienceWrapper'>
                    <h1>Education</h1>
                        {educations.map((education, index) => (
                        <div className='experienceContainer'>
                            <div className='timelineContainer'>
                                <div className='ballContainer'>
                                    <div className='ball'/>
                                </div>
                                {index === educations.length - 1 ? (
                                    <div className='endingLine'>
                                        <div className='line1'/>
                                        <div className='line2'/>
                                        <div className='line3'/>
                                    </div>
                                ) : 
                                    <div className='line'/>
                                }
                            </div>
                            <div key={education.id} className='detailsContainer'>
                                <h2>{education.degree}</h2>
                                <h3>{education.school}</h3>
                                <div className='labelContainer'>
                                    <div className='labeledIcon'>
                                        <DateIcon className='icon' />
                                        <p>{getYearFromDate(education.start_date)} - {education.end_date == null ? "Present" : getYearFromDate(education.end_date)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resume;

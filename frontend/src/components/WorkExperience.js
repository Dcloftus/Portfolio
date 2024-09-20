import React, { useState, useEffect } from 'react';

function WorkExperience() {
    const [workExperience, setWorkExperience] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/workExperience/`)
            .then((response) => response.json())
            .then((data) => setWorkExperience(data))
            .catch((error) => console.error('Error fetching work experience:', error));
    }, []);

    return (
        <div>
            <h2>Work Experience</h2>
            <ul>
                {workExperience.map((workExperience) => (
                    <li key={workExperience.id}>{workExperience.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default WorkExperience;

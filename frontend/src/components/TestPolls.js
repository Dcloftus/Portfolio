import React, { useState, useEffect } from 'react';

function Polls() {
    const [polls, setPoll] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/polls/`)
            .then((response) => response.json())
            .then((data) => setPoll(data))
            .catch((error) => console.error('Error fetching poll:', error));
    }, []);

    return (
        <div>
            <h2>Polls</h2>
            <ul>
                {polls.map((polls) => (
                    <li key={polls.id}>{polls.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Polls;

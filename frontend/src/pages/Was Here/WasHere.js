import React, { useState, useEffect } from 'react';
import './WasHere.css';
import wasHereHeader from '../../assets/images/WasHereHeader.png'
import { ReactComponent as Section } from '../../assets/sections/WasHere.svg';

function WasHere() {
    const [marks, setMarks] = useState([]);
    const [styledMarks, setStyledMarks] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/wasHere`)
            .then((response) => response.json())
            .then((data) => {
                setMarks(data);
                generateRandomStyles(data); // Generate styles after fetching marks
            })
            .catch((error) => console.error('Error fetching marks:', error));
    }, []);

    // Generate random positions and font weight for marks
    const generateRandomStyles = (marks) => {
        const newStyledMarks = marks.map(mark => {
            const containerWidth = 80; // Percentage of the width of the container
            const containerHeight = 80; // Percentage of the height of the container
            const tiltAngle = Math.random() * 20 - 10; // Random tilt between -10 and 10 degrees

            // Random font weight from the given options
            const fontWeights = [300, 400, 500, 600];
            const randomFontWeight = fontWeights[Math.floor(Math.random() * fontWeights.length)];

            return {
                ...mark,
                style: {
                    position: 'absolute',
                    top: `${Math.random() * containerHeight}%`,
                    left: `${Math.random() * containerWidth}%`,
                    transform: `rotate(${tiltAngle}deg)`,
                    fontWeight: randomFontWeight,
                    transition: 'transform 0.3s ease', // Optional: Smooth transition
                },
            };
        });
        setStyledMarks(newStyledMarks); // Set the styled marks state
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/wasHere/addMark`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",  // Set the correct headers
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    mark_date: new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD format
                }),
            });
            //const resJson = await res.json();
            console.log(res.status);
            console.log(JSON.stringify(res.json()));
            if (res.status === 200 || res.status === 201) {
                setName("");
                setMessage("Mark has been made!");
            } else {
                setMessage("Mark was not added...");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div style={{position: 'relative',top: '-40px'}}>
            <Section style={{position: 'relative',top: '15px', width: '100%'}}/>
            <div className='wasHereContainer'>
                <img src={wasHereHeader} alt='Was Here' className='wasHereHeader' />
                <div className='randomContainer'>
                    <ul className='randomList'>
                        {styledMarks.map(mark => (
                            <li key={mark.id} style={mark.style}>
                                {mark.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <form className='wasHereForm' onSubmit={handleSubmit}>
                    <div className='wasHereInputContainer'>
                        <input
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        className= 'wasHereInput'
                        />
                        <button className='wasHereButton' type="submit">Was Here</button>
                    </div>
                    <div className="wasHereMessage">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>
            <Section style={{position: 'relative',top: '-15px', transform: 'rotate(180deg)', width: '100%'}}/>
        </div>
    );
}

export default WasHere;

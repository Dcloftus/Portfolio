import React, { useState, useEffect } from 'react';
import './WasHere.css';
import wasHereHeader from '../../assets/images/WasHereHeader.png'
import { ReactComponent as Section } from '../../assets/sections/WasHere.svg';

function WasHere() {
    const [marks, setMarks] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const fontWeights = [300, 400, 500, 600]

    function gatherMarks() {
        console.log("Called Gather Marks");
        fetch(`${process.env.REACT_APP_API_BASE_URL}/wasHere`)
            .then((response) => response.json())
            .then((data) => {
                setMarks(data);
            })
            .catch((error) => console.error('Error fetching marks:', error));
    }

    useEffect(() => {
        gatherMarks();
    }, []);

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
                    mark_date: new Date().toISOString().split('T')[0],
                    location_top: (Math.random() * 100).toFixed(2), // Times 100 will make the random number a percent of the container it is in.
                    location_left: (Math.random() * 100).toFixed(2),
                    location_rotation: (Math.random() * 20 - 10).toFixed(2),
                    font_weight: fontWeights[Math.floor(Math.random() * fontWeights.length)],

                }),
            });
            //const resJson = await res.json();
            console.log(res.status);
            const resJson = await res.json();
            console.log(resJson);  // Log the actual JSON response
            if (res.status === 200 || res.status === 201) {
                setName("");
                setMessage("Mark has been made!");
                gatherMarks();
            } else {
                setMessage("Mark was not added...");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div style={{position: 'relative'}}>
            <Section style={{position: 'absolute',top: '-20px', width: '100%'}}/>
            <div className='wasHereContainer'>
                <img src={wasHereHeader} alt='Was Here' className='wasHereHeader' />
                <div className='randomContainer'>
                    <ul className='randomList'>
                        {marks.map(mark => (
                            <li key={mark.id}
                            style={{position:'absolute',
                            top:`${mark.location_top}%`,
                            transform: `translateY(-${mark.location_top}%) translateX(-${mark.location_left}%) rotate(${mark.location_rotation}deg)`,
                            left:`${mark.location_left}%`,
                            fontWeight:mark.font_weight,
                            transition: 'transform 0.3s ease'}}
                            >
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
            <Section style={{position: 'absolute', bottom: '-20px', transform: 'rotate(180deg)', width: '100%'}}/>
        </div>
    );
}

export default WasHere;

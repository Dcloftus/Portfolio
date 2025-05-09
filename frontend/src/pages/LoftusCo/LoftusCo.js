import React, { useState } from 'react';
import './LoftusCo.css';

export default function LoftusCo() {
    const [thickness, setThickness] = useState('');
    const [length, setLength] = useState('');
    const [arborDiameter, setArborDiameter] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleCalculate = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/loftusco/spool-diameter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    webbing_thickness: parseFloat(thickness),
                    webbing_length: parseFloat(length),
                    arbor_diameter: parseFloat(arborDiameter),
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setResult(data);
            setError('');
        } catch (err) {
            console.error(err);
            setError('Something went wrong. Check your input values.');
            setResult(null);
        }
    };

    return (
        <div className='loftusCoWrapper'>
            <div className='loftusCoContainer'>
                <div className='headerContainer'>
                    <h1>Loftus Co Utilities Hub</h1>
                    <p>Welcome to the Loftus Co Utilities Hub — a centralized toolkit designed to support the development, design, and growth of the Loftus Co brand and products. Whether you're engineering hardware, managing costs, or organizing inventory, this space is home to purpose-built tools that streamline decision-making and accelerate progress.</p>
                    <br />
                    <p>From precision calculators like our spool diameter estimator to future pricing models and inventory trackers, each utility is crafted to meet real-world needs specific to Loftus Co's workflows and product development process.</p>
                    <br />
                    <p>This is more than just a toolbox — it’s a growing ecosystem of functions and features that power the ideas behind Loftus Co.</p>
                    <br />
                </div>
                <div className='utilityContainer'>
                    <h4>Spool Diameter Calculator</h4>
                    <div className='spoolCalcInputsContainer'>
                        <div className='spoolCalcInput'>
                            <label>Webbing Thickness (mm):</label>
                            <input
                                type='number'
                                value={thickness}
                                onChange={e => setThickness(e.target.value)}
                            />
                        </div>
                        <div className='spoolCalcInput'>
                            <label>Webbing Length (mm):</label>
                            <input
                                type='number'
                                value={length}
                                onChange={e => setLength(e.target.value)}
                            />
                        </div>
                        <div className='spoolCalcInput'>
                            <label>Arbor Diameter (mm):</label>
                            <input
                                type='number'
                                value={arborDiameter}
                                onChange={e => setArborDiameter(e.target.value)}
                            />
                        </div>
                        <button className='submitButton' onClick={handleCalculate}>Calculate</button>
                    </div>
                    <div className='spoolCalcRespContainer'>
                        <p>Spool Outer Diameter: <span style={{color:`var(--primary-color)`, fontWeight:900}}>{result ? `${result.spool_outer_diameter} mm` : '—'}</span></p>
                        <p>Turns: <span style={{color:`var(--primary-color)`, fontWeight:900}}>{result ? result.turns : '—'}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

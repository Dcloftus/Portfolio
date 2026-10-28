import React, { useState } from 'react';
import './Playground.css';

import StickerWrapper from '../../components/StickerWrapper/StickerWrapper'
import TestComponenet from '../../components/StickerWrapper/TestComponent'
import HoverText from '../../components/HoverText/HoverText'

export default function Playground() {
    const [weight, setWeight] = useState(400);
    const [width, setWidth] = useState(100);

    const fontStyle = {
        fontFamily: "'M PLUS Code Latin', monospace",
        fontVariationSettings: `'wght' ${weight}, 'wdth' ${width}`,
        fontSize: '2rem',
        margin: '1rem 0',
    };

    return (
        <div className='playgroundWrapper'>
            <div className='playgroundContainer'>
                <h1>Playground</h1>
                <h4>A place for me to play with mini development ideas to put in different areas of my portolio or in other apps altogether!</h4>
            </div>
            <StickerWrapper>
                <TestComponenet />
            </StickerWrapper>
            <div className='playgroundContainer'>
                <h2>Variable Font Demo: M PLUS Code Latin</h2>
                <div style={fontStyle}>
                    Hello Variable World
                </div>
                <label style={{ display: 'flex', justifyContent:'space-between', width: '50%', marginTop: '1rem' }}>
                    Weight ({weight}):
                    <input
                    type="range"
                    min="100"
                    max="700"
                    step="1"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    />
                </label>
                <label style={{ display: 'flex', justifyContent:'space-between', width: '50%', marginTop: '1rem' }}>
                    Width ({width}):
                    <input
                    type="range"
                    min="100"
                    max="125"
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    />
                </label>
            </div>
            <div className='playgroundContainer'>
                <HoverText fontSize="3rem" color="var(--primary-color)">
                    This is a reactive text component
                </HoverText>
            </div>
        </div>
    );
}
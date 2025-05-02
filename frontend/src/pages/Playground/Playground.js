import React, { useState } from 'react';
import './Playground.css';

import StickerWrapper from '../../components/StickerWrapper/StickerWrapper'
import TestComponenet from '../../components/StickerWrapper/TestComponent'

export default function Playground() {


    return (
        <div className='playgroundWrapper'>
            <div className='playgroundContainer'>
                <h1>Playground</h1>
                <h4>A place for me to play with mini development ideas to put in different areas of my portolio or in other apps altogether!</h4>
            </div>
            <StickerWrapper>
                <TestComponenet />
            </StickerWrapper>
        </div>
    );
}
import React from 'react';
import './TestComponent.css';

export default function TestComponenet() {
  return (
    <div className="playground-box">
        <div className='playgroundSection'>
            <h2>Sticker Wrapper</h2>
            <p>Use the tool bar on the right hand side to select an active sticker!</p>
            <p>Click anywhere to place stickers! </p>
            <p>Using the 'X' button on the tool bar to clear all current stickers.</p>
            <div className="playground-grid">
                <div className="box red">A</div>
                <div className="box blue">B</div>
                <div className="box green">C</div>
            </div>
        </div>
    </div>
  );
}
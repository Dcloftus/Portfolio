import React, { useState } from 'react';
import './StickerWrapper.css';

import star from '../../assets/stickers/Star.png';
import heart from '../../assets/stickers/Heart.png';
import smiley from '../../assets/stickers/Smiley.png';
import exit from '../../assets/icons/Exit.png';

const stickers = {
  star,
  heart,
  smiley,
};

export default function StickerWrapper({ children }) {
    const [selectedSticker, setSelectedSticker] = useState('star');
    const [placedStickers, setPlacedStickers] = useState([]);
  
    const handleCanvasClick = (e) => {
      // Avoid placing stickers when clicking on control buttons
      const isControlClick = e.target.closest('.sticker-controls');
      if (isControlClick) return;
  
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      setPlacedStickers((prev) => [...prev, { x, y, type: selectedSticker }]);
    };

    const clearStickers = () => {
      setPlacedStickers([]);
    }
  
    return (
      <div className="sticker-wrapper">
        <div className="sticker-controls">
          {Object.entries(stickers).map(([key, src]) => (
            <button
              key={key}
              onClick={() => setSelectedSticker(key)}
              className={`sticker-button ${selectedSticker === key ? 'selected' : ''}`}
            >
              <img src={src} alt={key} className="sticker-icon" />
            </button>
          ))}
          <button className='sticker-button' style={{height: '50px'}} onClick={() =>clearStickers()}><img src={exit} style={{height: '25px'}} /></button>
        </div>
  
        <div
          className="sticker-overlay"
          onClick={handleCanvasClick}
          style={{
            cursor: `url(${stickers[selectedSticker]}) 20 20, auto`
          }}
        >
          {children}
          {placedStickers.map((sticker, index) => (
            <img
              key={index}
              src={stickers[sticker.type]}
              alt={sticker.type}
              className="placed-sticker"
              style={{ top: `${sticker.y - 20}px`, left: `${sticker.x - 20}px` }}
            />
          ))}
        </div>
      </div>
    );
  }
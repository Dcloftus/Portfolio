import React, { useState } from 'react';

const MAX_WEIGHT = 700;
const MIN_WEIGHT = 100;
const STEP_WEIGHT = 100;

const MAX_WIDTH = 125;
const MIN_WIDTH = 100;
const STEP_WIDTH = 5;

const HoverText = ({
  children,
  fontSize = '2rem',
  color = 'inherit',
}) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const text = typeof children === 'string' ? children : '';
  const maxWeightSteps = (MAX_WEIGHT - MIN_WEIGHT) / STEP_WEIGHT;
  const maxWidthSteps = (MAX_WIDTH - MIN_WIDTH) / STEP_WIDTH;

  return (
    <div
      style={{
        fontFamily: "'M PLUS Code Latin', monospace",
        display: 'flex',
        flexWrap: 'wrap',
        whiteSpace: 'pre-wrap',
        cursor: 'default',
      }}
    >
      {text.split('').map((char, index) => {
        const distance = hoverIndex === null ? Infinity : Math.abs(index - hoverIndex);

        // Cap the number of falloff steps
        const weightStep = Math.min(distance, maxWeightSteps);
        const widthStep = Math.min(distance, maxWidthSteps);

        const weight = MAX_WEIGHT - weightStep * STEP_WEIGHT;
        const width = MAX_WIDTH - widthStep * STEP_WIDTH;

        return (
          <span
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
              fontVariationSettings: `'wght' ${weight}, 'wdth' ${width}`,
              transition: 'all 0.2s ease',
              fontSize,
              color,
              display: 'inline-block',
              whiteSpace: 'pre',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </div>
  );
};

export default HoverText;

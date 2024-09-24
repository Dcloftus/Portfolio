import React, { useState, useEffect } from 'react';
import './PillLabels.css';

const PillLabels = () => {
    const labels = ['Developer', 'Designer', 'Engineer', 'Maker', 'Runner'];
    const colorVariables = ['--figma-green', '--figma-red', '--figma-pink', '--figma-purple', '--figma-blue']; // colorVariables for each label
    const [currentLabelIndex, setCurrentLabelIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // Start by fading out
            setTimeout(() => {
                setCurrentLabelIndex((prevIndex) => (prevIndex + 1) % labels.length);
                setIsVisible(true); // Then fade in the next label
            }, 1000); // Match this timeout with the fade-out duration
        }, 3000); // Total cycle time (fade out + display + fade in)

        return () => clearInterval(interval);
    }, [labels.length]);

    // Function to get the CSS variable value
    const getColor = (index) => {
        const rootStyles = getComputedStyle(document.documentElement);
        return rootStyles.getPropertyValue(colorVariables[index]);
    };

    return (
        <div className="pillContainer">
            <div
                className={`pillLabel ${isVisible ? 'fadeIn' : 'fadeOut'} space-mono-regular`}
                style={{ backgroundColor: getColor(currentLabelIndex).trim() }} // Set the background color
            >
                {labels[currentLabelIndex]}
            </div>
        </div>
    );
};

export default PillLabels;

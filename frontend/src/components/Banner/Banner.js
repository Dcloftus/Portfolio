import React, { useState, useEffect, useRef } from 'react';
import './Banner.css';

/*======================================================
| This Componenet will take in a few props
|   1. Text
|   2. Icon
|   3. Direction of Scroll
|   4. Rotation in Degrees
========================================================*/
function Banner({ text, icon, direction, rotation }) {
    const bannerContainerRef = useRef(null); // Reference for bannerContainer
    const [bannerHeight, setBannerHeight] = useState(0); // State to store banner height

    useEffect(() => {
        if (bannerContainerRef.current) {
            const containerHeight = bannerContainerRef.current.getBoundingClientRect().height; // Get the height of the bannerContainer
            console.log(containerHeight);
            setBannerHeight(containerHeight); // Update the height state
        }
    }, [bannerContainerRef]); // Run once when the component is mounted

    return (
        <div className='bannerWrapper' style={{ height: `${bannerHeight}px` }}>
            <div className={`bannerContainer ${direction === 'backward' ? 'scroll-backward' : 'scroll-forward'}`}
            ref={bannerContainerRef}
            style={{transform: `rotate(${rotation}deg)`}}
            >
                <div className='scrollContent'>
                    {/* Repeat the content twice for seamless scrolling */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className='bannerItem'>
                            {[...Array(10)].map((_, j) => (
                                <div key={j} className='item'>
                                    <p>{text}</p>
                                    {icon}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner;

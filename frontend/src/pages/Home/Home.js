import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

// Sections
import WasHere from '../Was Here/WasHere';
import Projects from '../Projects/Projects'
import AboutMe from '../About/About'
import Contact from '../Contact/Contact'

// Components
import PillLabels from '../../components/PillLabels/PillLabels'
import Banner from '../../components/Banner/Banner'
import {ReactComponent as SendIcon} from '../../assets/icons/Send.svg'

// Images
import hero from '../../assets/images/DanielHerox2.png'

import { ReactComponent as StarLg } from '../../assets/icons/StarLg.svg';
import { ReactComponent as StarMd } from '../../assets/icons/StarMd.svg';
import { ReactComponent as StarSm } from '../../assets/icons/StarSm.svg';
import { ReactComponent as TadpoleLg } from '../../assets/icons/TadpoleLg.svg';
import { ReactComponent as TadpoleMd } from '../../assets/icons/TadpoleMd.svg';
import { ReactComponent as TadpoleSm } from '../../assets/icons/TadpoleSm.svg';

function Home() {
    const waveRef = useRef(null);
    const timeoutIdRef = useRef(null);  // Ref to store the timeout ID
    const [UIFlow, setUIFlow] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);


    useEffect(() => {
        function randomWave() {
            const randomWaves = Math.floor(Math.random() * 4) + 3; // Between 3 and 6 waves
            const randomInterval = Math.floor(Math.random() * 5000) + 2000; // Random interval between 2 and 7 seconds
    
            if (waveRef.current) {
                waveRef.current.style.animation = `wave 1s ease-in-out ${randomWaves}`;
            }
    
            // Reset the animation after it finishes and schedule the next wave cycle
            timeoutIdRef.current = setTimeout(() => {
                if (waveRef.current) {
                waveRef.current.style.animation = 'none'; // Reset animation
                }
    
                timeoutIdRef.current = setTimeout(randomWave, randomInterval); // Schedule next wave cycle
            }, randomWaves * 1000); // Duration of one wave * number of waves
        }
    
        // Start the first wave after an initial delay
        timeoutIdRef.current = setTimeout(randomWave, 1000);
    
        // Clean up on component unmount
        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current); // Clear any pending timeouts
            }
        };
    }, []);

    const triggerUIPopup = () => {
        setShouldRender(true);
        setTimeout(() => setUIFlow(true), 10);  // Delay to trigger fade-in

        setTimeout(() => {
            setUIFlow(false);
            setTimeout(() => setShouldRender(false), 500); // Wait for fade-out to finish
        }, 3000);
    };

    return (
        <div>
            <div className='heroContainer'>
                <div className='wrapper'>
                    <div className='heroContentContainer'>
                        <div className='heroTextContainer'>
                            <h4>Hey there! <div className="wave" ref={waveRef}>👋🏼</div></h4>
                            <h2>I'm Daniel Loftus,</h2>
                            <div className='pillContainer'>
                                <PillLabels />
                            </div>
                        </div>
                        <div className='heroBackground'>
                            <img src={hero} alt='Daniel' className='hero' />
                            <button className='UIFlowButton' onClick={triggerUIPopup}/>
                            {shouldRender && (
                                <div className={`UIFlowPopup ${UIFlow ? 'fadeIn' : 'fadeOut'}`}>
                                    <p>Feels like a button right?!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='StarsContainer'>
                    <StarLg className='StarLg' />
                    <StarSm className='StarSm' />
                    <StarMd className='StarMd' />
                </div>
                <div className='TadpoleContainer'>
                    <TadpoleLg className='TadpoleLg' />
                    <TadpoleMd className='TadpoleMd' />
                    <TadpoleSm className='TadpoleSm' />
                </div>
            </div>
            <WasHere />
            <Projects />
            <AboutMe />
            <div style={{height:'80px', backgroundColor: `var(--background-color)`}}>
                <Banner text="Get in Touch" icon={<SendIcon />} direction="backward" rotation={-2} />
                <Banner text="Contact Me" icon={<SendIcon />} direction="forward" rotation={4} />
            </div>
            <Contact />
        </div>
    );
}

export default Home;

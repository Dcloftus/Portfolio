import React, { useEffect, useRef } from 'react';
import './Home.css';

// Sections
import WasHere from '../Was Here/WasHere';
import AboutMe from '../About/About'
import Contact from '../Contact/Contact'

// Components
import PillLabels from '../../components/PillLabels/PillLabels'
import Banner from '../../components/Banner/Banner'
import {ReactComponent as SendIcon} from '../../assets/icons/Send.svg'

// Images
import hero from '../../assets/images/DanielHerox2.png'
import wave from '../../assets/images/Wave.png'

import { ReactComponent as StarLg } from '../../assets/icons/StarLg.svg';
import { ReactComponent as StarMd } from '../../assets/icons/StarMd.svg';
import { ReactComponent as StarSm } from '../../assets/icons/StarSm.svg';
import { ReactComponent as TadpoleLg } from '../../assets/icons/TadpoleLg.svg';
import { ReactComponent as TadpoleMd } from '../../assets/icons/TadpoleMd.svg';
import { ReactComponent as TadpoleSm } from '../../assets/icons/TadpoleSm.svg';

function Home() {
    const waveRef = useRef(null);

    useEffect(() => {
        function randomWave() {
          const randomWaves = Math.floor(Math.random() * 4) + 3; // Between 3 and 6 waves
          const randomInterval = Math.floor(Math.random() * 5000) + 2000; // Random interval between 2 and 7 seconds
    
          // Set the animation with a random number of iterations
          waveRef.current.style.animation = `wave 1s ${randomWaves}  ease-in-out`;
    
          // Reset the animation after it finishes and schedule the next wave
          setTimeout(() => {
            waveRef.current.style.animation = 'none'; // Reset animation
            setTimeout(randomWave, randomInterval); // Schedule next wave
          }, randomWaves * 1000); // Duration of one wave * number of waves
        }
    
        // Start the first wave after an initial delay
        setTimeout(randomWave, 1500);
    
        // Clean up on component unmount
        return () => {
          clearTimeout();
        };
      }, []);

    return (
        <div>
            <div className='heroContainer'>
                <div className='wrapper'>
                    <div className='StarsContainer'>
                        <StarLg className='StarLg' />
                        <StarSm className='StarSm' />
                        <StarMd className='StarMd' />
                    </div>
                    <div className='heroContentContainer'>
                        <div className='heroTextContainer'>
                            <h4>Hey there! <div className="wave" ref={waveRef}>👋🏼</div></h4>
                            <h2>I'm Daniel Loftus,</h2>
                            <div className='pillContainer'>
                                <PillLabels />
                            </div>
                        </div>
                        <div className='heroBackground'>
                            <button className='UIFlowButton'/>
                        </div>
                    </div>
                    <div className='TadpoleContainer'>
                        <TadpoleLg className='TadpoleLg' />
                        <TadpoleMd className='TadpoleMd' />
                        <TadpoleSm className='TadpoleSm' />
                    </div>
                </div>
                <img src={hero} alt='Daniel' className='hero' />
            </div>
            <WasHere />
            <AboutMe />
            <Banner text="Get in Touch" icon={<SendIcon />} direction="backward" rotation={-2} />
            <Banner text="Contact Me" icon={<SendIcon />} direction="forward" rotation={4} />
            <Contact />
        </div>
    );
}

export default Home;

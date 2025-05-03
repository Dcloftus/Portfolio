import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
import Logo from '../../assets/images/LoftusCo/Logo.png'
import Port from '../../assets/images/LoftusCo/Port.png'
import Stern from '../../assets/images/LoftusCo/Stern.png'
import Bow from '../../assets/images/LoftusCo/Bow.png'

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
            <div style={{height:'80px', backgroundColor: `var(--background-color)`}}>
                <Banner text="Featured Project" icon={<SendIcon />} direction="backward" rotation={-2} />
            </div>
            <div className='featuredProjectSection'>
                <div className='featuredProjectContainer'>
                    <h1>Featured Project</h1>
                    <div className='content'>
                        <div className='left'>
                            <div className='contentGroup'>
                                <div className='title'>
                                    <img src={Logo} />
                                </div>
                                <div className='tags'>
                                    <p className='tag' style={{backgroundColor: '#FF7262'}}>Mechanical Engineering</p>
                                    <p className='tag' style={{backgroundColor: '#F24E1E'}}>Design</p>
                                    <p className='tag' style={{backgroundColor: '#A259FF'}}>Business</p>
                                </div>
                                <div className='text'>
                                    <p>
                                        Loftus Co is my creative outlet, born from a love of boating and a passion for engineering. The Nautilus Fender was inspired by a moment at a boat dealership when I watched a salesman struggle to juggle fenders with a trailing rope and all of the other required gear. I realized there had to be a better way, and the idea of integrating rope storage into the fender was born.
                                        The Nautilus Fender combines innovation and practicality. Its internal rope storage system allows for quick, knot-free height adjustments. The sleek, faceted design—reminiscent of modern wake boats—offers more than aesthetics; the squared-off shape provides extra stability when in use. To ensure longevity, I made the shell user-replaceable, allowing owners to swap it out for a fresh look or repair without replacing the entire fender.
                                        Prototyping this vision required crafting a custom 3D-printed shell, meticulously sanding and refining it to perfection before creating a two-part mold. Using flexible foam, I brought the design to life, combining durability with the exact look I envisioned. I also developed “The Claw,” a hook integrated into the rope, providing a versatile way to secure the fender to cleats or other anchor points.
                                        Every detail of Nautilus is designed to enhance functionality and usability while reflecting the innovative spirit behind Loftus Co. It’s a fusion of form, function, and creativity, inspired by the adaptable and resilient sea creature it’s named after.
                                    </p>
                                </div>
                            </div>
                            <div className='cta'>
                                <Link className='ctaButton' to="/projects/Loftus%20Co">See More</Link>
                            </div>
                        </div>
                        <div className='right'>
                            <div>
                                <img id='stern' src={Stern} />
                            </div>
                            <div className='text'>
                                <h1>Nautilus</h1>
                                <h4>The boat fender reimagined</h4>
                            </div>
                            <div className='images'>
                                <img id='bow' src={Bow} />
                                <img id='port' src={Port} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

import React from 'react';
import './Home.css';

// Sections
import WasHere from '../Was Here/WasHere';
import AboutMe from '../About/About'

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
                            <h4>Hey there! 👋</h4>
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
        </div>
    );
}

export default Home;

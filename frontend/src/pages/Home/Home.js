import React from 'react';
import './Home.css';

// Images
import hero from '../../assets/images/DanielHerox2.png'
import PillLabels from '../../components/PillLabels/PillLabels';

function Home() {
    return (
        <div>
            <div className='heroContainer'>
                <div className='wrapper'>
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
                </div>
                <img src={hero} className='hero' />
            </div>

        </div>
    );
}

export default Home;

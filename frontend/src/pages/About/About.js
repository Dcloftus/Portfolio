import React from 'react';
import './About.css'

// Images
import DanielAboutMe from '../../assets/images/DanielAboutMex2.png'

// Icons
import { ReactComponent as Pin } from '../../assets/icons/Pin.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/LinkedIn.svg';
import { ReactComponent as Instagram } from '../../assets/icons/Instagram.svg';

function About() {
    return (
        <div className='mainContainer'>
            <div className='aboutWrapper'>
                <h1>About Me</h1>
                <div className='aboutMeContainer'>
                    <div className='imageContainer'>
                        {/* Will Swap this out for an image carrosel component I build later maybe even 'live photos'???*/}
                        <img src={DanielAboutMe} alt='Image of Daniel Loftus' />
                    </div>
                    <div className='contentContainer'>
                        <div className='headerContainer'>
                            <div className='titleLinksContainer'>
                                <div>
                                    <h2>Daniel Loftus</h2>
                                </div>
                                <div style={{display:'flex', gap:'5px', alignItems:'center'}}>
                                    <LinkedIn />
                                    <Instagram />
                                </div>
                            </div>
                            <div className='location'>
                                <Pin />
                                <p>Kent Ohio</p>
                                <p><span>Wanting to Relocate</span></p>
                            </div>
                        </div>
                        <div className='descriptionContainer'>
                            <p>Hey there! Im Daniel, and Im hella passionite for design and other shit! Love creating things and all that stuff and want to work for a company that builds something that I am passionit about. Love Figma, Apple, Aviation.</p>
                        </div>
                        <div className='actionContainer last-child'>
                            <button>Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

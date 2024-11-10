import React from 'react';
import { Link } from 'react-router-dom';
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
                                    <a href='https://www.instagram.com/daniel_loftus34'><Instagram /></a>
                                    <a href='http://linkedin.com/in/daniel-loftus-384a46182'><LinkedIn /></a>
                                </div>
                            </div>
                            <div className='location'>
                                <Pin />
                                <p>Kent, Ohio</p>
                                <p><span>Wanting to Relocate</span></p>
                            </div>
                        </div>
                        <div className='descriptionContainer'>
                            <p>Hi there! I'm Daniel! A software developer with a knack for building things and bringing creative ideas to life. My professional work revolves around coding, but that’s just the beginning. I have a huge passion for design and engineering—whether I’m diving into UI/UX for web and mobile apps (like this portfolio!) or working on fun, small software projects that challenge me to learn something new.</p>
                            <p>Outside of work, you’ll find me experimenting with 3D printing and woodworking, where I can blend tech and craftsmanship. There’s something really satisfying about designing, prototyping, and creating tangible things from scratch. I believe that good design is more than just aesthetics; it’s about making something intuitive, engaging, and enjoyable to use.</p>
                            <p>In short, I'm a techie with a creative side, always on the lookout for my next project—whether it's in code or on the workbench. If you’re curious about my projects or just want to chat about design, engineering, or the best 3D printing hacks, don’t hesitate to reach out!</p>
                        </div>
                        <div className='actionContainer last-child'>
                            <Link className='contactMeButton' to="/contact">Contact Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

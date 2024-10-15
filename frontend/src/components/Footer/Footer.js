import React from 'react';
import './Footer.css';

import { ReactComponent as LinkedIn } from '../../assets/icons/LinkedIn-black.svg';
import { ReactComponent as Instagram } from '../../assets/icons/Instagram-black.svg';
import { ReactComponent as Signature } from '../../assets/icons/Signature.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='footerContainer'>
                <Signature />
                <div style={{display:'flex', gap:'5px', alignItems:'center'}}>
                    <LinkedIn />
                    <Instagram />
                </div>
                <div className='menuContainer'>
                    <div className='menuBlock'>
                        <ul>
                            <li className='listHeader'>Info</li>
                            <li>Home</li>
                            <li>About Me</li>
                            <li>Contact Me</li>
                        </ul>
                    </div>
                    <div className='menuBlock'>
                        <ul>
                            <li className='listHeader'>Projects</li>
                            <li>Software</li>
                            <li>Design</li>
                            <li>Engineering</li>
                        </ul>
                    </div>
                    <div className='menuBlock'>
                        <ul>
                            <li className='listHeader'>Portfolio</li>
                            <li>Work & Expierence</li>
                            <li>Skills</li>
                            <li>Education</li>
                        </ul>
                    </div>
                    <div className='menuBlock'>
                        <ul className='linksList'>
                            <li className='listHeader'>Admin</li>
                            <li className='link'>Sign In</li>
                        </ul>
                    </div>

                </div>
                <div className='copyWrite'>
                    Privacy Policy | Terms and Conditions | Copy Right
                </div>
            </div>
        </div>
    );
}

export default Footer;

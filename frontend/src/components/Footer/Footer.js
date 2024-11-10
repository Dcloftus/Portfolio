import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

import { ReactComponent as LinkedIn } from '../../assets/icons/LinkedIn-black.svg';
import { ReactComponent as Instagram } from '../../assets/icons/Instagram-black.svg';
import { ReactComponent as Signature } from '../../assets/icons/Signature.svg'

function Footer() {
    const ConditionalLink = ({ to, disabled, children }) => {
        return disabled ? (
            <span style={{ color: 'gray', cursor: 'not-allowed' }}>{children}</span>
        ) : (
            <Link to={to}>{children}</Link>
        );
    };

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
                            <li className='link'><Link to="/">Home</Link></li>
                            <li className='link'><Link to="/about">About Me</Link></li>
                            <li className='link'><Link to="/contact">Contact Me</Link></li>
                        </ul>
                    </div>
                    <div className='menuBlock'>
                        <ul>
                            <li className='listHeader'>Projects</li>
                            <li className='link'><Link to="/projects">All Projects</Link></li>
                            <li className='link'><ConditionalLink to="/" disabled={true}>Software</ConditionalLink></li>
                            <li className='link'><ConditionalLink to="/" disabled={true}>Design</ConditionalLink></li>
                            <li className='link'><ConditionalLink to="/" disabled={true}>Engineering</ConditionalLink></li>
                        </ul>
                    </div>
                    <div className='menuBlock'>
                        <ul>
                            <li className='listHeader'>Portfolio</li>
                            <li className='link'><Link to="/resume">Resume</Link></li>
                        </ul>
                    </div>
                    <div className='menuBlock'>
                        <ul className='linksList'>
                            <li className='listHeader'>Admin</li>
                            <li className='link'><a href="https://api.danielloftus.dev/admin">Sign In</a></li>
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

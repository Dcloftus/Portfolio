import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as UpArrow } from '../../assets/icons/UpArrow.svg';

import './NavBar.css';

function NavBar() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Show button after scrolling down 300px
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <nav className={`navbar m-plus-rounded-1c-black ${isOpen ? 'open' : ''} ${showScrollToTop ? 'expanded' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
            ☰
        </div>
        <ul className={`nav-items ${isOpen ? 'open' : ''}  ${showScrollToTop ? 'shift-left' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className='scrollToTopContainer'>
            {showScrollToTop && (
                <button className={`scrollToTop ${showScrollToTop ? 'show' : ''}`} onClick={scrollToTop}>
                    <UpArrow />
                </button>
            )}
        </div>
    </nav>
  );
}

export default NavBar;
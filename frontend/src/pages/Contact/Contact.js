import React from 'react';
import './Contact.css';

// Icons
import { ReactComponent as Pin } from '../../assets/icons/Pin.svg';

function Contact() {
    return (
        <div className='contactWrapper'>
            <div className='contactContainer'>
                <div className='contactContent'>
                    <h1>Get in Touch</h1>
                    <h4>work, business, or just to say hi! 👋</h4>
                </div>
                <div className='contactFormContainer'>
                    <form className='contactForm'>
                        <input type='text' placeholder='Name'/>
                        <input type='phone' placeholder='Email or Phone'/>
                        <textarea placeholder='Message' rows='5'/>
                    </form>
                    <button className='contactButton'>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;

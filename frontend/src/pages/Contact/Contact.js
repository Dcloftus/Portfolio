import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/contact/addContact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",  // Set the correct headers
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                }),
            });
            //const resJson = await res.json();
            console.log(res.status);
            console.log(JSON.stringify(res.json()));
            if (res.status === 200 || res.status === 201) {
                setName("");
                setEmail("");
                setMessage("");
                setErrorMessage("Message has been Sent!");
            } else {
                setErrorMessage("Message not sent, please try again later");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='contactWrapper'>
            <div className='contactContainer'>
                <div className='contactContent'>
                    <h1>Get in Touch</h1>
                    <h4>work, business, or just to say hi! 👋</h4>
                </div>
                <div className='contactFormContainer'>
                    <form className='contactForm' onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <textarea placeholder='Message' rows='5' value={message} onChange={(e) => setMessage(e.target.value)}/>
                        <button className='contactButton' type="submit">Send</button>
                    </form>
                    <div className="wasHereMessage">{errorMessage ? <p>{errorMessage}</p> : null}</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

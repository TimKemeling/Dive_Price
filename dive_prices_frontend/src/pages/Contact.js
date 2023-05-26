import React from 'react'
import IndoManta from "../assets/IndoManta.jpg"
import "../styles/Contact.css"

function Contact() {
    return (
        <div className="contact">
            <div style={{ backgroundImage: `url(${IndoManta})`}} className="contactLeft"></div>
            <div className="contactRight">
                <h1>Contact me</h1>

                <form id="contactForm" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" required placeholder="please enter your name" type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" required placeholder="please enter your email" type="email" />
                    <label htmlFor="comment">Comments</label>
                    <textarea rows="6" placeholder="please enter a comment" maxLength={500}></textarea>
                </form>
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}

export default Contact

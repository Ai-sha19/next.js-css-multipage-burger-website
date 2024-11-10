import React from 'react';
import "../../style/contact.css";
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <main className="contact-page">
            <h1 className="contact-heading">Get in Touch with Foodies Haven</h1>
            <p className="contact-para">
                Whether you have a question, feedback, or just want to say hi, feel free to reach out!
            </p>

            <section className="contact-info">
                <div className="info-item">
                    <FaPhoneAlt className="icon" />
                    <span>(123) 456-7890</span>
                </div>
                <div className="info-item">
                    <FaEnvelope className="icon" />
                    <span>info@foodieshaven.com</span>
                </div>
            </section>

            <section className="contact-form-section">
                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={4} placeholder="Your Message" required></textarea>


                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </section>
        </main>
    );
}

export default Contact;

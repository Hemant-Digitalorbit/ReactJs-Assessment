import React from 'react'
import '../assets/styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
        <h2 className="contact-header">Contact us</h2>
        <section className="contact-details">
            <div className="contact-item">
                <div className='contact-box'>
                    <div className="icon-circle" />
                    <h3>Head Office</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit</p>
            </div>

            <div className="contact-item">
                <div className='contact-box'>
                    <div className="icon-circle" />
                    <h3>Email</h3>
                </div>
                <p>candies123@gmail.com</p>
                <p>candies123@gmail.com</p>
            </div>

            <div className="contact-item">
                <div className='contact-box'>
                    <div className="icon-circle" />
                    <h3>Contact Us</h3>
                </div>
                <p>candies123@gmail.com</p>
                <p>candies123@gmail.com</p>
            </div>

        </section>
        <div className="contact-social">
                <h3>Follow us on</h3>
                <div className="social-icons">
                    <div className="icon-circle" />
                    <div className="icon-circle" />
                    <div className="icon-circle" />
                </div>
        </div>

        <section className="contact-form">
            <h3>Send us a message</h3>
            <form>
                <div className="form-group">
                    <select id="subject">
                        <option value="">Select Subject</option>
                        <option value="feedback">Feedback</option>
                        <option value="support">Support</option>
                        <option value="inquiry">General Inquiry</option>
                    </select>
                    <textarea id="message" placeholder="Type your message"></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </section>
    </div>
  )
}

export default ContactPage;

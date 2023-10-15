import React, { useEffect } from 'react';
import '../../Components/style.css';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'react-bootstrap';
import contact from '../Homepage/home.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS User ID, Service ID, and Template ID
    const serviceId = 'service_fucly09';
    const templateId = 'template_58ov562';
    const userId = 'pYWdHzMLsw6SRQePd';

    // Form data to send in the email
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent:', response);
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <div className="contact-page">
      <Container>
        <Row>
          <Col md={12} style={{ textAlign: 'center', color: 'white' }}>
            <h1>Feel free to connect with me</h1>
          </Col>
          <Col md={4} data-aos="fade-right">
            <div className="picture">
              <img src={contact} alt="" width="400" />
            </div>
          </Col>
          <Col md={8} data-aos="fade-left">
            <div id="container">
            <div id="container">
              <div className="icon_wrapper"></div>
              <form
              action="https://formspree.io/f/xaygbyrw" // Replace with your formspree.io form URL
              method="post"
              id="contact_form"
            >
                <div className="name">
                  <label htmlFor="name"></label>
                  <input type="text" placeholder="Name " name="name" id="name_input" required />
                </div>
                <div className="email">
                  <label htmlFor="email"></label>
                  <input type="email" placeholder="Email" name="email" id="email_input" required />
                </div>
                <div className="telephone">
                  <label htmlFor="telephone"></label>
                  <input
                    type="text"
                    placeholder="Mobile"
                    name="telephone"
                    id="telephone_input"
                    pattern="[0-9]*"
                    required
                  />
                </div>
                <div className="message">
                  <label htmlFor="message"></label>
                  <textarea name="message" placeholder="ProJect Idea" id="message_input" cols="3" rows="5" required></textarea>
                </div>
                <div className="submit">
                  <input type="submit" value="Send" id="form_button" className="send-button" />
                  <FontAwesomeIcon icon={faPaperPlane} size="xs" className="rocket-icon" />
                </div>
              </form>
            </div>              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

import React, { useEffect } from 'react';
import '../../Components/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const googleDriveLink = 'https://drive.google.com/file/d/14UDgecYtEG340wkmxRiBIwf-wPylFMXU/view?usp=sharing';

  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7} data-aos="fade-right">
            <div className='text-container'>
              <h2 className='headtext'>Hello <span className='wave'>👋</span></h2>
              <h2 className='namestext small-text'>MySelf Hanumanthu Lohith</h2>
              <h3 className='nametext small-text'>A Techie</h3>
              <div className='cv-top'>
                {/* Anchor tag for the CV button */}
                <a href={googleDriveLink} target="_blank" rel="noopener noreferrer">
                  <button className='cv-button'>
                    My CV  <FontAwesomeIcon icon={faFileLines} size="l" className='cv-left'/>
                  </button>
                </a>
              </div>
            </div>
          </Col>
          <Col md={5} data-aos="flip-right">
            <div className='imagedeveloper'></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

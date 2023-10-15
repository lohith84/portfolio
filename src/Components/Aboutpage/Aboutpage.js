import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import schoolIcon from './school.svg';
import '../../Components/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col md={8} data-aos="fade-right">
            <h1>About Me</h1>
            <p className='aboutdetails'>
            My fascination with technology was fueled by my desire to study and discover new things. I was drawn to web programming because of its seemingly endless potential and revolutionary potential.
             Since then, I've been actively involved in developing my coding skills and expanding my knowledge of a variety of programming languages and frameworks. With each project I take on,
            I try to push boundaries and provide original solutions.I strongly believe in the importance of lifelong learning and am constantly interested in learning about the most recent developments and trends in the field of web development.
            </p>
            <div>
              <button
                onClick={() => {
                  window.open('https://github.com/lohith84');
                }}
                className='socailmediabtn'
              >
                <AiOutlineGithub className='icon' />
              </button>
              <button
                onClick={() => {
                  window.open('https://www.linkedin.com/in/hanumanthu-lohith/');
                }}
                className='socailmediabtn'
              >
                <AiFillLinkedin className='icon' />
              </button>
              <button
                onClick={() => {
                  window.open('mailto:your-email@example.com');
                }}
                className='socailmediabtn'
              >
                <AiOutlineMail className='icon' />
              </button>
            </div>
          </Col>
          <Col md={4} data-aos="flip-right">
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
      <Container className="education">
        <Row>
          <Col md={12}>
            <h1 className="heading">My <span>Education</span></h1>
            <div className="box-container" data-aos="fade-up">
              <div className="box">
                <div className="graduations-icon">
                  <img src={schoolIcon} alt="School Icon" />
                </div>
                <span>2021-now</span>
                <h3>B.Tech(ECE)</h3>
                <h5>National Institute of Technology Rourkela, Odisha</h5>
                <p>CSE Minor</p>
              </div>

              <div className="box">
                <div className="graduations-icon">
                  <img src={schoolIcon} alt="School Icon" />
                </div>
                <span>2019-2021</span>
                <h3>Intermediate(MPC)</h3>
                <h5>Bhashyam Junior College, Guntur, Andhra Pradesh</h5>
                <p>PERCENTAGE: 97.5%</p>
              </div>

              <div className="box">
                <div className="graduations-icon">
                  <img src={schoolIcon} alt="School Icon" />
                </div>
                <span>2018-2019</span>
                <h3>Matriculation</h3>
                <h5>Bhashyam EM School, Kakinada, Andhra Pradesh</h5>
                <p>CGPA: 10</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;

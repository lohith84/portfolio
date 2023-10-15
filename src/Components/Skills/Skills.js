import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css';
import '../../Components/style.css';
import code from '../Skills/coding.jpg';
import webd from '../Skills/webd.jpg';
import core from '../Skills/core.jpg';
import { ReactComponent as WorkIcon } from '../Skills/work.svg';
import { ReactComponent as SchoolIcon } from '../Skills/school.svg';
import timelineElements from './timelineElements';
import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import AOS from 'aos';

let workIconStyles = { background: '#06D6A0' };
let schoolIconStyles = { background: '#f9c74f' };

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="skill-page">
      <Container>
        <h1 className="skill-heading">My Skills</h1>
        <Row className="skill-card">
          <Col md={4} data-aos="fade-right">
            <div className="card cards__item">
              <div className="card__frame">
                <div className="card__picture">
                  <img src={code} alt="" width="120" />
                </div>
                <h2 className="card__title">Programming</h2>
              </div>
              <div className="card__overlay"></div>
              <div className="card__content">
                <h3>C++</h3>
                <h3>Python</h3>
                <h3>Data Structures</h3>
                <h3>DBMS</h3>
              </div>
            </div>
          </Col>
          <Col md={4} data-aos="fade-down">
            <div className="card cards__item">
              <div className="card__frame">
                <div className="card__picture">
                  <img src={webd} alt="" width="120" />
                </div>
                <h2 className="card__title">Web Development</h2>
              </div>
              <div className="card__overlay"></div>
              <div className="card__content">
                <h3>HTML</h3>
                <h3>CSS , Bootstrap</h3>
                <h3>Java Script</h3>
                <h3>React JS</h3>
              </div>
            </div>
          </Col>
          <Col md={4} data-aos="fade-left">
            <div className="card cards__item">
              <div className="card__frame">
                <div className="card__picture">
                  <img src={core} alt="" width="120" />
                </div>
                <h2 className="card__title">Electronics Engineering</h2>
              </div>
              <div className="card__overlay"></div>
              <div className="card__content">
                <h3>Digital Electronics</h3>
                <h3>Signals and Systems</h3>
                <h3>Arduino</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="time-line">
          <h1 className="title">Achievements</h1>
          <VerticalTimeline>
            {timelineElements.map((element) => {
              const isWorkIcon = element.icon === 'work';
              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <p id="description">{element.description}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </Container>
    </div>
  );
}

export default Skills;

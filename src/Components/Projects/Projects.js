import React, { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setShowModal(true);
    setModalContent(content);
  };

  const projectData = [
    {
      title: "Word Smith",
      imageSrc: require("./book.png"),
      description: "Book-Searcher",
      Gitlink: "https://github.com/lohith84/Book-Searching",
      link: "https://github.com/lohith84/Book-Searching",
      matter: "Book-Searching Website, powered by APIs and React, offers book enthusiasts an immersive and user-friendly platform to explore their literary interests. Seamlessly integrating with Google book databases, it enables users to search, discover, and access a vast library of titles. With intuitive design and real-time updates, it's the go-to destination for bibliophiles seeking their next literary adventure."
    },
    {
      title: "Rat-Maze",
      imageSrc: require("./rat-maze.png"),
      description: "Rat-in-Maze",
      Gitlink: "https://github.com/lohith84/Rat-Maze",
      link: "https://lohith84-rat-maze.netlify.app/",
      matter: "The Rat-Maze website, built with React and backtracking algorithms, offers an interactive and challenging maze-solving experience. Users guide a virtual rat through intricate mazes, employing the powerful backtracking technique to find the optimal path. With a sleek React-based interface, this website provides a fun and educational platform to hone problem-solving skills while enjoying a visually engaging maze-solving adventure."
    },
    {
      title: "Weather App",
      imageSrc: require("./weather.jpg"),
      description: "Weather Website",
      Gitlink: "https://github.com/lohith84/Wheather-App",
      link: "https://lohith84.github.io/Wheather-App/",
      matter: "This dynamic weather website, crafted with HTML, CSS, and JavaScript, seamlessly integrates real-time weather data through APIs. Users can effortlessly access current conditions, forecasts, and interactive maps for any location worldwide. Its responsive design ensures optimal usability on all devices, making it a go-to resource for staying informed about weather conditions, no matter where you are."
    },
    {
      title: "Simon Game",
      imageSrc: require("./simon-game.jpeg"),
      description: "Simon Game",
      Gitlink: "https://github.com/lohith84/Simon-Game",
      link: "https://lohith84.github.io/Simon-Game/",
      matter: "The Simon Game website is an interactive and engaging platform built with HTML, CSS, JavaScript, and jQuery. Players test their memory and reflexes by following a sequence of colored buttons and attempting to replicate it. The site features intuitive user interfaces, responsive design, and captivating animations, offering a fun and challenging gaming experience for all ages."
    },
    {
      title: "QR Generator",
      imageSrc: require("./qr.jpg"),
      description: "QR-Generator",
      Gitlink: "https://github.com/lohith84/Qr-Code-Generator",
      link: "https://lohith84.github.io/Qr-Code-Generator/",
      matter: "The QR Generator website, crafted with HTML, CSS, and JavaScript, empowers users to swiftly create QR codes. Its intuitive interface ensures hassle-free code generation, letting users encode URLs, text, or contact information. The site boasts responsive design for seamless access across devices and provides a user-friendly experience for generating QR codes efficiently and conveniently."
    },
    {
      title: "Tic-Tac-Toe",
      imageSrc: require("./tic-tac-toe.jpg"),
      description: "Tic-Tac-Toe",
      Gitlink: "https://github.com/lohith84/Tic-Tac-Toe-Game",
      link: "https://lohith84.github.io/Tic-Tac-Toe-Game/",
      matter: "Experience classic fun with our two-player Tic Tac Toe game website! Built with HTML, CSS, and JavaScript, it offers an intuitive interface for challenging your friends. Enjoy hours of strategic gameplay in your browser, with sleek design and responsive features. Test your wits and claim victory in this timeless game of Xs and Os."
    },
    {
      title: "InstaClone",
      imageSrc: require("./insta-clone.jpg"),
      description: "Instagram Clone",
      Gitlink: "https://github.com/lohith84/Insta-Clone",
      link: "https://lohith84.github.io/Insta-Clone/",
      matter: "An Instagram clone website, crafted with HTML and CSS, replicates the visual essence of the popular social media platform.Tt mirrors Instagram's layout, profiles, posts, and aesthetics. Users can explore a familiar interface, though without the interactive features, showcasing the power of web design and CSS styling in recreating the look and feel of a beloved platform."
    },
    {
      title: "Smart Lock",
      imageSrc: require("./temp-door.png"),
      description: "Temperature-Door-Lock",
      Gitlink: "https://github.com/lohith84/Door-Lock-and-Temp-Check",
      link: "https://www.tinkercad.com/things/01LydgcLOxd?sharecode=mXEyGeCW7F2-GJvBEFratZxhl0pX0zsI4bav5LuCAWc",
      matter: "The door lock, operated through an Arduino-controlled keypad, grants access upon entry of a valid code. Once unlocked, it employs a temperature sensor to assess the user's body temperature. If the reading deviates significantly from the normal range, the door remains locked, ensuring safety and security by preventing entry under abnormal temperature conditions."
    },
  ];

  return (
    <div className={`project-page ${showModal ? "blur" : ""}`}>
      <Container>
        <div className="project-heading">
          <h1>My Projects</h1>
        </div>
        <Row>
          {projectData.map((project, index) => (
            <Col
              md={4}
              className="project-card"
              key={index}
              data-aos="fade-down"
            >
              <figure className="image-block" style={{ cursor: "pointer" }}>
                <h1 style={{ background: showModal ? "none" : "#7E6C61" }}>
                  {project.title}
                </h1>
                <img
                  src={project.imageSrc}
                  alt=""
                  style={{ width: "400px" }}
                />
                <figcaption>
                  <h3>{project.description}</h3>
                  <button onClick={() => openModal(project)}>View</button>
                </figcaption>
              </figure>
            </Col>
          ))}
        </Row>
      </Container>
      {showModal && (
        <Modal setShowModal={setShowModal} modalContent={modalContent} />
      )}
    </div>
  );
}

export default Projects;

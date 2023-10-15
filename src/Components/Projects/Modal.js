import React, { useRef, useEffect } from "react";
import "../../Components/style.css";
import GitHubMark from "./GitHub-Mark.png";
import ReactDom from "react-dom";

export const Modal = ({ setShowModal, modalContent }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const disableScroll = () => {
    document.body.classList.add("modal-open");
  };

  const enableScroll = () => {
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    disableScroll();
    return () => {
      enableScroll();
    };
  }, []);

  return (
    <div
      className="containers fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      ref={modalRef}
      onClick={closeModal}
      onMouseEnter={disableScroll}
      onMouseLeave={enableScroll}
    >
      <div className="center-our-solution">
        <div class="section_our_solution">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="our_solution_category">
                <div class="solution_cards_box">
                  <div class="solution_card">
                    <div class="hover_color_bubble"></div>
                    <div class="so_top_icon">
                      <div class="icons">
                        <a href={modalContent.Gitlink}
                          target="_blank"
                          rel="noopener noreferrer">
                          <img src={GitHubMark} alt="GitHub Logo" /></a>
                      </div>
                      <div class="solu_description">
                        <button class="top-right-btn" onClick={() => setShowModal(false)}>X</button>
                      </div>
                    </div>
                    <br />
                    <div class="solu_title">
                      <h2>{modalContent.description}</h2>
                    </div>
                    <div class="solu_description">
                      <p>{modalContent.matter}</p>
                      <div className="button-container">
                        <a
                          href={modalContent.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="project-link-button">
                            Project Link
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

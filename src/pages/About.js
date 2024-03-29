import React from "react";
import Pic from "../assets/tan-shirt-pic.jpeg";
import Pic2 from "../assets/soccer-pic.jpg";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFontAwesome, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

library.add(faFontAwesome, faGithub, faLinkedin, faInstagram);

export default function About() {
  return (
    <div className="container-md text-center pb-5 bg-pitch">
      <div id="hero" className="row my-5 pb-5 ms-1 me-1">
        <h1 className="display-3 col-sm align-self-center text-chalk">
          Hi, I'm Harrison
        </h1>
        <div id="bio-img-div" className="col-sm">
          <img
            src={Pic}
            alt="it's me!"
            id="bio-img"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="justify-content-center mb-5 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm pb-3">
              <a
              href="#down-arrow"
              >
                <FontAwesomeIcon icon={faArrowDown} size="3x" id="down-arrow" className="text-chalk"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm text-chalk">
              <h1 className="fw-light">
                Let's build something{" "}
                <span className="text-fancy fw-bolder">together</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="about-card" className="row mt-5">
        <div className="col-sm">
          <img
            src={Pic2}
            className="img-fluid rounded my-4"
            alt="me again!"
            id="bio-img-2"
          />
        </div>
        <div className="col-sm text-chalk">
          <div className="card bg-transparent border-0 mt-5 pt-1">
            <h2 className="pt-3 display-6">About Me</h2>
            <p className="card-body">
              I'm a full-stack web developer, graphic designer, and digital
              artist from southern California. I'm a grateful follower of Jesus
              Christ, and I love web design and graphic art. I'm always looking
              for new opportunities to learn and grow as a developer and
              designer.
            </p>
          </div>
        </div>
      </div>

      <div className="container-sm mt-5" id="about-social">
        <div className="row">
          <div className="col-sm">
            <a
              href="https://github.com/Lamm9"
              rel="noopener noreferrer"
              target="_blank"
              className="p-3 mx-2"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                size="3x"
                className="social-links"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/harrison-lamm-458064249/"
              rel="noopener noreferrer"
              target="_blank"
              className="p-3 mx-2"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                size="3x"
                className="social-links"
              />
            </a>
            <a
              href="https://www.instagram.com/itsharrisonlamm/"
              rel="noopener noreferrer"
              target="_blank"
              className="p-3 mx-2"
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                size="3x"
                className="social-links"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

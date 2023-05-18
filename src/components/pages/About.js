import React from "react";
import Pic from "../../assets/bio-img.jpeg";
import "../../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFontAwesome, faGithub, faLinkedin, faInstagram);

export default function About() {
  return (
    <div className="container-md text-center pb-5">
      <div className="row mt-5">
        <h1 className="display-3 col-sm align-self-center text-fancy">Hi, I'm Harrison</h1>
        <div className="col-sm">
          <img
            src={Pic}
            alt="it's me!"
            id="bio-img"
            className="img-fluid p-5"
          />
        </div>
      </div>

      <div className="card bg-dark mt-5">
        <h2 className="pt-3 display-6">About Me</h2>
        <p className="card-body pb-4">
          I'm a full-stack web developer, graphic designer, and digital artist
          from southern California. I'm a grateful follower of Jesus Christ, and
          I love web design and graphic art. I'm always looking for new
          opportunities to learn and grow as a developer and designer.
        </p>
      </div>
      <div className="container-sm mt-3">
        <div className="row">
          <div className="col-sm">
            <a
              href="https://github.com/Lamm9"
              rel="noopener noreferrer"
              target="_blank"
              className="p-3"
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
              className="p-3"
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
              className="p-3"
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

import React from "react";
import "../../styles/App.css";

export default function Contact() {
  return (
    <div className="bg-dark text-center">
      <h1 className="display-3 mb-4 mt-5">Let's Get in Touch</h1>
      <div className="row justify-content-center">
        <div className="col-sm align-self-center">
          <p className="card-body mb-5">
            I'm always looking for work and for opportunities to connect with
            other developers. Feel free to reach out to me on any of the
            platforms below.
          </p>
        </div>
      </div>
      <div className="align-self-center">
        <ul className="list-group">
          <li>
            <a
              className="list-group-item bg-secondary text-light"
              href="https://github.com/Lamm9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="list-group-item bg-primary text-light"
              href="https://www.linkedin.com/in/harrison-lamm-458064249/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

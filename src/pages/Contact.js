import React from "react";
import "../styles/App.css";
import Form from '../components/Form';

export default function Contact() {
  return (
    <div className="text-center p-0">
      <h1 className="display-3 mb-4 mt-5">Let's Get in Touch</h1>
      <div className="row">
        <div className="col-sm">
          <div className="form-group m-4">
            <h1 className="form-header display-6">How can I help?</h1>
            <div className="row justify-content-center">
              <div className="col-sm-6 bg-dark p-4 rounded">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6 align-self-center">
          <p className="card-body mb-5 ps-5 pe-5">
            I'm always looking for work and for opportunities to connect with
            other developers. Feel free to reach out to me on any of the
            platforms below.
          </p>
        </div>
      </div>
      <div className="align-self-center bg-pitch justify-content-center row mb-4">
        <ul className="list-group col-lg-6 mb-5">
          <li className="ms-5 me-5 btn">
            <a
              className="list-group-item bg-secondary text-light"
              href="https://github.com/Lamm9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className="ms-5 me-5 mt-2 mb-2 btn">
            <a
              className="list-group-item bg-primary text-light"
              href="https://www.linkedin.com/in/harrison-lamm-458064249/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="ms-5 me-5 btn">
            <a
              className="list-group-item bg-ig text-light"
              href="https://www.instagram.com/itsharrisonlamm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

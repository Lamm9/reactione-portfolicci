import React from "react";
import "../../styles/App.css";
import resume from "../../resumeData";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container-md mt-5">
        <h1 className="display-5 text-center mt-5 mb-5">
          Interested in working with me? See if I've got what it takes.
        </h1>
        <h2 className="display-6 text-center">Here's my resume</h2>
        <div className="text-center mb-5">
          <a
            className="m-1 p-1 btn text-fancy"
            href="/src/assets/Resume2022.docx"
            download="Resume2022.docx"
            value="download"
            rel="noreferrer"
            target="_blank"
          >
            or download it here
          </a>
        </div>
        <div id="education">
          <h3 className="display-6 text-center">Education</h3>
          <div>
            {resume.education &&
              resume.education.map((item) => {
                return (
                  <div className="card bg-transparent p-1 m-3 text-center">
                    <div className="card-header bg-dark">
                      <p className="h4">{item.subject}</p>
                      <p className="fw-light">{item.school}</p>
                    </div>
                    <div className="card-body bg-x-dark">
                      <p className="fw-light">{item.duration}</p>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div id="work">
          <h3 className="display-6 text-center">Work Experience</h3>
          <div>
            {resume.work &&
              resume.work.map((item) => {
                return (
                  <div className="card bg-transparent p-1 m-3 text-center">
                    <div className="card-header bg-dark">
                      <p className="h4">{item.position}</p>
                      <p className="fw-light">{item.company}</p>
                    </div>
                    <div className="card-body bg-x-dark justify-content-center">
                      <p>{item.duration}</p>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div id="skills">
          <h3 className="display-6 text-center">Skills</h3>
        </div>
        <ul className="list-group text-center bg-x-dark mb-5">
          {resume.skills &&
            resume.skills.map((item) => {
              return (
                <li className="m-2 mt-4">
                  <h4 className="display-6">{item.name}</h4>
                  <div className="row justify-content-center">
                    <p className="col-sm-8 m-2">{item.desc}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}

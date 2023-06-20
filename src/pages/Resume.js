import React from "react";
import "../styles/App.css";
import resume from "../resumeData";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container-md mt-5">
        <h1 className="display-5 text-center text-chalk mt-5 mb-5">
          Interested in working with me? See if I've got what it takes.
        </h1>
        <h2 className="display-6 text-center text-chalk">Here's my resume</h2>
        <div className="text-center mb-5">
          <a
            className="m-1 p-1 btn text-fancy"
            href="/src/assets/Resume2023.docx"
            download="Resume2023.docx"
            value="download"
            rel="noreferrer"
            target="_blank"
          >
            or download it here
          </a>
        </div>
        <div id="education">
          <h3 className="display-6 text-center text-chalk">Education</h3>
          <div>
            {resume.education &&
              resume.education.map((item) => {
                return (
                  <div className="card bg-transparent p-1 m-3 text-center text-chalk">
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
          <h3 className="display-6 text-center text-chalk">Work Experience</h3>
          <div className="text-chalk">
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
          <h3 className="display-6 text-center text-chalk">Skills</h3>
        </div>
        <ul className="list-group text-center text-chalk bg-x-dark mb-5">
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

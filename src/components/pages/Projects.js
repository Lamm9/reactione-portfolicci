import React from "react";
import "../../styles/App.css";
import projects from "../../projectData";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="row">
        <div className="col-md text-center text-light">
          <h1 className="display-3 mt-5">My Work</h1>
        </div>
        <div className="text-center m-4"> 
          <p>
            Here is some of my work. Click on the check it links to be taken to
            the deployed site or Github repo.
          </p>
        </div>
      </div>
      {projects.map((project) => {
        return (
          <div className="container" id={project.projName}>
            <div className="card bg-dark m-3 text-light">
              <div className="card-header row bg-transparent border-0">
                <div className="col-2">
                  <img
                    src={project.img}
                    alt={project.imgDesc}
                    className="rounded float-left logo"
                  />
                </div>
                <div className="col-md-8 text-center">
                  <h3 className="card-title mt-3 text-light">
                    {project.projName}
                  </h3>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="text-center">
                    <h4 className="card-title fw-light mb-1">
                      {project.projDesc}
                    </h4>
                    <div>
                      <p>{project.stack}</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <a
                      href={project.link}
                      className="btn bg-primary text-light p-1 me-3 mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Check it out!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

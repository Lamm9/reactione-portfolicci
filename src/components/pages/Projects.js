import React from "react";
import "../../styles/App.css";
import projects from "../../projectData";
import BTPic from "../../assets/BT-Display.png";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="row">
        <div className="col-md text-center text-light">
          <h1 className="display-3 mt-5">My Work</h1>
        </div>
        <div className="text-center mt-4 mb-4">
          <p>
            Here is some of my work. Click on the check it links to be taken to
            the deployed site or Github repo.
          </p>
        </div>
      </div>
      <div className="container mt-5 mb-5 text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm">
            <h1 className="display-6 mb-4">Bootleg Twitter</h1>
            <p>An extremely original Twitter clone made for bootcamp.</p>
            <p className="text-fancy">Full-Stack</p>
            <a
              className="btn bg-dark text-secondary p-1"
              href="https://bootleg-twitter.herokuapp.com/login"
              rel="noopener noreferrer"
              target="_blank"
            >
              Check it out!
            </a>
          </div>
          <div className="col-sm pt-4">
            <a
              href="https://bootleg-twitter.herokuapp.com/login"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Bootleg Twitter shown on devices"
                src={BTPic}
                id="BTPic"
                className="img-fluid rounded-5 mb-4"
              ></img>
            </a>
          </div>
        </div>
      </div>

      {projects.map((project) => {
        return (
          <div className="container" id={project.projName}>
            <div className="card bg-x-dark m-3 mb-5 text-light">
              <div className="card-header row bg-transparent border-0">
                <div className="col-2">
                  <img
                    src={process.env.PUBLIC_URL + project.img}
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
                      <p className="text-fancy">{project.stack}</p>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col text-start">
                      <a
                        href={project.repo}
                        className="btn text-primary p-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See the repo
                      </a>
                    </div>
                    <div className="col text-end">
                      <a
                        href={project.link}
                        className="btn bg-dark text-secondary p-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check it out!
                      </a>
                    </div>
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

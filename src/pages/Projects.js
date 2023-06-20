import React from "react";
import "../styles/App.css";
import projects from "../projectData";
import BTPic from "../assets/BT-Display.png";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="row">
        <div className="col-md text-center text-chalk">
          <h1 className="display-3 mt-5">My Work</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center text-chalk mt-4 mb-4 px-4 ps-5">
            <p>
              Here is some of my work. Click on the check it links to be taken
              to the deployed site or Github repo.
            </p>
          </div>
        </div>
      </div>
      {/* bootleg twitter */}
      <div className="container mt-5 mb-5 text-center text-chalk">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm">
            <h1 className="display-6 mb-4">Bootleg Twitter</h1>
            <p>An extremely original Twitter clone made for bootcamp.</p>
            <p className="text-fancy">Full-Stack</p>
            <a
              className="btn bg-dark text-secondary p-1 btn-shadow-dark"
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
            <div className="card bg-x-dark m-3 mb-5 text-chalk card-shadow-dark">
              <div className="row align-items-center">
                <div className="col-sm-2 text-center">
                  <img
                    src={process.env.PUBLIC_URL + project.img}
                    alt={project.imgDesc}
                    className="rounded float-left img-fluid p-1 logo"
                  />
                </div>
                <div className="col-sm">
                  <div className="card-header row bg-transparent border-0">
                    <div className="col-md text-center">
                      <h3 className="card-title mt-3">
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
                          <p className="text-primary">{project.stack}</p>
                        </div>
                      </div>
                      <div className="row mb-2 justify-content-center">
                        <div className="col text-center">
                          <a
                            href={project.repo}
                            className="btn text-dark bg-chalk p-1 m-1 mx-2 btn-shadow-x-dark"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View the repo
                          </a>
                          <a
                            href={project.link}
                            className="btn bg-chalk text-dark p-1 m-1 btn-shadow-x-dark"
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
            </div>
          </div>
        );
      })}
    </section>
  );
}

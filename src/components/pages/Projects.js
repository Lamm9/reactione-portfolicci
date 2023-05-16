import React from "react";

export default function Projects() {
  return (
    <div>
      <link rel="stylesheet" href="../../styles/App.css"></link>
      <div className="container-md mt-5" id="projects">
        <div className="row justify-content-center">
          <h1 className="display-3 text-center text-fancy pb-2">Projects</h1>
        </div>
        <div className="text-center text-light mt-2">
          <p>
            Here is some of my work. Click on the check it links to be taken to
            the deployed site.
          </p>
        </div>
        <div className="container">
          <div className="card bg-dark m-3 mb-4 text-light">
            <div className="card-header row bg-transparent border-0">
              <div className="col-auto">
                <img
                  src="../../assets/BTLogo.png"
                  alt="Bootleg Twitter Bird"
                  className="rounded float-left"
                  id="BT-logo"
                />
              </div>
              <div className="col-auto mt-2">
                <h3 className="card-title fw-bold">Bootleg Twitter</h3>
              </div>
            </div>
            <div className="card-body text-center">
              <div>
                <h4 className="card-title mb-3">
                  An extremely original Twitter clone made for bootcamp
                </h4>
              </div>
              <div className="row">
                <div className="mb-2">
                  <div id="BT-tech">
                    <span className="text-danger">HTML</span>
                    <span className="text-purple">CSS</span>
                    <span className="text-warning">JavaScript</span>
                    <span className="text-success">Express</span>
                    <span className="text-primary">MySQL</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="">Full-Stack</p>
              </div>
            </div>
            <div className="text-end">
              <a
                className="btn bg-dark p-1 me-3 mb-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://bootleg-twitter.herokuapp.com/"
              >
                <span className="text-warning">Check it out!</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card m-3 mg-4 bg-dark">
            <div className="card-header row bg-transparent border-0">
              <div className="col-auto">
                <img
                  src="./assets/images/quizverse-sc.png"
                  alt="Quizverse"
                  className="rounded float-left d-block"
                  id="QV-logo"
                />
              </div>
              <div className="col-md-10 text-center">
                <h3 className="card-title fw-light text-qv" id="qv-title">
                  Quizverse
                </h3>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="text-center mb-2">
                  <h4 className="card-title text-qv fw-light mb-1">
                    A collection of fun, nerdy quizzes made for bootcamp
                  </h4>
                  <div id="QV-tech">
                    <span className="text-danger">HTML</span>
                    <span className="text-purple">CSS</span>
                    <span className="text-warning">JavaScript</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-qv">Front-End</p>
              </div>
            </div>
            <div className="text-end">
              <a
                className="btn bg-dark p-1 me-3 mb-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://lamm9.github.io/first-group-project/"
              >
                <span className="text-warning">Check it out!</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <div className="card bg-dark m-3 text-light" id="tamp-card">
            <div
              className="card-header row bg-transparent p-0 m-0 border-0"
              id="tamp-head"
            >
              <div className="col-auto">
                <img
                  src="./assets/images/Tamp-logo-v2.png"
                  alt="Tamp logo"
                  className="rounded float-left"
                  id="tamp-logo"
                />
              </div>
              <div className="col-md-10 text-center">
                <h3 className="card-title mt-3 text-light" id="tamp-title">
                  Tamped and True
                </h3>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="text-center">
                  <h4 className="card-title fw-light mb-1">
                    A coffee shop finder, made by a barista, for baristas.
                  </h4>
                  <div id="tamp-tech">
                    <span className="text-danger bg-dark">HTML</span>
                    <span className="text-purple bg-dark">CSS</span>
                    <span className="text-warning bg-dark">JavaScript</span>
                    <span className="text-success bg-dark">Express</span>
                    <span className="text-primary bg-dark">MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="">Full-Stack</p>
              </div>
            </div>
            <div className="text-end">
              <a
                className="btn disabled bg-x-dark p-1 mt-2 me-3 mb-2"
                target="_blank"
                rel="noopener noreferrer"
                href="#projects"
              >
                <span className="text-warning">Coming soon!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

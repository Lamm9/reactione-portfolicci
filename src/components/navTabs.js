import React from "react";
import "../styles/App.css";

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="text-center">
      <header>
        <div className="row">
          <div className="pt-1 bg-dark col-sm mb-0">
            <h1 className="display-5 text-fancy" id="my-name">
              Harrison Lamm
            </h1>
          </div>

          <nav
            className="navbar navbar-expand-lg bg-dark col-sm justify-content-center"
            id="navbar"
          >
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  onClick={() => handlePageChange("Projects")}
                  className={
                    currentPage === "Projects" ? "nav-link active" : "nav-link"
                  }
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  className={
                    currentPage === "Resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

import React from "react";
import "../styles/App.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer text-center bg-x-dark">
        <a
          className="btn text-secondary"
          href="https://github.com/Lamm9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="btn text-secondary"
          href="https://www.linkedin.com/in/harrison-lamm-458064249/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="btn text-secondary"
          href="https://www.instagram.com/itsharrisonlamm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </footer>
    </div>
  );
}

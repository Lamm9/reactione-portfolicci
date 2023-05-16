import React from "react";

export default function Contact() {
  return (
    <div className="bg-dark text-center">
      <h1 className="display-3 mb-4 mt-2">Let's Get in Touch</h1>
      <p>
        I'm always looking for work and for opportunities to connect with other
        developers. Feel free to reach out to me on any of the platforms below.
      </p>
      <ul className="list-group">
        <li>
          <a className="list-group-item bg-secondary text-light" href="https://github.com/Lamm9">
            Github
          </a>
        </li>
        <li>
          <a
            className="list-group-item bg-primary text-light"
            href="https://www.linkedin.com/in/harrison-lamm-458064249/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

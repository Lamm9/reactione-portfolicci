import React from "react";

export default function Home() {
  return (
    <div>
      <div>
        
      </div>
      <div className="container-md text-center">
        <h3 className="display-4 mb-4 mt-5">Welcome to my portfolio</h3>
        <p>
          This app is built using React to render the content shown on various
          tabs. I'm making this for bootcamp, so I hope i get a good grade. To
          see my current portfolio, head to the link below!
        </p>
        <a
          className="btn link-warning bg-dark p-1 me-3 mb-3"
          href="https://lammfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My current portfolio
        </a>
      </div>
    </div>
  );
}

import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="display-3">Home</h1>
      <h3 className="display-4">Welcome to my portfolio</h3>
      <p>
        This app is built using React to render the content shown on various
        tabs. I'm making this for bootcamp, so I hope i get a good grade. To see
        my real portfolio, head to the link below!
      </p>
      <a className="btn text-light bg-dark p-1 me-3 mb-2" href="https://lammfolio.netlify.app/">My real portfolio</a>
    </div>
  );
}

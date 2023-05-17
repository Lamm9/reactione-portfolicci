import React from "react";
import Pic from "../../assets/bio-img.jpeg";
import "../../styles/App.css";

export default function About() {
  return (
    <div className="container-md text-center pb-5">
      <h1 className="display-3 mb-5 mt-5">Hi, I'm Harrison</h1>
      <img src={Pic} alt="it's me!" id="bio-img" className="rounded"></img>
      <div className="card bg-dark mt-5">
        <h2 className="pt-3 display-6">About Me</h2>
        <p className="card-body pb-4">
          I'm a full-stack web developer, graphic designer, and digital artist
          from southern California. I'm a grateful follower of Jesus Christ, and
          I love web design and graphic art. I'm always looking for new
          opportunities to learn and grow as a developer and designer.
        </p>
      </div>
      <div className="container-sm">
        <ul className="list-group list-group">
          
        </ul>
      </div>
    </div>
  );
}

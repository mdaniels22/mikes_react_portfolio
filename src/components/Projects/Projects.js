import React from "react";
import Container from "react-bootstrap/Container";
import Project from "../Project/Project";
import "./Projects.css";

const projects = React.forwardRef((props, ref) => (
  <div ref={ref} id="Projects" className="Projects">
    <h1>Projects</h1>
    <p></p>
    <Project
      title="Project 1"
      image1="https://via.placeholder.com/300x400"
      description="making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
"
    />
    <Project
      title="Project 2"
      image1="https://via.placeholder.com/300x400"
      description="making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
"
    />
    <Project
      title="Project 3"
      image1="https://via.placeholder.com/300x400"
      description="making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
"
    />
  </div>
));

export default projects;

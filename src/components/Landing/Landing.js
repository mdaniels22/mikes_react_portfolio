import React from "react";
import Container from "react-bootstrap/Container";
import "./Landing.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const landing = (props) => (
  <div id="Home">
    <div className="LandingText">
      {" "}
      <h1>{props.name}</h1>
      <p>{props.message}</p>
      <Button>Projects</Button>
    </div>
    <Jumbotron className="Landing"> </Jumbotron>
  </div>
);

export default landing;

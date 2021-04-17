import React from "react";
import Container from "react-bootstrap/Container";
import "./Landing.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const landing = (props) => (
  <div id="Home">
    <div className="Landing"></div>
    <div className="LandingText">
      {" "}
      <h1>{props.name}</h1>
      <p>{props.message}</p>
      <Button className="Button" href="#Projects">Projects</Button>
    </div>
  </div>
);

export default landing;

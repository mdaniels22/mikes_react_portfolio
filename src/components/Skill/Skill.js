import React from "react";
import Card from "react-bootstrap/Card";
import "./Skill.css";

const Skill = (props) => (
  <Card border="light" className="Skill">
    <Card.Img className="Card_Image" src={props.image} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
    </Card.Body>
  </Card>
);

export default Skill;

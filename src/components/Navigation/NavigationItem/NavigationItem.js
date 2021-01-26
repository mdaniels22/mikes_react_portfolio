import React from "react";
import Nav from "react-bootstrap/Nav";
import "./NavigationItem.css";

const NavigationItem = (props) => {
  return (
    <Nav.Link
      className={props.className}
      href={props.link}
      onClick={props.clicked}
    >
      {props.itemName}
    </Nav.Link>
  );
};
export default NavigationItem;

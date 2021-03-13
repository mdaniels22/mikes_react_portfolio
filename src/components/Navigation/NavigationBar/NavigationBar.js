import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavigationItem from "../NavigationItem/NavigationItem";
import "./NavigationBar.css";
import Image from "react-bootstrap/Image";
import face from "../../../media/face.jpg";

import SideSocial from "../../SideSocial/SideSocial";
export default function NavigationBar(props) {
  const [show, setShow] = useState(false);

  return (
    <Navbar className="Topbar" expand="sm">
      {show ? <SideSocial /> : null}
      <Navbar.Toggle />
      <Navbar.Collapse aria-controls="basic-navbar-nav">
        <Nav className="Navigation Center" expand="lg" defaultActiveKey="#Home">
          <Nav>
            <Navbar.Brand className="Topbar" onClick={() => setShow(!show)}>
              <Image className="Face" src={face} alt="my face" roundedCircle />

              <NavigationItem className="Left" itemName="Mike Daniels" />
            </Navbar.Brand>

            {/* <NavigationItem className="Left" itemName="Daniels" link="#Home" /> */}
          </Nav>
          <NavigationItem itemName="Home" link="#Home" />

          <NavigationItem itemName="About" link="#About" />
          <NavigationItem itemName="Skills" link="#Skills" />

          <NavigationItem itemName="Projects" link="#Projects" />

          {/* <NavigationItem itemName="Contact" /> */}
        </Nav>
      </Navbar.Collapse>
      <Nav className="Right">
        {" "}
        <Button variant="info" size="sm">
          Hire Me
        </Button>
      </Nav>
    </Navbar>
  );
}

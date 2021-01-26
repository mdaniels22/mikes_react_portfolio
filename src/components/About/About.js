import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./About.css";
import aboutPic from "../../media/undraw_dev_productivity_umsq.svg";

const about = (props) => (
  <Container id="About">
    <h1>About Me</h1>
    <div className="About">
      <div>
        <Image src={aboutPic} fluid />
      </div>
      <div className="AboutText">
        <h2>Hi, I'm Mike and Develop for the Web</h2>
        <p>
          I've been in the Tech industry for over 10 years. I began in tech
          support and worked up to Systems Technician. Support roles didn't
          fulfill my need to create. I figured I can use my knowledge of
          programming and my creativity to create applications and websites.
          After I designed and devloped my first working application I was
          hooked. I've been developing and designing web applications and sites
          since then. The sites I've created have significantly increased
          attention and sales for clients. I constantly code to improve my
          skills and to stay current with the latest technologies. My current
          stack includes HTML5, CSS3, JavaScript, React.js, and Node.js with
          Express.js. Bootstrap, npm, Git, and GIMP are some of the tools I use
          and I've had exprerience coding with C#, C++, and Java.
        </p>
        {/* <Col>Name: {props.name}</Col>
        <Col>From: {props.location}</Col>
        <Col>Email: {props.email}</Col> */}
        <Row>
          <Col>
            <Button>Resume</Button>
          </Col>
          <Col>
            <Button href="#Projects">Projects</Button>
          </Col>
        </Row>
      </div>
    </div>
  </Container>
);

export default about;

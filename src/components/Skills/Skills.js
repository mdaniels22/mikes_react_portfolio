import React from "react";
import { Link } from "react-router-dom";
import Skill from "../Skill/Skill";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Skills.css";
import html_css_js_logo from "../../media/html_js_css_logs.png";
import react_logo from "../../media/react-white-logo.com.svg";
import node_express_logo from "../../media/node_express_logo.png";

const Skills = () => (
  <div id="Skills">
    <h1>Skills</h1>
    <div className="Skills">
      {" "}
      <p className="SkillsText">
        I have experience with several coding tools and language, such as HTML,
        CSS, Javascript, C#, Java, React, NodeJs, VB.NET, and Bootstrap. My
        current stack includes HTML5, CSS3, JavaSript, React.js and Express.js.
      </p>
      <Container fluid>
        <Row className="SkillsCards">
          <Col>
            <Skill
              image={html_css_js_logo}
              title="FrontEnd Development"
              description="I use HTML, CSS, and JavaScript to make engaging and interactive sites. A few examples of my sites can be seen in my projects section"
            />
          </Col>
          <Col>
            <Skill
              image={react_logo}
              title="FrontEnd Design"
              description="I love to use React.js when I am creating and designing reusable components. An example of this is the Sandwich builder, along with other projects."
            />
          </Col>
          <Col>
            <Skill
              image={node_express_logo}
              title="BackEnd Development"
              description="I use Node.js in conjuction with Express.js for server-side rendering. I found Express.js to be easy to learn and implement."
            />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Skills;

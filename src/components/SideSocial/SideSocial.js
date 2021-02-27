import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SideSocial.css";

import locationIcon from "../../media/icons/iconmonstr-navigation-5.svg";
import phoneIcon from "../../media/icons/iconmonstr-phone-9.svg";
import emailIcon from "../../media/icons/iconmonstr-email-11.svg";
import linkedinIcon from "../../media/icons/iconmonstr-linkedin-5.svg";
import githubIcon from "../../media/icons/iconmonstr-github-5.svg";

const SideSocial = () => (
  <Container fluid className="SideSocial">
    <Col className="Icon">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.google.com/maps/place/Temple+Hills,+MD/"
      >
        <img src={locationIcon} alt="location pin icon" />
        {/* TempleHills,MD,20748 */}
      </a>
    </Col>
    <Col className="Icon">
      <a href="tel:3019226397">
        <img src={phoneIcon} alt="telelphone icon" />
        {/* (301)922-6937 */}
      </a>
    </Col>
    <Col className="Icon">
      <a href="mailto:mikedaniels22@gmail.com">
        <img src={emailIcon} alt="email icon" />
        {/* mikedaniels22@gmail.com */}
      </a>
    </Col>
    <Col className="Icon">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://linkedin.com/in/medaniels213/"
      >
        <img src={linkedinIcon} alt="linkedin icon" />
        {/* linkedin.com/in/medaniels213/ */}
      </a>
    </Col>
    <Col className="Icon">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/mdaniels22/"
      >
        <img src={githubIcon} alt="github icon" />
        {/* github.com/mdaniels22/ */}
      </a>
    </Col>
  </Container>
);

export default SideSocial;

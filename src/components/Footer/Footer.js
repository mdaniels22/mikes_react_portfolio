import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

import locationIcon from "../../media/icons/iconmonstr-location-pin-thin.svg";
import phoneIcon from "../../media/icons/iconmonstr-phone-thin.svg";
import emailIcon from "../../media/icons/iconmonstr-mail-thin.svg";
import linkedinIcon from "../../media/icons/iconmonstr-linkedin-2.svg";
import githubIcon from "../../media/icons/iconmonstr-github-2.svg";

const footer = () => (
  <div className="Footer">
    <Row>
      <Col>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.google.com/maps/place/Temple+Hills,+MD/"
        >
          <img src={locationIcon} alt="location pin icon" />
          TempleHills,MD,20748
        </a>
      </Col>
      <Col>
        <a href="tel:3019226397">
          <img src={phoneIcon} alt="telelphone icon" />
          (301)922-6937
        </a>
      </Col>
      <Col>
        <a href="mailto:mikedaniels22@gmail.com">
          <img src={emailIcon} alt="email icon" />
          mikedaniels22@gmail.com
        </a>
      </Col>
      <Col>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://linkedin.com/in/medaniels213/"
        >
          <img src={linkedinIcon} alt="linkedin icon" />
          linkedin.com/in/medaniels213/
        </a>
      </Col>
      <Col>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/mdaniels22/"
        >
          <img src={githubIcon} alt="github icon" />
          github.com/mdaniels22/
        </a>
      </Col>
    </Row>
  </div>
);

export default footer;

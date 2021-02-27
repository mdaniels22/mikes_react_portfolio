import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import "../Project/Project.css";

const Project = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <div className="Pic" onClick={handleShowModal}>
        <p className="Overlays">{props.projectTitle}</p>
        <Image className="MyImage" src={props.image1} />
      </div>

      <Modal size="xl" centered show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.projectTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={props.image1}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={props.image2} alt="" />
                  </Carousel.Item>
                  {/* <Carousel.Item>
                    <img src={props.image3} alt="" />
                  </Carousel.Item> */}
                </Carousel>
              </Col>
              <Col>
                <p>{props.description}</p>
                <Row>
                  <Col>Project: {props.title}</Col>
                  <Col>Technologies: {props.techUsed}</Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Modal.Footer>
            <Button
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </Button>
            <Button
              href={props.siteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project;

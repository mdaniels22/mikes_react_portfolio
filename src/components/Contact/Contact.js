import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./Contact.css";
import Button from "react-bootstrap/Button";

const contact = () => {
  return (
    <div className="Contact">
      <h1>Get in Touch</h1>
      <p>Please feel free to contact me anytime!</p>
      <br />
      <Form>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Control placeholder="Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group>
          <Form.Control placeholder="Subject" />
        </Form.Group>
        <Form.Group>
          <Form.Control placeholder="Message" as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </div>
  );
};

export default contact;

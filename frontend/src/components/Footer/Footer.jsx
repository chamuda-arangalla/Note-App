import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="bg-body-tertiary text-center text-lg-start"
      style={{
        width: "100%",
        position: "relative",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col>About Us</Col>
          <Col>Contact Us</Col>
        </Row>
        <Row>
          <Col>We are the best</Col>
          <Col>+9411 5688222</Col>
        </Row>
        <Row>
          <Col>Copyright &copy; Note</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

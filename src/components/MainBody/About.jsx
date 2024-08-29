import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import aboutImg from "../../assets/img/about-img.png";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col className="me-5">
          <div>
            <h1 className="pb-5 fw-bolder">
              About Halloween <br /> Night
            </h1>
            <p className="mb-4">
              Night of all the saints, or all the dead, is celebrated on October
              31 and it is a very fun international celebration, this
              celebration comes from ancient origins, and is already celebrated
              by everyone.
            </p>
            <Button variant="danger" size="lg">
              know more
            </Button>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <Image src={aboutImg} fluid width={"350px"} className="ms-5 about-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;

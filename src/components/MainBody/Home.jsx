import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import homeImg from "../../assets/img/home3-img.png";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Container>
      <Row className="text-center text-md-start">
        <Col sm={12} md={6}>
          <Image src={homeImg} fluid width={"350px"} />
        </Col>
        <Col>
          <div className="mt-5">
            <h3 className="mb-4">#1 Top Scariest Ghost</h3>
            <h1 className="mb-4 home-title fw-bolder ">
              UOOOO
              <br /> TRICK OR
              <br /> TREAT!!
            </h1>
            <p className="mb-4">
              Hi, I'm Reiza, people call me "El Labu". I am currently trying to
              learn something new, building my own bike with parts made only in
              Malaysia.
            </p>
            <Button variant="danger" size="lg">
              Danger
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

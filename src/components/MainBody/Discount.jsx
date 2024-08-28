import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import discount from "../../assets/img/discount-img.png";
import Button from "react-bootstrap/Button";

const Discount = () => {
  return (
    <Container className="discount-section">
      <Row className="align-items-center">
        <Col>
          <Image src={discount} fluid width={"350px"} className="ms-5" />
        </Col>
        <Col className="me-5">
          <div className="text-center">
            <h2 className="pb-4 fw-bolder">
            50% Discount <br /> On New Products
            </h2>
            <Button variant="danger" size="lg">
              <a href="">Go to New</a>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Discount;

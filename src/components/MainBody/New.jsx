import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import new1 from "../../assets/img/new1-img.png";
import new3 from "../../assets/img/new3-img.png";
import new4 from "../../assets/img/new4-img.png";
import Badge from "react-bootstrap/Badge";

const New = () => {
  return (
    <Container>
      <h1 className="fw-bolder text-center mb-5">New Arrivals</h1>

      <Stack
        direction="horizontal"
        gap={5}
        className="align-items-center justify-content-center mb-5 flex-column flex-md-row"
      >
        <div className="trick-item text-center px-5">
          <Badge bg="danger" className="new-badge p-2 fs-6">
            New
          </Badge>
          <Image src={new1} fluid width={"150px"} className="mb-3 pt-3" />
          <h4>Haunted House</h4>
          <p>Accessory</p>
          <p>11.99$</p>
        </div>

        <div className="trick-item text-center px-5">
          <Badge bg="danger" className="new-badge p-2 fs-6">
            New
          </Badge>
          <Image src={new3} fluid width={"150px"} className="mb-3 pt-3" />
          <h4>Witch Hat</h4>
          <p>Accessory</p>
          <p>8.99$</p>
        </div>
        <div className="trick-item text-center px-5">
          <Badge bg="danger" className="new-badge p-2 fs-6">
            New
          </Badge>
          <Image src={new3} fluid width={"150px"} className="mb-3 pt-3" />
          <h4>Rip</h4>
          <p>Accessory</p>
          <p>15.99$</p>
        </div>
      </Stack>
    </Container>
  );
};

export default New;

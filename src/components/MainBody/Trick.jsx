import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import treat1 from "../../assets/img/trick-treat1-img.png";
import treat2 from "../../assets/img/trick-treat2-img.png";
import treat3 from "../../assets/img/trick-treat3-img.png";
import treat4 from "../../assets/img/trick-treat4-img.png";
import treat5 from "../../assets/img/trick-treat5-img.png";
import treat6 from "../../assets/img/trick-treat6-img.png";

const Trick = () => {
  return (
    <Container>
      <h1 className="fw-bolder text-center mb-5 pb-5">Trick Or Treat</h1>
      <Stack
        direction="horizontal"
        gap={5}
        className="align-items-center justify-content-center mb-5 flex-column flex-md-row"
      >
        <div className="trick-item text-center px-5">
          <Image src={treat1} fluid width={"110px"} className="mb-3 pt-3" />
          <h4>Toffee</h4>
          <p>Candy</p>
          <p>11.99$</p>
        </div>

        <div className="trick-item text-center px-5">
          <Image src={treat2} fluid width={"110px"} className="mb-3 pt-3" />
          <h4>Bone</h4>
          <p>Accessory</p>
          <p>8.99$</p>
        </div>
        <div className="trick-item text-center px-5">
          <Image src={treat3} fluid width={"110px"} className="mb-3 pt-3" />
          <h4>Scarecrow</h4>
          <p>Accessory</p>
          <p>15.99$</p>
        </div>
      </Stack>
      <Stack
        direction="horizontal"
        gap={5}
        className="align-items-center justify-content-center flex-column flex-md-row"
      >
        <div className="trick-item text-center px-5">
          <Image src={treat4} fluid width={"110px"} className="mb-3 pt-3" />
          <h4>Candy Cane</h4>
          <p>Candy</p>
          <p>7.99$</p>
        </div>

        <div className="trick-item text-center px-5">
          <Image src={treat5} fluid width={"110px"} className="mb-3 pt-3" />
          <h4>Pumpkin</h4>
          <p>Candy</p>
          <p>19.99$</p>
        </div>
        <div className="trick-item text-center px-5">
          <Image src={treat6} fluid width={"110px"} className="mb-3 pt-3" />
          <h4>Ghosts</h4>
          <p>Accessory</p>
          <p>17.99$</p>
        </div>
      </Stack>
    </Container>
  );
};

export default Trick;

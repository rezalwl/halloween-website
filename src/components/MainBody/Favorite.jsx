import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import category1 from "../../assets/img/category1-img.png";
import category2 from "../../assets/img/category2-img.png";
import category3 from "../../assets/img/category3-img.png";

const Favorite = () => {
  return (
    <Container>
        <h1 className="fw-bolder text-center">Favorite Scare <br/> Category</h1>
      <Stack
        direction="horizontal"
        gap={3}
        className="align-items-center justify-content-center flex-column flex-md-row"
      >
        <div className="text-center">
          <Image src={category1} fluid width={"200px"} className="mb-3" />
          <h4 >Ghosts</h4>
          <p >
            Choose the ghosts, the
            <br /> scariest there are.
          </p>
        </div>

        <div className="px-5 mx-5 text-center">
          <Image src={category2} fluid width={"200px"} className="mb-3" />
          <h4 >Ghosts</h4>
          <p >
            Choose the ghosts, the
            <br /> scariest there are.
          </p>
        </div>
        <div className="text-center">
          <Image src={category3} fluid width={"200px"} className="mb-3" />
          <h4>Ghosts</h4>
          <p >
            Choose the ghosts, the
            <br /> scariest there are.
          </p>
        </div>
      </Stack>
    </Container>
  );
};

export default Favorite;

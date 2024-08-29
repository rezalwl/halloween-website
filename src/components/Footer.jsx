import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import logo from "../assets/img/logo.png";
import footer1 from "../assets/img/footer1-img.png";
import footer2 from "../assets/img/footer2-img.png";
const Footer = () => {
  return (
    <Container className="footer-container">
      <Stack
        direction="horizontal"
        gap={4}
        className="align-items-center justify-content-center flex-column flex-md-row"
      >
        <div className=" px-5">
          <img src={logo} width={"30px"} alt="" className="pb-2" />{" "}
          <span className="fs-4">Halloween</span>
          <p className="mt-4 text-color">Enjoy the scariest<br/> night of your life.</p>
        </div>

        <div className="px-5 text-left">
          <h4>About</h4>
          <ul className="p-0">
            <li>
              <a href="#">
                About  Us
              </a>
            </li>
            <li>
              <a href="#">
                Features
              </a>
            </li>
            <li>
              <a href="#">
                News
              </a>
            </li>
          </ul>
        </div>
        <div className="px-5 text-left">
          <h4>Our Services</h4>
          <ul className="p-0">
            <li>
              <a href="#">
              Pricing
              </a>
            </li>
            <li>
              <a href="#">
              Discounts
              </a>
            </li>
            <li>
              <a href="#">
              Shipping
              </a>
            </li>
          </ul>
        </div>
        <div className="px-5 text-left">
          <h4>Our Company</h4>
          <ul className="p-0">
            <li>
              <a href="#">
              Blog
              </a>
            </li>
            <li>
              <a href="#">
                Features
              </a>
            </li>
            <li>
              <a href="#">
              Our mision
              </a>
            </li>
          </ul>
        </div>
      </Stack>
      <img src={footer1} alt="" width={'150px'} className="footer-img1"/>
      <img src={footer2} alt="" width={'150px'} className="footer-img2"/>
      <span className="footer-copyright text-color">&#169; rezalwl. All rigths reserved</span>
    </Container>
  );
};

export default Footer;

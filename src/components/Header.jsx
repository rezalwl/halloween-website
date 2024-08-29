import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import Button from "react-bootstrap/Button";


const Header = () => {
  const [scrollY , setScrollY] = useState(0)
  useEffect(()=>{window.addEventListener('scroll' , ()=>{setScrollY(window.scrollY)})})
  return (
    <Navbar expand="lg" className= {scrollY >= 50 ? 'fixed-top nav-bg' : 'j'}>
      <Container className="mb-0">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30px"
            height="30px"
            className="d-inline-block align-top me-2"
          />
          Halloween
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="px-4">Home</Nav.Link>
            <Nav.Link href="#link" className="px-4">About</Nav.Link>
            <Nav.Link href="#link" className="px-4">Candy</Nav.Link>
            <Nav.Link href="#link" className="px-4">New</Nav.Link>
          </Nav>
          <Button  className="header-btn ms-5 fs-5 px-3 py-2">Support</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

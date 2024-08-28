import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const Newsletter = () => {
  return (
    <Container>
      <div className="text-center">
        <h2 className="fw-bolder mb-5">Our Newsletter</h2>
        <p className="mb-4">
          Promotion new products and sales.
          <br /> Directly to your inbox
        </p>

        <form className="newsletter-form p-4 d-flex align-items-center justify-content-between">
          <input
            type="text"
            placeholder="Enter your email"
            class="newsletter-input"
          />
          <Button variant="danger" size="lg">
            subscribe
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Newsletter;

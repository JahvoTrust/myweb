import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a faucibus blandit, urna risus congue nunc, a dictum enim velit vel ligula.</p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Contact Us</h3>
            <ul>
              <li>Email: contact@example.com</li>
              <li>Phone: 555-555-5555</li>
              <li>Address: 1234 Example Street, Anytown USA</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">Copyright © {new Date().getFullYear()} Example Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

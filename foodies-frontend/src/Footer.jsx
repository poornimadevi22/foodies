import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='text-center' style={{ backgroundColor: 'black', color: 'white', padding: '20px 0' }}>
      <div className="footer-content ">
        <Row className="mt-5">
          <Col>
            <h3>Visit Us</h3>
            <p>123 Main Street, Cityville, Armenia</p>
          </Col>
          <Col>
            <h3>Contact Information</h3>
            <p>Email: info@foodies.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <p>AdChoices</p>
        <p>Privacy Notice</p>
        <p>Visitor Agreement</p>
      </div>
    </footer>
  );
};

export default Footer;

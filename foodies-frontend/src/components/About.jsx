import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Import your custom styles if needed


function About() {
 

  return (
    <Container className="mt-5">

      <h1>About Us</h1>

      <p>
        Welcome to Foodies, your go-to place for delicious and nutritious meals. We are passionate about providing
        high-quality, fresh, and diverse food options to satisfy every palate.
      </p>

      <h2>Our Mission</h2>
      <p>
        At Foodies, we believe in the power of good food to bring joy and well-being. Our mission is to deliver
        exceptional dining experiences that cater to various dietary preferences and lifestyles.
      </p>

      <h2>Our Team</h2>
      <p>
        Meet our dedicated team of chefs, nutritionists, and food enthusiasts who work tirelessly to create mouthwatering
        dishes. Each member of our team is committed to ensuring that every bite you take is a delight.
      </p>

      <h2>Quality Ingredients</h2>
      <p>
        We source only the finest and freshest ingredients to craft our dishes. From farm-fresh produce to premium
        spices, we prioritize quality to bring you a taste that is both wholesome and flavorful.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have questions or suggestions? Feel free to reach out to our friendly customer support team. We value your
        feedback and are here to assist you in any way we can.
      </p>

      <Row className="mt-5">
        <Col>
          <h3>Visit Us</h3>
          <p>123 Main Street,
            Cityville, Country</p>
        </Col>
        <Col>
          <h3>Contact Information</h3>
          <p>Email: info@foodies.com</p>
          <p>Phone: (123) 456-7890</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;





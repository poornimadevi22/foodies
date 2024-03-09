import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';


function About() {
 

  return (
    <Container className="mt-5">

      <h1>About Us</h1>

      <p>
        Welcome to Foodies, your go-to place for delicious and nutritious meals. We are passionate about providing
        high-quality, fresh, and diverse food options to satisfy every palate.We take pride in crafting exceptional dishes with a focus on quality ingredients. 
        Our commitment to your well-being and the planet drives us to specialize in a unique and healthy vegan foodstyle.
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

      <h2 className='text-color:green'>Quality Ingredients</h2>
      <p>
        We source only the finest and freshest ingredients to craft our dishes. From farm-fresh produce to premium
        spices,What sets our foodstyle apart is our dedication to using special and thoughtfully selected ingredients. From nutrient-rich superfoods to locally sourced organic produce, each dish is a testament to our commitment to providing you with a unique, wholesome, and guilt-free dining experience.
         We prioritize quality to bring you a taste that is both wholesome and flavorful.
         We believe in the power of plant-based living for both personal and environmental well-being. Our vegan foodstyle is not just a culinary choice; it's a celebration of health, compassion, and sustainability.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have questions or suggestions? Feel free to reach out to our friendly customer support team. We value your
        feedback and are here to assist you in any way we can.
      </p>

      
    </Container>
  );
}

export default About;





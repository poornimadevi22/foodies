import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; // Import your custom styles if needed

// const About = () => {
//   return (
//     <div>
//       <section className="about" id="about">
//         <Container>
//           <div className="banner">
//             <h2>About Us</h2>
//             <p>Don't stop your cravings, come and enjoy your meal here.</p>
//           </div>

//           <Row className="about-content">
//             <Col md={6}>
//               <div className="image-container">
//                 <img src={image} alt="veg" className="veg" />
//               </div>
//             </Col>
//             <Col md={6}>
//               <Card>
//                 <Card.Img variant="top" src="https://saraldiagnostics.com/blogs/1680765834.jpg" />
//                 <Card.Body>
//                   <Card.Title>Heart Health</Card.Title>
//                   <Card.Text>
//                     Include a variety of fruits, vegetables, and whole grains in your diet to promote heart health.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={6}>
//               <Card>
//                 <Card.Img variant="top" src="https://veggiedesserts.com/wp-content/uploads/2020/01/vegan-weight-loss-recipes-PIN1.jpg" />
//                 <Card.Body>
//                   <Card.Title>Weight Management</Card.Title>
//                   <Card.Text>
//                     Maintain a healthy weight by choosing nutrient-dense foods and practicing portion control.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={6}>
//               <Card>
//                 <Card.Img variant="top" src="https://skinnyspatula.com/wp-content/uploads/2022/01/Low-Calorie-Vegan-Recipes-1.jpg" />
//                 <Card.Body>
//                   <Card.Title>Immune Support</Card.Title>
//                   <Card.Text>
//                     Boost your immune system with foods rich in vitamins, minerals, and antioxidants.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={6}>
//               <Card>
//                 <Card.Img variant="top" src="https://i0.wp.com/sticksscratchkitchen.com/wp-content/uploads/2021/12/Veganuary-2022-5.png?resize=683%2C1024&ssl=1://example.com/vegan-recipe-1.jpg" />
//                 <Card.Body>
//                   <Card.Title>Vegan Recipe</Card.Title>
//                   <Card.Text>
//                     Try our delicious vegan recipes packed with plant-based goodness.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

const AboutUs = () => {
  return (
    <Container className="mt-5">
     <div className="image-container">
                 <img src='./vegan.jpg' alt="veg" className="veg" /> 
              </div>
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
          <p>123 Main Street, Cityville, Country</p>
        </Col>
        <Col>
          <h3>Contact Information</h3>
          <p>Email: info@foodies.com</p>
          <p>Phone: (123) 456-7890</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

// export default About;



import React from 'react';
import { GiCoffeeCup, GiHearts, GiStarFormation } from 'react-icons/gi';
import { IoFastFood } from 'react-icons/io5';
import { CgGym } from 'react-icons/cg';
import { SlBadge } from 'react-icons/sl';
import { GiFoodTruck } from "react-icons/gi";
import { Container, Row, Col } from 'react-bootstrap';

const Qualities = () => {
  const qualities = [
    { icon: <CgGym color="darkblue" size={70} />, text: 'Safety Food' },
    { icon: <GiFoodTruck color="purple" size={70} />, text: 'Fast delivery' },
    { icon: <SlBadge color="green" size={70} />, text: 'Best Quality' },
    // Add more qualities as needed
  ];

  return (
    <section className="qualities" id="qualities">
      <Container style={{alignItems:'center',justifyContent:'center',textAlign:'center',display:'flex',padding:'5%'}}>
        <Row>
          {qualities.map((quality, index) => (
            <Col key={index} md={4} xs={12} className="d-flex align-items-stretch mb-3">
              <div className="quality-item">
                {quality.icon}
                <p className="text-center mt-3">{quality.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Qualities;

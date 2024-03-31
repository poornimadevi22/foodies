import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import '../App.css';

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {

    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setTime("");
      setDate("");
      
       
      setTimeout(() => {
        navigate("/reservation");
      }, 3000);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
 
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
     
        <div className="banner" style={{background:"url('./quinoa-stuffed-peppers.jpg')",opacity:0.9,width:'100%'}}>
          <div className="reservation_form_box col-3">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <Form onSubmit={handleReservation}>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="time"
                    placeholder="Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type="submit" className="">
                    RESERVE NOW
                    
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

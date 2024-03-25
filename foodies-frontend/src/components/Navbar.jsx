import React, { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Admin from '../pages/Admin'
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SiFoodpanda } from "react-icons/si";
import { GiRobotLeg } from "react-icons/gi";
import * as jwt from 'jwt-decode';



const NavigationBar = () => {
  let userRole = null;
  const jwtToken = localStorage.getItem('token');
  console.log("f",jwtToken)
  if (jwtToken) {
    const decodedToken = jwt.jwtDecode(jwtToken)
    console.log(decodedToken);
    userRole = decodedToken.check?.role??decodedToken.role;
    console.log("f",decodedToken,userRole)
  }
  // const userRole = decodedToken ? decodedToken?.role : null;

  // const userRole = decodedToken ? decodedToken.user.role : null;
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleNavigate=(event)=>{
    event.preventDefault();
    const searchQuery = event.target.elements.searchInput.value.trim();
    console.log(searchQuery);
    console.log(event,'eee')
    window.location.href=`/menu/search/${searchQuery}`

  }

  const brandStyle = {
    fontFamily: 'Merienda, cursive', // Set the Merienda font
    fontSize: '2rem', // Adjust font size as needed
    fontWeight: 'bold',
    color:'white'
  };


  return (
    <>
        <Navbar bg={isSticky ? 'light' : 'light'} expand="lg" className="fixed-top" sticky="top" style={{background:"gray"}}>
          <Container fluid className="bg-dark" style={{background:"gray !important"}}>
            <Navbar.Brand href="#" style={brandStyle}>Foodies <SiFoodpanda color={'white'} size={50}/> </Navbar.Brand>
            <Navbar.Toggle className="bg-light" aria-controls={`offcanvasNavbar-expand-sm`}  style={{background:'white !important',}}/>
            <Navbar.Offcanvas  className="bg-light"  style={{background:'white !important',}}
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  Offcanvas
                </Offcanvas.Title> */}
              </Offcanvas.Header>
              <Offcanvas.Body style={{background:isSticky?'inherit'
              :'inherit'}}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className="text-light">Home</Nav.Link>
                  <Nav.Link href="/menu" className="text-light">Menu</Nav.Link>
                  <Nav.Link href="/login" className="text-light">Login</Nav.Link>
                  <Nav.Link href="/signup" className="text-light">Signup</Nav.Link>
                  {userRole === 'admin' && <Nav.Link href="/admin" className="text-light">Admin</Nav.Link>}
                  <Nav.Link href="/reservation" className="text-light">Reservation</Nav.Link>
                  <Nav.Link href="/cart" className="text-light">Cart</Nav.Link>

                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-sm`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex" onSubmit={handleNavigate}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label=""
                    name="searchInput"
                  />
                  <Button variant="secondary" type="submit" >Search</Button>
                  
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
};

export default NavigationBar;
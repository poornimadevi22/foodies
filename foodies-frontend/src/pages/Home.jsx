import React, { useState } from 'react';
import { FaRegHandPointRight, FaRegHandPointLeft } from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import Banner from '../components/Banner';
import About from '../components/About';
import Qualities from '../components/Qualities';
import 'react-icons/fa';
 import { useSpring, animated } from 'react-spring';
import CartPage from './Cartpage';
import { data } from '../data.json';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



const BouncingIcon = ({ children }) => {
    const props = useSpring({
      to: { transform: 'scale(1.2)' },
      from: { transform: 'scale(1)' },
      reset: true,
    });
  
    return <animated.span style={props}>{children}</animated.span>;
  };
  
const Home = () => {


  return (
    <div>
      <h1 className='text-center' style={{ color: 'maroon' }}>Welcome to Vegan Foodies Website</h1>
      <h3 className='text-center' style={{ color: 'darkblue' }}>Don't stop your cravings, come and enjoy your meal here.</h3>
      <h4 className='text-center' style={{ color: 'green' }}>
        Come and Grab your meal here by registering{' '}
        <BouncingIcon>
          <FaRegHandPointRight className="fa-spin" />
       </BouncingIcon>
        <Nav.Link href="/signup"  style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <span className="sign-in-text">Sign in</span>
          </Nav.Link>
    <BouncingIcon>
          <FaRegHandPointLeft className="fa-pulse" hover="pink"/>
          </BouncingIcon>
        in our website!!!
      </h4>
      <style>
        {`
          .hand-icon-animation-enter {
            opacity: 0;
            transform: translateY(-20px);
          }

          .hand-icon-animation-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 300ms, transform 300ms;
          }
          .sign-in-text:hover {
            color: red;
          }
        `}
      </style>
      <Banner />
      <Qualities />
      {/* <CartPage /> */}
      <About />
      <Footer />
    </div>
  );
};

export default Home;

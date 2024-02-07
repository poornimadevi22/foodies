import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Qualities from '../components/Qualities';
import Menu from '../components/Menu';
import CartPage from './Cartpage';
import {data} from '../data.json';
import Footer from '../Footer';
import NavigationBar from '../components/Navbar';

const Home = () => {
    return (
        <div>
           <h1 className='text-center' color={'maroon'}>Welcome to  Vegan Foodies Website</h1>
           <h3 className='text-center text-color:pink'>Don't stop your cravings, come and enjoy your meal here.</h3>
        <Banner />
       
        <Qualities />

       
        {/* <CartPage /> */}
       
  
       <Footer />
       
        </div>
    );
}

export default Home;

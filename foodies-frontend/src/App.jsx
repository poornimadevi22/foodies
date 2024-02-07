import { useState } from 'react'
import{BrowserRouter as Router,Routes,Route} from'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import About from './components/About';
import Reservation from './components/Reservation';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import CartPage from './pages/Cartpage';
import './App.css'
import { Toaster } from 'react-hot-toast';


function App() {
 

  return (
    <>
    <div><Toaster/></div>
    <NavigationBar />
     <Router>
     <Routes>
       <Route path="/"  element={<Home/>}></Route>
       <Route path="/menu/:filterBy?/:filter?"  element={<Menu/>}></Route>
       <Route path="/about"  element={<About/>}></Route>
       <Route path="/reservation"  element={<Reservation/>}></Route>
       <Route path="/cart" element={<CartPage/>}></Route>
      {/* <Route path="/"  element={}></Route> */}
       {/* <Route path="/"  element={}></Route> */} 




     </Routes>
  



    </Router>
    </>
  )
}

export default App

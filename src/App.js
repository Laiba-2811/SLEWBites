import './App.css';
import {Home} from './Pages/Home';
import {About} from './Pages/About.js';
import Contact from './Pages/Contact';
import SignUp from './Pages/Signup.js';
import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import {ShoppingCart} from './Pages/ProductCatalog';
import logow1 from './Pages/logow1.png';
import cart from './PicResources/cart.png';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import {FaUserCircle, FaSearch , FaShoppingCart,FaGoogle, FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
function App() {
  const [showSearch, setShowSearch] = useState(false);
  function toggleSearch() {
    setShowSearch(!showSearch);
  }

  // {Carttttttt}
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  // Get user details (replace with your own logic)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    // Add other user details
  };
  return (
    <div className="App">
      <Router>
      <nav class="navbar navbar-expand-lg py-0 fixed-top mb-5" id="mainNavBar">
    <div class="navbar-collapse collapse w-100 order-1 order-sm-0 dual-collapse2">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <img src={logow1} alt="Logo" class="d-inline-block align-text-top" />
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto order-0">
        <li class="nav-item">
        <Link className="nav-link" to="/" id="navItem">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/product-catalog" id="navItem">Product Catalog</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/about-us" id="navItem">About Us</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/contact-us" id="navItem">Contact Us</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/signup" id="navItem">Login/SignUp</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navItem" onClick={toggleSearch}>
            <FaSearch style={{fontSize: '30px'}} class="Fa-lg" />
          </a>
        </li>
      {showSearch && (
      <li className="nav-item">
        <div id='searchDiv' class="input-group">
          <input type="text" class="form-control" placeholder="Search" />
          <div class="input-group-append"><button class="btn btn-success">Search</button></div>
        </div>
      </li>
      )}
        
        <li class="nav-item">
        <a class="nav-link" href="#" id="navItem" onClick={handleCartClick}>
          <FaShoppingCart style={{ fontSize: "30px" }} class="Fa-lg" />
        </a>
      </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navItem">
            <FaUserCircle style={{fontSize: '30px'}} class="Fa-lg" />
          </a>
        </li>
      </ul>
      <Modal show={showCart} onHide={handleCloseCart} 
      style={{ height: '500px',
      width: '500px',
      position: 'fixed',
      right: '10px',
      transform: 'translate(100%, 0)',
      zIndex: 9999,}}>
      <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={cart} alt="Cart" style={{height:'100px', width:'100px'}}/>
          <h5>User Details:</h5>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add other user details */}
        </Modal.Body>
      </Modal>
    </div>
  </nav>
  <Routes>
  <Route exact path='/' element={< Home />}></Route>
  <Route exact path='//product-catalog' element={< ShoppingCart />}></Route>
  <Route exact path='/about-us' element={< About />}></Route>
  <Route exact path='/contact-us' element={< Contact />}></Route>
  <Route exact path='/signup' element={< SignUp />}></Route>
  </Routes>
  </Router>
    {/* <Home></Home> */}
    {/* {Footerrrrrr} */}




    
    </div>
  );
  
}

export default App;

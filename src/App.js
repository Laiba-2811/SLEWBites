import './App.css';
import {Home} from './Pages/Home';
import About from './Pages/About';
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
      <nav class="navbar navbar-expand-sm py-0 fixed-top mb-5" id="mainNavBar">
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


<div className="container-fluid px-0" id="footerDiv">
      {/* Footer */}
      <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: '#21D192' }}>
          {/* Left */}
          <div>
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div>
            <a href="" className="text-white me-4">
              <i><FaFacebook/></i>
            </a>
            <a href="" className="text-white me-4">
              <i><FaTwitter/></i>
            </a>
            <a href="" className="text-white me-4">
              <i><FaGoogle/></i>
            </a>
            <a href="" className="text-white me-4">
              <i><FaInstagram/></i>
            </a>
          </div>
        </section>
        {/* Section: Social media */}
        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-sm-6 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">SlewBites</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '100px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '100px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-dark">SlewBites</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Fresh Items</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Baked Items</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Pantry Staples</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-sm-6 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '100px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-dark">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Help</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '100px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><i className="fas fa-home mr-3"></i> Askari Tower, Gulberg, Lahore</p>
                <p><i className="fas fa-envelope mr-3"></i> SlewBites@example.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <div class="row">© 2020 SlewBites.com</div>
          
        </div>
      </footer>
    </div>

    
    </div>
  );
  
}

export default App;

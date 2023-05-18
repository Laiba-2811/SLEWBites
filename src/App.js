import './App.css';
import {Home} from './Pages/Home';
import React, { useState } from 'react';
import ShoppingCart from './Pages/ProductCatalog';
import logow1 from './Pages/logow1.png';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import {FaUserCircle, FaSearch , FaShoppingCart,FaGoogle, FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
function App() {
  const [showSearch, setShowSearch] = useState(false);
  function toggleSearch() {
    setShowSearch(!showSearch);
  }
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
          <a class="nav-link active" aria-current="page" href="#" id="navItem">Home</a>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/product-catalog" id="navItem">Product Catalog</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navItem">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navItem">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navItem">Login/SignUp</a>
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
          <a class="nav-link" href="#" id="navItem">
            <FaShoppingCart style={{fontSize: '30px'}} class="Fa-lg" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navItem">
            <FaUserCircle style={{fontSize: '30px'}} class="Fa-lg" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <Routes>
  <Route exact path="/" component={Home} />
  <Route path="/product-catalog" component={ShoppingCart} />
  </Routes>
  
  </Router>
    <Home></Home>
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
              <i>{FaFacebook}</i>
            </a>
            <a href="" className="text-white me-4">
              <i>{FaTwitter}</i>
            </a>
            <a href="" className="text-white me-4">
              <i>{FaGoogle}</i>
            </a>
            <a href="" className="text-white me-4">
              <i>{FaInstagram}</i>
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
          © 2020 SlewBites.com
        </div>
      </footer>
    </div>

    
    </div>
  );
 
  
}

export default App;

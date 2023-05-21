import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';
import './Home.css'
import cart from '../PicResources/cart.png';
import logow1 from '../Pages/logow1.png';

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <Navbar expand="lg" fixed="top" className="mb-5 py-0" id="mainNavBar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Link to="/" className="nav-link">
                <img src={logow1} alt="Logo" className="d-inline-block align-text-top" />
              </Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Item>
              <Link to="/" className="nav-link" id="navItem">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/product-catalog" className="nav-link" id="navItem">
                Product Catalog
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about-us" className="nav-link" id="navItem">
                About Us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact-us" className="nav-link" id="navItem">
                Contact Us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/signup" className="nav-link" id="navItem">
                Login/SignUp
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a href="#" className="nav-link" id="navItem" onClick={toggleSearch}>
                <FaSearch style={{ fontSize: '30px' }} className="Fa-lg" />
              </a>
            </Nav.Item>
            {showSearch && (
              <Nav.Item>
                <div id="searchDiv" className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-success">Search</button>
                  </div>
                </div>
              </Nav.Item>
            )}
            <Nav.Item>
              <a href="#" className="nav-link" id="navItem" onClick={handleCartClick}>
                <FaShoppingCart style={{ fontSize: '30px' }} className="Fa-lg" />
              </a>
            </Nav.Item>
            <Nav.Item>
              <a href="#" className="nav-link" id="navItem">
                <FaUserCircle style={{ fontSize: '30px' }} className="Fa-lg" />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal
        show={showCart}
        onHide={handleCloseCart}
        style={{
          height: '500px',
          width: '500px',
          position: 'fixed',
          right: '10px',
          transform: 'translate(100%, 0)',
          zIndex: 9999,
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={cart} alt="Cart" style={{ height: '100px', width: '100px' }} />
          <h5>User Details:</h5>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add other user details */}
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default Navigation;

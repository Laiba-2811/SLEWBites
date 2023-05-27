import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import React from 'react';
import './Home.css'
import cart from '../PicResources/cart.png';
import logow1 from '../Pages/logow1.png';

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [product,setProduct]=useState([])
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const handleCartClick = () => {
    setShowCart(true);
    
    var obj=[];
    const currentData=JSON.parse(localStorage.getItem('productData'))||[];
    setCartCount(currentData.length);
     currentData.map((c)=>{
      obj.push(c);
      //setCartCount(cartCount + 1);
     })
     setProduct(obj);
    
    
  };
  
  
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  const toggleSearch = () => {
    setShowSearch(!showSearch);
//     const [products, setProducts] = useState([])
//   //fetch dta from API
// const url = 'http://localhost:3000/api/products';
// const fetchApiData= async (url)=>{
//  try{
//    const res= await fetch(url);
//    const data = await res.json();
//   setProducts(data)
//  } catch(error){
//    console.log(error);
//  }
//   }
 
//    useEffect(() => {
//     fetchApiData(url);
   
     
//    }, [])
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <Navbar expand="lg" fixed="top" className="mb-5 py-0" id="mainNavBar">
       <Navbar.Brand href="#"><img
              alt=""
              src={logow1}
              className="d-inline-block align-top"
            /></Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
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
            <Nav.Item>
            <Link to="/cart" className="nav-link" id="navItem">
            <FaShoppingCart style={{ fontSize: '30px' }} className="Fa-lg" />
              </Link>
              {/* <a href="#" className="nav-link" id="navItem" onClick={handleCartClick} >
                <FaShoppingCart style={{ fontSize: '30px' }} className="Fa-lg" />
                { <span className="cart-badge" onChange={handleCartClick}>{cartCount}</span>}
              </a> */}
              </Nav.Item>
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
            {product.map((p)=>{
              return(<>
               <h5>Product Details:</h5>
              <p>Product Name:{p.name}</p>
              <p>Price: {p.price}</p>
              <p>Quantity:{p.quantity}</p>
              <Button variant='success' >Order Now</Button>
              <hr></hr>
              </>)
             

            })}
         
          
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default Navigation;

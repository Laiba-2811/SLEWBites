import React, { useState,useEffect } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import Cards from './Cards';
import cart from '../PicResources/cart.png';

const Category = ({ category }) => {
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleCartClick = (product) => {
    setSelectedProduct(product);
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const addToCart = (product) => {
    // Add to cart logic here
    console.log('Item added to cart:', product);
  };

  const [products, setProducts] = useState([])
  //fetch dta from API
const url = 'http://localhost:3000/api/products';
const fetchApiData= async (url)=>{
 try{
   const res= await fetch(url);
   const data = await res.json();
  setProducts(data)
 } catch(error){
   console.log(error);
 }
  }
 
   useEffect(() => {
    fetchApiData(url);
   
     
   }, [])

  return (
    <>
      <div className="container-fluid justify-content-center mt-5">
        <br />
        <h1>{category} Items</h1>
      </div>
      <div className="row">
        {products.map((product) => {
         
          if (category=="" || category === product.Category.name) {
            return (
              <div className="col-sm d-flex justify-content-center" key={product.id}>
                <div className="card mb-3" style={{ width: '15rem' }}>
                  <img
                    className="card-img-top"
                    style={{ width: '10rem', height: '10rem' }}
                    src={'./images/' + product.img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="row">
                      <div className="col-sm d-flex justify-content-center">
                        <p className="card-text">Price: {product.price}</p>
                      </div>
                      <div className="col-sm d-flex justify-content-center">
                        <p className="card-text">Quantity: {product.quantity}</p>
                      </div>
                    </div>
                    <p className="card-text">Category: {product.Category.name}</p>
                    <Button variant="success" onClick={() => handleCartClick(product)}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
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
          {selectedProduct && (
            <>
              {/* <Cards item={selectedProduct}></Cards> */}
              <img src={'./images/'+selectedProduct.img} alt="Cart" style={{ height: '100px', width: '100px' }} />
              <h5>Your product:</h5>
              <Row>
                <Col>
                  <p>Product: {selectedProduct.name}</p>
                </Col>
                <Col>
                  <h6>Quantity:</h6>
                  <select onChange={(e) => setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((i) => (
                      <option value={i + 1} key={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>
              <p>Price: {(selectedProduct.price) * quantity+'./Rs'}</p>
              <Button className='btn-btn-success'>Order</Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Category;

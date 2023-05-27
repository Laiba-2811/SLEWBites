import React, { useState,useEffect } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import Cards from './Cards';
import cart from '../PicResources/cart.png';

const Category = ({ category }) => {
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
 // const [price,setPrice]=useState(1);
  const handleCartClick = (product) => {
    setSelectedProduct(product);
    var p=selectedProduct.price *quantity;
    //setPrice(p);
    setShowCart(true);
      const currentData=JSON.parse(localStorage.getItem('productData'))||[];
      var obj={id:product._id,
      name:product.name,
      img:product.img,
      price:p, 
      quantity:quantity}
      currentData.push(obj);
      localStorage.setItem('productData', JSON.stringify(currentData));
      console.log('data submitted successfully')
    if(selectedProduct){
      

    }
    
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
        <h1>{category} Products</h1>
      </div>
      <div className="row">
        {products.map((product) => {
          if (category=="" || category === product.Category.name) {
            return (
              <div className="col-sm d-flex justify-content-center" key={product._id}>
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
                        <p className="card-text">1 item Price: {product.price}Rs</p>
                      </div>
                      <div className="col-sm d-flex justify-content-center">
                        <p className="card-text"><h6>Quantity:</h6>
                  <select onChange={(e) => setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((i) => (
                      <option value={i + 1} key={i + 1}>
                        {i + 1}
                      </option>
                    ))}</select></p>
                      </div>
                      <div className="col-sm d-flex justify-content-center">
                        <p className="card-text">Price of {quantity} items: {product.price*quantity}Rs</p>
                      </div>
                    </div>
                    <p className="card-text">Category: {product.Category.name}</p>
                    <Button variant="success" onClick={() =>{
                       handleCartClick(product)
                      }}
                      >
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
              <img src={'./images/'+selectedProduct.img} alt="Cart" style={{ height: '100px', width: '100px' }} />
              <h5>Your product:</h5>
              <Row>
                <Col>
                  <p>Product: {selectedProduct.name}</p>
                </Col>
                <Row><p >Price of {quantity} items: {selectedProduct.price*quantity}</p></Row>
                <Col>
                  <h6>Quantity:{quantity}</h6>
                  {/* <select onChange={(e) => setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((i) => (
                      <option value={i + 1} key={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select> */}
                </Col>
              </Row>
              <Row></Row>
              <Button variant='success' onClick={handleCloseCart}>Add to your product list</Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Category;

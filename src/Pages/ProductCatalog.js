import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import item1 from '../PicResources/item1.jpg';
import item2 from '../PicResources/item2.jpg';
import item3 from '../PicResources/item3.jpg';
import baked1 from '../PicResources/baked food/baked1.png';
import baked2 from '../PicResources/baked food/baked2.png';
import baked3 from '../PicResources/baked food/baked3.png';
import baked4 from '../PicResources/baked food/baked4.png';
import baked5 from '../PicResources/baked food/baked5.png';
import baked6 from '../PicResources/baked food/baked6.png';
import baked7 from '../PicResources/baked food/baked7.png';
import baked8 from '../PicResources/baked food/baked8.png';
import baked9 from '../PicResources/baked food/baked9.png';
import baked10 from '../PicResources/baked food/baked10.png';
import applefruit from '../PicResources/fresh produce/applefruit.png';
import freshfruit1 from '../PicResources/fresh produce/freshfruit1.png';
import freshfruit2 from '../PicResources/fresh produce/freshfruit2.png';
import freshfruit3 from '../PicResources/fresh produce/freshfruit3.png';
import freshvegi4 from '../PicResources/fresh produce/freshvegi4.jpg';
import freshvegi2 from '../PicResources/fresh produce/freshvegi2.jpg';
import freshvegi3 from '../PicResources/fresh produce/freshvegi3.jpg';
import freshmeat1 from '../PicResources/fresh produce/freshmeat1.png';
import rice from '../PicResources/pantry staples/rice.jpg';
import wheatflour from '../PicResources/pantry staples/wheatflour.jpg';
import pentrystaples1 from '../PicResources/pantry staples/pentrystaples1.png';
import pentrystaples2 from '../PicResources/pantry staples/pentrystaples2.png';
import Nuts1 from '../PicResources/pantry staples/Nuts1.png';
import salt from '../PicResources/pantry staples/salt.jpg';
import vegitableOil from '../PicResources/pantry staples/vegitableOil.jpg';
import dryfruits from '../PicResources/pantry staples/dryfruits.jpg';
import redChilly from '../PicResources/pantry staples/redChilly.jpg';
import './Home.css';
export const ShoppingCart = (category) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const baked = {
  //   img1: { src: baked1 },
  //   img2: { src: baked2 },
  //   img3: { src: baked3 },
  //   img4: { src: baked4 },
  //   img5: { src: baked5 },
  //   img6: { src: baked6 },
  //   img7: { src: baked7 },
  //   img8: { src: baked8 },
  //   img9: { src: baked9 },
  //   img10: { src: baked10 }
  // };
  // const fresh = {
  //   img1: { src: applefruit },
  //   img2: { src: freshfruit1 },
  //   img3: { src: freshfruit2 },
  //   img4: { src: freshfruit3 },
  //   img5: { src: freshvegi4 },
  //   img6: { src: freshvegi2 },
  //   img7: { src: freshvegi3 },
  //   img8: { src: freshmeat1 },
  // };
  
  // const pantry = {
  //   img1: { src: dryfruits },
  //   img2: { src: pentrystaples1},
  //   img3: { src: pentrystaples2 },
  //   img4: { src: redChilly},
  //   img5: { src: vegitableOil},
  //   img6: { src: salt },
  //   img7: { src: rice },
  //   img8: { src: wheatflour },
  //   img9: { src: Nuts1 },
  
  // };
  const [products, setProducts] = useState([])
     //fetch dta from API
  const url = 'http://localhost:3000/api/products';
  const fetchApiData= async (url)=>{
    try{
      const res= await fetch(url);
      const data = await res.json();
     //  console.log(baseurl, "base");
     setProducts(data)
    } catch(error){
      console.log(error);
    }
     }
    
      useEffect(() => {
       fetchApiData(url);
      
        
      }, [])
  
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.price);
  };

  return (
    <Container className='mt-auto'>
      <h1>Product</h1>
    <div class="container-fluid justify-content-center mt-5">
    <br></br>
    <h1>Baked Items</h1>
    </div>
    <div className="row">
        {products.map((product) => {
          if (category=="" || product.Category.name=='baked') {
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
                        <p className="card-text">Price : {product.price}Rs</p>
                      </div>
                      <div className="col-sm d-flex justify-content-center">
                        <p className="card-text"><h6>Quantity:{product.quantity}</h6>
                    </p>
                      </div>
                    </div>
                    <p className="card-text">Category: {product.Category.name}</p>
                    <Button variant="success" 
                    // onClick={() =>{
                    //    handleCartClick(product)
                    //   }}
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
      <div>
      <h1>Fresh Items</h1>
    </div>
    <div className="row">
        {products.map((product) => {
          if (category=="" || product.Category.name=='fresh') {
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
                        <p className="card-text">Price : {product.price}Rs</p>
                      </div>
                      <div className="col-sm d-flex justify-content-center">
                        <p className="card-text"><h6>Quantity:{product.quantity}</h6>
                    </p>
                      </div>
                    </div>
                    <p className="card-text">Category: {product.Category.name}</p>
                    <Button variant="success" 
                    // onClick={() =>{
                    //    handleCartClick(product)
                    //   }}
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
      <div>
      <h1>Pantry Items</h1>
    </div>
    <div className="row">
        {products.map((product) => {
          if (category=="" || product.Category.name=='pantry') {
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
                        <p className="card-text">Price : {product.price}Rs</p>
                      </div>
                      <div className="col-sm d-flex justify-content-center">
                        <p className="card-text"><h6>Quantity:{product.quantity}</h6>
                    </p>
                      </div>
                    </div>
                    <p className="card-text">Category: {product.Category.name}</p>
                    <Button variant="success" 
                    // onClick={() =>{
                    //    handleCartClick(product)
                    //   }}
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
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name} - ${item.price}</p>
            </div>
          ))}
          <p>Total Price: ${totalPrice}</p>
          <Button variant="primary">Proceed to Checkout</Button>
        </div>
      ) : (
        <p>No items in the cart.</p>
      )}
    </Container>
  );
};

// export default ShoppingCart;

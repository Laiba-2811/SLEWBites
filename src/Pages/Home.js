import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import { useState,useEffect } from "react";
import { Container, Row, Col, Card, Button,Modal } from 'react-bootstrap';
import { FaLeaf, FaBreadSlice, FaUtensils, FaUserCircle, FaSearch , FaShoppingCart,FaGoogle, FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
import cabbage_Vegetables from '../PicResources/cabbage_Vegetables.jpg';
import carrot_Vegetables from '../PicResources/carrot_Vegetables.jpg';
import cauliflower_vegetables from '../PicResources/cauliflower_vegetables.jpg';
import cart from '../PicResources/cart.png';
import Onions from '../PicResources/Onions.jpg';
import Pizza from '../PicResources/Pizza.png';
import item1 from '../PicResources/item1.jpg';
import item2 from '../PicResources/item2.jpg';
import item3 from '../PicResources/item3.jpg';
import Sandwich1 from '../PicResources/Sandwich1.png';
import bakeryItems from'../PicResources/bakeryItems.jpg';
import muskMelon_fruits from '../PicResources/muskMelon_fruits.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Category from "./HpageCategory";
export function Home(){
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showCart, setShowCart] = useState(false);
    const [quantity, setQuantity]=useState(1)
     function handleCartClick({value}){
      setShowCart(true);
      return(<>
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
            <h5>Your cart:</h5>
            <p>Product:{value.name}</p>
            <p>Quantity:<select onChange={e=>setQuantity(e.target.value)}>
                      {[...Array(10).keys].map((i,v)=>{
                          <option value={i+1} >{i+1}</option>
                      })}
                  </select></p>
            <p>Price:{value.price * quantity}</p>
          </Modal.Body>
        </Modal>
      </>)
    };
  
    const handleCloseCart = () => {
      setShowCart(false);
    };
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
    // const [products, setProducts] = useState([
    //   {id:"1", 
    //   name:"onion",
    //   img:"baked1.png",
    //   price:"$10",
    //   quantity:"10",
    //   inStock:true,
    //   Category:{id:"1", name:"baked",img:"", description:"" }
    //   },
    //   {id:"2", 
    //   name:"Apple",
    //   img:"baked2.png",
    //   price:"$10",
    //   quantity:"8",
    //   inStock:true,
    //   Category:{id:"1", name:"baked",img:"", description:"" }
    //   },
    //   {id:"3", 
    //   name:"onion",
    //   img:"baked3.png",
    //   price:"$11",
    //   quantity:"7",
    //   inStock:true,
    //   Category:{id:"1", name:"pantry",img:"", description:"" }
    //   },
    //   {id:"4", 
    //   name:"Vegetable",
    //   img:"baked4.png",
    //   price:"$10",
    //   quantity:"7",
    //   inStock:true,
    //   Category:{id:"1", name:"fresh",img:"", description:"" }
    //   }
    // ]);
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      };
      

    return(
        <>
        
  <div id='carouselDiv' class="m-2">
        <Carousel id="carousel" >
      <Carousel.Item className="cId">
        <img id="img1"
          className="d-block w-100 "
          src={item2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fresh Items</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="cId">
        <img id="img2"
          className="d-block w-100"
          src={item1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Pantry Staples</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="cId" >
        <img id="img3"
          className="d-block w-100"
          src={item3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  <div class="container-fluid">
  <h1 id='homeHeader'>Welcome to <i id="italic">SlewBites</i>,<br></br> your one-stop destination<br></br> for delightful Food experiences!</h1>
  <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={item1} />
            <Card.Body>
              <Card.Title>Fresh Items</Card.Title>
              <Card.Text>At SlewBites, we pride ourselves on providing the freshest and highest quality fresh food options. From farm-fresh fruits and vegetables to handpicked seafood and meats, we ensure that every bite is packed with nutrition, flavor, and goodness for a truly refreshing and wholesome dining experience.</Card.Text>
              <button class="btn btn-success " className="btn btn-success categoryBtn">
                  <FaLeaf className="category-icon" />
                  Fresh Food
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={item2} />
            <Card.Body>
              <Card.Title>Baked Items</Card.Title>
              <Card.Text>SlewBites offers a delectable range of baked food that is sure to tantalize your taste buds. From freshly baked bread to mouthwatering pastries and cakes, our baked food selection is crafted with love and expertise</Card.Text>
              <button class="btn btn-success " className="btn btn-success categoryBtn">
                <FaBreadSlice className="category-icon" />
              Baked Food
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={item3} />
            <Card.Body>
              <Card.Title>Pantry Staples</Card.Title>
              <Card.Text>Discover a wide array of pantry staples at SlewBites, where we offer essential ingredients that elevate your culinary creations. From premium spices and seasonings to gourmet oils and condiments, our pantry staples are carefully sourced to enhance the flavors and elevate your cooking to new heights.</Card.Text>
              <button class="btn btn-success "  className="btn btn-success categoryBtn">
                <FaUtensils className="category-icon" />
                Pantry Staples
              </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  {/* Categories */}
  <div className="categories d-flex flex-row justify-content-center align-items-center md-auto mb-3">
  <div className={`${selectedCategory === 'fresh' ? 'active' : ''}`} >
    <button class="btn btn-success " className="btn btn-success categoryBtn" onClick={()=>{
      handleCategoryClick('fresh')
    }}>
      <FaLeaf className="category-icon" />
      Fresh Food
    </button>
  </div>
  <div className={`${selectedCategory === 'baked' ? 'active' : ''}`} >
    <button class="btn btn-success " className="btn btn-success categoryBtn" onClick={()=>{
      handleCategoryClick('baked')
    }}>
      <FaBreadSlice className="category-icon" />
      Baked Food
    </button>
  </div>
  <div className={` ${selectedCategory === 'pantry' ? 'active' : ''}`}>
    <button class="btn btn-success "  className="btn btn-success categoryBtn" onClick={()=>{
      handleCategoryClick('pantry')
    }}>
      <FaUtensils className="category-icon" />
      Pantry Staples
    </button>
  </div>
</div>
<div class="container-fluid justify-content-center mt-5">
    <br></br>
    </div>
    <Category category={selectedCategory}></Category>
    {/* <div className="row">
  {Object.entries(products).map(([key, product]) => {
    // Display only 4 cards in a row
      return (
        <div className="col-sm d-flex justify-content-center" key={key}>
          <div className="card mb-3" style={{ width: '15rem' }}>
            <img className="card-img-top" style={{ width: '10rem', height: '10rem' }} src={'./images/'+product.img} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Name:{product.name}</h5>
              <p className="card-text">Price:{product.price}</p>
              <p className="card-text">Quantity:{product.quantity}</p>
              <p className="card-text">Category:{product.Category.name}</p>
              <Button variant="success" onClick={()=>{
                {handleCartClick(product)}
              }}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      );
  })}
</div> */}


<Footer/>
</>

    );

}
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import { useState } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLeaf, FaBreadSlice, FaUtensils, FaUserCircle, FaSearch , FaShoppingCart,FaGoogle, FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
import cabbage_Vegetables from '../PicResources/cabbage_Vegetables.jpg';
import carrot_Vegetables from '../PicResources/carrot_Vegetables.jpg';
import cauliflower_vegetables from '../PicResources/cauliflower_vegetables.jpg';
import Guava from '../PicResources/Guava.jpg';
import Onions from '../PicResources/Onions.jpg';
import Pizza from '../PicResources/Pizza.png';
import item1 from '../PicResources/item1.jpg';
import item2 from '../PicResources/item2.jpg';
import item3 from '../PicResources/item3.jpg';
import Sandwich1 from '../PicResources/Sandwich1.png';
import bakeryItems from'../PicResources/bakeryItems.jpg';
import muskMelon_fruits from '../PicResources/muskMelon_fruits.jpg';

import 'bootstrap/dist/css/bootstrap.css';
export function Home(){
    const [selectedCategory, setSelectedCategory] = useState('');
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
  <div className={`${selectedCategory === 'fresh' ? 'active' : ''}`} onClick={() => handleCategoryClick('fresh')}>
    <button class="btn btn-success " className="btn btn-success categoryBtn">
      <FaLeaf className="category-icon" />
      Fresh Food
    </button>
  </div>
  <div className={`${selectedCategory === 'baked' ? 'active' : ''}`} onClick={() => handleCategoryClick('baked')}>
    <button class="btn btn-success " className="btn btn-success categoryBtn">
      <FaBreadSlice className="category-icon" />
      Baked Food
    </button>
  </div>
  <div className={` ${selectedCategory === 'pantry' ? 'active' : ''}`} onClick={() => handleCategoryClick('pantry')}>
    <button class="btn btn-success "  className="btn btn-success categoryBtn">
      <FaUtensils className="category-icon" />
      Pantry Staples
    </button>
  </div>
</div>

{/* Cards After Categories */}
<div class="d-flex flex-row justify-content-center align-items-center md-auto">
<div class="col-sm d-flex justify-content-center">
            <div class="card mb-3" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={cauliflower_vegetables} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Carrot- Half kg </h5>
                <p class="card-text">Price:$10</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm d-flex justify-content-center">
            <div class="card mb-3" style={{width: '15rem'}}>
              <img class="card-img-top justify-content-center align-items-center" style={{width: '10rem', height:'10rem'}} src={Onions} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Onions 5 kg </h5>
                <p class="card-text">Price:$25</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm d-flex justify-content-center">
            <div class="card mb-3" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={Guava} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Guava- Half kg </h5>
                <p class="card-text">Price:$5</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm d-flex justify-content-center">
            <div class="card mb-3" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={muskMelon_fruits} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Musk Melon- 1 kg </h5>
                <p class="card-text">Price:$14</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
</div>

{/* {2nd Row of Items} */}
<div class="d-flex flex-row justify-content-center align-items-center md-auto">
<div class="col-sm d-flex justify-content-center">
            <div class="card mb-5" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={cauliflower_vegetables} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Carrot- Half kg </h5>
                <p class="card-text">Price:$10</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm d-flex justify-content-center">
            <div class="card mb-5" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={Onions} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Onions 5 kg </h5>
                <p class="card-text">Price:$25</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm d-flex justify-content-center">
            <div class="card mb-5" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={Guava} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Guava- Half kg </h5>
                <p class="card-text">Price:$5</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm d-flex justify-content-center">
            <div class="card mb-5" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={muskMelon_fruits} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Musk Melon- 1 kg </h5>
                <p class="card-text">Price:$14</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
</div>


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
</>

    );

}
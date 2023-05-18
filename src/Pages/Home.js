import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import { useState } from "react";
import logow1 from './logow1.png';
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
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm">
        <h1 id='homeHeader'>Welcome to <i id="italic">SlewBites</i>, your one-stop destination for delightful Food experiences!</h1>
        <p>Indulge in a gastronomic adventure with SlewBites, where we bring you the finest selection of gourmet delights right to your doorstep. Our online food store is designed to cater to the diverse tastes and preferences of food enthusiasts, ensuring that every bite is a moment of pure pleasure.</p>
        <h3>Convenience at Your Fingertips:</h3>
        <p>With our user-friendly online platform, ordering your favorite meals has never been easier. Simply browse our menu, select your desired items, and proceed to checkout. Our streamlined ordering process ensures that you can enjoy a hassle-free experience from start to finish. And with our swift delivery service, your food will be at your doorstep in no time, ready to satisfy your cravings</p>
      </div>
      <div class="col-sm">
        <div class="d-flex flex-row">
          <div class="col-sm">
            <div class="card" style={{width: '15rem'}}>
              <img class="card-img-top img-fluid" src={cabbage_Vegetables} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Cabbage-1 pc</h5>
                <p class="card-text">Price:$12</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{width: '15rem'}}>
              <img class="card-img-top " src={carrot_Vegetables} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Carrot- Half kg </h5>
                <p class="card-text">Price:$15</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
<div class="col-sm ">
            <div class="card mb-3" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={cauliflower_vegetables} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Carrot- Half kg </h5>
                <p class="card-text">Price:$10</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card mb-3" style={{width: '15rem'}}>
              <img class="card-img-top justify-content-center align-items-center" style={{width: '10rem', height:'10rem'}} src={Onions} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Onions 5 kg </h5>
                <p class="card-text">Price:$25</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card mb-3" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={Guava} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Guava- Half kg </h5>
                <p class="card-text">Price:$5</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm">
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
<div class="col-sm">
            <div class="card mb-5" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={cauliflower_vegetables} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Carrot- Half kg </h5>
                <p class="card-text">Price:$10</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card mb-5" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={Onions} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Onions 5 kg </h5>
                <p class="card-text">Price:$25</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card mb-5" style={{width: '15rem'}}>
              <img class="card-img-top" style={{width: '10rem', height:'10rem'}} src={Guava} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Guava- Half kg </h5>
                <p class="card-text">Price:$5</p>
                <a href="#" class="btn btn-success">Order</a>
              </div>
            </div>
          </div>
          <div class="col-sm">
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
</>

    );

}
import React from "react";
import { Carousel } from "react-bootstrap";
import item1 from '../PicResources/item1.jpg';
import item2 from '../PicResources/item2.jpg';
import item3 from '../PicResources/item3.jpg';
export default function Carousal()
{
    return(<>
    <div id='carouselDiv' class="m-2">
        <Carousel id="carousel" interval={1500}>
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


    </>);
}

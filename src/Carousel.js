import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Slide+1"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>THIS IS THE FIRST SLIDE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Slide+2"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>THIS IS THE SECOND SLIDE AND MANY ALTERATIONS CAN BE DONE BASED ON USER DEMANDS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Slide+3"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>THIS IS THE THIRD SLIDE SIMILARILY MANY SLIDES CAN BE ADDED</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;

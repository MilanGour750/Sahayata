import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
export default function MainCarousel() {
  return (
    <div className="align-items-center">
      
      <Carousel
        style={{ width: "", height: "" }}
        className="mx-auto col-12 col-md-10"
        prevIcon={
          <FaArrowCircleLeft size="3.5rem" color="black" opacity="0.7" />
        }
        nextIcon={
          <FaArrowCircleRight size="3.5rem" color="black" opacity="0.7" />
        }
      >
        <Carousel.Item style={{ width: "", height: "" }}>
          <img
            className="d-block w-100 img-fluid"
            src={require("../../assests/elec.jpg")}
            alt="First slide"
            style={{ width: "", height: "" }}
          />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h3>Hostel Service</h3>
            <p>Your Needs, Our Promise — We’ll Get It Done!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "", height: "" }}>
          <img
            className="d-block w-100 img-fluid"
            src={require("../../assests/weld.jpeg")}
            alt="First slide"
            style={{ width: "", height: "" }}
          />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h3>Need Medicine?</h3>
            <p> We’ve Got You Covered!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "", height: "" }}>
          <img
            className="d-block w-100 img-fluid"
            src={require("../../assests/paint.jpeg")}
            alt="First slide"
            style={{ width: "", height: "" }}
          />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h3>Laundry Needs?</h3>
            <p>We Handle It All with Care!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

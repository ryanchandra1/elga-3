import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "../../elements/img";
import "./card.css"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BaseCarousel = ({ children }) => {
  return (
    <div className="w-full h-full relative"> {/* Added margin-bottom here */}
      <Carousel
        responsive={responsive}
        infinite={true}
        customTransition="all .5"
        transitionDuration={500}
        arrows={false}
        renderButtonGroupOutside={true}
        showDots={true}
        autoPlay={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list"
      >
        <div className="p-[50px] overflow-hidden justify-center items-center rounded-xl drop-shadow-md bg-[#FFFFFF] border mb:w-[200px] mb:h-[150px] lg:w-[240px] lg:h-[180px]">
          <Img src="assets/img/logo-medco.svg" />
        </div>
        <div className="p-[50px] overflow-hidden justify-center items-center rounded-xl drop-shadow-md bg-[#FFFFFF] border mb:w-[200px] mb:h-[150px] lg:w-[240px] lg:h-[180px]">
          <Img src="assets/img/logo-samsung.svg" />
        </div>
        <div className="p-[50px] overflow-hidden justify-center items-center rounded-xl drop-shadow-md bg-[#FFFFFF] border mb:w-[200px] mb:h-[150px] lg:w-[240px] lg:h-[180px]">
          <Img src="assets/img/logo-metaforsa.svg" />
        </div>
        <div className="p-[50px] overflow-hidden justify-center items-center rounded-xl drop-shadow-md bg-[#FFFFFF] border mb:w-[200px] mb:h-[150px] lg:w-[240px] lg:h-[180px]">
          <Img src="assets/img/logo-mandiri.svg" />
        </div>
      </Carousel>
    </div>
  );
};

export default BaseCarousel;

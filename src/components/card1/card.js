import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "../../elements/img";
import "./card.css";

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
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Card1() {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      customTransition="all .5"
      transitionDuration={500}
      arrows={false}
      renderButtonGroupOutside={true}
      showDots={true}
      containerClass="carousel-container"
      itemClass="carousel-item"
      dotListClass="custom-dot-list"
    >
      {/* Card 1 */}
      <div className="flex flex-col p-[20px] items-center space-y-[24px] bg-[#FFFFFF] drop-shadow-md rounded-3xl">
        <div className="flex items-center justify-center p-5 bg-[#B7C7D7] rounded-full">
          <Img src="assets/img/icon-dedicated.svg" />
        </div>
        <div className="text-center flex flex-col space-y-[6px]">
          <span className="font-roboto font-semibold text-[20px] text-[#0E467B]">
            Dedicated Internet
          </span>
          <span className="font-rubik font-normal text-[16px] text-[#252525] max-w-[273px]">
            Our Reliable Internet Dedicated Solution
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Img src="assets/img/vector-bawah.svg" alt="vector bawah" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col p-[20px] items-center space-y-[24px] bg-[#FFFFFF] drop-shadow-md rounded-3xl">
        <div className="flex items-center justify-center p-5 bg-[#B7C7D7] rounded-full">
          <Img src="assets/img/icon-cabling.svg" />
        </div>
        <div className="text-center flex flex-col space-y-[6px]">
          <span className="font-roboto font-semibold text-[20px] text-[#0E467B]">
            Cabling Solution
          </span>
          <span className="font-rubik font-normal text-[16px] text-[#252525] max-w-[273px]">
            Support Data communication sector due to current demand and growth
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Img src="assets/img/vector-bawah.svg" alt="vector bawah" />
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col p-[20px] items-center space-y-[24px] bg-[#FFFFFF] drop-shadow-md rounded-3xl">
        <div className="flex items-center justify-center p-5 bg-[#B7C7D7] rounded-full">
          <Img src="assets/img/icon-data.svg" />
        </div>
        <div className="text-center flex flex-col space-y-[6px]">
          <span className="font-roboto font-semibold text-[20px] text-[#0E467B]">
            Data Center
          </span>
          <span className="font-rubik font-normal text-[16px] text-[#252525] max-w-[273px]">
            Secured and Reliable Data Center You can Trust
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Img src="assets/img/vector-bawah.svg" alt="vector bawah" />
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col p-[20px] items-center space-y-[24px] bg-[#FFFFFF] drop-shadow-md rounded-3xl">
        <div className="flex items-center justify-center p-5 bg-[#B7C7D7] rounded-full">
          <Img src="assets/img/icon-virtual.svg" />
        </div>
        <div className="text-center flex flex-col space-y-[6px]">
          <span className="font-roboto font-semibold text-[20px] text-[#0E467B]">
            Virtual Private Server
          </span>
          <span className="font-rubik font-normal text-[16px] text-[#252525] max-w-[273px]">
            Systems That Can Be Accessed Anytime anywhere
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Img src="assets/img/vector-bawah.svg" alt="vector bawah" />
        </div>
      </div>

      {/* Card 5 */}
      <div className="flex flex-col p-[20px] items-center space-y-[24px] bg-[#FFFFFF] drop-shadow-md rounded-3xl">
        <div className="flex items-center justify-center p-5 bg-[#B7C7D7] rounded-full">
          <Img src="assets/img/icon-internet.svg" />
        </div>
        <div className="text-center flex flex-col space-y-[6px]">
          <span className="font-roboto font-semibold text-[20px] text-[#0E467B]">
            Internet of Building
          </span>
          <span className="font-rubik font-normal text-[16px] text-[#252525] max-w-[273px] line-clamp-2">
            Our Internet Solutions can create your buildings into a productive
            and optimized occupant experience
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Img src="assets/img/vector-bawah.svg" alt="vector bawah" />
        </div>
      </div>

      {/* Card 6 */}
      <div className="flex flex-col p-[20px] items-center space-y-[24px] bg-[#FFFFFF] drop-shadow-md rounded-3xl">
        <div className="flex items-center justify-center p-5 bg-[#B7C7D7] rounded-full">
          <Img src="assets/img/icon-zimbra.svg" />
        </div>
        <div className="text-center flex flex-col space-y-[6px]">
          <span className="font-roboto font-semibold text-[20px] text-[#0E467B] max-w-[273px] line-clamp-1">
            Zimbra Full Administrative Management
          </span>
          <span className="font-rubik font-normal text-[16px] text-[#252525] max-w-[273px]">
            Easier, Faster, Stronger, Safer, Smarter
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Img src="assets/img/vector-bawah.svg" alt="vector bawah" />
        </div>
      </div>
    </Carousel>
  );
}

export default Card1;

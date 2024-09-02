import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";
import Card from "./card";

function Main() {
  const ourProductData = [
    {
      id: 1,
      title: "Dedicated Internet",
      description: "Our Reliable Internet Dedicated Solution",
      icon: "assets/img/icon-dedicated.svg",
      additionalInfo:
        "Quisque facilisis metus vitae metus vehicula, at bibendum mi accumsan. Integer semper ante in ante tempus, eget accumsan libero ultricies. Cras pharetra nunc nec nibh bibendum luctus. Donec eget elit erat.",
    },
    {
      id: 2,
      title: "Cabling Solution",
      description:
        "Support Data communication sector due to current demand and growth",
      icon: "assets/img/icon-cabling.svg",
      additionalInfo:
        "Quisque facilisis metus vitae metus vehicula, at bibendum mi accumsan. Integer semper ante in ante tempus, eget accumsan libero ultricies. Cras pharetra nunc nec nibh bibendum luctus. Donec eget elit erat.",
    },
    {
      id: 3,
      title: "Data Center",
      description: "Secured and Reliable Data Center You can Trust",
      icon: "assets/img/icon-data.svg",
      additionalInfo:
        "Quisque facilisis metus vitae metus vehicula, at bibendum mi accumsan. Integer semper ante in ante tempus, eget accumsan libero ultricies. Cras pharetra nunc nec nibh bibendum luctus. Donec eget elit erat.",
    },
    {
      id: 4,
      title: "Virtual Private Server",
      description: "Systems That Can Be Accessed Anytime anywhere",
      icon: "assets/img/icon-virtual.svg",
      additionalInfo:
        "Quisque facilisis metus vitae metus vehicula, at bibendum mi accumsan. Integer semper ante in ante tempus, eget accumsan libero ultricies. Cras pharetra nunc nec nibh bibendum luctus. Donec eget elit erat.",
    },
    {
      id: 5,
      title: "Internet of Building",
      description:
        "Our Internet Solutions can create your buildings into a productive and optimized occupant experience",
      icon: "assets/img/icon-internet.svg",
      additionalInfo:
        "Quisque facilisis metus vitae metus vehicula, at bibendum mi accumsan. Integer semper ante in ante tempus, eget accumsan libero ultricies. Cras pharetra nunc nec nibh bibendum luctus. Donec eget elit erat.",
    },
    {
      id: 6,
      title: "Zimbra Full Administrative Management",
      description: "Zimbra Full Administrative Management",
      icon: "assets/img/icon-zimbra.svg",
      additionalInfo:
        "Quisque facilisis metus vitae metus vehicula, at bibendum mi accumsan. Integer semper ante in ante tempus, eget accumsan libero ultricies. Cras pharetra nunc nec nibh bibendum luctus. Donec eget elit erat.",
    },
  ];
  const [isExpand, setIsExpand] = useState(
    Array(ourProductData.length).fill(false)
  );

  const toggleExpand = (index) => {
    const newExpandCards = [...isExpand];
    newExpandCards[index] = !newExpandCards[index];
    setIsExpand(newExpandCards);
  };

  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col relative lg:px-[100px] mb:px-[12px]">
        <section className="bg-hero bg-center bg-cover lg:-mx-[100px] mb:-mx-[12px] ">
          <div className="bg-[#252525]/65">
            <div className="lg:px-[100px] mb:px-[20px] flex flex-col lg:space-y-[250px] mb:space-y-[80px] lg:pb-[250px] mb:pb-[100px]">
              <Header />
              <div className="flex flex-col  justify-center items-center text-[#FCFCFC]">
                <text className="font-roboto font-semibold lg:text-[70px] sm:text-[42px] mb:text-[36px] text-center">
                  ICT Company of Choice
                </text>
                <text className="font-rubik font-medium lg:text-[30px] sm:text-[30px] mb:text-[20px] text-center pt-[40px]">
                  “We aren’t just doing business,
                  <br /> We are creating values”
                </text>
                <a
                  href=" #"
                  className="font-roboto font-medium lg:text-[18px] mb:text-[12px] sm:text-[16px] bg-gradient-to-b from-[#0E467B] to-[#3E6B95] lg:px-[25px] lg:py-[15px] mb:px-[15px] mb:py-[10px]  rounded-md flex flex-row lg:space-x-2 mb:space-x-2 mt-[50px] hover:bg-gradient-to-b hover:from-[#0E467B] hover:to-[#679ED2] "
                >
                  <text>Learn More</text>
                  <Img
                    src="assets/img/vector-kanan.svg"
                    alt="vector kanan"
                    className=" mb:w-[10px] items-center"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="BODY relative flex flex-col ">
          <div className="absolute left-0 -ml-[100px] bg-cover z-[-10] mb:block">
            <Img src="assets/img/bg-1.svg" />
          </div>

          <section className="flex flex-col justify-center items-center space-y-[50px] lg:pt-[150px] mb:pt-[50px] relative">
            <div className="space-y-[25px] flex flex-col justify-center items-center">
              <text className="font-roboto font-bold lg:text-[50px] mb:text-[32px] sm:text-[40px] text-[#0E467B]">
                Our Products
              </text>
              <text className="font-rubik font-light lg:text-[32px] sm:text-[26px] mb:text-[18px] text-[#878787] text-center mb:hidden  lg:block">
                Here's some of our solution for your business. <br />
                We can help you to expand your business to the highest level.
              </text>
              <text className="font-rubik font-light lg:text-[32px] sm:text-[26px] mb:text-[18px] text-[#878787] mb:text-left text-pretty sm:text-center mb:block lg:hidden">
                Here's some of our solution for your business. We can help you
                to expand your business to the highest level.
              </text>
            </div>

            {/* Layout untuk Mobile */}
            <div className="mb:block lg:hidden flex flex-col relative space-y-[40px]">
              {ourProductData.map((card, index) => (
                <div
                  key={card.id}
                  className={`flex flex-col p-[20px] items-center space-y-[24px] bg-[#FFFFFF] drop-shadow-md border rounded-3xl`}
                >
                  <div className="flex items-center justify-center p-5 bg-[#B7C7D7] rounded-full">
                    <Img
                      src={card.icon}
                      alt={`icon ${card.title}`}
                      className="w-[40px] h-[40px]"
                    />
                  </div>

                  <div className="text-center flex flex-col space-y-[6px]">
                    <span className="font-roboto font-semibold text-[20px] text-[#0E467B]">
                      {card.title}
                    </span>
                    <span
                      className={`font-rubik font-normal text-[16px] text-[#252525] max-w-[273px] ${
                        isExpand[index]
                          ? "transition-transform duration-500 transform ease-in-out animate-slideDown2 text-left"
                          : "transition-transform duration-500 transform ease-in-out animate-slideUp2"
                      }`}
                    >
                      {isExpand[index] ? card.additionalInfo : card.description}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex justify-center items-center hover:scale-125"
                  >
                    <Img
                      src="assets/img/vector-bawah.svg"
                      alt="vector bawah"
                      className={`transform transition-transform duration-500 ${
                        isExpand[index] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Layout untuk Laptop */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-[50px] lg:gap-y-[50px]">
              {ourProductData.map((card, index) => (
                <div
                  key={card.id}
                  className={`flex flex-col p-[20px] items-center space-y-[24px] bg-[#FFFFFF] drop-shadow-md border rounded-3xl`}
                >
                  <div className="flex items-center justify-center p-5 bg-[#B7C7D7] rounded-full">
                    <Img
                      src={card.icon}
                      alt={`icon ${card.title}`}
                      className=""
                    />
                  </div>

                  <div className="text-center flex flex-col space-y-[6px]">
                    <span className="font-roboto font-semibold text-[20px] text-[#0E467B]">
                      {card.title}
                    </span>
                    <span
                      className={`font-rubik font-normal text-[16px] text-[#252525] max-w-[273px] ${
                        isExpand[index]
                          ? "transition-transform duration-500 transform ease-in-out animate-slideDown2 text-left"
                          : "transition-transform duration-500 transform ease-in-out animate-slideUp2"
                      }`}
                    >
                      {isExpand[index] ? card.additionalInfo : card.description}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex justify-center items-center hover:scale-125"
                  >
                    <Img
                      src="assets/img/vector-bawah.svg"
                      alt="vector bawah"
                      className={`transform transition-transform duration-500 ${
                        isExpand[index] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

           
          </section>

          <div className="absolute lg:mr-[-100px] mb:mr-[-12px] mt-[659px] right-0 bg-cover rotate-180 z-[-10]">
            <Img src="assets/img/bg-1.svg" />
          </div>

          <section className="flex lg:flex-row lg:justify-between mb:flex-col mb:space-y-[60px] lg:pt-[150px] mb:mt-[120px] lg:px-[50px] mb:px-[10px]  relative ">
            <div className="KIRI flex items-center justify-center">
              <div className="relative mb:flex mb:justify-center mb:items-center">
                <Img
                  src="assets/img/bg-2.svg"
                  alt="bg-2"
                  className="z-[-10] absolute left-0 top-0 lg:-translate-x-[150px] lg:-translate-y-[120px] mb:-translate-x-[80px] mb:-translate-y-[80px] "
                />
                <div className="mb:w-[200px] mb:h-[200px] lg:w-full lg:h-full mb:flex mb:justify-center mb:items-center">
                  <Img src="assets/img/img-main-3.svg" />
                </div>
                <Img
                  src="assets/img/bg-3.svg"
                  alt="bg-3"
                  className="z-[-10] absolute right-0 top-0 lg:translate-x-[200px] lg:translate-y-[80px] mb:translate-x-[60px] mb:translate-y-[20px]"
                />

                <div className="bg-[#FFF] drop-shadow-md rounded-xl lg:p-[20px] mb:p-[10px] flex flex-col font-rubik lg:text-[16px] mb:text-[12px] font-medium text-[#252525] lg:space-y-[20px] mb:space-y-[10px] z-[10] absolute lg:top-[236px] mb:top-[50px] lg:left-[195px] mb:left-[90px] lg:w-[305px] mb:w-[150px]">
                  <div className="border border-b-[#BBBDBF]/50 border-x-0 border-t-0 flex flex-row space-x-[12px] pb-2">
                    <div className="bg-[#0E467B] rounded-xl p-2 items-center">
                      <Img
                        src="assets/img/icon-professional.svg"
                        alt="icon professional"
                        className="lg:w-full lg:h-full mb:w-[10px] mb:h-[10px]"
                      />
                    </div>
                    <text className="flex items-center">Professional</text>
                  </div>
                  <div className="border border-b-[#BBBDBF]/50 border-x-0 border-t-0 flex flex-row space-x-[12px] pb-2">
                    <div className="bg-[#F7941D] rounded-xl p-2 items-center">
                      <Img
                        src="assets/img/icon-ethics.svg"
                        alt="icon ethic"
                        className="lg:w-full lg:h-full mb:w-[10px] mb:h-[10px]"
                      />
                    </div>
                    <text className="flex items-center">Ethics</text>
                  </div>
                  <div className="border border-b-[#BBBDBF]/50 border-x-0 border-t-0 flex flex-row space-x-[12px] pb-2">
                    <div className="bg-[#0E467B] rounded-xl p-2 items-center">
                      <Img
                        src="assets/img/icon-open.svg"
                        alt="icon open"
                        className="lg:w-full lg:h-full mb:w-[10px] mb:h-[10px]"
                      />
                    </div>
                    <text className="flex items-center">Open</text>
                  </div>
                  <div className="border border-b-[#BBBDBF]/50 border-x-0 border-t-0 flex flex-row space-x-[12px] pb-2">
                    <div className="bg-[#F7941D] rounded-xl p-2 items-center">
                      <Img
                        src="assets/img/icon-innovative.svg"
                        alt="icon innovative"
                        className="lg:w-full lg:h-full mb:w-[10px] mb:h-[10px]"
                      />
                    </div>
                    <text className="flex items-center">Innovative</text>
                  </div>
                </div>
              </div>
            </div>

            <div className="KANAN flex flex-col lg:space-y-[30px] mb:space-y-[10px] lg:w-1/2 mb:w-full mb:justify-center mb:items-center">
              <text className="font-roboto font-bold lg:text-[50px] mb:text-[32px] sm:text-[40px] text-[#0E467B]">
                Why Work with Us?
              </text>
              <text className="font-rubik font-light lg:text-[32px] sm:text-[26px] mb:text-[18px]text-[#252525] text-left text-pretty">
                We recognize that every organization has limited resources in
                the professional in IT job desk, by understanding how to
                effectively prioritize IT investments, enabling an organization
                can optimize the benefits of IT to improve your business.
              </text>
            </div>
          </section>

          <div className="absolute left-0 lg:-ml-[100px] mb:-ml-[-12px] mt-[1500px] bg-cover z-[-10]">
            <Img src="assets/img/bg-1.svg" />
          </div>

          <section className="flex flex-col lg:px-[50px] mb:px-[10px] relative lg:pt-[150px] mb:pt-[100px] space-y-[40px] ">
            <div className="flex flex-col space-y-[20px] justify-center items-center lg:mt-[150px]">
              <text className="font-roboto font-bold lg:text-[50px] mb:text-[32px] sm:text-[40px] text-[#0E467B] text-center">
                Our Customers
              </text>

              <text className="font-rubik font-light lg:text-[32px] sm:text-[26px] mb:text-[18px] text-[#878787] ">
                Their satisfaction and success are our top priorities, and we{" "}
                <br />
                take pride in the positive impact our work has on their growth.
              </text>
            </div>

            <div className="mb:pb-[100px] lg:pb-[150px]">
              <Card />
            </div>

            <section className="relative flex flex-col justify-center items-center rounded-xl">
              <div className="bg-section1 w-full h-full bg-cover bg-center block rounded-xl">
                <div className="bg-[#252525]/65 rounded-xl">
                  <div className="flex justify-center items-center text-center lg:px-[130px] lg:py-[120px] mb:py-[40px] mb:px-[30px] ">
                    <text className="font-roboto font-normal text-[#FFF] lg:text-[50px] mb:text-[15px] sm:text-[30px]">
                      Ready to Expand Your Business to the Highest Level?
                    </text>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 lg:translate-y-[50px] mb:translate-y-[30px] ">
                <div className="flex flex-row relative">
                  <input
                    type="email"
                    className="lg:pl-[20px] mb:pl-[10px] sm:pl-[15px] lg:pr-[362px] mb:pr-[50px] sm:pr-[150px] lg:py-[30px] mb:py-[15px] sm:py-[20px] font-rubik font-light mb:text-[12px] lg:text-[16px] text-[#878787] drop-shadow-md rounded-md border hover:border-black hover:border"
                    placeholder="Your Email"
                  />
                  <button className="absolute bottom-0 right-0 items-center lg:py-[28px] lg:px-[40px] mb:py-[16px] mb:px-[10px] sm:py-[21px] sm:px-[20px] rounded-md rounded-l-none bg-[#F7941D] hover:bg-[#F7941D]/80 drop-shadow-md font-rubik font-bold mb:text-[12px] lg:text-[20px] text-[#FFF]">
                    Let's Talk
                  </button>
                </div>
              </div>
            </section>
            <div className="absolute lg:mr-[-100px] mb:mr-[-12px] bottom-0 translate-y-[500px] right-0 bg-cover rotate-180 z-[-10]">
              <Img src="assets/img/bg-1.svg" />
            </div>
          </section>
        </section>
        <div className="">
          <Footer />
        </div>
      </section>
    </main>
  );
}

export default Main;

import React, { useState } from "react";
import Img from "../../elements/img";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full h-full relative">
      <section className="flex flex-row justify-between items-center lg:py-[15px] lg:px-[30px] mb:py-[10px] mb:px-[20px] sm:px-[30px] mt-[20px] bg-[#252525]/25 rounded-full backdrop-blur-md">
        <div className="blur-none">
          <Img src="assets/img/logo-elga.svg" alt="logo elga" className="w-full lg:h-[37px] mb:h-[30px] sm:h-[50px]" />
        </div>

        <div className="relative">
          <button
            className="bg-[#FFF]/20 mb:p-[10px] sm:p-[20px] rounded-full hover:bg-[#FFF]/50"
            onClick={toggleDropdown}
          >
            <Img 
            src={isOpen ? "assets/img/icon-close-X.svg" : "assets/img/icon-menudropdown.svg"}
            alt={isOpen ? "Close menu" : "Open menu"}
            className={`transition-transform duration-500 ease-in-out transform w-[15px] h-[15px]${
                isOpen ? "rotate-0" : "rotate-180"
              }`} 
            
            />
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute right-0 mt-2 w-48 bg-[#252525]/90 text-white rounded-lg shadow-lg transition-transform duration-500 transform ${
              isOpen ? "animate-slideDown" : "animate-slideUp"
            }`}
          >
            <a
              href="#home"
              className="block mb:px-4 mb:py-2 mb:text-[9px] sm:text-[14px] hover:bg-[#FCFCFC]/20 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#aboutus"
              className="block mb:px-4 mb:py-2 mb:text-[9px] sm:text-[14px] hover:bg-[#FCFCFC]/20 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="#services"
              className="block mb:px-4 mb:py-2 mb:text-[9px] sm:text-[14px] hover:bg-[#FCFCFC]/20 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#solution"
              className="block mb:px-4 mb:py-2 mb:text-[9px] sm:text-[14px] hover:bg-[#FCFCFC]/20 transition-colors duration-200"
            >
              Solution
            </a>
            <a
              href="#careers"
              className="block mb:px-4 mb:py-2 mb:text-[9px] sm:text-[14px] hover:bg-[#FCFCFC]/20 transition-colors duration-200"
            >
              Careers
            </a>
            <a
              href="#support"
              className="block mb:px-4 mb:py-2 mb:text-[9px] sm:text-[14px] hover:bg-[#FCFCFC]/20 transition-colors duration-200"
            >
              Support
            </a>
            <a
              href="#contactus"
              className="block mb:px-4 mb:py-2 mb:text-[9px] sm:text-[14px] hover:bg-[#FCFCFC]/20 transition-colors duration-200"
            >
              Contact Us
            </a>
           
          </div>
        </div>

      </section>
    </header>
  );
}

export default Header;

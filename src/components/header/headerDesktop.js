import React from "react";
import Img from "../../elements/img";

function Header () {
    return (
        <header className="w-full h-full relative">
            <section className="flex flex-row justify-between items-center py-[15px] px-[30px] mt-[20px] bg-[#252525]/25 rounded-full backdrop-blur-md">
                <div className="blur-none">
                    <Img 
                    src="assets/img/logo-elga.svg"
                    alt="logo elga"
                    className=""
                    />

                </div>

                <div className="flex justify-center items-center">
                    <ul className="flex justify-between items-center font-roboto text-[20px] text-[#C9CACC] space-x-[40px]">
                        <a href=" #" id="home" className="active:text-[#FCFCFC] active:font-semibold hover:text-[#FCFCFC] transition-all duration-200">
                            Home
                        </a>
                        <a href=" #" className="active:text-[#FCFCFC] active:font-semibold hover:text-[#FCFCFC] transition-all duration-200">
                            About Us
                        </a>
                        <a href=" #" className="active:text-[#FCFCFC] active:font-semibold hover:text-[#FCFCFC] transition-all duration-200">
                            Services
                        </a>
                        <a href=" #" className="active:text-[#FCFCFC] active:font-semibold hover:text-[#FCFCFC] transition-all duration-200">
                            Solution
                        </a>
                        <a href=" #" className="active:text-[#FCFCFC] active:font-semibold hover:text-[#FCFCFC] transition-all duration-200">
                            Careers
                        </a>
                        <a href=" #" className="active:text-[#FCFCFC] active:font-semibold hover:text-[#FCFCFC] transition-all duration-200">
                            Support
                        </a>

                    </ul>


                </div>

                <a href=" #" className="flex justify-center items-center rounded-lg px-[15px] py-[10px] text-[#FCFCFC] border border-[#FCFCFC] drop-shadow font-roboto font-semibold text-[16px]">
                    Contact Us
                </a>

            </section>

        </header>
    )
}

export default Header;
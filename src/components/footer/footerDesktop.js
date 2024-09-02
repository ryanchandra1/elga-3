import React from "react";
import Img from "../../elements/img";

function Footer() {
  return (
    <footer className="w-full h-full relative mt-[150px]">
      <section className="flex flex-col justify-between pt-[75px] pb-[10px] border-2 border-x-0 border-b-0 border-t-[#EBEBEC] space-y-[70px] my-[50px]">
        <div className="flex flex-row justify-between w-1/2">
          <div className="flex flex-col space-y-[15px] ">
            <div>
              <text className="font-roboto font-semibold text-[#0E467B] text-[14px] hover:border-b-[#F7941D] hover:border hover:border-x-0 hover:border-t-0 cursor-default uppercase">
                menu
              </text>
            </div>

            <div className="flex flex-col items-start font-rubik font-normal text-[12px] text-[#878787] space-y-[8px] ">
              <text>Privacy Policy</text>
              <text>Terms Of Service</text>
              <text>Product</text>
              <text>Services</text>
            </div>
          </div>

          <div className="flex flex-col space-y-[15px] ">
            <div>
              <text className="font-roboto font-semibold text-[#0E467B] text-[14px] hover:border-b-[#F7941D] hover:border hover:border-x-0 hover:border-t-0 cursor-default uppercase">
                contact us
              </text>
            </div>

            <div className="flex flex-col items-start font-rubik font-normal text-[12px] text-[#878787] space-y-[8px] ">
              <text>+62 21 782 1962</text>
              <text>info[at]elga.net.id</text>
            </div>
          </div>

          <div className="flex flex-col space-y-[15px] ">
            <div>
              <text className="font-roboto font-semibold text-[#0E467B] text-[14px] hover:border-b-[#F7941D] hover:border hover:border-x-0 hover:border-t-0 cursor-default uppercase">
                follow us
              </text>
            </div>

            <div className="flex flex-row items-start font-rubik font-normal text-[12px] text-[#878787] space-x-[7px]">
              <Img 
              src="assets/img/footer-icon-facebook.svg"
              alt="icon facebook"
              className="hover:scale-110"
              />
              <Img 
              src="assets/img/footer-icon-instagram.svg"
              alt="icon instagram"
              className="hover:scale-110"
              />
              <Img 
              src="assets/img/footer-icon-linkedin.svg"
              alt="icon linkedin"
              className="hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center font-rubik">
            <div className="font-normal text-[#0E467B] text-[13px]">
                <text>
                    &copy; 2024 Elga Networks. All Rights Reserved
                </text>
            </div>

            <div className="text-[15px] text-[#0E467B] flex flex-col justify-end items-end text-right">
                <text className="font-semibold">
                    Medco Building
                </text>
                <text>
                Medco Building III 3rd Floor
                </text>
                <text>
                Jl. Ampera Raya No. 18-20 12560 Jakarta - Indonesia
                </text>

            </div>

        </div>
      </section>
    </footer>
  );
}

export default Footer;

import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "./index";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      <div
        className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-6 pt-10 pb-10`}
      >
        {/* <div className='flex flex-row items-center py-[16px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discont" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 uppercase`}>   
            <span className="text">20%</span> Discount For {" "} 
            <span className="text">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text ss:leading-[100px] leading-[75px]">
            Career <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Development</span>{" "}
          </h1>

          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text ss:leading-[100px] leading-[75px] w-full">
          Programme
        </h1>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          The Career Development Programme at IIT (BHU) Varanasi is designed to
          facilitate fruitful engagement between the Institute’s talent pool and
          the industry.
        </p>
        <div className="mt-10">{/* <Button /> */}</div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:mr-0  relative`}>
        <img
          src={robot}
          className="w-[100%] h-[100%] relative"
          alt=""
          srcset=""
        />
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>
    </section>
  );
};

export default Hero;

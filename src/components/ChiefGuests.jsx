import React from "react";
import styles, { layout } from "../style";

export function Tile({ name, title, desc, img }) {
  return (
    <div className="mt-5 mb-5 min-w-[250px] flex flex-col items-center">
      <div className="circle-radiant w-[190px] bg-white h-[190px] rounded-full flex justify-center align-middle">
        <div className=" w-[170px] bg-primary h-[170px] m-auto rounded-full flex justify-center items-center overflow-hidden">
          <div className=" w-[160px] bg-red-100 h-[160px] m-auto rounded-full flex justify-center items-center overflow-hidden">
            <img className="" src={img} />
          </div>
        </div>
      </div>
      <div className="max-w-[200px] text-center mt-2 flex justify-center flex-col items-center">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text whitespace-nowrap w-fit">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text">
          {title}
        </p>
        <div className="w-full">
          <p className={`${styles.paragraph} text-gray-500`}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

function ChiefGuests() {
  return (
    <div className={styles.paddingY} id="Guests">
      <h2 className={styles.heading2}>Guests of honour</h2>
      <div className="flex flex-wrap m-5 justify-evenly">
        <Tile
          name="Name 1"
          title="Chief Guest"
          desc="Description"
          img="sde.png"
        />
        <Tile
          name="Name 1"
          title="Chief Guest"
          desc="Description"
          img="binance.png"
        />
        <Tile
          name="Name 1"
          title="Chief Guest"
          desc="Description"
          img="airbnb.png"
        />
      </div>
    </div>
  );
}

export default ChiefGuests;

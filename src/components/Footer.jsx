import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} $ flex-col`}>
    <div
      className={`${styles.flexStart} mb-7 md:flex-row flex-col w-full justify-evenly`}
    >
      {/* <div className="flex-[1] flex flex-col justify-center items-center mr-10  w-full min-w-fit"> */}
      <img
        src={logo}
        alt="hoobank"
        className="m-5 m-auto w-[400px] h-[100.14px] object-contain"
      />

      <div
        style={{ marginLeft: "0px", margin: "auto" }}
        className="mt-10 md:mt-0 text-center md:text-left mr-3 m-auto"
      >
        <b className="">TRAINING AND PLACEMENT CELL</b>
        <p className="">
          {"Training and Placement Cell, Near Administrative Office"}
        </p>
        <p>Indian Institute of Technology (BHU), Varanasi - 221005</p>
        <p className="">
          {"career.tpc@iitbhu.ac.in | +91-542-7165958 | +91-542-2369162"}
        </p>
      </div>
    </div>
    <div style={{ letterSpacing: "3px", fontWeight: "500" }}>DEVELOPED BY</div>
    <div style={{ letterSpacing: "5px", fontWeight: "300" }}>
      K CHIRUHAAS
    </div>

    <div className=" w-full mt-2 flex justify-between items-center md:flex-row flex-col pt-2 border-t-[1px] border-t-[#3F3E45] p-3">
      <p className="font-poppins font-normal  text-[10px] leading-[27px] text text-center">
        Copyright Ⓒ 2023 Career Development Program IIT (BHU) Varanasi. All
        Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;

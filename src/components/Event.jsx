import { airbnb, apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/airbnb.png";

const Event = ({ heading, description, tagLine, right, imgSrc }) => {
  const src = "src/assets/" + imgSrc;
  const navigate = useNavigate();

  return (
    <div>
      <section
        id="product"
        className={`hidden sm:flex ${layout.sectionReverse} `}
      >
        {!right ? (
          <div className={`${layout.sectionImgReverse}`}>
            <img
              src={imgSrc}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5]"
            />

            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          </div>
        ) : (
          <></>
        )}

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>{heading}</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {description}
          </p>

          <button
            className={`underline decoration-violet-900 underline-offset-4 text-gradient mt-10 py-4 text-[18px] rounded-[10px] ${styles}`}
            onClick={() => {
              navigate("/events");
            }}
          >
            {tagLine}
            {">>"}
          </button>
        </div>

        {right ? (
          <div className={`${layout.sectionImgReverse}`}>
            <img
              src={imgSrc}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5]"
            />

            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          </div>
        ) : (
          <></>
        )}
      </section>
      <section
        id="product"
        className={`block sm:hidden ${layout.sectionReverse} `}
      >
        <div className={`${layout.sectionImg}`}>
          <img
            src={imgSrc}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>{heading}</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {description}
          </p>

          <button
            className={`underline decoration-violet-900 underline-offset-4 text-gradient mt-10 py-4  text-[18px] rounded-[10px] ${styles}`}
            onClick={() => {
              navigate("/events");
            }}
          >
            {tagLine}
            {">>"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Event;

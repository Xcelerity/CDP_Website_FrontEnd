import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Crash on the <br className="sm:block hidden" /> Stock charts
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get hands on experience on real time stock markets to sharpen your
        quantitative skills in the forms of workshops by the conquerors like AQR
        Capital
      </p>
      <button
        className={`underline decoration-cyan-500 underline-offset-4 text-transparent bg-gradient-to-r from-cyan-300 to-cyan-700  bg-clip-text mt-10 py-4 px-6 font-poppins font-medium text-[18px] rounded-[10px] ${styles}`}
      >
        Check out Quants Events {">>"}
      </button>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

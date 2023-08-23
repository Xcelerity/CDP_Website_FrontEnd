import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedBackCard";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" /> */}

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Company Testimonials</h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}></p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative">
      <Splide
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          arrows: true,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: true,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
        className="w-[125%] md:w-full"
      >
        {feedback.map((card, index) => (
          <SplideSlide key={`Sponsor_${index}`} style={{ width: "20px" }}>
            <FeedbackCard key={card.id} {...card} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  </section>
);

export default Testimonials;

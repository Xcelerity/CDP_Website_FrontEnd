import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 items-center rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionInfo} mb-4`}>
      <h2 className={styles.heading2}>Experience the plethora of events</h2>
      {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Companies from all possible profiles gather to provide get the best
        possible student company interactions
      </p> */}

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;

import { clients } from "../constants";
import styles from "../style";
import Slider from "./Slider";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`} id="Companies">
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {/* <h2 className={styles.heading2}>Participating Companies</h2> */}

      {/* {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))} */}
      <Slider
        logoArray={[
          "mst.png",
          "wq.png",
          "nks.png",
          "yg.png",
          "secw.jpg",
          "tw.png",
          "sprinklr.png",
          "dbw.jpg",
          "mk.png",
          "rph.png",
          "rd.png",
        ]}
      />
    </div>
  </section>
);

export default Clients;

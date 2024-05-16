import React from "react";
import Riannav from "./riannav";
import Rianinfo from "./rianinfo";
import Rianss from "./rianss";
import Rianfeatures from "./rianfeatures";
import Rianusp from "./rianusp";
import Rianspecs from "./rianspecs";
import Rianprice from "./rianprice";
import Rianreview from "./rianreview";
import Rianalternative from "./rianalternative";
import Riancompare from "./riancompare";
import Rianfaq from "./rianfaq";
const Riandetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["ria-navi"]}  shadow pb-4`}>
        <Riannav styles={styles} />
      </section>

      <section className={`${styles["ria-info"]} my-5`} id="idinfo">
        <Rianinfo styles={styles} />
      </section>

      <section className={`${styles["ria-ss"]} mt-5`} id="idss">
        <Rianss styles={styles} />
      </section>

      <section className={`${styles["ria-features"]} my-5`} id="idfeature">
        <Rianfeatures styles={styles} />
      </section>

      <section className={styles["ria-usp"]} id="idusp">
        <Rianusp styles={styles} />
      </section>

      <section className={`${styles["ria-spec"]} mt-5`}>
        <Rianspecs styles={styles} />
      </section>

      {/* <section className={`${styles["ria-pricing"]} mt-5`} id="idpricing">
        <Rianprice styles={styles} />
      </section> */}

      <section className={`${styles["ria-review"]} mt-5`} id="idreview">
        <Rianreview styles={styles} />
      </section>

      {/* <section className={`${styles["ria-alternative"]} mt-5`} id="idalternative">
        <Rianalternative styles={styles} />
      </section>

      <section className={`${styles["ria-compare"]} mt-5`} id="idcompare">
        <Riancompare styles={styles} />
      </section> */}

      <section className={`${styles["ria-faq"]} mt-5`}>
        <Rianfaq styles={styles} />
      </section>
    </>
  );
};

export default Riandetails;

import React from "react";
import Channav from "./channav";
import Chaninfo from "./chaninfo";
import Chanss from "./chanss";
import Chanfeatures from "./chanfeatures";
import Chanusp from "./chanusp";
import Chanspecs from "./chanspecs";
import Chanprice from "./chanprice";
import Chanreview from "./chanreview";
import Chanalternative from "./chanalternative";
import Chancompare from "./chancompare";
import Chanfaq from "./chanfaq";
const Chandetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["cha-navi"]}  shadow pb-4`}>
        <Channav styles={styles} />
      </section>

      <section className={`${styles["cha-info"]} my-5`} id="idinfo">
        <Chaninfo styles={styles} />
      </section>

      <section className={`${styles["cha-ss"]} mt-5`} id="idss">
        <Chanss styles={styles} />
      </section>

      <section className={`${styles["cha-features"]} my-5`} id="idfeature">
        <Chanfeatures styles={styles} />
      </section>

      <section className={styles["cha-usp"]} id="idusp">
        <Chanusp styles={styles} />
      </section>

      <section className={`${styles["cha-spec"]} mt-5`}>
        <Chanspecs styles={styles} />
      </section>

      <section className={`${styles["cha-pricing"]} mt-5`} id="idpricing">
        <Chanprice styles={styles} />
      </section>

      <section className={`${styles["cha-review"]} mt-5`} id="idreview">
        <Chanreview styles={styles} />
      </section>

      {/* <section className={`${styles["cha-alternative"]} mt-5`} id="idalternative">
        <Chanalternative styles={styles} />
      </section>

      <section className={`${styles["cha-compare"]} mt-5`} id="idcompare">
        <Chancompare styles={styles} />
      </section> */}

      <section className={`${styles["cha-faq"]} mt-5`}>
        <Chanfaq styles={styles} />
      </section>
    </>
  );
};

export default Chandetails;

import React from "react";
import Teachnav from "./teachnav";
import Teachinfo from "./teachinfo";
import Teachss from "./teachss";
import Teachfeatures from "./teachfeatures";
import Teachusp from "./teachusp";
import Teachspecs from "./teachspecs";
import Teachprice from "./teachprice";
import Teachreview from "./teachreview";
import Teachalternative from "./teachalternative";
import Teachcompare from "./teachcompare";
import Teachfaq from "./teachfaq";
const Teachdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["tec-navi"]}  shadow pb-4`}>
        <Teachnav styles={styles} />
      </section>

      <section className={`${styles["tec-info"]} my-5`} id="idinfo">
        <Teachinfo styles={styles} />
      </section>

      <section className={`${styles["tec-ss"]} mt-5`} id="idss">
        <Teachss styles={styles} />
      </section>

      <section className={`${styles["tec-features"]} my-5`} id="idfeature">
        <Teachfeatures styles={styles} />
      </section>

      <section className={styles["tec-usp"]} id="idusp">
        <Teachusp styles={styles} />
      </section>

      <section className={`${styles["tec-spec"]} mt-5`}>
        <Teachspecs styles={styles} />
      </section>

      <section className={`${styles["tec-pricing"]} mt-5`} id="idpricing">
        <Teachprice styles={styles} />
      </section>

      <section className={`${styles["tec-review"]} mt-5`} id="idreview">
        <Teachreview styles={styles} />
      </section>

      {/* <section className={`${styles["tec-alternative"]} mt-5`} id="idalternative">
        <Teachalternative styles={styles} />
      </section>

      <section className={`${styles["tec-compare"]} mt-5`} id="idcompare">
        <Teachcompare styles={styles} />
      </section> */}

      <section className={`${styles["tec-faq"]} mt-5`}>
        <Teachfaq styles={styles} />
      </section>
    </>
  );
};

export default Teachdetails;

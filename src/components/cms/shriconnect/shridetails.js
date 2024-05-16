import React from "react";
import Shrinav from "./shrinav";
import Shriinfo from "./shriinfo";
import Shriss from "./shriss";
import Shrifeatures from "./shrifeatures";
import Shriusp from "./shriusp";
import Shrispecs from "./shrispecs";
import Shriprice from "./shriprice";
import Shrireview from "./shrireview";
import Shrialternative from "./shrialternative";
import Shricompare from "./shricompare";
import Shrifaq from "./shrifaq";
const Shridetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["shri-navi"]}  shadow pb-4`}>
        <Shrinav styles={styles} />
      </section>

      <section className={`${styles["shri-info"]} my-5`} id="idinfo">
        <Shriinfo styles={styles} />
      </section>

      <section className={`${styles["shri-ss"]} mt-5`} id="idss">
        <Shriss styles={styles} />
      </section>

      <section className={`${styles["shri-features"]} my-5`} id="idfeature">
        <Shrifeatures styles={styles} />
      </section>

      <section className={styles["shri-usp"]} id="idusp">
        <Shriusp styles={styles} />
      </section>

      <section className={`${styles["shri-spec"]} mt-5`}>
        <Shrispecs styles={styles} />
      </section>

      <section className={`${styles["shri-pricing"]} mt-5`} id="idpricing">
        <Shriprice styles={styles} />
      </section>

      <section className={`${styles["shri-review"]} mt-5`} id="idreview">
        <Shrireview styles={styles} />
      </section>

      {/* <section className={`${styles["shri-alternative"]} mt-5`} id="idalternative">
        <Shrialternative styles={styles} />
      </section>

      <section className={`${styles["shri-compare"]} mt-5`} id="idcompare">
        <Shricompare styles={styles} />
      </section> */}

      <section className={`${styles["shri-faq"]} mt-5`}>
        <Shrifaq styles={styles} />
      </section>
    </>
  );
};

export default Shridetails;

import React from "react";
import Pronav from "./pronav";
import Proinfo from "./proinfo";
import Pross from "./pross";
import Profeatures from "./profeatures";
import Prousp from "./prousp";
import Prospecs from "./prospecs";
import Proprice from "./proprice";
import Proreview from "./proreview";
import Proalternative from "./proalternative";
import Procompare from "./procompare";
import Profaq from "./profaq";
const Prodetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["pro-navi"]}  shadow pb-4`}>
        <Pronav styles={styles} />
      </section>

      <section className={`${styles["pro-info"]} my-5`} id="idinfo">
        <Proinfo styles={styles} />
      </section>

      <section className={`${styles["pro-ss"]} mt-5`} id="idss">
        <Pross styles={styles} />
      </section>

      <section className={`${styles["pro-features"]} my-5`} id="idfeature">
        <Profeatures styles={styles} />
      </section>

      <section className={styles["pro-usp"]} id="idusp">
        <Prousp styles={styles} />
      </section>

      <section className={`${styles["pro-spec"]} mt-5`}>
        <Prospecs styles={styles} />
      </section>

      {/* <section className={`${styles["pro-pricing"]} mt-5`} id="idpricing">
        <Proprice styles={styles} />
      </section> */}

      <section className={`${styles["pro-review"]} mt-5`} id="idreview">
        <Proreview styles={styles} />
      </section>

      {/* <section className={`${styles["pro-alternative"]} mt-5`} id="idalternative">
        <Proalternative styles={styles} />
      </section>

      <section className={`${styles["pro-compare"]} mt-5`} id="idcompare">
        <Procompare styles={styles} />
      </section> */}

      <section className={`${styles["pro-faq"]} mt-5`}>
        <Profaq styles={styles} />
      </section>
    </>
  );
};

export default Prodetails;

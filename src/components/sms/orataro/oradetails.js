import React from "react";
import Oranav from "./oranav";
import Orainfo from "./orainfo";
import Orass from "./orass";
import Orafeatures from "./orafeatures";
import Orausp from "./orausp";
import Oraspecs from "./oraspecs";
import Oraprice from "./oraprice";
import Orareview from "./orareview";
import Oraalternative from "./oraalternative";
import Oracompare from "./oracompare";
import Orafaq from "./orafaq";
const Oradetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["ora-navi"]}  shadow pb-4`}>
        <Oranav styles={styles} />
      </section>

      <section className={`${styles["ora-info"]} my-5`} id="idinfo">
        <Orainfo styles={styles} />
      </section>

      <section className={`${styles["ora-ss"]} mt-5`} id="idss">
        <Orass styles={styles} />
      </section>

      <section className={`${styles["ora-features"]} my-5`} id="idfeature">
        <Orafeatures styles={styles} />
      </section>

      <section className={styles["ora-usp"]} id="idusp">
        <Orausp styles={styles} />
      </section>

      <section className={`${styles["ora-spec"]} mt-5`}>
        <Oraspecs styles={styles} />
      </section>

      {/* <section className={`${styles["ora-pricing"]} mt-5`} id="idpricing">
        <Oraprice styles={styles} />
      </section> */}

      <section className={`${styles["ora-review"]} mt-5`} id="idreview">
        <Orareview styles={styles} />
      </section>

      {/* <section className={`${styles["ora-alternative"]} mt-5`} id="idalternative">
        <Oraalternative styles={styles} />
      </section>

      <section className={`${styles["ora-compare"]} mt-5`} id="idcompare">
        <Oracompare styles={styles} />
      </section> */}

      <section className={`${styles["ora-faq"]} mt-5`}>
        <Orafaq styles={styles} />
      </section>
    </>
  );
};

export default Oradetails;

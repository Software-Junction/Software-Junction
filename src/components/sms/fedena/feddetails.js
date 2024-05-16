import React from "react";
import Fednav from "./fednav";
import Fedinfo from "./fedinfo";
import Fedss from "./fedss";
import Fedfeatures from "./fedfeatures";
import Fedusp from "./fedusp";
import Fedspecs from "./fedspecs";
import Fedprice from "./fedprice";
import Fedreview from "./fedreview";
import Fedalternative from "./fedalternative";
import Fedcompare from "./fedcompare";
import Fedfaq from "./fedfaq";
const Feddetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["fed-navi"]}  shadow pb-4`}>
        <Fednav styles={styles} />
      </section>

      <section className={`${styles["fed-info"]} my-5`} id="idinfo">
        <Fedinfo styles={styles} />
      </section>

      <section className={`${styles["fed-ss"]} mt-5`} id="idss">
        <Fedss styles={styles} />
      </section>

      <section className={`${styles["fed-features"]} my-5`} id="idfeature">
        <Fedfeatures styles={styles} />
      </section>

      <section className={styles["fed-usp"]} id="idusp">
        <Fedusp styles={styles} />
      </section>

      <section className={`${styles["fed-spec"]} mt-5`}>
        <Fedspecs styles={styles} />
      </section>

      {/* <section className={`${styles["fed-pricing"]} mt-5`} id="idpricing">
        <Fedprice styles={styles} />
      </section> */}

      <section className={`${styles["fed-review"]} mt-5`} id="idreview">
        <Fedreview styles={styles} />
      </section>

      {/* <section className={`${styles["fed-alternative"]} mt-5`} id="idalternative">
        <Fedalternative styles={styles} />
      </section>

      <section className={`${styles["fed-compare"]} mt-5`} id="idcompare">
        <Fedcompare styles={styles} />
      </section> */}

      <section className={`${styles["fed-faq"]} mt-5`}>
        <Fedfaq styles={styles} />
      </section>
    </>
  );
};

export default Feddetails;

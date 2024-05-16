import React from "react";
import Vednav from "./vednav";
import Vedinfo from "./vedinfo";
import Vedss from "./vedss";
import Vedfeatures from "./vedfeatures";
import Vedusp from "./vedusp";
import Vedspecs from "./vedspecs";
import Vedprice from "./vedprice";
import Vedreview from "./vedreview";
import Vedalternative from "./vedalternative";
import Vedcompare from "./vedcompare";
import Vedfaq from "./vedfaq";
const Veddetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["ved-navi"]}  shadow pb-4`}>
        <Vednav styles={styles} />
      </section>

      <section className={`${styles["ved-info"]} my-5`} id="idinfo">
        <Vedinfo styles={styles} />
      </section>

      <section className={`${styles["ved-ss"]} mt-5`} id="idss">
        <Vedss styles={styles} />
      </section>

      <section className={`${styles["ved-features"]} my-5`} id="idfeature">
        <Vedfeatures styles={styles} />
      </section>

      <section className={styles["ved-usp"]} id="idusp">
        <Vedusp styles={styles} />
      </section>

      <section className={`${styles["ved-spec"]} mt-5`}>
        <Vedspecs styles={styles} />
      </section>

      <section className={`${styles["ved-pricing"]} mt-5`} id="idpricing">
        <Vedprice styles={styles} />
      </section>

      <section className={`${styles["ved-review"]} mt-5`} id="idreview">
        <Vedreview styles={styles} />
      </section>

      {/* <section className={`${styles["ved-alternative"]} mt-5`} id="idalternative">
        <Vedalternative styles={styles} />
      </section>

      <section className={`${styles["ved-compare"]} mt-5`} id="idcompare">
        <Vedcompare styles={styles} />
      </section> */}

      <section className={`${styles["ved-faq"]} mt-5`}>
        <Vedfaq styles={styles} />
      </section>
    </>
  );
};

export default Veddetails;

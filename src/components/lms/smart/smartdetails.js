import React from "react";
import Smartnav from "./smartnav";
import Smartinfo from "./smartinfo";
import Smartss from "./smartss";
import Smartfeatures from "./smartfeatures";
import Smartusp from "./smartusp";
import Smartspecs from "./smartspecs";
import Smartprice from "./smartprice";
import Smartreview from "./smartreview";
import Smartalternative from "./smartalternative";
import Smartcompare from "./smartcompare";
import Smartfaq from "./smartfaq";
const Smartdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["smt-navi"]}  shadow pb-4`}>
        <Smartnav styles={styles} />
      </section>

      <section className={`${styles["smt-info"]} my-5`} id="idinfo">
        <Smartinfo styles={styles} />
      </section>

      <section className={`${styles["smt-ss"]} mt-5`} id="idss">
        <Smartss styles={styles} />
      </section>

      <section className={`${styles["smt-features"]} my-5`} id="idfeature">
        <Smartfeatures styles={styles} />
      </section>

      <section className={styles["smt-usp"]} id="idusp">
        <Smartusp styles={styles} />
      </section>

      <section className={`${styles["smt-spec"]} mt-5`}>
        <Smartspecs styles={styles} />
      </section>

      <section className={`${styles["smt-pricing"]} mt-5`} id="idpricing">
        <Smartprice styles={styles} />
      </section>

      <section className={`${styles["smt-review"]} mt-5`} id="idreview">
        <Smartreview styles={styles} />
      </section>

      {/* <section className={`${styles["smt-alternative"]} mt-5`} id="idalternative">
        <Smartalternative styles={styles} />
      </section>

      <section className={`${styles["smt-compare"]} mt-5`} id="idcompare">
        <Smartcompare styles={styles} />
      </section> */}

      <section className={`${styles["smt-faq"]} mt-5`}>
        <Smartfaq styles={styles} />
      </section>
    </>
  );
};

export default Smartdetails;

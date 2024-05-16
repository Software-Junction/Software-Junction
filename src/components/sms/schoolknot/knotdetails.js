import React from "react";
import Knotnav from "./knotnav";
import Knotinfo from "./knotinfo";
import Knotss from "./knotss";
import Knotfeatures from "./knotfeatures";
import Knotusp from "./knotusp";
import Knotspecs from "./knotspecs";
import Knotprice from "./knotprice";
import Knotreview from "./knotreview";
import Knotalternative from "./knotalternative";
import Knotcompare from "./knotcompare";
import Knotfaq from "./knotfaq";
const Knotdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["knt-navi"]}  shadow pb-4`}>
        <Knotnav styles={styles} />
      </section>

      <section className={`${styles["knt-info"]} my-5`} id="idinfo">
        <Knotinfo styles={styles} />
      </section>

      <section className={`${styles["knt-ss"]} mt-5`} id="idss">
        <Knotss styles={styles} />
      </section>

      <section className={`${styles["knt-features"]} my-5`} id="idfeature">
        <Knotfeatures styles={styles} />
      </section>

      <section className={styles["knt-usp"]} id="idusp">
        <Knotusp styles={styles} />
      </section>

      <section className={`${styles["knt-spec"]} mt-5`}>
        <Knotspecs styles={styles} />
      </section>

      <section className={`${styles["knt-pricing"]} mt-5`} id="idpricing">
        <Knotprice styles={styles} />
      </section>

      <section className={`${styles["knt-review"]} mt-5`} id="idreview">
        <Knotreview styles={styles} />
      </section>

      {/* <section className={`${styles["knt-alternative"]} mt-5`} id="idalternative">
        <Knotalternative styles={styles} />
      </section>

      <section className={`${styles["knt-compare"]} mt-5`} id="idcompare">
        <Knotcompare styles={styles} />
      </section> */}

      <section className={`${styles["knt-faq"]} mt-5`}>
        <Knotfaq styles={styles} />
      </section>
    </>
  );
};

export default Knotdetails;

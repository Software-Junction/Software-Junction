import React from "react";
import Jupnav from "./jupnav";
import Jupinfo from "./jupinfo";
import Jupss from "./jupss";
import Jupfeatures from "./jupfeatures";
import Jupusp from "./jupusp";
import Jupspecs from "./jupspecs";
import Jupprice from "./jupprice";
import Jupreview from "./jupreview";
import Jupalternative from "./jupalternative";
import Jupcompare from "./jupcompare";
import Jupfaq from "./jupfaq";
const Jupdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["jup-navi"]}  shadow pb-4`}>
        <Jupnav styles={styles} />
      </section>

      <section className={`${styles["jup-info"]} my-5`} id="idinfo">
        <Jupinfo styles={styles} />
      </section>

      <section className={`${styles["jup-ss"]} mt-5`} id="idss">
        <Jupss styles={styles} />
      </section>

      <section className={`${styles["jup-features"]} my-5`} id="idfeature">
        <Jupfeatures styles={styles} />
      </section>

      <section className={styles["jup-usp"]} id="idusp">
        <Jupusp styles={styles} />
      </section>

      <section className={`${styles["jup-spec"]} mt-5`}>
        <Jupspecs styles={styles} />
      </section>

      {/* <section className={`${styles["jup-pricing"]} mt-5`} id="idpricing">
        <Jupprice styles={styles} />
      </section> */}

      <section className={`${styles["jup-review"]} mt-5`} id="idreview">
        <Jupreview styles={styles} />
      </section>

      {/* <section className={`${styles["jup-alternative"]} mt-5`} id="idalternative">
        <Jupalternative styles={styles} />
      </section>

      <section className={`${styles["jup-compare"]} mt-5`} id="idcompare">
        <Jupcompare styles={styles} />
      </section> */}

      <section className={`${styles["jup-faq"]} mt-5`}>
        <Jupfaq styles={styles} />
      </section>
    </>
  );
};

export default Jupdetails;

import React from "react";
import Technav from "./technav";
import Techinfo from "./techinfo";
import Techss from "./techss";
import Techfeatures from "./techfeatures";
import Techusp from "./techusp";
import Techspecs from "./techspecs";
import Techprice from "./techprice";
import Techreview from "./techreview";
import Techalternative from "./techalternative";
import Techcompare from "./techcompare";
import Techfaq from "./techfaq";
const Techdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["tec-navi"]}  shadow pb-4`}>
        <Technav styles={styles} />
      </section>

      <section className={`${styles["tec-info"]} my-5`} id="idinfo">
        <Techinfo styles={styles} />
      </section>

      <section className={`${styles["tec-ss"]} mt-5`} id="idss">
        <Techss styles={styles} />
      </section>

      <section className={`${styles["tec-features"]} my-5`} id="idfeature">
        <Techfeatures styles={styles} />
      </section>

      <section className={styles["tec-usp"]} id="idusp">
        <Techusp styles={styles} />
      </section>

      <section className={`${styles["tec-spec"]} mt-5`}>
        <Techspecs styles={styles} />
      </section>

      <section className={`${styles["tec-pricing"]} mt-5`} id="idpricing">
        <Techprice styles={styles} />
      </section>

      <section className={`${styles["tec-review"]} mt-5`} id="idreview">
        <Techreview styles={styles} />
      </section>

      {/* <section className={`${styles["tec-alternative"]} mt-5`} id="idalternative">
        <Techalternative styles={styles} />
      </section>

      <section className={`${styles["tec-compare"]} mt-5`} id="idcompare">
        <Techcompare styles={styles} />
      </section> */}

      <section className={`${styles["tec-faq"]} mt-5`}>
        <Techfaq styles={styles} />
      </section>
    </>
  );
};

export default Techdetails;

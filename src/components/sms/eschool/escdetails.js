import React from "react";
import Escnav from "./escnav";
import Escinfo from "./escinfo";
import Escss from "./escss";
import Escfeatures from "./escfeatures";
import Escusp from "./escusp";
import Escspecs from "./escspecs";
import Escprice from "./escprice";
import Escreview from "./escreview";
import Escalternative from "./escalternative";
import Esccompare from "./esccompare";
import Escfaq from "./escfaq";
const Escdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["esc-navi"]}  shadow pb-4`}>
        <Escnav styles={styles} />
      </section>

      <section className={`${styles["esc-info"]} my-5`} id="idinfo">
        <Escinfo styles={styles} />
      </section>

      <section className={`${styles["esc-ss"]} mt-5`} id="idss">
        <Escss styles={styles} />
      </section>

      <section className={`${styles["esc-features"]} my-5`} id="idfeature">
        <Escfeatures styles={styles} />
      </section>

      <section className={styles["esc-usp"]} id="idusp">
        <Escusp styles={styles} />
      </section>

      <section className={`${styles["esc-spec"]} mt-5`}>
        <Escspecs styles={styles} />
      </section>

      {/* <section className={`${styles["esc-pricing"]} mt-5`} id="idpricing">
        <Escprice styles={styles} />
      </section> */}

      <section className={`${styles["esc-review"]} mt-5`} id="idreview">
        <Escreview styles={styles} />
      </section>

      {/* <section className={`${styles["esc-alternative"]} mt-5`} id="idalternative">
        <Escalternative styles={styles} />
      </section>

      <section className={`${styles["esc-compare"]} mt-5`} id="idcompare">
        <Esccompare styles={styles} />
      </section> */}

      <section className={`${styles["esc-faq"]} mt-5`}>
        <Escfaq styles={styles} />
      </section>
    </>
  );
};

export default Escdetails;

import React from "react";
import Advantanav from "./advantanav";
import Advantainfo from "./advantainfo";
import Advantass from "./advantass";
import Advantafeatures from "./advantafeatures";
import Advantausp from "./advantausp";
import Advantaspecs from "./advantaspecs";
import Advantaprice from "./advantaprice";
import Advantareview from "./advantareview";
import Advantaalternative from "./advantaalternative";
import Advantacompare from "./advantacompare";
import Advantafaq from "./advantafaq";
const Advantadetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["adv-navi"]}  shadow pb-4`}>
        <Advantanav styles={styles} />
      </section>

      <section className={`${styles["adv-info"]} my-5`} id="idinfo">
        <Advantainfo styles={styles} />
      </section>

      <section className={`${styles["adv-ss"]} mt-5`} id="idss">
        <Advantass styles={styles} />
      </section>

      <section className={`${styles["adv-features"]} my-5`} id="idfeature">
        <Advantafeatures styles={styles} />
      </section>

      <section className={styles["adv-usp"]} id="idusp">
        <Advantausp styles={styles} />
      </section>

      <section className={`${styles["adv-spec"]} mt-5`}>
        <Advantaspecs styles={styles} />
      </section>

      <section className={`${styles["adv-pricing"]} mt-5`} id="idpricing">
        <Advantaprice styles={styles} />
      </section>

      <section className={`${styles["adv-review"]} mt-5`} id="idreview">
        <Advantareview styles={styles} />
      </section>

      {/* <section className={`${styles["adv-alternative"]} mt-5`} id="idalternative">
        <Advantaalternative styles={styles} />
      </section>

      <section className={`${styles["adv-compare"]} mt-5`} id="idcompare">
        <Advantacompare styles={styles} />
      </section> */}

      <section className={`${styles["adv-faq"]} mt-5`}>
        <Advantafaq styles={styles} />
      </section>
    </>
  );
};

export default Advantadetails;

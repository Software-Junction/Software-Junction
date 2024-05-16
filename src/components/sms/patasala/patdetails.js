import React from "react";
import Patnav from "./patnav";
import Patinfo from "./patinfo";
import Patss from "./patss";
import Patfeatures from "./patfeatures";
import Patusp from "./patusp";
import Patspecs from "./patspecs";
import Patprice from "./patprice";
import Patreview from "./patreview";
import Patalternative from "./patalternative";
import Patcompare from "./patcompare";
import Patfaq from "./patfaq";
const Patdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["pat-navi"]}  shadow pb-4`}>
        <Patnav styles={styles} />
      </section>

      <section className={`${styles["pat-info"]} my-5`} id="idinfo">
        <Patinfo styles={styles} />
      </section>

      <section className={`${styles["pat-ss"]} mt-5`} id="idss">
        <Patss styles={styles} />
      </section>

      <section className={`${styles["pat-features"]} my-5`} id="idfeature">
        <Patfeatures styles={styles} />
      </section>

      <section className={styles["pat-usp"]} id="idusp">
        <Patusp styles={styles} />
      </section>

      <section className={`${styles["pat-spec"]} mt-5`}>
        <Patspecs styles={styles} />
      </section>

      <section className={`${styles["pat-pricing"]} mt-5`} id="idpricing">
        <Patprice styles={styles} />
      </section>

      <section className={`${styles["pat-review"]} mt-5`} id="idreview">
        <Patreview styles={styles} />
      </section>

      {/* <section className={`${styles["pat-alternative"]} mt-5`} id="idalternative">
        <Patalternative styles={styles} />
      </section>

      <section className={`${styles["pat-compare"]} mt-5`} id="idcompare">
        <Patcompare styles={styles} />
      </section> */}

      <section className={`${styles["pat-faq"]} mt-5`}>
        <Patfaq styles={styles} />
      </section>
    </>
  );
};

export default Patdetails;

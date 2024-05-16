import React from "react";
import Matenav from "./matenav";
import Mateinfo from "./mateinfo";
import Matess from "./matess";
import Matefeatures from "./matefeatures";
import Mateusp from "./mateusp";
import Matespecs from "./matespecs";
import Mateprice from "./mateprice";
import Matereview from "./matereview";
import Matealternative from "./matealternative";
import Matecompare from "./matecompare";
import Matefaq from "./matefaq";
const Matedetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["mat-navi"]}  shadow pb-4`}>
        <Matenav styles={styles} />
      </section>

      <section className={`${styles["mat-info"]} my-5`} id="idinfo">
        <Mateinfo styles={styles} />
      </section>

      <section className={`${styles["mat-ss"]} mt-5`} id="idss">
        <Matess styles={styles} />
      </section>

      <section className={`${styles["mat-features"]} my-5`} id="idfeature">
        <Matefeatures styles={styles} />
      </section>

      <section className={styles["mat-usp"]} id="idusp">
        <Mateusp styles={styles} />
      </section>

      <section className={`${styles["mat-spec"]} mt-5`}>
        <Matespecs styles={styles} />
      </section>

      <section className={`${styles["mat-pricing"]} mt-5`} id="idpricing">
        <Mateprice styles={styles} />
      </section>

      <section className={`${styles["mat-review"]} mt-5`} id="idreview">
        <Matereview styles={styles} />
      </section>

      {/* <section className={`${styles["mat-alternative"]} mt-5`} id="idalternative">
        <Matealternative styles={styles} />
      </section>

      <section className={`${styles["mat-compare"]} mt-5`} id="idcompare">
        <Matecompare styles={styles} />
      </section> */}

      <section className={`${styles["mat-faq"]} mt-5`}>
        <Matefaq styles={styles} />
      </section>
    </>
  );
};

export default Matedetails;

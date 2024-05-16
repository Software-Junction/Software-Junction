import React from "react";
import Matrixnav from "./matrixnav";
import Matrixinfo from "./matrixinfo";
import Matrixss from "./matrixss";
import Matrixfeatures from "./matrixfeatures";
import Matrixusp from "./matrixusp";
import Matrixspecs from "./matrixspecs";
import Matrixprice from "./matrixprice";
import Matrixreview from "./matrixreview";
import Matrixalternative from "./matrixalternative";
import Matrixcompare from "./matrixcompare";
import Matrixfaq from "./matrixfaq";
const Matrixdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["mat-navi"]}  shadow pb-4`}>
        <Matrixnav styles={styles} />
      </section>

      <section className={`${styles["mat-info"]} my-5`} id="idinfo">
        <Matrixinfo styles={styles} />
      </section>

      <section className={`${styles["mat-ss"]} mt-5`} id="idss">
        <Matrixss styles={styles} />
      </section>

      <section className={`${styles["mat-features"]} my-5`} id="idfeature">
        <Matrixfeatures styles={styles} />
      </section>

      <section className={styles["mat-usp"]} id="idusp">
        <Matrixusp styles={styles} />
      </section>

      <section className={`${styles["mat-spec"]} mt-5`}>
        <Matrixspecs styles={styles} />
      </section>

      <section className={`${styles["mat-pricing"]} mt-5`} id="idpricing">
        <Matrixprice styles={styles} />
      </section>

      <section className={`${styles["mat-review"]} mt-5`} id="idreview">
        <Matrixreview styles={styles} />
      </section>

      {/* <section className={`${styles["mat-alternative"]} mt-5`} id="idalternative">
        <Matrixalternative styles={styles} />
      </section>

      <section className={`${styles["mat-compare"]} mt-5`} id="idcompare">
        <Matrixcompare styles={styles} />
      </section> */}

      <section className={`${styles["mat-faq"]} mt-5`}>
        <Matrixfaq styles={styles} />
      </section>
    </>
  );
};

export default Matrixdetails;

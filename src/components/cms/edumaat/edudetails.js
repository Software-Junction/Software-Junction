import React from "react";
import Edunav from "./edunav";
import Eduinfo from "./eduinfo";
import Eduss from "./eduss";
import Edufeatures from "./edufeatures";
import Eduusp from "./eduusp";
import Eduspecs from "./eduspecs";
import Eduprice from "./eduprice";
import Edureview from "./edureview";
import Edualternative from "./edualternative";
import Educompare from "./educompare";
import Edufaq from "./edufaq";
const Edudetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["edu-navi"]}  shadow pb-4`}>
        <Edunav styles={styles} />
      </section>

      <section className={`${styles["edu-info"]} my-5`} id="idinfo">
        <Eduinfo styles={styles} />
      </section>

      <section className={`${styles["edu-ss"]} mt-5`} id="idss">
        <Eduss styles={styles} />
      </section>

      <section className={`${styles["edu-features"]} my-5`} id="idfeature">
        <Edufeatures styles={styles} />
      </section>

      <section className={styles["edu-usp"]} id="idusp">
        <Eduusp styles={styles} />
      </section>

      <section className={`${styles["edu-spec"]} mt-5`}>
        <Eduspecs styles={styles} />
      </section>

      <section className={`${styles["edu-pricing"]} mt-5`} id="idpricing">
        <Eduprice styles={styles} />
      </section>

      <section className={`${styles["edu-review"]} mt-5`} id="idreview">
        <Edureview styles={styles} />
      </section>

      {/* <section className={`${styles["edu-alternative"]} mt-5`} id="idalternative">
        <Edualternative styles={styles} />
      </section>

      <section className={`${styles["edu-compare"]} mt-5`} id="idcompare">
        <Educompare styles={styles} />
      </section> */}

      <section className={`${styles["edu-faq"]} mt-5`}>
        <Edufaq styles={styles} />
      </section>
    </>
  );
};

export default Edudetails;

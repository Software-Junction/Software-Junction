import React from "react";
import Flexnav from "./flexnav";
import Flexinfo from "./flexinfo";
import Flexss from "./flexss";
import Flexfeatures from "./flexfeatures";
import Flexusp from "./flexusp";
import Flexspecs from "./flexspecs";
import Flexprice from "./flexprice";
import Flexreview from "./flexreview";
import Flexalternative from "./flexalternative";
import Flexcompare from "./flexcompare";
import Flexfaq from "./flexfaq";
const Flexdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["flx-navi"]}  shadow pb-4`}>
        <Flexnav styles={styles} />
      </section>

      <section className={`${styles["flx-info"]} my-5`} id="idinfo">
        <Flexinfo styles={styles} />
      </section>

      <section className={`${styles["flx-ss"]} mt-5`} id="idss">
        <Flexss styles={styles} />
      </section>

      <section className={`${styles["flx-features"]} my-5`} id="idfeature">
        <Flexfeatures styles={styles} />
      </section>

      <section className={styles["flx-usp"]} id="idusp">
        <Flexusp styles={styles} />
      </section>

      <section className={`${styles["flx-spec"]} mt-5`}>
        <Flexspecs styles={styles} />
      </section>

      <section className={`${styles["flx-pricing"]} mt-5`} id="idpricing">
        <Flexprice styles={styles} />
      </section>

      <section className={`${styles["flx-review"]} mt-5`} id="idreview">
        <Flexreview styles={styles} />
      </section>

      {/* <section className={`${styles["flx-alternative"]} mt-5`} id="idalternative">
        <Flexalternative styles={styles} />
      </section>

      <section className={`${styles["flx-compare"]} mt-5`} id="idcompare">
        <Flexcompare styles={styles} />
      </section> */}

      <section className={`${styles["flx-faq"]} mt-5`}>
        <Flexfaq styles={styles} />
      </section>
    </>
  );
};

export default Flexdetails;

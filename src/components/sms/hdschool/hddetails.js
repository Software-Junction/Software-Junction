import React from "react";
import Hdnav from "./hdnav";
import Hdinfo from "./hdinfo";
import Hdss from "./hdss";
import Hdfeatures from "./hdfeatures";
import Hdusp from "./hdusp";
import Hdspecs from "./hdspecs";
import Hdprice from "./hdprice";
import Hdreview from "./hdreview";
import Hdalternative from "./hdalternative";
import Hdcompare from "./hdcompare";
import Hdfaq from "./hdfaq";
const Hddetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["hds-navi"]}  shadow pb-4`}>
        <Hdnav styles={styles} />
      </section>

      <section className={`${styles["hds-info"]} my-5`} id="idinfo">
        <Hdinfo styles={styles} />
      </section>

      <section className={`${styles["hds-ss"]} mt-5`} id="idss">
        <Hdss styles={styles} />
      </section>

      <section className={`${styles["hds-features"]} my-5`} id="idfeature">
        <Hdfeatures styles={styles} />
      </section>

      <section className={styles["hds-usp"]} id="idusp">
        <Hdusp styles={styles} />
      </section>

      <section className={`${styles["hds-spec"]} mt-5`}>
        <Hdspecs styles={styles} />
      </section>

      <section className={`${styles["hds-pricing"]} mt-5`} id="idpricing">
        <Hdprice styles={styles} />
      </section>

      <section className={`${styles["hds-review"]} mt-5`} id="idreview">
        <Hdreview styles={styles} />
      </section>

      {/* <section className={`${styles["hds-alternative"]} mt-5`} id="idalternative">
        <Hdalternative styles={styles} />
      </section>

      <section className={`${styles["hds-compare"]} mt-5`} id="idcompare">
        <Hdcompare styles={styles} />
      </section> */}

      <section className={`${styles["hds-faq"]} mt-5`}>
        <Hdfaq styles={styles} />
      </section>
    </>
  );
};

export default Hddetails;

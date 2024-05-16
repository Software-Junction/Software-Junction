import React from "react";
import Campnav from "./campnav";
import Campinfo from "./campinfo";
import Campss from "./campss";
import Campfeatures from "./campfeatures";
import Campusp from "./campusp";
import Campspecs from "./campspecs";
import Campprice from "./campprice";
import Campreview from "./campreview";
import Campalternative from "./campalternative";
import Campcompare from "./campcompare";
import Campfaq from "./campfaq";
const Campdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["cam-navi"]}  shadow pb-4`}>
        <Campnav styles={styles} />
      </section>

      <section className={`${styles["cam-info"]} my-5`} id="idinfo">
        <Campinfo styles={styles} />
      </section>

      <section className={`${styles["cam-ss"]} mt-5`} id="idss">
        <Campss styles={styles} />
      </section>

      <section className={`${styles["cam-features"]} my-5`} id="idfeature">
        <Campfeatures styles={styles} />
      </section>

      {/* <section className={styles["cam-usp"]} id="idusp">
        <Campusp styles={styles} />
      </section> */}

      <section className={`${styles["cam-spec"]} mt-5`}>
        <Campspecs styles={styles} />
      </section>

      <section className={`${styles["cam-pricing"]} mt-5`} id="idpricing">
        <Campprice styles={styles} />
      </section>

      <section className={`${styles["cam-review"]} mt-5`} id="idreview">
        <Campreview styles={styles} />
      </section>

      {/* <section className={`${styles["cam-alternative"]} mt-5`} id="idalternative">
        <Campalternative styles={styles} />
      </section>

      <section className={`${styles["cam-compare"]} mt-5`} id="idcompare">
        <Campcompare styles={styles} />
      </section> */}

      <section className={`${styles["cam-faq"]} mt-5`}>
        <Campfaq styles={styles} />
      </section>
    </>
  );
};

export default Campdetails;

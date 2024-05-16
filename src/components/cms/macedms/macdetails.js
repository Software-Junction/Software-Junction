import React from "react";
import Macnav from "./macnav";
import Macinfo from "./macinfo";
import Macss from "./macss";
import Macfeatures from "./macfeatures";
import Macusp from "./macusp";
import Macspecs from "./macspecs";
import Macprice from "./macprice";
import Macreview from "./macreview";
import Macalternative from "./macalternative";
import Maccompare from "./maccompare";
import Macfaq from "./macfaq";
const Macdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["mac-navi"]}  shadow pb-4`}>
        <Macnav styles={styles} />
      </section>

      <section className={`${styles["mac-info"]} my-5`} id="idinfo">
        <Macinfo styles={styles} />
      </section>

      <section className={`${styles["mac-ss"]} mt-5`} id="idss">
        <Macss styles={styles} />
      </section>

      <section className={`${styles["mac-features"]} my-5`} id="idfeature">
        <Macfeatures styles={styles} />
      </section>

      <section className={styles["mac-usp"]} id="idusp">
        <Macusp styles={styles} />
      </section>

      <section className={`${styles["mac-spec"]} mt-5`}>
        <Macspecs styles={styles} />
      </section>

      <section className={`${styles["mac-pricing"]} mt-5`} id="idpricing">
        <Macprice styles={styles} />
      </section>

      <section className={`${styles["mac-review"]} mt-5`} id="idreview">
        <Macreview styles={styles} />
      </section>

      {/* <section className={`${styles["mac-alternative"]} mt-5`} id="idalternative">
        <Macalternative styles={styles} />
      </section>

      <section className={`${styles["mac-compare"]} mt-5`} id="idcompare">
        <Maccompare styles={styles} />
      </section> */}

      <section className={`${styles["mac-faq"]} mt-5`}>
        <Macfaq styles={styles} />
      </section>
    </>
  );
};

export default Macdetails;

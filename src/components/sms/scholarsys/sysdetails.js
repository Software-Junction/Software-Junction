import React from "react";
import Sysnav from "./sysnav";
import Sysinfo from "./sysinfo";
import Sysss from "./sysss";
import Sysfeatures from "./sysfeatures";
import Sysusp from "./sysusp";
import Sysspecs from "./sysspecs";
import Sysprice from "./sysprice";
import Sysreview from "./sysreview";
import Sysalternative from "./sysalternative";
import Syscompare from "./syscompare";
import Sysfaq from "./sysfaq";
const Sysdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["sys-navi"]}  shadow pb-4`}>
        <Sysnav styles={styles} />
      </section>

      <section className={`${styles["sys-info"]} my-5`} id="idinfo">
        <Sysinfo styles={styles} />
      </section>

      <section className={`${styles["sys-ss"]} mt-5`} id="idss">
        <Sysss styles={styles} />
      </section>

      <section className={`${styles["sys-features"]} my-5`} id="idfeature">
        <Sysfeatures styles={styles} />
      </section>

      <section className={styles["sys-usp"]} id="idusp">
        <Sysusp styles={styles} />
      </section>

      <section className={`${styles["sys-spec"]} mt-5`}>
        <Sysspecs styles={styles} />
      </section>

      {/* <section className={`${styles["sys-pricing"]} mt-5`} id="idpricing">
        <Sysprice styles={styles} />
      </section> */}

      <section className={`${styles["sys-review"]} mt-5`} id="idreview">
        <Sysreview styles={styles} />
      </section>

      {/* <section className={`${styles["sys-alternative"]} mt-5`} id="idalternative">
        <Sysalternative styles={styles} />
      </section>

      <section className={`${styles["sys-compare"]} mt-5`} id="idcompare">
        <Syscompare styles={styles} />
      </section> */}

      <section className={`${styles["sys-faq"]} mt-5`}>
        <Sysfaq styles={styles} />
      </section>
    </>
  );
};

export default Sysdetails;

import React from "react";
import Padnav from "./padnav";
import Padinfo from "./padinfo";
import Padss from "./padss";
import Padfeatures from "./padfeatures";
import Padusp from "./padusp";
import Padspecs from "./padspecs";
import Padprice from "./padprice";
import Padreview from "./padreview";
import Padalternative from "./padalternative";
import Padcompare from "./padcompare";
import Padfaq from "./padfaq";
const Paddetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["pad-navi"]}  shadow pb-4`}>
        <Padnav styles={styles} />
      </section>

      <section className={`${styles["pad-info"]} my-5`} id="idinfo">
        <Padinfo styles={styles} />
      </section>

      <section className={`${styles["pad-ss"]} mt-5`} id="idss">
        <Padss styles={styles} />
      </section>

      <section className={`${styles["pad-features"]} my-5`} id="idfeature">
        <Padfeatures styles={styles} />
      </section>

      <section className={styles["pad-usp"]} id="idusp">
        <Padusp styles={styles} />
      </section>

      <section className={`${styles["pad-spec"]} mt-5`}>
        <Padspecs styles={styles} />
      </section>

      {/* <section className={`${styles["pad-pricing"]} mt-5`} id="idpricing">
        <Padprice styles={styles} />
      </section> */}

      <section className={`${styles["pad-review"]} mt-5`} id="idreview">
        <Padreview styles={styles} />
      </section>

      {/* <section className={`${styles["pad-alternative"]} mt-5`} id="idalternative">
        <Padalternative styles={styles} />
      </section>

      <section className={`${styles["pad-compare"]} mt-5`} id="idcompare">
        <Padcompare styles={styles} />
      </section> */}

      <section className={`${styles["pad-faq"]} mt-5`}>
        <Padfaq styles={styles} />
      </section>
    </>
  );
};

export default Paddetails;

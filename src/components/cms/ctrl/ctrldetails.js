import React from "react";
import Ctrlnav from "./ctrlnav";
import Ctrlinfo from "./ctrlinfo";
import Ctrlss from "./ctrlss";
import Ctrlfeatures from "./ctrlfeatures";
import Ctrlusp from "./ctrlusp";
import Ctrlspecs from "./ctrlspecs";
import Ctrlprice from "./ctrlprice";
import Ctrlreview from "./ctrlreview";
import Ctrlalternative from "./ctrlalternative";
import Ctrlcompare from "./ctrlcompare";
import Ctrlfaq from "./ctrlfaq";
const Ctrldetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["ctrl-navi"]}  shadow pb-4`}>
        <Ctrlnav styles={styles} />
      </section>

      <section className={`${styles["ctrl-info"]} my-5`} id="idinfo">
        <Ctrlinfo styles={styles} />
      </section>

      <section className={`${styles["ctrl-ss"]} mt-5`} id="idss">
        <Ctrlss styles={styles} />
      </section>

      <section className={`${styles["ctrl-features"]} my-5`} id="idfeature">
        <Ctrlfeatures styles={styles} />
      </section>

      <section className={styles["ctrl-usp"]} id="idusp">
        <Ctrlusp styles={styles} />
      </section>

      <section className={`${styles["ctrl-spec"]} mt-5`}>
        <Ctrlspecs styles={styles} />
      </section>

      <section className={`${styles["ctrl-pricing"]} mt-5`} id="idpricing">
        <Ctrlprice styles={styles} />
      </section>

      <section className={`${styles["ctrl-review"]} mt-5`} id="idreview">
        <Ctrlreview styles={styles} />
      </section>

      {/* <section className={`${styles["ctrl-alternative"]} mt-5`} id="idalternative">
        <Ctrlalternative styles={styles} />
      </section>

      <section className={`${styles["ctrl-compare"]} mt-5`} id="idcompare">
        <Ctrlcompare styles={styles} />
      </section> */}

      <section className={`${styles["ctrl-faq"]} mt-5`}>
        <Ctrlfaq styles={styles} />
      </section>
    </>
  );
};

export default Ctrldetails;

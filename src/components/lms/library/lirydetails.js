import React from "react";
import Lirynav from "./lirynav";
import Liryinfo from "./liryinfo";
import Liryss from "./liryss";
import Liryfeatures from "./liryfeatures";
import Liryusp from "./liryusp";
import Liryspecs from "./liryspecs";
import Liryprice from "./liryprice";
import Liryreview from "./liryreview";
import Liryalternative from "./liryalternative";
import Lirycompare from "./lirycompare";
import Liryfaq from "./liryfaq";
const Lirydetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["lir-navi"]}  shadow pb-4`}>
        <Lirynav styles={styles} />
      </section>

      <section className={`${styles["lir-info"]} my-5`} id="idinfo">
        <Liryinfo styles={styles} />
      </section>

      <section className={`${styles["lir-ss"]} mt-5`} id="idss">
        <Liryss styles={styles} />
      </section>

      <section className={`${styles["lir-features"]} my-5`} id="idfeature">
        <Liryfeatures styles={styles} />
      </section>

      <section className={styles["lir-usp"]} id="idusp">
        <Liryusp styles={styles} />
      </section>

      <section className={`${styles["lir-spec"]} mt-5`}>
        <Liryspecs styles={styles} />
      </section>

      <section className={`${styles["lir-pricing"]} mt-5`} id="idpricing">
        <Liryprice styles={styles} />
      </section>

      <section className={`${styles["lir-review"]} mt-5`} id="idreview">
        <Liryreview styles={styles} />
      </section>

      {/* <section className={`${styles["lir-alternative"]} mt-5`} id="idalternative">
        <Liryalternative styles={styles} />
      </section>

      <section className={`${styles["lir-compare"]} mt-5`} id="idcompare">
        <Lirycompare styles={styles} />
      </section> */}

      <section className={`${styles["lir-faq"]} mt-5`}>
        <Liryfaq styles={styles} />
      </section>
    </>
  );
};

export default Lirydetails;

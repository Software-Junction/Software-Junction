import React from "react";
import Litenav from "./litenav";
import Liteinfo from "./liteinfo";
import Litess from "./litess";
import Litefeatures from "./litefeatures";
import Liteusp from "./liteusp";
import Litespecs from "./litespecs";
import Liteprice from "./liteprice";
import Litereview from "./litereview";
import Litealternative from "./litealternative";
import Litecompare from "./litecompare";
import Litefaq from "./litefaq";
const Litedetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["lite-navi"]}  shadow pb-4`}>
        <Litenav styles={styles} />
      </section>

      <section className={`${styles["lite-info"]} my-5`} id="idinfo">
        <Liteinfo styles={styles} />
      </section>

      <section className={`${styles["lite-ss"]} mt-5`} id="idss">
        <Litess styles={styles} />
      </section>

      <section className={`${styles["lite-features"]} my-5`} id="idfeature">
        <Litefeatures styles={styles} />
      </section>

      <section className={styles["lite-usp"]} id="idusp">
        <Liteusp styles={styles} />
      </section>

      <section className={`${styles["lite-spec"]} mt-5`}>
        <Litespecs styles={styles} />
      </section>

      <section className={`${styles["lite-pricing"]} mt-5`} id="idpricing">
        <Liteprice styles={styles} />
      </section>

      <section className={`${styles["lite-review"]} mt-5`} id="idreview">
        <Litereview styles={styles} />
      </section>

      {/* <section className={`${styles["lite-alternative"]} mt-5`} id="idalternative">
        <Litealternative styles={styles} />
      </section>

      <section className={`${styles["lite-compare"]} mt-5`} id="idcompare">
        <Litecompare styles={styles} />
      </section> */}

      <section className={`${styles["lite-faq"]} mt-5`}>
        <Litefaq styles={styles} />
      </section>
    </>
  );
};

export default Litedetails;

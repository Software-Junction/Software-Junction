import React from "react";
import Sharenav from "./sharenav";
import Shareinfo from "./shareinfo";
import Sharess from "./sharess";
import Sharefeatures from "./sharefeatures";
import Shareusp from "./shareusp";
import Sharespecs from "./sharespecs";
import Shareprice from "./shareprice";
import Sharereview from "./sharereview";
import Sharealternative from "./sharealternative";
import Sharecompare from "./sharecompare";
import Sharefaq from "./sharefaq";
const Sharedetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["shr-navi"]}  shadow pb-4`}>
        <Sharenav styles={styles} />
      </section>

      <section className={`${styles["shr-info"]} my-5`} id="idinfo">
        <Shareinfo styles={styles} />
      </section>

      <section className={`${styles["shr-ss"]} mt-5`} id="idss">
        <Sharess styles={styles} />
      </section>

      <section className={`${styles["shr-features"]} my-5`} id="idfeature">
        <Sharefeatures styles={styles} />
      </section>

      <section className={styles["shr-usp"]} id="idusp">
        <Shareusp styles={styles} />
      </section>

      <section className={`${styles["shr-spec"]} mt-5`}>
        <Sharespecs styles={styles} />
      </section>

      {/* <section className={`${styles["shr-pricing"]} mt-5`} id="idpricing">
        <Shareprice styles={styles} />
      </section> */}

      <section className={`${styles["shr-review"]} mt-5`} id="idreview">
        <Sharereview styles={styles} />
      </section>

      {/* <section className={`${styles["shr-alternative"]} mt-5`} id="idalternative">
        <Sharealternative styles={styles} />
      </section>

      <section className={`${styles["shr-compare"]} mt-5`} id="idcompare">
        <Sharecompare styles={styles} />
      </section> */}

      <section className={`${styles["shr-faq"]} mt-5`}>
        <Sharefaq styles={styles} />
      </section>
    </>
  );
};

export default Sharedetails;

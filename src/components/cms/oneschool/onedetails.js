import React from "react";
import Onenav from "./onenav";
import Oneinfo from "./oneinfo";
import Oness from "./oness";
import Onefeatures from "./onefeatures";
import Oneusp from "./oneusp";
import Onespecs from "./onespecs";
import Oneprice from "./oneprice";
import Onereview from "./onereview";
import Onealternative from "./onealternative";
import Onecompare from "./onecompare";
import Onefaq from "./onefaq";
const Onedetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["ons-navi"]}  shadow pb-4`}>
        <Onenav styles={styles} />
      </section>

      <section className={`${styles["ons-info"]} my-5`} id="idinfo">
        <Oneinfo styles={styles} />
      </section>

      <section className={`${styles["ons-ss"]} mt-5`} id="idss">
        <Oness styles={styles} />
      </section>

      <section className={`${styles["ons-features"]} my-5`} id="idfeature">
        <Onefeatures styles={styles} />
      </section>

      <section className={styles["ons-usp"]} id="idusp">
        <Oneusp styles={styles} />
      </section>

      <section className={`${styles["ons-spec"]} mt-5`}>
        <Onespecs styles={styles} />
      </section>

      <section className={`${styles["ons-pricing"]} mt-5`} id="idpricing">
        <Oneprice styles={styles} />
      </section>

      <section className={`${styles["ons-review"]} mt-5`} id="idreview">
        <Onereview styles={styles} />
      </section>
{/* 
      <section className={`${styles["ons-alternative"]} mt-5`} id="idalternative">
        <Onealternative styles={styles} />
      </section>

      <section className={`${styles["ons-compare"]} mt-5`} id="idcompare">
        <Onecompare styles={styles} />
      </section> */}

      <section className={`${styles["ons-faq"]} mt-5`}>
        <Onefaq styles={styles} />
      </section>
    </>
  );
};

export default Onedetails;

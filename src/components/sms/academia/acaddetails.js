import React from "react";
import Acadnav from "./acadnav";
import Acadinfo from "./acadinfo";
import Acadss from "./acadss";
import Acadfeatures from "./acadfeatures";
import Acadusp from "./acadusp";
import Acadspecs from "./acadspecs";
import Acadprice from "./acadprice";
import Acadreview from "./acadreview";
import Acadalternative from "./acadalternative";
import Acadcompare from "./acadcompare";
import Acadfaq from "./acadfaq";
const Acaddetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["aca-navi"]}  shadow pb-4`}>
        <Acadnav styles={styles} />
      </section>

      <section className={`${styles["aca-info"]} my-5`} id="idinfo">
        <Acadinfo styles={styles} />
      </section>

      <section className={`${styles["aca-ss"]} mt-5`} id="idss">
        <Acadss styles={styles} />
      </section>

      <section className={`${styles["aca-features"]} my-5`} id="idfeature">
        <Acadfeatures styles={styles} />
      </section>

      <section className={styles["aca-usp"]} id="idusp">
        <Acadusp styles={styles} />
      </section>

      <section className={`${styles["aca-spec"]} mt-5`}>
        <Acadspecs styles={styles} />
      </section>

      {/* <section className={`${styles["aca-pricing"]} mt-5`} id="idpricing">
        <Acadprice styles={styles} />
      </section> */}

      <section className={`${styles["aca-review"]} mt-5`} id="idreview">
        <Acadreview styles={styles} />
      </section>

      {/* <section className={`${styles["aca-alternative"]} mt-5`} id="idalternative">
        <Acadalternative styles={styles} />
      </section>

      <section className={`${styles["aca-compare"]} mt-5`} id="idcompare">
        <Acadcompare styles={styles} />
      </section> */}

      <section className={`${styles["aca-faq"]} mt-5`}>
        <Acadfaq styles={styles} />
      </section>
    </>
  );
};

export default Acaddetails;

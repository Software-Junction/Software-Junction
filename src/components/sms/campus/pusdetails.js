import React from "react";
import Pusnav from "./pusnav";
import Pusinfo from "./pusinfo";
import Pusss from "./pusss";
import Pusfeatures from "./pusfeatures";
import Pususp from "./pususp";
import Pusspecs from "./pusspecs";
import Pusprice from "./pusprice";
import Pusreview from "./pusreview";
import Pusalternative from "./pusalternative";
import Puscompare from "./puscompare";
import Pusfaq from "./pusfaq";
const Pusdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["pus-navi"]}  shadow pb-4`}>
        <Pusnav styles={styles} />
      </section>

      <section className={`${styles["pus-info"]} my-5`} id="idinfo">
        <Pusinfo styles={styles} />
      </section>

      <section className={`${styles["pus-ss"]} mt-5`} id="idss">
        <Pusss styles={styles} />
      </section>

      <section className={`${styles["pus-features"]} my-5`} id="idfeature">
        <Pusfeatures styles={styles} />
      </section>

      <section className={styles["pus-usp"]} id="idusp">
        <Pususp styles={styles} />
      </section>

      <section className={`${styles["pus-spec"]} mt-5`}>
        <Pusspecs styles={styles} />
      </section>

      <section className={`${styles["pus-pricing"]} mt-5`} id="idpricing">
        <Pusprice styles={styles} />
      </section>

      <section className={`${styles["pus-review"]} mt-5`} id="idreview">
        <Pusreview styles={styles} />
      </section>

      {/* <section className={`${styles["pus-alternative"]} mt-5`} id="idalternative">
        <Pusalternative styles={styles} />
      </section>

      <section className={`${styles["pus-compare"]} mt-5`} id="idcompare">
        <Puscompare styles={styles} />
      </section> */}

      <section className={`${styles["pus-faq"]} mt-5`}>
        <Pusfaq styles={styles} />
      </section>
    </>
  );
};

export default Pusdetails;

import React from "react";
import Savinav from "./savinav";
import Saviinfo from "./saviinfo";
import Saviss from "./saviss";
import Savifeatures from "./savifeatures";
import Saviusp from "./saviusp";
import Savispecs from "./savispecs";
import Saviprice from "./saviprice";
import Savireview from "./savireview";
import Savialternative from "./savialternative";
import Savicompare from "./savicompare";
import Savifaq from "./savifaq";
const Savidetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["sav-navi"]}  shadow pb-4`}>
        <Savinav styles={styles} />
      </section>

      <section className={`${styles["sav-info"]} my-5`} id="idinfo">
        <Saviinfo styles={styles} />
      </section>

      <section className={`${styles["sav-ss"]} mt-5`} id="idss">
        <Saviss styles={styles} />
      </section>

      <section className={`${styles["sav-features"]} my-5`} id="idfeature">
        <Savifeatures styles={styles} />
      </section>

      <section className={styles["sav-usp"]} id="idusp">
        <Saviusp styles={styles} />
      </section>

      <section className={`${styles["sav-spec"]} mt-5`}>
        <Savispecs styles={styles} />
      </section>

      {/* <section className={`${styles["sav-pricing"]} mt-5`} id="idpricing">
        <Saviprice styles={styles} />
      </section> */}

      <section className={`${styles["sav-review"]} mt-5`} id="idreview">
        <Savireview styles={styles} />
      </section>

      {/* <section className={`${styles["sav-alternative"]} mt-5`} id="idalternative">
        <Savialternative styles={styles} />
      </section>

      <section className={`${styles["sav-compare"]} mt-5`} id="idcompare">
        <Savicompare styles={styles} />
      </section> */}

      <section className={`${styles["sav-faq"]} mt-5`}>
        <Savifaq styles={styles} />
      </section>
    </>
  );
};

export default Savidetails;

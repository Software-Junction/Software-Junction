import React from "react";
import Diginav from "./diginav";
import Digiinfo from "./digiinfo";
import Digiss from "./digiss";
import Digifeatures from "./digifeatures";
import Digiusp from "./digiusp";
import Digispecs from "./digispecs";
import Digiprice from "./digiprice";
import Digireview from "./digireview";
import Digialternative from "./digialternative";
import Digicompare from "./digicompare";
import Digifaq from "./digifaq";
const Digidetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["dig-navi"]}  shadow pb-4`}>
        <Diginav styles={styles} />
      </section>

      <section className={`${styles["dig-info"]} my-5`} id="idinfo">
        <Digiinfo styles={styles} />
      </section>

      <section className={`${styles["dig-ss"]} mt-5`} id="idss">
        <Digiss styles={styles} />
      </section>

      <section className={`${styles["dig-features"]} my-5`} id="idfeature">
        <Digifeatures styles={styles} />
      </section>

      <section className={styles["dig-usp"]} id="idusp">
        <Digiusp styles={styles} />
      </section>

      <section className={`${styles["dig-spec"]} mt-5`}>
        <Digispecs styles={styles} />
      </section>

      <section className={`${styles["dig-pricing"]} mt-5`} id="idpricing">
        <Digiprice styles={styles} />
      </section>

      <section className={`${styles["dig-review"]} mt-5`} id="idreview">
        <Digireview styles={styles} />
      </section>

      {/* <section className={`${styles["dig-alternative"]} mt-5`} id="idalternative">
        <Digialternative styles={styles} />
      </section>

      <section className={`${styles["dig-compare"]} mt-5`} id="idcompare">
        <Digicompare styles={styles} />
      </section> */}

      <section className={`${styles["dig-faq"]} mt-5`}>
        <Digifaq styles={styles} />
      </section>
    </>
  );
};

export default Digidetails;

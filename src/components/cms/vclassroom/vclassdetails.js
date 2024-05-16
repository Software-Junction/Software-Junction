import React from "react";
import Vclassnav from "./vclassnav";
import Vclassinfo from "./vclassinfo";
import Vclassss from "./vclassss";
import Vclassfeatures from "./vclassfeatures";
import Vclassusp from "./vclassusp";
import Vclassspecs from "./vclassspecs";
import Vclassprice from "./vclassprice";
import Vclassreview from "./vclassreview";
import Vclassalternative from "./vclassalternative";
import Vclasscompare from "./vclasscompare";
import Vclassfaq from "./vclassfaq";
const Vclassdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["vcl-navi"]}  shadow pb-4`}>
        <Vclassnav styles={styles} />
      </section>

      <section className={`${styles["vcl-info"]} my-5`} id="idinfo">
        <Vclassinfo styles={styles} />
      </section>

      <section className={`${styles["vcl-ss"]} mt-5`} id="idss">
        <Vclassss styles={styles} />
      </section>

      <section className={`${styles["vcl-features"]} my-5`} id="idfeature">
        <Vclassfeatures styles={styles} />
      </section>

      <section className={styles["vcl-usp"]} id="idusp">
        <Vclassusp styles={styles} />
      </section>

      <section className={`${styles["vcl-spec"]} mt-5`}>
        <Vclassspecs styles={styles} />
      </section>

      <section className={`${styles["vcl-pricing"]} mt-5`} id="idpricing">
        <Vclassprice styles={styles} />
      </section>

      <section className={`${styles["vcl-review"]} mt-5`} id="idreview">
        <Vclassreview styles={styles} />
      </section>

      {/* <section className={`${styles["vcl-alternative"]} mt-5`} id="idalternative">
        <Vclassalternative styles={styles} />
      </section>

      <section className={`${styles["vcl-compare"]} mt-5`} id="idcompare">
        <Vclasscompare styles={styles} />
      </section> */}

      <section className={`${styles["vcl-faq"]} mt-5`}>
        <Vclassfaq styles={styles} />
      </section>
    </>
  );
};

export default Vclassdetails;

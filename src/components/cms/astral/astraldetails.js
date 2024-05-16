import React from "react";
import Astralnav from "./astralnav";
import Astralinfo from "./astralinfo";
import Astralss from "./astralss";
import Astralfeatures from "./astralfeatures";
import Astralusp from "./astralusp";
import Astralspecs from "./astralspecs";
import Astralprice from "./astralprice";
import Astralreview from "./astralreview";
import Astralalternative from "./astralalternative";
import Astralcompare from "./astralcompare";
import Astralfaq from "./astralfaq";
const Astraldetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["ast-navi"]}  shadow pb-4`}>
        <Astralnav styles={styles} />
      </section>

      <section className={`${styles["ast-info"]} my-5`} id="idinfo">
        <Astralinfo styles={styles} />
      </section>

      <section className={`${styles["ast-ss"]} mt-5`} id="idss">
        <Astralss styles={styles} />
      </section>

      <section className={`${styles["ast-features"]} my-5`} id="idfeature">
        <Astralfeatures styles={styles} />
      </section>

      <section className={styles["ast-usp"]} id="idusp">
        <Astralusp styles={styles} />
      </section>

      <section className={`${styles["ast-spec"]} mt-5`}>
        <Astralspecs styles={styles} />
      </section>

      <section className={`${styles["ast-pricing"]} mt-5`} id="idpricing">
        <Astralprice styles={styles} />
      </section>

      <section className={`${styles["ast-review"]} mt-5`} id="idreview">
        <Astralreview styles={styles} />
      </section>

      {/* <section className={`${styles["ast-alternative"]} mt-5`} id="idalternative">
        <Astralalternative styles={styles} />
      </section>

      <section className={`${styles["ast-compare"]} mt-5`} id="idcompare">
        <Astralcompare styles={styles} />
      </section> */}

      <section className={`${styles["ast-faq"]} mt-5`}>
        <Astralfaq styles={styles} />
      </section>
    </>
  );
};

export default Astraldetails;

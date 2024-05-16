import React from "react";
import Mminav from "./mminav";
import Mmiinfo from "./mmiinfo";
import Mmiss from "./mmiss";
import Mmifeatures from "./mmifeatures";
import Mmiusp from "./mmiusp";
import Mmispecs from "./mmispecs";
import Mmiprice from "./mmiprice";
import Mmireview from "./mmireview";
import Mmialternative from "./mmialternative";
import Mmicompare from "./mmicompare";
import Mmifaq from "./mmifaq";
const Mmidetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["mmi-navi"]}  shadow pb-4`}>
        <Mminav styles={styles} />
      </section>

      <section className={`${styles["mmi-info"]} my-5`} id="idinfo">
        <Mmiinfo styles={styles} />
      </section>

      <section className={`${styles["mmi-ss"]} mt-5`} id="idss">
        <Mmiss styles={styles} />
      </section>

      <section className={`${styles["mmi-features"]} my-5`} id="idfeature">
        <Mmifeatures styles={styles} />
      </section>

      <section className={styles["mmi-usp"]} id="idusp">
        <Mmiusp styles={styles} />
      </section>

      <section className={`${styles["mmi-spec"]} mt-5`}>
        <Mmispecs styles={styles} />
      </section>

      {/* <section className={`${styles["mmi-pricing"]} mt-5`} id="idpricing">
        <Mmiprice styles={styles} />
      </section> */}

      <section className={`${styles["mmi-review"]} mt-5`} id="idreview">
        <Mmireview styles={styles} />
      </section>

      {/* <section className={`${styles["mmi-alternative"]} mt-5`} id="idalternative">
        <Mmialternative styles={styles} />
      </section>

      <section className={`${styles["mmi-compare"]} mt-5`} id="idcompare">
        <Mmicompare styles={styles} />
      </section> */}

      <section className={`${styles["mmi-faq"]} mt-5`}>
        <Mmifaq styles={styles} />
      </section>
    </>
  );
};

export default Mmidetails;

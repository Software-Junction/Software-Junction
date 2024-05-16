import React from "react";
import Alexnav from "./alexnav";
import Alexinfo from "./alexinfo";
import Alexss from "./alexss";
import Alexfeatures from "./alexfeatures";
import Alexusp from "./alexusp";
import Alexspecs from "./alexspecs";
import Alexprice from "./alexprice";
import Alexreview from "./alexreview";
import Alexalternative from "./alexalternative";
import Alexcompare from "./alexcompare";
import Alexfaq from "./alexfaq";
const Alexdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["alx-navi"]}  shadow pb-4`}>
        <Alexnav styles={styles} />
      </section>

      <section className={`${styles["alx-info"]} my-5`} id="idinfo">
        <Alexinfo styles={styles} />
      </section>

      <section className={`${styles["alx-ss"]} mt-5`} id="idss">
        <Alexss styles={styles} />
      </section>

      <section className={`${styles["alx-features"]} my-5`} id="idfeature">
        <Alexfeatures styles={styles} />
      </section>

      <section className={styles["alx-usp"]} id="idusp">
        <Alexusp styles={styles} />
      </section>

      <section className={`${styles["alx-spec"]} mt-5`}>
        <Alexspecs styles={styles} />
      </section>

      {/* <section className={`${styles["alx-pricing"]} mt-5`} id="idpricing">
        <Alexprice styles={styles} />
      </section> */}

      <section className={`${styles["alx-review"]} mt-5`} id="idreview">
        <Alexreview styles={styles} />
      </section>

      {/* <section className={`${styles["alx-alternative"]} mt-5`} id="idalternative">
        <Alexalternative styles={styles} />
      </section>

      <section className={`${styles["alx-compare"]} mt-5`} id="idcompare">
        <Alexcompare styles={styles} />
      </section> */}

      <section className={`${styles["alx-faq"]} mt-5`}>
        <Alexfaq styles={styles} />
      </section>
    </>
  );
};

export default Alexdetails;

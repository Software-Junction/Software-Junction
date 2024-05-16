import React from "react";
import Kohanav from "./kohanav";
import Kohainfo from "./kohainfo";
import Kohass from "./kohass";
import Kohafeatures from "./kohafeatures";
import Kohausp from "./kohausp";
import Kohaspecs from "./kohaspecs";
import Kohaprice from "./kohaprice";
import Kohareview from "./kohareview";
import Kohaalternative from "./kohaalternative";
import Kohacompare from "./kohacompare";
import Kohafaq from "./kohafaq";
const Kohadetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["koh-navi"]}  shadow pb-4`}>
        <Kohanav styles={styles} />
      </section>

      <section className={`${styles["koh-info"]} my-5`} id="idinfo">
        <Kohainfo styles={styles} />
      </section>

      <section className={`${styles["koh-ss"]} mt-5`} id="idss">
        <Kohass styles={styles} />
      </section>

      <section className={`${styles["koh-features"]} my-5`} id="idfeature">
        <Kohafeatures styles={styles} />
      </section>

      <section className={styles["koh-usp"]} id="idusp">
        <Kohausp styles={styles} />
      </section>

      <section className={`${styles["koh-spec"]} mt-5`}>
        <Kohaspecs styles={styles} />
      </section>

      {/* <section className={`${styles["koh-pricing"]} mt-5`} id="idpricing">
        <Kohaprice styles={styles} />
      </section> */}

      <section className={`${styles["koh-review"]} mt-5`} id="idreview">
        <Kohareview styles={styles} />
      </section>

      {/* <section className={`${styles["koh-alternative"]} mt-5`} id="idalternative">
        <Kohaalternative styles={styles} />
      </section>

      <section className={`${styles["koh-compare"]} mt-5`} id="idcompare">
        <Kohacompare styles={styles} />
      </section> */}

      <section className={`${styles["koh-faq"]} mt-5`}>
        <Kohafaq styles={styles} />
      </section>
    </>
  );
};

export default Kohadetails;

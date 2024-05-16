import React from "react";
import Vidyanav from "./vidyanav";
import Vidyainfo from "./vidyainfo";
import Vidyass from "./vidyass";
import Vidyafeatures from "./vidyafeatures";
import Vidyausp from "./vidyausp";
import Vidyaspecs from "./vidyaspecs";
import Vidyaprice from "./vidyaprice";
import Vidyareview from "./vidyareview";
import Vidyaalternative from "./vidyaalternative";
import Vidyacompare from "./vidyacompare";
import Vidyafaq from "./vidyafaq";
const Vidyadetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["vid-navi"]}  shadow pb-4`}>
        <Vidyanav styles={styles} />
      </section>

      <section className={`${styles["vid-info"]} my-5`} id="idinfo">
        <Vidyainfo styles={styles} />
      </section>

      <section className={`${styles["vid-ss"]} mt-5`} id="idss">
        <Vidyass styles={styles} />
      </section>

      <section className={`${styles["vid-features"]} my-5`} id="idfeature">
        <Vidyafeatures styles={styles} />
      </section>

      <section className={styles["vid-usp"]} id="idusp">
        <Vidyausp styles={styles} />
      </section>

      <section className={`${styles["vid-spec"]} mt-5`}>
        <Vidyaspecs styles={styles} />
      </section>

      <section className={`${styles["vid-pricing"]} mt-5`} id="idpricing">
        <Vidyaprice styles={styles} />
      </section>

      <section className={`${styles["vid-review"]} mt-5`} id="idreview">
        <Vidyareview styles={styles} />
      </section>

      {/* <section className={`${styles["vid-alternative"]} mt-5`} id="idalternative">
        <Vidyaalternative styles={styles} />
      </section>

      <section className={`${styles["vid-compare"]} mt-5`} id="idcompare">
        <Vidyacompare styles={styles} />
      </section> */}

      <section className={`${styles["vid-faq"]} mt-5`}>
        <Vidyafaq styles={styles} />
      </section>
    </>
  );
};

export default Vidyadetails;

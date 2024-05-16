import React from "react";
import Cubenav from "./cubenav";
import Cubeinfo from "./cubeinfo";
import Cubess from "./cubess";
import Cubefeatures from "./cubefeatures";
import Cubeusp from "./cubeusp";
import Cubespecs from "./cubespecs";
import Cubeprice from "./cubeprice";
import Cubereview from "./cubereview";
import Cubealternative from "./cubealternative";
import Cubecompare from "./cubecompare";
import Cubefaq from "./cubefaq";
const Cubedetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["cub-navi"]}  shadow pb-4`}>
        <Cubenav styles={styles} />
      </section>

      <section className={`${styles["cub-info"]} my-5`} id="idinfo">
        <Cubeinfo styles={styles} />
      </section>

      <section className={`${styles["cub-ss"]} mt-5`} id="idss">
        <Cubess styles={styles} />
      </section>

      <section className={`${styles["cub-features"]} my-5`} id="idfeature">
        <Cubefeatures styles={styles} />
      </section>

      <section className={styles["cub-usp"]} id="idusp">
        <Cubeusp styles={styles} />
      </section>

      <section className={`${styles["cub-spec"]} mt-5`}>
        <Cubespecs styles={styles} />
      </section>

      {/* <section className={`${styles["cub-pricing"]} mt-5`} id="idpricing">
        <Cubeprice styles={styles} />
      </section> */}

      <section className={`${styles["cub-review"]} mt-5`} id="idreview">
        <Cubereview styles={styles} />
      </section>

      {/* <section className={`${styles["cub-alternative"]} mt-5`} id="idalternative">
        <Cubealternative styles={styles} />
      </section>

      <section className={`${styles["cub-compare"]} mt-5`} id="idcompare">
        <Cubecompare styles={styles} />
      </section> */}

      <section className={`${styles["cub-faq"]} mt-5`}>
        <Cubefaq styles={styles} />
      </section>
    </>
  );
};

export default Cubedetails;

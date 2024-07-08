import React from "react";
import Nav from "./nav";
import Info from "./info";
import Ss from "./ss";
import Features from "./features";
import Usp from "./usp";
import Specs from "./specs";
import Price from "./price";
import Review from "./review";
import Alternative from "./alternative";
import Compare from "./compare";
import Faq from "./faq";
const Details = ({ styles }) => {
  return (
    <>
      <section className={`${styles["cha-navi"]}  shadow pb-4`}>
        <Nav styles={styles} />
      </section>

      <section className={`${styles["cha-info"]} my-5`} id="idinfo">
        <Info styles={styles} />
      </section>

      <section className={`${styles["cha-ss"]} mt-5`} id="idss">
        <Ss styles={styles} />
      </section>

      <section className={`${styles["cha-features"]} my-5`} id="idfeature">
        <Features styles={styles} />
      </section>

      <section className={styles["cha-usp"]} id="idusp">
        <Usp />
      </section>

      <section className={`${styles["cha-spec"]} mt-5`}>
        <Specs styles={styles} />
      </section>

      <section className={`${styles["cha-pricing"]} mt-5`} id="idpricing">
        <Price />
      </section>

      <section className={`${styles["cha-review"]} mt-5`} id="idreview">
        <Review styles={styles} />
      </section>

      {/* <section className={`${styles["cha-alternative"]} mt-5`} id="idalternative">
        <Alternative styles={styles} />
      </section>

      <section className={`${styles["cha-compare"]} mt-5`} id="idcompare">
        <Compare styles={styles} />
      </section> */}

      <section className={`${styles["cha-faq"]} mt-5`}>
        <Faq styles={styles} />
      </section>
    </>
  );
};

export default Details;

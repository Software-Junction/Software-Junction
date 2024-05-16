import React from "react";
import Hubnav from "./hubnav";
import Hubinfo from "./hubinfo";
import Hubss from "./hubss";
import Hubfeatures from "./hubfeatures";
import Hubusp from "./hubusp";
import Hubspecs from "./hubspecs";
import Hubprice from "./hubprice";
import Hubreview from "./hubreview";
import Hubalternative from "./hubalternative";
import Hubcompare from "./hubcompare";
import Hubfaq from "./hubfaq";
const Hubdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["hub-navi"]}  shadow pb-4`}>
        <Hubnav styles={styles} />
      </section>

      <section className={`${styles["hub-info"]} my-5`} id="idinfo">
        <Hubinfo styles={styles} />
      </section>

      <section className={`${styles["hub-ss"]} mt-5`} id="idss">
        <Hubss styles={styles} />
      </section>

      <section className={`${styles["hub-features"]} my-5`} id="idfeature">
        <Hubfeatures styles={styles} />
      </section>

      <section className={styles["hub-usp"]} id="idusp">
        <Hubusp styles={styles} />
      </section>

      <section className={`${styles["hub-spec"]} mt-5`}>
        <Hubspecs styles={styles} />
      </section>

      <section className={`${styles["hub-pricing"]} mt-5`} id="idpricing">
        <Hubprice styles={styles} />
      </section>

      <section className={`${styles["hub-review"]} mt-5`} id="idreview">
        <Hubreview styles={styles} />
      </section>

      {/* <section className={`${styles["hub-alternative"]} mt-5`} id="idalternative">
        <Hubalternative styles={styles} />
      </section>

      <section className={`${styles["hub-compare"]} mt-5`} id="idcompare">
        <Hubcompare styles={styles} />
      </section> */}

      <section className={`${styles["hub-faq"]} mt-5`}>
        <Hubfaq styles={styles} />
      </section>
    </>
  );
};

export default Hubdetails;

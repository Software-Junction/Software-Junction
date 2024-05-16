import React from "react";
import Webnav from "./webnav";
import Webinfo from "./webinfo";
import Webss from "./webss";
import Webfeatures from "./webfeatures";
import Webusp from "./webusp";
import Webspecs from "./webspecs";
import Webprice from "./webprice";
import Webreview from "./webreview";
import Webalternative from "./webalternative";
import Webcompare from "./webcompare";
import Webfaq from "./webfaq";
const Webdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["web-navi"]}  shadow pb-4`}>
        <Webnav styles={styles} />
      </section>

      <section className={`${styles["web-info"]} my-5`} id="idinfo">
        <Webinfo styles={styles} />
      </section>

      <section className={`${styles["web-ss"]} mt-5`} id="idss">
        <Webss styles={styles} />
      </section>

      <section className={`${styles["web-features"]} my-5`} id="idfeature">
        <Webfeatures styles={styles} />
      </section>

      <section className={styles["web-usp"]} id="idusp">
        <Webusp styles={styles} />
      </section>

      <section className={`${styles["web-spec"]} mt-5`}>
        <Webspecs styles={styles} />
      </section>

      {/* <section className={`${styles["web-pricing"]} mt-5`} id="idpricing">
        <Webprice styles={styles} />
      </section> */}

      <section className={`${styles["web-review"]} mt-5`} id="idreview">
        <Webreview styles={styles} />
      </section>

      {/* <section className={`${styles["web-alternative"]} mt-5`} id="idalternative">
        <Webalternative styles={styles} />
      </section>

      <section className={`${styles["web-compare"]} mt-5`} id="idcompare">
        <Webcompare styles={styles} />
      </section> */}

      <section className={`${styles["web-faq"]} mt-5`}>
        <Webfaq styles={styles} />
      </section>
    </>
  );
};

export default Webdetails;

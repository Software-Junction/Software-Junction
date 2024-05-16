import React from "react";
import Ischoolnav from "./ischoolnav";
import Ischoolinfo from "./ischoolinfo";
import Ischoolss from "./ischoolss";
import Ischoolfeatures from "./ischoolfeatures";
import Ischoolusp from "./ischoolusp";
import Ischoolspecs from "./ischoolspecs";
import Ischoolprice from "./ischoolprice";
import Ischoolreview from "./ischoolreview";
import Ischoolalternative from "./ischoolalternative";
import Ischoolcompare from "./ischoolcompare";
import Ischoolfaq from "./ischoolfaq";
const Ischooldetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["isc-navi"]}  shadow pb-4`}>
        <Ischoolnav styles={styles} />
      </section>

      <section className={`${styles["isc-info"]} my-5`} id="idinfo">
        <Ischoolinfo styles={styles} />
      </section>

      <section className={`${styles["isc-ss"]} mt-5`} id="idss">
        <Ischoolss styles={styles} />
      </section>

      <section className={`${styles["isc-features"]} my-5`} id="idfeature">
        <Ischoolfeatures styles={styles} />
      </section>

      <section className={styles["isc-usp"]} id="idusp">
        <Ischoolusp styles={styles} />
      </section>

      <section className={`${styles["isc-spec"]} mt-5`}>
        <Ischoolspecs styles={styles} />
      </section>

      <section className={`${styles["isc-pricing"]} mt-5`} id="idpricing">
        <Ischoolprice styles={styles} />
      </section>

      <section className={`${styles["isc-review"]} mt-5`} id="idreview">
        <Ischoolreview styles={styles} />
      </section>

      {/* <section className={`${styles["isc-alternative"]} mt-5`} id="idalternative">
        <Ischoolalternative styles={styles} />
      </section>

      <section className={`${styles["isc-compare"]} mt-5`} id="idcompare">
        <Ischoolcompare styles={styles} />
      </section> */}

      <section className={`${styles["isc-faq"]} mt-5`}>
        <Ischoolfaq styles={styles} />
      </section>
    </>
  );
};

export default Ischooldetails;

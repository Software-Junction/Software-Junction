import React from "react";
import Erpnav from "./erpnav";
import Erpinfo from "./erpinfo";
import Erpss from "./erpss";
import Erpfeatures from "./erpfeatures";
import Erpusp from "./erpusp";
import Erpspecs from "./erpspecs";
import Erpprice from "./erpprice";
import Erpreview from "./erpreview";
import Erpalternative from "./erpalternative";
import Erpcompare from "./erpcompare";
import Erpfaq from "./erpfaq";
const Erpdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["erp-navi"]}  shadow pb-4`}>
        <Erpnav styles={styles} />
      </section>

      <section className={`${styles["erp-info"]} my-5`} id="idinfo">
        <Erpinfo styles={styles} />
      </section>

      <section className={`${styles["erp-ss"]} mt-5`} id="idss">
        <Erpss styles={styles} />
      </section>

      <section className={`${styles["erp-features"]} my-5`} id="idfeature">
        <Erpfeatures styles={styles} />
      </section>

      <section className={styles["erp-usp"]} id="idusp">
        <Erpusp styles={styles} />
      </section>

      <section className={`${styles["erp-spec"]} mt-5`}>
        <Erpspecs styles={styles} />
      </section>

      <section className={`${styles["erp-pricing"]} mt-5`} id="idpricing">
        <Erpprice styles={styles} />
      </section>

      <section className={`${styles["erp-review"]} mt-5`} id="idreview">
        <Erpreview styles={styles} />
      </section>

      {/* <section className={`${styles["erp-alternative"]} mt-5`} id="idalternative">
        <Erpalternative styles={styles} />
      </section>

      <section className={`${styles["erp-compare"]} mt-5`} id="idcompare">
        <Erpcompare styles={styles} />
      </section> */}

      <section className={`${styles["erp-faq"]} mt-5`}>
        <Erpfaq styles={styles} />
      </section>
    </>
  );
};

export default Erpdetails;

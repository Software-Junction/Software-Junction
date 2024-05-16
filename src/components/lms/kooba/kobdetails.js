import React from "react";
import Kobnav from "./kobnav";
import Kobinfo from "./kobinfo";
import Kobss from "./kobss";
import Kobfeatures from "./kobfeatures";
import Kobusp from "./kobusp";
import Kobspecs from "./kobspecs";
import Kobprice from "./kobprice";
import Kobreview from "./kobreview";
import Kobalternative from "./kobalternative";
import Kobcompare from "./kobcompare";
import Kobfaq from "./kobfaq";
const Kobdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["kob-navi"]}  shadow pb-4`}>
        <Kobnav styles={styles} />
      </section>

      <section className={`${styles["kob-info"]} my-5`} id="idinfo">
        <Kobinfo styles={styles} />
      </section>

      <section className={`${styles["kob-ss"]} mt-5`} id="idss">
        <Kobss styles={styles} />
      </section>

      <section className={`${styles["kob-features"]} my-5`} id="idfeature">
        <Kobfeatures styles={styles} />
      </section>

      <section className={styles["kob-usp"]} id="idusp">
        <Kobusp styles={styles} />
      </section>

      <section className={`${styles["kob-spec"]} mt-5`}>
        <Kobspecs styles={styles} />
      </section>

      <section className={`${styles["kob-pricing"]} mt-5`} id="idpricing">
        <Kobprice styles={styles} />
      </section>

      <section className={`${styles["kob-review"]} mt-5`} id="idreview">
        <Kobreview styles={styles} />
      </section>

      {/* <section className={`${styles["kob-alternative"]} mt-5`} id="idalternative">
        <Kobalternative styles={styles} />
      </section>

      <section className={`${styles["kob-compare"]} mt-5`} id="idcompare">
        <Kobcompare styles={styles} />
      </section> */}

      <section className={`${styles["kob-faq"]} mt-5`}>
        <Kobfaq styles={styles} />
      </section>
    </>
  );
};

export default Kobdetails;

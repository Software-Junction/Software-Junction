import React from "react";
import Codenav from "./codenav";
import Codeinfo from "./codeinfo";
import Codess from "./codess";
import Codefeatures from "./codefeatures";
import Codeusp from "./codeusp";
import Codespecs from "./codespecs";
import Codeprice from "./codeprice";
import Codereview from "./codereview";
import Codealternative from "./codealternative";
import Codecompare from "./codecompare";
import Codefaq from "./codefaq";
const Codedetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["cod-navi"]}  shadow pb-4`}>
        <Codenav styles={styles} />
      </section>

      <section className={`${styles["cod-info"]} my-5`} id="idinfo">
        <Codeinfo styles={styles} />
      </section>

      <section className={`${styles["cod-ss"]} mt-5`} id="idss">
        <Codess styles={styles} />
      </section>

      <section className={`${styles["cod-features"]} my-5`} id="idfeature">
        <Codefeatures styles={styles} />
      </section>

      <section className={styles["cod-usp"]} id="idusp">
        <Codeusp styles={styles} />
      </section>

      <section className={`${styles["cod-spec"]} mt-5`}>
        <Codespecs styles={styles} />
      </section>

      <section className={`${styles["cod-pricing"]} mt-5`} id="idpricing">
        <Codeprice styles={styles} />
      </section>

      <section className={`${styles["cod-review"]} mt-5`} id="idreview">
        <Codereview styles={styles} />
      </section>

      {/* <section className={`${styles["cod-alternative"]} mt-5`} id="idalternative">
        <Codealternative styles={styles} />
      </section>

      <section className={`${styles["cod-compare"]} mt-5`} id="idcompare">
        <Codecompare styles={styles} />
      </section> */}

      <section className={`${styles["cod-faq"]} mt-5`}>
        <Codefaq styles={styles} />
      </section>
    </>
  );
};

export default Codedetails;

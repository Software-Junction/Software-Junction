import React from "react";
import Ficnav from "./ficnav";
import Ficinfo from "./ficinfo";
import Ficss from "./ficss";
import Ficfeatures from "./ficfeatures";
import Ficusp from "./ficusp";
import Ficspecs from "./ficspecs";
import Ficprice from "./ficprice";
import Ficreview from "./ficreview";
import Ficalternative from "./ficalternative";
import Ficcompare from "./ficcompare";
import Ficfaq from "./ficfaq";
const Ficdetails = ({ styles }) => {
  return (
    <>
      <section className={`${styles["fic-navi"]}  shadow pb-4`}>
        <Ficnav styles={styles} />
      </section>

      <section className={`${styles["fic-info"]} my-5`} id="idinfo">
        <Ficinfo styles={styles} />
      </section>

      <section className={`${styles["fic-ss"]} mt-5`} id="idss">
        <Ficss styles={styles} />
      </section>

      <section className={`${styles["fic-features"]} my-5`} id="idfeature">
        <Ficfeatures styles={styles} />
      </section>

      <section className={styles["fic-usp"]} id="idusp">
        <Ficusp styles={styles} />
      </section>

      <section className={`${styles["fic-spec"]} mt-5`}>
        <Ficspecs styles={styles} />
      </section>

      <section className={`${styles["fic-pricing"]} mt-5`} id="idpricing">
        <Ficprice styles={styles} />
      </section>

      <section className={`${styles["fic-review"]} mt-5`} id="idreview">
        <Ficreview styles={styles} />
      </section>

      {/* <section className={`${styles["fic-alternative"]} mt-5`} id="idalternative">
        <Ficalternative styles={styles} />
      </section>

      <section className={`${styles["fic-compare"]} mt-5`} id="idcompare">
        <Ficcompare styles={styles} />
      </section> */}

      <section className={`${styles["fic-faq"]} mt-5`}>
        <Ficfaq styles={styles} />
      </section>
    </>
  );
};

export default Ficdetails;

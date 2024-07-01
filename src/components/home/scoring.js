import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const Scoring = ({ styles }) => {
  return (
    <>
      <section className={`${styles["scoring"]} py-4`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-3">Scoring Methodology</h3>
              <h5 className={`${styles['sub-heading']} mb-4`}>
                At Software Junction, we believe in providing our visitors and
                software companies with valuable insights into the software
                landscape. To facilitate informed decision- making, we have
                developed a comprehensive scoring methodology based on four key
                metrics. Let&#39;s delve into how we evaluate software products
                on our platform:
              </h5>
            </Col>
            <Col lg={6} className="mb-3">
              <div
                className={`${styles["main-box-rew"]} box rounded-3 bg-light p-4 h-100`}
              >
                <h5 className={styles["rew-title"]}>Review Rating Score</h5>
                <p>
                  The Review Rating Score is derived from the average rating
                  given by users on Software Junction. We encourage our visitors
                  to share their experiences and opinions to create a
                  transparent and helpful environment for everyone.
                </p>
              </div>
            </Col>
            <Col lg={6} className="mb-3">
              <div
                className={`${styles["main-box-pro"]} box rounded-3 bg-light p-4 h-100`}
              >
                <h5 className={styles["pro-title"]}>Product Page Score</h5>
                <p>
                  The Product Page Score reflects the quality and completeness
                  of a software product&#39;s profile on our website. This
                  includes elements such as compelling product images, detailed
                  company decks, and other relevant information that enriches
                  the user&#39;s understanding of the software.
                </p>
              </div>
            </Col>

            <Col lg={6} className="mb-3">
              <div
                className={`${styles["main-box-con"]} box rounded-3 bg-light p-4 h-100`}
              >
                <h5 className={styles["con-title"]}>Content Score</h5>
                <p>
                  Our Content Score assesses the richness and relevance of the
                  content provided for each software product. This includes
                  detailed features, unique selling propositions (USPs), monthly
                  feature highlights showcased on the product page, and
                  exclusive interviews with founders or key team members.
                </p>
              </div>
            </Col>
            <Col lg={6} className="mb-3">
              <div
                className={`${styles["main-box-mar"]} box rounded-3 bg-light p-4 h-100`}
              >
                <h5 className={styles["mar-title"]}>Market Presence Score</h5>
                <p>
                  The Market Presence Score analyzes the broader visibility and
                  impact of a software product in the market. Factors such as
                  Google Ratings, Semrush website traffic data, and any notable
                  awards or recognitions contribute to this score, providing a
                  holistic view of the software&#39;s standing in the industry.
                </p>
              </div>
            </Col>
            <Col lg={12}>
              <div className={`${styles["box-strip"]} box shadow rounded-3 mt-3 bg-light`}>
                <div className={styles['box1']}>25 %</div>
                <div className={styles['box2']}>25 %</div>
                <div className={styles['box3']}>25 %</div>
                <div className={styles['box4']}>25 %</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Scoring;

{
  /* <Col lg={3}>
<div className={`${styles["usp-mob"]} d-flex`}>
  <div>
    <Image
      src="/images/usp1.png"
      alt="usp1"
      width="80"
      height="80"
    />
  </div>
  <div className="mt-3 ms-3">
    <h5>
      <strong>
        20000+
        <br /> Softwares
      </strong>
    </h5>
  </div>
</div>
</Col>

<Col lg={3}>
<div className={`${styles["usp-mob"]} d-flex`}>
  <div>
    <Image
      src="/images/usp2.png"
      alt="usp2"
      width="80"
      height="80"
    />
  </div>
  <div className="mt-3 ms-3">
    <h5>
      <strong>
        Best Price
        <br /> Guranteed
      </strong>
    </h5>
  </div>
</div>
</Col>

<Col lg={3}>
<div className={`${styles["usp-mob"]} d-flex`}>
  <div>
    <Image
      src="/images/usp3.png"
      alt="usp3"
      width="80"
      height="80"
    />
  </div>
  <div className="mt-3 ms-3">
    <h5>
      <strong>
        Free Expert
        <br /> Consultation
      </strong>
    </h5>
  </div>
</div>
</Col>

<Col lg={3}>
<div className={`${styles["usp-mob"]} d-flex`}>
  <div>
    <Image
      src="/images/usp4.png"
      alt="usp4"
      width="80"
      height="80"
    />
  </div>
  <div className="mt-3 ms-3">
    <h5>
      <strong>
        20 Lacs+
        <br /> Happy Customers
      </strong>
    </h5>
  </div>
</div>
</Col> */
}

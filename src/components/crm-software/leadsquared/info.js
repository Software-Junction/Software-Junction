import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Info = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is LeadSquared ?</h3>
            <p>
              LeadSquared revolutionizes the landscape of sales and CRM with its
              dynamic platform, providing a game-changing approach to
              high-velocity sales operations. With a focus on eliminating lead
              leakage, manual work, and accelerating speed-to-lead, LeadSquared
              has become the driving force behind the success stories of 2000+
              companies worldwide. From empowering higher education institutions
              with a one-stop admission management solution to enabling
              tech-first learning businesses with EdTech CRM, LeadSquared's
              industry-specific solutions cater to diverse needs. This
              platform's proven track record, coupled with endorsements from
              industry leaders like Byju's and Amazon Pay, underscores its
              commitment to ushering in a new era of sales efficiency and
              productivity.
            </p>
            <div
              className={`${styles["priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
            >
              <h5>Pricing Plans :</h5>
              <p>
                <Link href="#idpricing">View Detailed pricing</Link>
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <Image
              src="/images/astralss.png"
              alt="astralss"
              height="10"
              width="600"
              className={styles["info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;

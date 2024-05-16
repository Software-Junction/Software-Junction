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
            <h3>What is Solid Performers CRM ?</h3>
            <p>
              Solid Performers CRM is your ultimate solution to stop losing lead
              conversions. With the ongoing Black Friday & Cyber Monday Sale,
              seize the opportunity to pay for a 1-year subscription and enjoy a
              2-year validity or opt for a 2-year subscription with an extended
              5-year validity. Experience zero setup, training, and AMC costs.
              Achieve a 4.9/5-star rating with industry leaders, automating your
              sales process seamlessly, from lead collection and allocation to
              automated follow-ups, ensuring zero missed opportunities. Choose
              Solid Performers CRM for highly affordable sales automation,
              efficient team management, and an all-in-one platform to boost
              your sales productivity.
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

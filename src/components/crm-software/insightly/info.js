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
            <h3>What is Insightly ?</h3>
            <p>
              Welcome to Insightly, your gateway to a transformative CRM
              experience. Discover the perfect blend of power, flexibility, and
              affordability as you elevate your business to new heights. Whether
              streamlining sales processes, orchestrating personalized marketing
              campaigns, or exceeding customer service expectations, Insightly
              is your trusted partner. With seamless integration through
              AppConnect, we ensure your connection to the tools you already
              love. Join a community of satisfied users who consistently rate
              Insightly as a leader in the CRM landscape. Experience innovation,
              efficiency, and growth – welcome to the future of CRM.
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

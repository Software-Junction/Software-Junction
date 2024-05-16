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
            <h3>What is AnywhereCommerce ?</h3>
            <p>
              AnywhereCommerce offers a suite of solutions for seamless mobile
              payment transactions at the point of service. As pioneers in
              mobile payments, their expertise spans over 20 million card
              readers sold globally since 2006. The AnyPay™ developer tool
              empowers businesses to payment-enable any application across
              platforms and languages, providing faster EMV setup with
              industry-leading mPOS technology. With connectivity for any
              device, transaction, and destination, AnywhereCommerce ensures a
              versatile and credible mobile payment experience, catering to
              enterprises, MSPs/Acquirers, and developers worldwide.
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

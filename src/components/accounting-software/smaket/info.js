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
            <h3>What is Smaket ?</h3>
            <p>
              Discover Smaket, the revolutionary cloud-based solution that
              simplifies accounting and billing processes. With Smaket, you can
              say goodbye to complexities and focus on business growth, all
              without needing prior accounting knowledge. Access your business
              data from any device, anywhere, and ensure data security through
              cutting-edge measures and auto backup. From GST compliance to
              inventory tracking, Smaket has your accounting needs covered.
              Embrace the future of accounting and propel your business to
              success with Smaket!
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

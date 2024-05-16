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
            <h3>What is SparkTG ?</h3>
            <p>
              SparkTG is a cloud telephony solution providing top-notch IVR
              services, seamless call management, and real-time analytics. With
              features like custom IVR, blended calling, and real-time call
              monitoring, it empowers businesses to enhance customer experience
              and boost efficiency. Its 24/7 support ensures uninterrupted
              service, while its user-friendly interfaces and secure protocols
              guarantee reliability and trustworthiness.
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

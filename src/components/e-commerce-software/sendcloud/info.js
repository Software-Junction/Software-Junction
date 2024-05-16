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
            <h3>What is Sendcloud ?</h3>
            <p>
              Sendcloud is Europe's leading shipping software designed to
              streamline and enhance the e-commerce shipping experience. Trusted
              by over 23,000 businesses, it offers a comprehensive suite of
              tools, including shipping automation, customizable returns
              portals, and a seamless checkout process. With access to 100+
              carriers and 50+ integrations, Sendcloud simplifies order
              processing, label printing, and tracking, ultimately enabling
              businesses to ship smarter, reduce errors, and provide a
              delightful customer journey. Its powerful APIs seamlessly
              integrate into various systems, offering core shipping
              functionalities with minimal engineering effort. From automating
              tasks to expanding global reach, Sendcloud empowers businesses to
              grow efficiently and elevate their shipping strategies.
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

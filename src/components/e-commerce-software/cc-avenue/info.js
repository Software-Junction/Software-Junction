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
            <h3>What is CCAvenue ?</h3>
            <p>
              CCAvenue is an all-encompassing e-commerce solution that empowers
              businesses to effortlessly create and manage online stores.
              Seamlessly integrated with India's premier payment gateway, it
              enables global transactions in 27 currencies, offering a
              frictionless checkout experience. With cutting-edge marketing and
              analytical tools, users can elevate sales efforts, gain insights
              into performance, and maximize business potential. The software
              facilitates social network selling, invoice payments via
              email/SMS, and secure phone transactions. CCAvenue's mobile app
              ensures real-time business management, supported by a dedicated
              team available 24/7 for comprehensive assistance, making it a
              go-to choice for successful online ventures.
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

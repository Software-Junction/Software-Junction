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
            <h3>What is StoreHippo ?</h3>
            <p>
              StoreHippo is a leading enterprise ecommerce platform that
              empowers brands globally, catering to diverse B2B and B2C business
              models across 40+ industries. With a robust set of features, it
              enables businesses to create tailored solutions for their unique
              needs, supporting both local and international markets. The
              platform's mobile-first architecture ensures a seamless buying
              experience on Android and iOS apps, with zero additional costs.
              Boasting rapid performance, MACH architecture for scalability, and
              top-notch security, StoreHippo is the go-to solution for
              businesses looking to thrive in the competitive ecommerce
              landscape.
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

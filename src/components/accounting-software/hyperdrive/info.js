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
            <h3>What is HDPOS ?</h3>
            <p>
              HyperDrive Solutions' POS Billing Software! This cutting-edge
              solution revolutionizes point-of-sale management, offering
              seamless and efficient transaction processing. With user-friendly
              interfaces and robust features, this software streamlines your
              business operations, from inventory management to sales tracking.
              Enjoy real-time insights and customizable reports to optimize your
              business. Say goodbye to manual calculations and hello to a
              faster, more accurate, and customer-centric checkout experience
              with HyperDrive Solutions' POS Billing Software.
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

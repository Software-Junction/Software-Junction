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
            <h3>What is Primaseller ?</h3>
            <p>
              Primaseller is a multichannel retail solution that seamlessly
              integrates inventory and sales management across various online
              and physical sales channels. Tailored for Retail 3.0, it empowers
              businesses to adapt to changing retail landscapes by offering a
              robust feature set. From synchronized stock and automated
              replenishment to warehouse management and omnichannel integration,
              Primaseller streamlines operations for growth. Its user-friendly
              interface ensures easy setup within minutes, allowing users to
              manage inventory, process orders, and synchronize sales
              effortlessly across platforms. Trusted by businesses globally,
              Primaseller provides a unified solution for efficient retail
              management in the modern era.
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

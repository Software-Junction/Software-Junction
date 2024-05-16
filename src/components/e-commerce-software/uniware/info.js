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
            <h3>What is Uniware ?</h3>
            <p>
              Uniware E-commerce Technology Enablement Platform is a cloud-based
              solution that streamlines and automates the supply chain for
              businesses globally. Trusted by over 20,000 businesses,
              Unicommerce offers a comprehensive suite of solutions, including
              Warehouse Management, Order Management, Inventory Management, and
              Omnichannel Retailing. With a focus on D2C brands, the platform
              provides batch management for efficient fulfillment, seamless B2B
              and B2C order management, and advanced features like future-ready
              returns. Boasting 200+ plug-and-play integrations, cutting-edge
              technologies, and industry recognition, Unicommerce is a leading
              choice for e-commerce businesses seeking to maximize productivity
              and profitability.
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

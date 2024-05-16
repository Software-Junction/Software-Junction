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
            <h3>What is Retail Pro ?</h3>
            <p>
              Retail Pro is a software designed to optimize business operations
              globally. With over 35 years of innovation, Retail Pro offers rich
              functionality, multi-national capabilities, and unparalleled
              flexibility. This powerful solution provides deep store management
              functionality, customizable platform POS software, and centralized
              and localized global support for all channels and devices. With
              features such as powerful POS and retail management, end-to-end
              integration, and a subscription pricing model, Retail Pro empowers
              businesses to build data-driven operations, ensuring a seamless
              and efficient retail experience. Trusted by retailers in 130+
              countries, Retail Pro is a leader in omni-channel strategy,
              facilitating customer engagement and capitalizing on retail
              trends.
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

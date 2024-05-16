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
            <h3>What is CaptainBiz ?</h3>
            <p>
              CaptainBiz is a GST billing software designed for small businesses
              in India, offering seamless invoicing, inventory management, and
              accounting solutions. Trusted by over 46,000 SMBs nationwide and
              recommended by the GST Network, it ensures timely payments, cost
              control, and smooth business growth. With industry-specific
              invoice templates, real-time inventory tracking, and secure
              operations accessible from anywhere, CaptainBiz caters to
              manufacturers, traders, and service providers. Choose from
              flexible pricing plans, starting with a 14-day free trial, to
              experience the power of this online business management solution.
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

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
            <h3>What is San Pharmacy Billing ?</h3>
            <p>
              San Software offers a Medical Shop Billing Software designed for
              small to large retail and wholesale medical shops. Packed with
              features such as barcode support, cash drawer and thermal printer
              compatibility, Tally integration, SMS capabilities, accurate
              inventory management, and loyalty programs, this software ensures
              efficient operations. With benefits like multiple billing
              counters, customizable reports, and both online and offline POS
              options, San Software provides an excellent customer support
              experience, works seamlessly on mobile and tablets, integrates
              with mobile apps and e-commerce platforms, and even offers a free
              Android mobile app for your store.
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

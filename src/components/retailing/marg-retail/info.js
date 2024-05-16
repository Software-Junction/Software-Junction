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
            <h3>What is Marg Retail Software ?</h3>
            <p>
              Marg Retail Software is an integrated solution designed for retail
              businesses, offering centralized management of billing,
              accounting, and inventory. With features like fast billing, GST
              readiness, connected banking, and touch screen POS, it empowers
              businesses to enhance efficiency by 40%. Handling 20 billion+
              invoices and 100 billion+ transactions annually, it caters to 1
              million+ businesses worldwide. The software excels in inventory
              and expiry management, barcode systems, and offers
              discounts/schemes to boost sales. It also facilitates home
              delivery, re-order management, and online purchase imports,
              providing a comprehensive solution for retailers to streamline
              operations and increase profits by 20% or more.
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

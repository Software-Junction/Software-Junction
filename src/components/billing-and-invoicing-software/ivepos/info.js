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
            <h3>What is IVEPOS ?</h3>
            <p>
              IVEPOS is a POS (point-of-sale) software designed for small and
              medium-scale businesses, offering a full-stack super app to
              streamline billing, payments, accounting, inventory, customer
              management, and loyalty programs. With over 100 features and a
              user-friendly interface, IVEPOS caters to restaurants, retail
              stores, cafes, bars, bakeries, salons, food trucks, and more. Its
              cloud-based system provides real-time tracking of sales and
              inventory, employee management, and sales analytics, making it an
              essential tool to enhance operational efficiency and boost
              revenue. Trusted by over 30,000 businesses across 70 cities,
              IVEPOS stands out for its one-click billing, payment acceptance,
              and comprehensive business management solutions.
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

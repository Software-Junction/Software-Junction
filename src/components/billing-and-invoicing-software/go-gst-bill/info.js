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
            <h3>What is Go GST Bill ?</h3>
            <p>
              Go GST Bill – India's leading free GST billing software designed
              for every business. Trusted by over 70,000 SMEs, this lifetime
              free solution offers a secure and efficient platform for seamless
              invoicing, inventory management, and business control. With
              features like 1-click E-Way Bill, easy sharing of invoices via
              WhatsApp and email, and a user-friendly mobile app, Go GST Bill
              simplifies your daily billing activities. Enjoy the convenience of
              quick invoicing, anytime access on any device, and responsive
              customer support. Elevate your business with Go GST Bill – where
              simplicity meets reliability.
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

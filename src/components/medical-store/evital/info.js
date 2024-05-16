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
            <h3>What is eVitalRx ?</h3>
            <p>
              eVitalRx is a reliable pharmacy management software designed for
              the Indian market. Packed with features, it offers seamless
              medical billing, inventory management, and ERP solutions for
              pharmacies of all sizes, including retail, large chains, generic
              stores, and clinical setups. With a user-friendly interface
              accessible on both desktop and mobile devices, eVitalRx ensures
              unlimited multi-device logins, WhatsApp integration, and real-time
              stock monitoring. Its cloud-based technology guarantees data
              safety, and transparent pricing starting at just ₹10/day makes it
              an affordable choice for pharmacies looking to enhance efficiency,
              streamline operations, and stay competitive in the evolving
              healthcare landscape.
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

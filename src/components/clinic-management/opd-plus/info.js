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
            <h3>What is OPD PLUS Management Software ?</h3>
            <p>
              OPD PLUS Management Software is an all-encompassing solution
              tailored for efficient hospital management, emphasizing seamless
              patient registration, appointment scheduling, and automated
              digital prescription creation. The software facilitates a
              user-friendly front desk, ensuring real-time patient registration
              and streamlined operations for multiple doctors and departments.
              With customizable plans for individual practices, clinics with
              multiple doctors, and large healthcare organizations, it offers
              versatile options. Supported by 24/7 assistance on the Microsoft
              Azure platform, it ensures global accessibility, making it a
              flexible and environmentally conscious choice for optimizing
              medical practices.
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

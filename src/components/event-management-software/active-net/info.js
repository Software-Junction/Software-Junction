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
            <h3>What is ACTIVE Net ?</h3>
            <p>
              ACTIVE Net is a recreation management software designed to
              streamline the operations of parks, recreation departments, and
              similar organizations. It offers a unified solution for managing
              classes, facilities, memberships, camps, and more, eliminating the
              need for multiple systems. The software facilitates online
              registration, membership management, facility scheduling, and
              other essential functions. With features like point of sale, child
              care management, league management, and robust reporting
              capabilities, ACTIVE Net aims to enhance efficiency, customer
              experience, and overall organizational productivity. It caters to
              various sectors, including non-profits, parks and recreation,
              YMCA's, campus recreation, and government entities, providing a
              user-friendly platform accessible via computers and mobile
              devices.
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

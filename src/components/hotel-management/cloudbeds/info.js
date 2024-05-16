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
            <h3>What is Cloudbeds ?</h3>
            <p>
              Cloudbeds is a leading Hospitality Management System, offering a
              unified platform that empowers property owners to efficiently
              manage and grow their lodging businesses. Trusted by thousands of
              independent properties worldwide, Cloudbeds provides a
              comprehensive solution, seamlessly integrating Property
              Management, Channel Management, and Booking Engine
              functionalities. The platform enhances operational efficiency,
              simplifies reservations and distribution, and elevates guest
              experiences. With a focus on flexibility, Cloudbeds offers an
              Integrations Marketplace and an Open API, allowing users to
              connect with specialized apps and customize solutions. Backed by a
              dedicated support team, Cloudbeds is the go-to partner for
              hospitality success, as recognized by industry ratings and
              customer reviews.
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

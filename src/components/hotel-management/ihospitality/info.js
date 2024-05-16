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
            <h3>What is iHospitality ?</h3>
            <p>
              iHospitality by IBS Software is a transformative sales and
              distribution platform for the hospitality industry. It seamlessly
              connects suppliers, distribution partners, and users, ensuring the
              right product reaches the right guest at the right price and
              timing. This intelligent suite of precision distribution and sales
              products maximizes sales, increases guest engagement, and
              simplifies operational complexity for hotels. With a focus on
              creating a frictionless guest shopping and booking experience,
              iHospitality propels hotels into the digital era, driving revenue
              opportunities and enhancing operational efficiency in the evolving
              landscape of hospitality
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

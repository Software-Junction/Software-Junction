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
            <h3>What is Domo ?</h3>
            <p>
              Domo is a data platform designed to empower organizations to
              harness the power of their data. Through intuitive business
              intelligence and analytics, seamless data integration, and robust
              app creation tools, Domo enables users to make informed decisions
              quickly. With a focus on trust and security, Domo's data
              foundation ensures reliable and efficient data management. Trusted
              by businesses across various industries, Domo fosters a culture of
              data-driven decision-making, driving transformative actions and
              multiplying impact.
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

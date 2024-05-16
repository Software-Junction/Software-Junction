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
            <h3>What is WebFOCUS ?</h3>
            <p>
              WebFOCUS by ibi is a analytics platform that empowers
              organizations to harness the power of their data for informed
              decision-making. With seamless cloud integration and AI-driven
              insights, WebFOCUS offers highly scalable, self-service analytics
              accessible to users across roles. Its pixel-perfect reporting,
              embedded analytics, and location intelligence capabilities enable
              businesses to create custom applications and gain actionable
              insights. Whether through Natural Language Queries or predictive
              analytics, WebFOCUS facilitates data-driven decisions with ease
              and efficiency. With features like ReportCaster and native cloud
              support, it ensures efficient data distribution and scalability,
              making it an essential tool for modern enterprises.
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

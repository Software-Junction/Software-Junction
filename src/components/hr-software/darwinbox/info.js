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
            <h3>What is Darwinbox ?</h3>
            <p>
              Darwinbox is an innovative Human Capital Management (HCM)
              platform, recognized as the Fastest Growing and Best Rated in
              Gartner Magic Quadrant 2023 for Cloud HCM in enterprises with
              1000+ employees. With a robust suite of products covering Core HR,
              Time & Attendance, Payroll, and more, Darwinbox unifies the entire
              employee lifecycle on a single platform. Trusted by 850+
              enterprises in 116+ countries, it boasts 2.2 million+ users. The
              platform empowers HR professionals with real-time insights,
              mobile-first HRMS capabilities, and interactive demos, making it a
              pivotal tool in fostering employee engagement, streamlining
              processes, and achieving organizational goals.
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

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
            <h3>What is NetSuite OpenAir ?</h3>
            <p>
              NetSuite OpenAir is a robust cloud-based project management
              solution designed to streamline the entire project lifecycle for
              professional services firms. With real-time visibility and
              accessibility, it replaces spreadsheet reliance and disconnected
              systems, offering tools for project planning, tracking, and
              resource management. The software optimizes resource deployment,
              improves project profitability through analytics, ensures accurate
              financials, promotes better collaboration, and enables mobile
              access. OpenAir addresses challenges like reactive resourcing,
              consolidates project and billing solutions, enhances visibility
              into project profitability, and automates time and expense
              tracking. It provides a comprehensive solution for project-based
              businesses, facilitating efficient operations and profitability.
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

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
            <h3>What is Agworld ?</h3>
            <p>
              Agworld Farm Management Software is a farm information management
              ecosystem designed for growers, agronomists, retailers, and
              service providers. This data management solution facilitates
              collaboration by enabling stakeholders to work together seamlessly
              on the same set of farm data, ensuring efficient farm planning,
              budgeting, product input tracking, job management, compliance,
              agronomy, logistics, and grower services. With a cloud-based
              system, Agworld allows easy access and sharing of farm data,
              promoting real-time updates and reducing errors. Offering a 7-day
              trial, Agworld boasts a decade of commitment, stability, and a
              global presence, empowering users with insightful, actionable data
              for informed decision-making in agriculture.
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

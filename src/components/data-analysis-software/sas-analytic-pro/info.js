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
            <h3>What is SAS Analytics Pro ?</h3>
            <p>
              SAS Analytics Pro is a software package designed for data
              scientists, offering powerful capabilities for accessing,
              manipulating, analyzing, and presenting information. With
              intuitive features and advanced statistical techniques, it
              provides a unified solution for data analysis and reporting needs.
              Its integrated environment, including Base SAS, SAS/STAT, and
              SAS/GRAPH, ensures consistency and efficiency across enterprises.
              Moreover, SAS Analytics Pro facilitates easy data integration,
              compliance adherence, and creation of visually compelling reports,
              making it a versatile tool for organizations seeking actionable
              insights from their data.
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

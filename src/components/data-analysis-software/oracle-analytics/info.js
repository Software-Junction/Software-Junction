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
            <h3>What is Oracle Analytics ?</h3>
            <p>
              Oracle Analytics is a cloud-native service designed to streamline
              the entire analytics process, from data ingestion and modeling to
              visualization and collaboration. With embedded machine learning
              and natural language processing, it fosters an analytics-driven
              culture within organizations. Offering flexible deployment options
              and support for various data sources, it enables users to build
              compelling visual stories, unify data for analysis, and leverage
              built-in data preparation and enrichment functionalities. Oracle
              Analytics empowers users to uncover insights, make informed
              decisions, and drive business growth through actionable
              information, all while ensuring security, governance, and
              scalability.
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

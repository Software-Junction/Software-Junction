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
            <h3>What is Stata ?</h3>
            <p>
              Stata is statistical software designed for data science, offering
              a broad suite of features for mastering data analysis. With
              publication-quality graphics and automated reporting, it ensures
              truly reproducible research. Boasting Python integration and
              advanced programming capabilities, Stata is trusted by researchers
              worldwide for its ease of use, extensive documentation, and
              world-class technical support. It's a versatile tool that's easy
              to grow with, automate, and extend, making it an invaluable asset
              across various disciplines for generating insights and making a
              difference in research and decision-making.
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

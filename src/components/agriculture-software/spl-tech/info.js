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
            <h3>What is SPL Technologies ?</h3>
            <p>
              SPL Technologies' Scanalyzer suite is an advanced agricultural
              technology solution designed for precision farming. The software
              integrates tools like Scanalyzer 3D, Scanalyzer HTS, Scanalyzer
              PL, and Scanalyzer Field, offering plant phenotyping, water
              management, information management, crop sensing, yield
              monitoring, and guidance systems. Developed by SPL Technologies
              Pvt. Ltd., this innovative software optimizes farming processes,
              enhances productivity, and contributes to resource conservation,
              revolutionizing the agriculture sector with cutting-edge
              technology.
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

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
            <h3>What is Medixcel ?</h3>
            <p>
              Medixcel harmonizing Electronic Medical Records (EMR), Practice
              Management, and Patient Engagement. Unleash a comprehensive
              toolset that empowers healthcare professionals to efficiently
              manage medical records, streamline practice operations, and
              elevate patient interaction. This robust platform, powered by
              advanced technology, ensures a user-friendly experience while
              optimizing workflows in medical practices. Explore the myriad
              features offered to enhance overall efficiency and patient
              engagement.
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

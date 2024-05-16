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
            <h3>What is Healcon Practice ?</h3>
            <p>
              Healcon Practice is an all-in-one cloud-based medical software
              designed for doctors to efficiently manage clinic workflows.
              Offering features such as Practice Management, Electronic Medical
              Records (EMR), e-Prescription, Appointment Scheduling, Medical
              Billing, and more, it seamlessly integrates and automates various
              aspects of healthcare operations. With an emphasis on improved
              patient care, reduced no-shows, and streamlined front-office
              processes, Healcon Practice ensures a paperless and secure
              environment. Its industry-leading security features, including
              HIPAA-compliant data centers and multi-geography backups, make it
              a reliable choice for healthcare professionals globally.
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

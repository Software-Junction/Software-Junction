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
            <h3>What is The iHMS (Hospital Management System) ?</h3>
            <p>
              The iHMS (Hospital Management System) by ACGIL is a advanced
              software designed for efficient management of hospitals, clinics,
              diagnostic centers, and nursing homes. It offers a patient-centric
              approach, handling various cases such as outpatients, emergencies,
              and inpatients. With a fully configured web-based solution, it
              provides mobile-friendly features for quick decision-making and
              control over hospital processes. Key features include multi-user
              account support, responsive interface, regular updates,
              Codeigniter framework, and extensive functionalities like
              appointment management, medical reports, and medication history.
              It minimizes manpower, ensures instant information retrieval, and
              facilitates online appointment scheduling and payment processing.
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

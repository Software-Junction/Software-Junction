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
            <h3>What is Bahmni ?</h3>
            <p>
              Bahmni is a Electronic Medical Records (EMR) and hospital system
              designed for low-resource settings. It seamlessly integrates open
              source solutions like OpenMRS for patient management, OpenERP for
              inventory and billing, OpenELIS for laboratory management, and
              DICOM/PACS for diagnostic imaging. With an intuitive design, it
              enhances the efficiency and quality of patient care by providing
              accessible clinical, diagnostic, and management information.
              Bahmni is a modular, flexible, and infrastructure-appropriate
              solution, adaptable to various devices, allowing healthcare
              providers to improve decision-making in diverse healthcare
              environments globally.
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

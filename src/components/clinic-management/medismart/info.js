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
            <h3>What is Medismart ?</h3>
            <p>
              Medismarts EMR is an innovative Electronic Medical Record system
              designed to enhance healthcare delivery. Seamlessly integrating
              clinical, administrative, and billing functions, it empowers
              healthcare providers to schedule and manage procedures
              efficiently, code diagnoses globally, automate workflows, generate
              reports, and streamline billing processes. Trusted by
              forward-thinking HMOs and providers, Medismarts EMR ensures
              real-time updates, easy integration with accounting software, and
              multiple payment options for patients. As a leading Med-Tech
              brand, Medismarts is committed to leveraging technology and data
              to create viable healthcare solutions, addressing both obvious and
              hidden challenges within the healthcare sector.
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

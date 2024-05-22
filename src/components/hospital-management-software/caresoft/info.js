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
            <h3>What is Caresoft ?</h3>
            <p>
              Caresoft is a healthcare management software offering solutions
              for hospitals, clinics, and diagnostic centers. With a focus on
              optimizing workflows, the software enhances patient care, resource
              management, and financial operations. Caresoft's Hospital
              Information System (HIS) provides a centralized, secure platform
              for automating clinical, financial, and administrative processes.
              The system includes Practice Management and Laboratory Information
              Systems, catering to diverse healthcare needs. With over 15 years
              of domain expertise, Caresoft ensures value for money solutions,
              global adaptability, and a commitment to building a digital
              healthcare ecosystem.
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

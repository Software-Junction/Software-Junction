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
            <h3>What is ACE Health Solutions ?</h3>
            <p>
              ACE Health Solutions offers a comprehensive Practice Management
              software designed for healthcare providers and small hospitals.
              This robust solution covers key areas such as credentialing,
              operations re-design for compliance, patient volume increase
              through strategic marketing, provider recruiting with resume
              screening assistance, and thorough compliance measures including
              HIPAA and OSHA training. The software conducts organizational
              assessments, providing a complimentary 1-hour evaluation and
              in-depth analysis to define goals, create strategic plans, assess
              technology needs, and ensure adherence to industry regulations.
              Utilizing LEAN, Six Sigma Principles, and Quality Improvement
              Principles, ACE Health Solutions delivers effective and tailored
              solutions with industry best practices.
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

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
            <h3>What is PulseHRM ?</h3>
            <p>
              PulseHRM is an integrated Human Resource Management platform
              offering a range of solutions to streamline HR processes. From
              Payroll and Recruitment & Talent Management to Project Management,
              Biometric Integration, and Performance Management, it covers the
              entire employee lifecycle. With features like paperless
              onboarding, centralized HRIS, and a mobile app, PulseHRM ensures
              efficient workforce management. The platform also includes modules
              for Employee Monitoring, Leave Management, and Self Service,
              providing a comprehensive and user-friendly solution. PulseHRM's
              focus on productivity, statutory compliance, and engagement makes
              it an essential tool for building and managing a connected
              workforce.
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

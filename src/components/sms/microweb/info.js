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
            <h3>What is Microweb Solutions ?</h3>
            <p>
              Microweb Solutions presents a state-of-the-art School Management
              System, utilizing cutting-edge technology to deliver a
              user-friendly, based software for modern schools. This ERP
              solution streamlines school administration with customizable
              modules for daily remarks, parent-teacher meetings, document and
              payroll management, admissions, communication, examinations, and
              more. Offering dedicated support and custom dashboards, Microweb
              Solutions ensures easy accessibility, automation, data security,
              and quick setup without the need for an IT team. Integrated with
              various features such as biometric machines, GPS tracking, online
              payments, and a mobile app, it stands as India's most trusted
              platform for efficient school management, saving time, resources,
              and reducing workload.
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

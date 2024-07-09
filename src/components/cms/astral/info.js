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
            <h3>What is Astral Technologies ?</h3>
            <p>
              Astral Technologies' School Management System is a robust
              cross-functional enterprise solution tailored for educational
              institutes. With modules like Management Dashboard, Student MIS,
              and Payroll Management, this web-based and cloud-deployed
              application streamlines processes such as fees collection,
              admission processing, and inventory management. Providing
              real-time access from anywhere, it enhances administrative
              efficiency, eliminates data redundancy, and lowers operational
              costs. The system's secure platform ensures a comprehensive view
              for higher management, facilitating informed decision-making and
              fostering a streamlined educational environment.
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

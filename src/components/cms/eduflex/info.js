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
            <h3>What is Eduflex ?</h3>
            <p>
              Eduflex stands as the ultimate Education ERP, automating your
              entire campus seamlessly. This software simplifies student
              assessment, provides a reliable Parent/Student Portal for updates
              on attendance and progress, and enables online tracking of
              transport through a user-friendly mobile application. With a
              'Service Oriented Approach,' Eduflex ensures swift access to
              synchronized data, speeding up tasks across educational
              institutions. Offering modules for admissions, registration,
              billing, financial aid, and more, Eduflex is the comprehensive
              solution for schools, colleges, and universities striving to do
              more with less in today's competitive and budget-constrained
              educational landscape.
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

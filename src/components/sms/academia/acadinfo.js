import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Acadinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Academia ?</h3>
            <p>
              Academia, developed by Serosoft Solutions, is a state-of-the-art
              School Management System designed to streamline K12 educational
              processes. Offering a 3-way advantage, it serves as a K12 Student
              Information System, School Management System, and resource
              planner. With a focus on automation, it reduces human intervention
              by 10X across operations like admissions, attendance,
              examinations, and student management. The system enhances the
              parent experience through seamless communication, real-time
              student performance reports, and dedicated portals. Academia SMS
              ensures standardized processes, cost reduction, and ease of
              integration with other applications for a cohesive educational
              experience.
            </p>
            <div
              className={`${styles["aca-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["aca-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Acadinfo;

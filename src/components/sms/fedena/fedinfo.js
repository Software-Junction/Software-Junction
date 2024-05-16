import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Fedinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Fedena ?</h3>
            <p>
              Fedena is an All-In-One College and School Management Software,
              serving 40,000+ schools and colleges across 200+ countries in 20+
              languages. This multipurpose system automates daily operations,
              generates insightful reports, and facilitates better
              decision-making for stakeholders. With 100+ modules, including
              Exam & Gradebook, Admission Tracking, Timetable & Attendance, Fees
              Management, and Online Classes integration, Fedena is tailored for
              various education boards. Its user-friendly design ensures
              simplicity for teachers, while powerful features cater to all
              institutional needs. With dedicated mobile apps and up to 20
              integrations, Fedena is a preferred choice, lauded for its
              efficiency by institutes like Vidya Vikas Academy.
            </p>
            <div
              className={`${styles["fed-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["fed-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Fedinfo;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Knotinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is SchoolKnot ?</h3>
            <p>
              Schoolknot is a School Automation and Analytics platform utilized
              by numerous schools to enhance efficiency in managing
              registrations, curriculum schedules, events, attendance, and
              homework. This centralized, user-friendly software ensures
              seamless communication between parents, students, teachers, and
              school faculty through smart notifications. Its robust features
              include admissions management, finance tracking, multi-branch
              administration, library management, exam result handling, and
              school bus tracking. With customized mobile applications for
              school branding, paperless event and holiday sharing, and secure
              data handling, Schoolknot stands as India's most preferred
              mobile-friendly solution for comprehensive school management.
            </p>
            <div
              className={`${styles["knt-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["knt-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Knotinfo;

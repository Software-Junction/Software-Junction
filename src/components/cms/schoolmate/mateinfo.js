import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Mateinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is SchoolMate ?</h3>
            <p>
              SchoolMate is an advanced language school management system that
              simplifies tasks for administrators, teachers, and students. With
              modules covering administration, academics, finance, registration,
              study drive, CRM, resources, reports, surveys, and online bank
              feeds, it efficiently manages schedules, invoicing, and materials.
              Boasting features like multilingual support, online lesson
              integration, and mobile apps, SchoolMate promotes seamless
              communication. Its user-friendly design enhances productivity,
              fosters teacher-student interactions, and facilitates data-driven
              decision-making through robust reporting tools.
            </p>
            <div
              className={`${styles["mat-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["mat-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mateinfo;

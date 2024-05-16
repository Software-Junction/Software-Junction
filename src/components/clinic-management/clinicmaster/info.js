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
            <h3>What is Clinicmaster ?</h3>
            <p>
              Clinicmaster is a practice management platform designed to
              streamline operations for healthcare clinics. Offering specialized
              solutions for Rehabilitation and Therapy Clinics, Health and
              Wellness Clinics, Medical Specialties, and more, Clinicmaster
              empowers clinics with features like intuitive scheduling,
              efficient billing, digital charting, dynamic marketing, and
              data-driven analytics. The software ensures patient engagement
              through portals, secure communication, and personalized care
              plans. With a focus on user roles, Clinicmaster caters to owners,
              administrators, clinicians, receptionists, and patients, fostering
              seamless connectivity across devices. Privacy is prioritized with
              encrypted data storage on Microsoft Azure servers, making
              Clinicmaster a secure and efficient choice for clinics aiming for
              growth and excellence in patient care.
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

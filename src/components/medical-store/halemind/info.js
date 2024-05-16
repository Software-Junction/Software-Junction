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
            <h3>What is Halemind ?</h3>
            <p>
              Halemind is a Electronic Medical Records (EMR) and Hospital
              Management System (HMS) designed to elevate independent practices
              and hospitals. With advanced, secure, and specialty-driven EHR
              technology, it simplifies operations for private practices,
              hospitals, pharmacies, and labs. Halemind empowers healthcare
              professionals with evidence-based care, intuitive patient behavior
              tracking, and streamlined scheduling through a smart calendar. The
              platform offers a single-dashboard solution for administrators,
              encompassing connected records, billing, digital prescriptions,
              patient portals, and more. Beyond mere management, Halemind
              creates a connected healthcare platform, endorsed by satisfied
              users like Ophthalmologist Dr. Madhavi and Homeopathic Consultant
              Dr. Sandeep Selvinus, making it a comprehensive and user-friendly
              solution for modern healthcare needs.
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

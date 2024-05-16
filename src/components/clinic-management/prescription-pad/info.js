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
            <h3>What is Prescription Pad ?</h3>
            <p>
              Prescription Pad is a user-friendly medical software designed for
              doctors in India. Developed by Dr. Anil Vij, Chairman, and Medical
              Director, this software streamlines prescription writing with
              features such as offline prescription storage, duplicate medical
              certificates, readymade prescription templates, and day-to-day
              activity tracking. It ensures safe and error-free prescriptions,
              offering value-added services like educational handouts,
              appointment management, and health calculators. The software also
              incorporates a trusted pharmacopeia with information on 70,000
              Indian, British, and American drug brands, making it a
              time-efficient solution for doctors to organize patient data,
              enhance clinical decision-making, and save valuable time.
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

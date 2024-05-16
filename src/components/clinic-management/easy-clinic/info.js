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
            <h3>What is Easy Clinic ?</h3>
            <p>
              Easy Clinic is a premier EMR and Clinic Management Software
              designed by and for doctors, offering a seamless solution for
              individual practitioners or multi-user clinics. With over 10 years
              of experience, it boasts a user-friendly interface, empowering
              healthcare professionals to go paperless, streamline practice
              management, handle billing, conduct virtual consultations, and
              generate insightful reports. Customizable to diverse workflows,
              Easy Clinic ensures flexibility while prioritizing robust security
              with bank-level data protection. It stands out with outstanding
              customer service, real-time support, and a commitment to data
              privacy. Trusted by 5000+ doctors in 200+ cities worldwide, it's a
              powerful, secure, and growth-oriented choice for clinics of all
              sizes.
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

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
            <h3>What is Visual InfoSoft Pvt. Ltd ?</h3>
            <p>
              Visual InfoSoft Pvt. Ltd. offers a comprehensive suite of
              healthcare solutions developed since 1996, comprising 17+
              specialized software products for various medical disciplines.
              Their range includes Doctor/Clinic Software, Hospital Management
              System, Diagnostic Software, Pharmacy Software, and Billing
              Software, addressing the unique needs of Ophthalmologists, ENT
              specialists, Psychologists, Gynecologists, Physicians, Surgeons,
              Dermatologists, Pediatricians, Dentists, and more. With a
              commitment to simplicity and efficacy, Visual InfoSoft's products
              streamline administrative tasks, providing powerful interfaces for
              seamless patient-doctor-pharmacy-diagnostic connectivity. The
              software is continually upgraded based on customer feedback,
              ensuring optimal performance in the ever-evolving healthcare
              landscape.
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

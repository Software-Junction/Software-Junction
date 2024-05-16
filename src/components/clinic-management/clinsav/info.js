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
            <h3>What is ClinSav ?</h3>
            <p>
              ClinSav, "My Clinic in My Pocket," is a clinic management solution
              offering healthcare professionals complete control over patient
              data. It simplifies operations by digitizing patient information,
              providing real-time appointment tracking, and enabling flexible
              case paper management. The software facilitates seamless
              collaboration with staff through instant syncing and intercom
              communication. ClinSav automates financial tracking, prescription
              management, and supports the management of multiple clinics.
              Equipped with smart and voice assist features, ClinSav ensures an
              optimized clinic experience, making it an essential tool for
              healthcare practitioners.
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

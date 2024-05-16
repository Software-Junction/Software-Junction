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
            <h3>What is KareXpert's EMR/EHR Software ?</h3>
            <p>
              KareXpert's EMR/EHR Software is a solution designed to optimize
              healthcare operations. It digitizes patient records, allowing for
              efficient management of medical reports, prescriptions, and
              diagnostic data. The platform features hyper-coordinated
              workflows, medication and clinical order management, and a
              paperless hospital system, reducing administrative burdens.
              Specialized templates cater to diverse medical specialties,
              ensuring quick processing of patient data. With secure information
              handling and cost-effective solutions, KareXpert facilitates a
              seamless transition to digital healthcare, promoting improved
              patient care and streamlined workflows for healthcare providers.
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

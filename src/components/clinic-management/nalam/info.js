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
            <h3>What is Nalam ?</h3>
            <p>
              Nalam+ by Nalam Healthcare IT Solutions is a multi-speciality
              hospital management software, offering features such as patient
              record maintenance, digital health ID with Medlocqr, NABH
              accreditation support, and innovative solutions like Nalam Lite
              for efficient computing. The software caters to Clinical
              Establishment Rules 2018, ensuring meticulous maintenance of
              medical records and patient databases. Nalam+ stands out for its
              networking support, connecting machines to streamline data
              sharing, and is backed by proactive support services, embodying
              the principle "Prevention is better than Cure" even in the realm
              of software.
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

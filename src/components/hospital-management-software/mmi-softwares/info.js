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
            <h3>What is MMI Softwares ?</h3>
            <p>
              The Hospital Management System by MMI Softwares is an integrated
              information system designed to streamline and enhance all aspects
              of a hospital's operations. This comprehensive software manages
              medical, financial, administrative, legal, and compliance
              functions, incorporating electronic health records, business
              intelligence, and revenue cycle services. Tailored for ease of
              use, the system aims to optimize administration, improve patient
              care, and maximize revenue for healthcare providers in India. MMI
              Softwares' Hospital Management Software offers a digital solution
              that efficiently handles diverse organizational and service
              processes, promoting seamless collaboration and information
              sharing across healthcare settings.
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

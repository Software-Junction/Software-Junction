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
            <h3>What is factoHR ?</h3>
            <p>
              factoHR is an mobile-first Human Capital Management (HCM) platform
              that excels in automating HR operations, fostering employee
              engagement, and nurturing talent for a high-performing workforce.
              With over 17 years of expertise, it boasts top-notch security,
              serving 3500+ customers and 2.6 million employees across 20+
              countries. What sets factoHR apart is its array of features,
              including a robust mobile app, integrated HR processes,
              scalability for diverse needs, and a user-friendly interface.
              Highly praised by clients such as Cycle Agarbatti and Kelvin
              Plastics, factoHR is the preferred HRTech partner, providing a
              seamless and transformative HR solution.
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

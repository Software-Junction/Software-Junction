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
            <h3>What is Patasala.in ?</h3>
            <p>
              Patasala.in is an innovative school administration software
              designed to enhance academic performance by seamlessly connecting
              teachers, parents, and management. With over 100 schools onboard,
              it offers a comprehensive solution featuring mobile apps for
              various stakeholders, a cloud-based web platform with customizable
              settings, and 40+ modules. The software prioritizes user-friendly
              interfaces and industry-first solutions, such as contactless
              attendance tracking, interactive training through the "Teach me"
              tool, and a visual editor for customizable report cards.
              Patasala.in stands out with its pay-as-you-go model, onboarding
              support, continuous enhancements, and quarterly team visits to
              ensure a delightful experience for educators, parents, and
              administrators.
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Oneinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is OneSchool ?</h3>
            <p>
              OneSchool Global's innovative learning management software
              facilitates self-directed learning through a comprehensive
              framework. Designed for a network of 130 campuses across 20
              countries, this software empowers students from Year 3 to Year 12
              to take initiative and responsibility for their education. The
              Learning to Learn Framework guides students through assignments,
              lessons, and study, fostering independence and collaboration.
              Learning Centers, equipped with diverse resources, serve as
              dynamic hubs for self-directed learning. With a focus on digital
              literacy and a global approach, OneSchool Global's software
              transforms traditional education, creating a technology-rich
              environment for both students and teachers worldwide.
            </p>
            <div
              className={`${styles["ons-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["ons-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Oneinfo;

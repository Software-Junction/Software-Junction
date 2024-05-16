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
            <h3>What is OutSystems ?</h3>
            <p>
              OutSystems is a leading low-code platform that revolutionizes
              software development by seamlessly integrating design, coding, and
              deployment. As the #1 Low-Code Platform®, it empowers users to
              create high-performance applications and portals swiftly, catering
              to diverse needs such as customer engagement, workforce
              innovation, and core business systems. With recognition from
              industry analysts like Gartner and Forrester, OutSystems stands
              out for its cloud-native architecture, full-stack development
              capabilities, and low-code integration, enabling teams to deliver
              top-quality applications at an accelerated pace with the added
              benefits of artificial intelligence.
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

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
            <h3>What is Appikr Labs ?</h3>
            <p>
              Appikr Labs is a leading mobile app development company with over
              10 years of industry experience, specializing in creating Fortune
              500-level apps. With a global presence in UAE, USA, and UK, Appikr
              Labs offers comprehensive solutions for startups, SMEs, and
              enterprises across various industries. Boasting a portfolio of
              350+ delivered apps and a 90% retention rate, they provide
              end-to-end services, from ideation and design to development and
              post-launch support. Their innovative approach, skilled team of
              175+ developers, and a range of benefits, including a 100%
              money-back guarantee, make them the #1 choice for mobile app
              development.
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

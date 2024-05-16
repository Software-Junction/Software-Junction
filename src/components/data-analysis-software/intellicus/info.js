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
            <h3>What is Intellicus ?</h3>
            <p>
              Intellicus is a business intelligence (BI) solution offering
              seamless data integration, analytics, and automation. With its
              modular design, Intellicus empowers enterprises of all sizes to
              unify data sources, expedite implementation, and enhance user
              adoption. From real-time predictions to mobile access of insights,
              Intellicus enables informed decision-making across operations.
              Trusted by over 17,000 enterprises worldwide, Intellicus
              transforms BI journeys with its customizable, scalable, and
              intuitive platform.
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

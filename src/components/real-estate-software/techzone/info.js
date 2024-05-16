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
            <h3>What is Techzone ?</h3>
            <p>
              Techzone offers a comprehensive suite of IT solutions,
              specializing in web and mobile app development, ERP and CRM
              solutions, and digital marketing services. Their Real Estate
              Portal Solutions, used in over 10 countries with 2 million
              property listings, feature custom designs, extensive
              functionality, and mobile app readiness. With a focus on fast
              development, innovative mobile app designs, and cloud-based ERP
              solutions, Techzone ensures a customer-first approach with
              lifetime support. Boasting 800+ successful deliveries, Techzone's
              extensive experience and multi-cultural support make them a
              reliable partner for small to mid-sized businesses seeking maximum
              benefits from their IT investments.
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

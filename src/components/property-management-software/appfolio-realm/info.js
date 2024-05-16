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
            <h3>What is AppFolio Realm ?</h3>
            <p>
              AppFolio Realm is a AI-powered real estate management platform
              that centralizes data, offering a seamless and automated solution
              for efficient portfolio management. With a focus on next-level
              productivity, the platform provides an unrivaled user experience
              across devices, integrates seamlessly with various services, and
              positions itself as a trusted partner for continuous innovation.
              Designed to cover a diverse range of real estate sectors, AppFolio
              Realm empowers teams with dedicated onboarding, expert coaching,
              and robust support, ensuring businesses can swiftly adapt,
              maximize ROI, and confidently grow.
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

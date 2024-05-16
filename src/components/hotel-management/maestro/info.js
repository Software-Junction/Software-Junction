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
            <h3>What is Maestro PMS ?</h3>
            <p>
              Maestro PMS is a leading hospitality Property Management System
              (PMS) software, offering a versatile, all-in-one solution for
              independent hospitality groups. With a focus on safeguarding
              investments, it provides a comprehensive Web browser or Windows
              platform that can be deployed in the cloud, on-premise, or in a
              private cloud. This innovative software supports the latest
              mobile, contact-free, and web responsive technologies, enhancing
              the digital guest and staff experience. Maestro stands out with
              its flexibility, scalability, and a unique option for businesses
              to seamlessly transition between deployment models without
              incurring additional licensing fees, backed by industry-leading
              24/7 support services and a vast collection of open APIs for over
              800 third-party integrations.
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

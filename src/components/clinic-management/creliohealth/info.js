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
            <h3>What is CrelioHealth ?</h3>
            <p>
              CrelioHealth's Patient Engagement Software is an all-encompassing
              solution designed to enhance patient experience and relationships
              in healthcare. It seamlessly integrates with websites, converting
              them into online stores for efficient patient bookings and secure
              online payments. With personalized promotions and targeted
              packages, the software ensures improved patient communication and
              conversions. Offering HIPAA-compliant features, the platform
              provides secure, automated patient reminders and notifications via
              Email, SMS, and WhatsApp. CrelioHealth's system is highly
              configurable, prioritizing privacy, brand identity, and a superior
              patient engagement experience, making it an essential tool for
              healthcare providers.
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

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
            <h3>What is Practo Ray ?</h3>
            <p>
              Practo Ray is a clinic management software, widely trusted in
              India and used by over 50,000 doctors across 5 countries. As
              Ayushman Bharat Digital Mission compliant, it ensures enhanced
              discoverability within the ABDM ecosystem. Offering features like
              automated appointment reminders, secure digital record-sharing,
              and post-consultation chats, Practo Ray streamlines operations,
              reduces no-shows, and improves patient engagement. With Practo
              Prime, a premium offering, clinics can further elevate patient
              experience, benefiting from features like a smart calling system
              and 24/7 instant online booking. The software prioritizes data
              security, boasting 256-bit end-to-end encryption and
              HIPAA-compliant data centers.
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

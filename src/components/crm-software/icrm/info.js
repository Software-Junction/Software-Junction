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
            <h3>What is iCRM ?</h3>
            <p>
              iCRM by iEnterprises is a powerful and user-friendly Customer
              Relationship Management (CRM) solution designed to seamlessly
              integrate with Gmail and Outlook. This robust software empowers
              users to efficiently manage leads and enhance sales growth by
              providing a flexible platform for building and maintaining
              critical customer information. With a focus on simplicity and
              affordability, iCRM facilitates the closure of more deals and the
              establishment of enduring customer relationships. Start your free
              trial today and experience the convenience of a CRM solution that
              works directly within your familiar email environment.
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

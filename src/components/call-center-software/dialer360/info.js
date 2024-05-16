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
            <h3>What is Dialer360 ?</h3>
            <p>
              Dialer360 is a call center dialer software designed to enhance
              agent productivity and streamline customer call handling. With its
              advanced features like Auto Dialer, Predictive Dialer, and
              Conversational AI Dialer, it optimizes sales and ensures smarter
              communication. Offering the fastest dialing solutions, secure data
              protection, and seamless CRM integrations, Dialer360 guarantees a
              higher contact rate and unparalleled efficiency. Trusted by over
              300 businesses, it revolutionizes customer support with
              state-of-the-art AI-based technology, making every call a smart
              call.
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

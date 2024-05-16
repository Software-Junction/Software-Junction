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
            <h3>What is MyOperator ?</h3>
            <p>
              MyOperator is a mobile-first cloud telephony solution trusted by
              over 10,000 businesses, offering no-code, zero-deployment SAAS
              platform for accelerating customer engagement and enterprise
              communication. It provides scalable contact center technology,
              simless mobile workforce empowerment, and omni-channel
              integrations for seamless communication across various platforms.
              With high uptime, mobile-first design, and enterprise-grade
              security, MyOperator redefines business communication, enabling
              automation of customer engagement workflows and providing powerful
              reporting insights. Join leading brands across industries in
              leveraging MyOperator to revolutionize communication and enhance
              customer interactions.
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

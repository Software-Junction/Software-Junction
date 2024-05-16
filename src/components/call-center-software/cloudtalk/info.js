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
            <h3>What is CloudTalk ?</h3>
            <p>
              CloudTalk is a VoIP business calling solution designed for
              customer service and sales teams. With over 70 features and
              seamless integration with CRMs and helpdesk tools, it offers
              automation, analytics, and scalability to optimize performance and
              enhance customer experience. Its AI-powered features include
              automatic call transcriptions and sentiment analytics, ensuring
              future-proofing for businesses. CloudTalk provides unparalleled
              control over the customer journey, facilitating faster, easier,
              and more efficient connections with customers globally.
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

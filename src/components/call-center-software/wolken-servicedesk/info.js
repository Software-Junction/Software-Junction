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
            <h3>What is Wolken ServiceDesk ?</h3>
            <p>
              Wolken ServiceDesk is a customer service solution that transitions
              businesses from a case-centric to a customer-centric approach. It
              offers personalized, fast, and flexible customer support through
              omnichannel communication, intelligent ticket routing, and 24/7
              backend support. With features like a centralized knowledge base,
              enterprise integrations, automation, and real-time reporting,
              Wolken ServiceDesk ensures quick query resolution, smoother
              operations, self-service capabilities, organized data, and
              ultimately, enhanced customer satisfaction.
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

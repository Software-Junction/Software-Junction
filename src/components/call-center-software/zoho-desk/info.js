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
            <h3>What is Zoho Desk ?</h3>
            <p>
              Zoho Desk is a help desk software designed to streamline customer
              service operations, boost agent productivity, and foster enduring
              customer relationships. With its omnichannel support, empowered
              agents equipped with AI tools, and built-in analytics, Zoho Desk
              enables businesses of all sizes to deliver exceptional customer
              experiences. Integrated with over 200 third-party apps and
              offering fully mobile capabilities, Zoho Desk ensures seamless
              customer support anytime, anywhere. Trusted by over 100,000
              businesses globally, Zoho Desk stands out for its fast
              implementation, customizable workspace, and transparent pricing,
              making it the preferred choice for efficient and cost-effective
              customer service solutions.
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

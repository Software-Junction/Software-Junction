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
            <h3>What is Freshsales ?</h3>
            <p>
              Freshsales is a robust Sales CRM designed to empower your team,
              helping you sell smarter and close deals faster. Trusted by over
              60,000 businesses, it offers an AI-powered contact scoring feature
              through Freddy AI, allowing you to swiftly identify high-intent
              leads for personalized engagement. With predictive deal insights,
              the platform harnesses intelligent sales data to maximize
              efficiency and optimize your sales strategy. The intelligent
              workflow automation enables seamless task management, email
              communication, and lead assignments, ensuring productivity.
              Moreover, Freshsales Suite provides a unified CRM for sales,
              marketing, and support teams, breaking down silos and offering a
              single source of truth across the customer journey.
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

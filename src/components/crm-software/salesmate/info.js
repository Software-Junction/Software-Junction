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
            <h3>What is Salesmate ?</h3>
            <p>
              Salesmate redefines the CRM experience, putting control back in
              the hands of users. This AI-powered platform is not just a tool
              but a solution crafted for human efficiency. Trusted by over 6500
              companies, Salesmate offers a 15-day free trial without the need
              for a credit card. Its modern CRM is infinitely flexible,
              customizable to your unique business needs. With features like
              automation suites, productivity tools, and analytics, Salesmate is
              designed to work for you, making it a refreshing departure from
              traditional CRM frustrations. Take charge of your CRM experience
              with Salesmate and discover a new level of adaptability and ease.
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

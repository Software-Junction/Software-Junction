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
            <h3>What is HoduCC ?</h3>
            <p>
              HoduCC is a contact center software designed to enhance customer
              engagement and streamline business productivity. It offers
              multichannel support, allowing customers to reach out through
              various digital touchpoints for quicker problem-solving. With
              intelligent features and seamless integrations like CRM and SMS,
              HoduCC empowers agents to efficiently track, prioritize, and
              resolve customer interactions. Easy to set up, maintain, and use,
              it's the ultimate solution for businesses seeking to strengthen
              relationships with customers while reducing costs.
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

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
            <h3>What is Avaya ?</h3>
            <p>
              Avaya Experience Platform is a software solution designed to
              revolutionize customer experience (CX) by seamlessly integrating
              digital channels, AI virtual agents, workflow automation, and
              actionable insights. Recognized as a leader in intelligent contact
              centers, Avaya enables businesses to deliver unforgettable
              experiences that drive ROI, empower teams, and nurture meaningful
              customer relationships. With Avaya, organizations can unlock new
              CX capabilities to meet rising customer expectations while keeping
              current operations intact. Whether it's boosting customer
              satisfaction like Atento, providing personalized healthcare
              services like Johns Hopkins Healthcare System, or facilitating
              digital transformations like DIRECTV in Latin America, Avaya
              empowers businesses across various industries to innovate, evolve,
              and thrive in the digital age.
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

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
            <h3>What is Arlo ?</h3>
            <p>
              Arlo is a event management system designed for efficiently
              organizing recurring events, workshops, and seminars. With
              user-friendly features, it allows seamless scheduling, venue and
              presenter management, and customizable registration forms. The
              software streamlines administrative tasks through task sets,
              ensuring organized course management. Arlo provides a centralized
              platform for handling all aspects of events, including sessions,
              catering preferences, feedback surveys, name labels, certificates,
              and financial transactions. Tailored for diverse training
              providers, it enhances operational efficiency by offering tools
              for registration, course management, and reporting, making it a
              versatile solution for businesses across various industrie
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

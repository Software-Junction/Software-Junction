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
            <h3>What is EventAvenue ?</h3>
            <p>
              EventAvenue is a leading online registration and payment gateway
              software in India, catering to diverse organizations such as event
              organizers, corporations, schools, and non-profits. It offers a
              24/7 solution for seamless online event management, including
              real-time registrations, secure payment processing, customizable
              tools, and interactive floor plan management. With a focus on
              accessibility, it allows global audience reach, easy data mining,
              and ensures the highest standards of security. EventAvenue
              supports a range of applications, from conferences and trade shows
              to class admissions, donation collections, and more, providing
              comprehensive control and insights for effective online
              registration and payment handling.
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

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
            <h3>What is NetHunt CRM ?</h3>
            <p>
              NetHunt CRM is a powerful sales automation tool designed for sales
              and marketing teams. Integrated seamlessly with Gmail and
              LinkedIn, it streamlines lead management, nurtures customer
              relationships, and enhances sales efficiency. With features like
              automated lead generation, centralized communication channels, and
              real-time reports, NetHunt ensures that no lead falls through the
              cracks. Trusted by businesses like Ethika, MSE, and Neural Guard,
              it offers a user-friendly interface to organize customer data,
              manage pipelines, and track sales activities. Experience the
              benefits of NetHunt CRM, a Google Cloud Partner, and elevate your
              sales process.
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

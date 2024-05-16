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
            <h3>What is Event Temple ?</h3>
            <p>
              Event Temple is a cloud-based hotel and venue management software
              designed to enhance efficiency and revenue generation. Voted #1
              globally for Best Event Management and Best Group Sales in 2021,
              2022, and 2023, it offers a comprehensive growth platform for
              hotels and venues. With features like digital proposals, quick
              response to inquiries, and powerful reporting, Event Temple
              streamlines sales processes, saves time on operations, and
              provides a user-friendly experience trusted by thousands of users
              in 40 countries. The software's success is highlighted by
              testimonials praising its automation, time-saving capabilities,
              and contribution to business growth.
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

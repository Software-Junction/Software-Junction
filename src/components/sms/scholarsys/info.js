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
            <h3>What is ScholarSYS ?</h3>
            <p>
              ScholarSYS, introduced in 2015, stands out as the premier School
              Management Software in India, offering a cloud-based platform that
              seamlessly transitions major school activities online. As a
              response to the challenges posed by the Covid-19 outbreak,
              ScholarSYS emerged as an essential tool for schools, effectively
              managing diverse functions in an increasingly digital era.
              Distinguished by its collaborative development with educational
              stakeholders, ScholarSYS boasts a dedicated team of 50+
              professionals committed to continual improvement and innovation.
              The software provides a holistic solution for schools, covering
              administration, academics, exams, resource and finance management,
              and effective communication.
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

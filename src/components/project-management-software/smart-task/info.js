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
            <h3>What is SmartTask ?</h3>
            <p>
              SmartTask is an all-in-one collaboration tool designed to
              streamline work processes for teams across various functions. With
              a comprehensive set of features, it serves as a single platform
              for Task Management, Project Management, Marketing, Sales, HR, IT,
              and more. Trusted by over 20,000 teams worldwide, SmartTask offers
              customizable views, intuitive dashboards, and seamless
              communication through chat and video conferencing. Unique features
              include recurring tasks, subtasks, time tracking, and easy
              integration with existing tools. It promotes efficiency, balance,
              and a premium client experience, making it a go-to solution for
              diverse organizational needs.
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

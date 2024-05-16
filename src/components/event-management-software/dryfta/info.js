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
            <h3>What is Dryfta ?</h3>
            <p>
              Dryfta is a enterprise-grade Event Operating System designed for
              universities, associations, nonprofits, enterprises, and
              governments. Serving as an all-in-one event platform, Dryfta
              simplifies the management of diverse event aspects, including
              ticket sales, abstract submissions, engagement, scheduling, and
              more. Trusted by universities and nonprofits across 20+ countries,
              Dryfta's unified dashboard enables organizers to seamlessly handle
              submissions and peer reviews, sell tickets online, manage event
              contacts, build schedules, and boost event visibility through
              integrated features such as EventBoost. With a focus on
              user-friendly interfaces, automation, and flexibility, Dryfta
              replaces the need for multiple tools, providing a holistic
              solution for efficient event planning and execution.
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

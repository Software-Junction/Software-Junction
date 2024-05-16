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
            <h3>What is AutomateCRM ?</h3>
            <p>
              AutomateCRM is a versatile and customizable CRM and automation
              platform designed to streamline, automate, and monitor various
              business processes. Celebrating its 10th anniversary, the platform
              offers a limited-time offer with unlimited users, free training,
              and implementation support. With a focus on sales, marketing,
              support, projects, orders, payments, services, and affiliates,
              automateCRM provides a unified solution to enhance operational
              efficiency. The software boasts an array of features, including
              data access control, lead capture from diverse sources,
              omnichannel communication, SLA management, rewards programs,
              personalized customer journeys, social media engagement,
              subscription and billing management, AI capabilities, custom
              modules, and robust reporting and dashboard functionalities.
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

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
            <h3>What is Peoplebox ?</h3>
            <p>
              Peoplebox is an all-encompassing platform revolutionizing goals
              and performance management, seamlessly integrating with existing
              workflows for 500+ leading enterprises. It acts as a single hub,
              connecting business and people goals, allowing real-time tracking
              of objectives, key results, projects, and tasks. With deep
              integrations into Slack/Teams, Peoplebox transforms the employee
              experience for performance reviews, running entire 360-degree
              assessments effortlessly. The platform goes beyond traditional HR
              tools, fostering an open feedback-driven culture through pulse
              surveys, engagement insights, and anonymous messaging. Offering
              50+ ready-to-use integrations, Peoplebox stands out as the
              most-integrated OKR, Performance Management, and Employee
              Engagement Platform globally.
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

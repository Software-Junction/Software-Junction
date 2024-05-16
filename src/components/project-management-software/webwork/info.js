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
            <h3>What is WebWork Tracker ?</h3>
            <p>
              WebWork Tracker is a time tracking and remote employee monitoring
              software designed to enhance productivity in a streamlined manner.
              It allows users to track and monitor remote employees' work
              through screenshots, automated attendance tracking, and real-time
              reports. The software features project management, task
              organization, and productivity monitoring, ensuring efficient
              collaboration in one platform. With additional capabilities like
              billable hours tracking, customizable reporting, and a built-in
              team chat, WebWork Tracker aims to optimize work processes, save
              time, and improve team performance. Trusted by over 140,000 happy
              users, it offers a 14-day free trial with no credit card required.
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

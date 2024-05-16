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
            <h3>What is Todoist ?</h3>
            <p>
              Todoist is the world's premier task manager and to-do list app,
              celebrated by the New York Times' Wirecutter. Trusted by over 30
              million individuals and teams, it offers a unique natural language
              recognition system for lightning-fast task input. With automatic
              organization into Today, Upcoming, and custom Filter views, users
              attain mental clarity and focus on what truly matters. Ideal for
              both personal and team use, Todoist ensures seamless collaboration
              and organization. Boasting a 16-year history and 334 days of
              development, it stands as a reliable, long-term solution for
              productivity, supported by millions of satisfied users worldwide.
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

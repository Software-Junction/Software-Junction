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
            <h3>What is Jira Software ?</h3>
            <p>
              Jira Software is a leading agile project management tool designed
              for software development teams. Trusted by over 100,000
              organizations, it offers a comprehensive solution for planning,
              tracking, releasing, reporting, and automating workflows. With
              customizable templates for agile methodologies like Scrum and
              Kanban, Jira adapts to the unique needs of teams, promoting
              collaboration and visibility. Integrated with open DevOps
              principles, it streamlines development processes, leading to a
              900% increase in deployments and a 50% decrease in cycle time.
              Whether for small or large teams, Jira Software provides a
              scalable, feature-rich platform to enhance collaboration and
              accelerate project delivery.
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

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
            <h3>What is ProProfs Project Management Software?</h3>
            <p>
              ProProfs Project Management Software is a online solution designed
              for seamless project planning, execution, and completion. It
              offers 360° visibility of projects, promoting easy collaboration
              among teams in real-time. With features such as customizable
              dashboards, Gantt charts, and task management, it caters to
              diverse industries, including Information Technology, Marketing,
              and Creative & Design. The software facilitates efficient
              communication, timely progress tracking, and prioritization of
              tasks. Users can benefit from smart reports, analytics, and time
              tracking functionalities, making project management a delightful
              and productive experience.
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

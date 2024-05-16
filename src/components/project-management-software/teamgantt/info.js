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
            <h3>What is TeamGantt ?</h3>
            <p>
              TeamGantt is a user-friendly, cloud-based project management
              platform offering a free, forever plan for creating top-rated
              Gantt charts. As the go-to choice for companies like Amazon and
              Netflix, TeamGantt stands out with its plan-first approach,
              enabling efficient task scheduling and seamless collaboration.
              With a clean interface and intuitive drag-and-drop features, users
              can build project Gantt charts in minutes, adapting to various
              work styles. The software facilitates resource management,
              centralizes project files, and provides real-time insights, making
              it an essential tool for diverse industries seeking streamlined
              project planning and execution.
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

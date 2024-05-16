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
            <h3>What is Minitab Engage ?</h3>
            <p>
              Minitab Engage is an innovative solution designed to initiate,
              monitor, manage, and share improvement and innovation initiatives
              seamlessly. Tailored for organizations seeking operational
              excellence, it facilitates idea generation by fostering a culture
              of innovation, allowing employees to submit ideas using
              customizable forms. The software evaluates and aligns initiatives
              based on critical business criteria, automatically calculating
              benefit, effort, and risk ratings for prioritization. With
              real-time tracking of key performance metrics, Minitab Engage
              enables effective execution of projects, regardless of the
              improvement methodology employed, such as Lean or Six Sigma,
              providing comprehensive and customizable tools for efficient
              project management.
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

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
            <h3>What is BlueDolphin ?</h3>
            <p>
              BlueDolphin is an intelligent platform designed to seamlessly
              integrate business and IT, fostering agile, data-driven, and
              collaborative transformation. With support for various modeling
              languages, it enables stakeholders to work cohesively across
              departments, ensuring quick input gathering without compromising
              data validity. This platform offers beautiful architectural design
              capabilities, supporting Archimate® and BPMN, allowing users to
              plan, design, and manage transformation solutions effortlessly.
              BlueDolphin's central repository facilitates the capture,
              management, and utilization of architecture objects, providing a
              single source of truth for apps, business processes, data, and
              technology. It excels in strategic business transformation,
              offering out-of-the-box solution templates and promoting
              iterative, continuous, and agile transformation.
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

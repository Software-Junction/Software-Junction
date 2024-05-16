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
            <h3>What is Tiemchart ?</h3>
            <p>
              Tiemchart is a online project management software designed to
              streamline task, team, and resource management for businesses of
              all sizes. With interactive Gantt charts, it provides visibility
              into project timelines, allowing efficient deployment of resources
              for optimal results. Offering a unified platform, Tiemchart
              encompasses tools for task, team, time, and resource management,
              as well as project billing, costing, and reporting. It simplifies
              complex project portfolios, enhances project profitability
              control, and offers insightful resource workload visibility.
              Trusted by global enterprises, Tiemchart ensures clarity in
              project performance, making it an award-winning solution with a
              14-day free trial and comprehensive customer support.
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

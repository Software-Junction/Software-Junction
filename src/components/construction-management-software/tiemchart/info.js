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
              empower businesses of all sizes. With over $3 Billion in
              successfully managed projects, it offers a unified platform for
              task, team, and resource management. The software provides
              interactive Gantt charts, task breakdowns, and efficient resource
              deployment for optimal results. Tiemchart's features include task,
              team, time, and resource management, along with project billing,
              costing, and reporting. With a focus on project profitability, it
              simplifies complex project portfolios, offering insights into
              ongoing projects, resource workloads, and revenue/cost control.
              Schedule a free demo to experience award-winning project
              management solutions.
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

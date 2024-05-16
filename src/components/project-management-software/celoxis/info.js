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
            <h3>What is Celoxis ?</h3>
            <p>
              Celoxis is a all-in-one Project Portfolio Management (PPM)
              software designed to transform businesses by reimagining projects,
              processes, and data. It goes beyond traditional project
              management, offering advanced tools such as Intake Management for
              automated project request capture, What-if Analysis for strategic
              project optimization, and Custom Workflow Apps to streamline
              business processes. With features like Project Planning, Resource
              Management, and Portfolio Monitoring, Celoxis ensures efficient
              utilization of resources across diverse time zones. Its
              power-packed capabilities include Gantt Charts, Risk Management,
              Time Tracking, Kanban Style, Issue Tracking, and a Client Portal,
              allowing teams to stay focused and productive. Backed by top
              ratings and over ten years of industry leadership, Celoxis
              provides the most powerful reporting and dashboards, making it a
              100% customizable, visually appealing, and data-driven solution
              for organizations seeking project management excellence.
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

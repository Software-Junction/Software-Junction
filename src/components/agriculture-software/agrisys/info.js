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
            <h3>What is AgriSys ERP ?</h3>
            <p>
              AgriSys ERP is an integrated Enterprise Resource Planning (ERP)
              solution designed for corporate farming and agricultural
              processes. This software streamlines, integrates, and standardizes
              various aspects of seed production, offering benefits such as
              controlled inventory management, precise production planning, and
              efficient working capital control. Its modules cover finance and
              accounting, purchase management, production planning, quality
              control, inventory management, fixed asset tracking, and
              comprehensive HR and payroll functionalities. AgriSys ERP empowers
              seed producers with insights into their processes, ensuring better
              decision-making, cost management, and overall business efficiency
              in the dynamic agriculture sector.
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

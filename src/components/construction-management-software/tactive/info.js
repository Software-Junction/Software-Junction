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
            <h3>What is Tactive ?</h3>
            <p>
              Tactive is an advanced Construction ERP Software, offering a
              comprehensive suite of modules tailored for the construction
              industry. With features spanning tender and estimation, budgeting,
              project management, procurement, inventory, equipment, finance,
              and HR/payroll, Tactive provides a unified and simplified solution
              for businesses. Utilizing cloud-based operations and a mobile
              application, it enables real-time data communication, remote
              monitoring, and an integrated platform for seamless workflow.
              Tactive's success is reflected in positive reviews from industry
              leaders, demonstrating its effectiveness in enhancing productivity
              and streamlining construction management processes.
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

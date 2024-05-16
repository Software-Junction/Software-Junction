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
            <h3>What is Paymo ?</h3>
            <p>
              Paymo is a work management platform designed to streamline project
              collaboration, time tracking, and invoicing. Trusted by over
              100,000 users worldwide, it offers robust features such as task
              management with Kanban boards, Gantt charts for project
              visualization, and real-time time tracking across various devices.
              Paymo excels in enhancing team productivity, reducing project
              delays, and ensuring fair and timely compensation through
              efficient invoicing tools. With additional capabilities like
              client collaboration, design proofing, and profitability tracking,
              Paymo provides a centralized solution for businesses seeking
              effective project management and improved workflow efficiency.
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

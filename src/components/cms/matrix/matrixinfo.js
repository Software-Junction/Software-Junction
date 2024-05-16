import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Matrixinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Class Matrix ?</h3>
            <p>
              Class Matrix is an all-encompassing school management software
              that revolutionizes educational institutions by seamlessly
              integrating interactive online lectures, online exams, and an
              E-payment system. It streamlines academic and operational
              processes, offering features such as live teaching with Zoom
              integration, efficient fee collection through a payment gateway,
              and comprehensive tools for online assessment tracking and
              progress reporting. With functionalities like student CRM, staff
              management, and real-time notifications, Class Matrix provides a
              robust solution for educational institutions, ensuring efficient
              administration, transparent fee management, and anytime, anywhere
              access through cloud hosting.
            </p>
            <div
              className={`${styles["mat-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["mat-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Matrixinfo;

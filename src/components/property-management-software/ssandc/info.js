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
            <h3>What is SS&C SKYLINE ?</h3>
            <p>
              SS&C SKYLINE is a cloud-based property management software
              designed for both residential and commercial real estate owners
              and managers. With a focus on enhancing productivity, occupancy,
              and profitability, SKYLINE offers a comprehensive solution stack
              accessible across mobile, desktop, and portal platforms. This
              innovative technology automates and streamlines day-to-day
              operations, including marketing availabilities, payment
              processing, invoice approvals, and lease signings. With a dynamic
              and scalable design, SKYLINE supports diverse portfolios,
              providing powerful tools to optimize accounting workflows,
              facility operations, and performance metrics for investors. As a
              trusted industry pioneer, SS&C SKYLINE boasts over three decades
              of experience, serving over 1,000 clients and managing 35,000
              properties spanning three billion square feet.
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

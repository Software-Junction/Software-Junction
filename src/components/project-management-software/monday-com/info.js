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
            <h3>What is monday.com ?</h3>
            <p>
              monday.com is a Work OS designed for modern work management,
              offering a revolutionary approach to streamline various aspects of
              work. It serves as a centralized platform where teams can
              customize workflows to fit their unique needs, enhancing
              alignment, efficiency, and overall productivity. Trusted by over
              180,000 customers worldwide, including notable names like Coca
              Cola and Universal Music Group, monday.com empowers organizations
              to connect teams, break down silos, and maintain a single source
              of truth. With user testimonials highlighting significant
              improvements in collaboration and goal attainment, the platform
              provides visual boards and end-to-end products tailored for work
              management, sales CRM, and development, offering a comprehensive
              solution for diverse teams.
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

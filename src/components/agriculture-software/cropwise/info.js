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
            <h3>What is Cropwise ?</h3>
            <p>
              Cropwise is a digital farming platform powered by Syngenta,
              designed to optimize agricultural efficiency and decision-making.
              This innovative solution integrates various services, including
              planning, monitoring, crop protection, and sustainability
              assessment, all within a unified platform. Cropwise simplifies
              data management, allowing farmers and advisors to save time, act
              swiftly, and make informed decisions for crop optimization. With
              practical tools, seamless connectivity, and personalized
              solutions, Cropwise transforms the digital landscape of
              agriculture, supporting users worldwide across diverse crops, farm
              sizes, and operations.
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

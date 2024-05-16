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
            <h3>What is Spine HRMS ?</h3>
            <p>
              Spine Technologies provides a robust Human Resource Management
              System (HRMS) and Fixed Asset Management solution, boasting over
              two decades of industry experience. Their specialized functions
              contribute significantly to business success, aligning seamlessly
              with HR principles. The company prioritizes industry compliance
              through extensive knowledge acquired over the years. By
              integrating their solution, HR professionals can enhance their
              credibility, achieving a commendable return on investment. With
              scalability at its core, Spine's system efficiently manages the
              entire employee lifecycle, offering flexibility in deployment
              options for optimal organizational growth.
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

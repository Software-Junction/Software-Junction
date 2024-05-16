import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Ischoolinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is iSchool ?</h3>
            <p>
              iSchool is a fully integrated & intelligent online software
              solution to automate and enhance the quality of education and
              administration at schools with single point of control in campus
              and at home also. iSchool enables information flow between three
              key pillars of academic institution academics, administration, and
              finance.
            </p>
            <div
              className={`${styles["isc-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["isc-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Ischoolinfo;

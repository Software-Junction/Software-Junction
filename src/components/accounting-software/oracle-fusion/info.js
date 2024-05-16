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
            <h3>What is Oracle Fusion Cloud ERP ?</h3>
            <p>
              Oracle ERP, which stands for Enterprise Resource Planning, is a
              versatile suite of business software applications designed to
              simplify and improve an organization's core operations. This
              powerful and flexible platform gives businesses the tools they
              need to effectively handle their finances, procurement processes,
              HR functions, and the complexities of their supply chain. By
              offering a unified solution for crucial business tasks, Oracle ERP
              enables companies to operate more efficiently, make well-informed
              decisions, and enhance their competitiveness in today's dynamic
              business world.
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

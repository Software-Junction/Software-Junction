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
            <h3>What is Xero Accounting ?</h3>
            <p>
              Xero, an innovative cloud-based accounting software, is designed
              to simplify financial management for businesses of all sizes. With
              its user-friendly interface, Xero offers a comprehensive suite of
              tools for bookkeeping, invoicing, payroll, and financial
              reporting. It enables seamless collaboration with accountants and
              supports real-time access to financial data, making it easier than
              ever to stay on top of your company's finances. Whether you're a
              small startup or a large corporation, Xero provides the digital
              solutions you need to streamline your financial processes and make
              informed business decisions.
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

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
            <h3>What is CodeAchi Library Management System ?</h3>
            <p>
              CodeAchi Library Management System is a software solution that
              stands out for its simplicity and comprehensive features. With
              digital cataloging, adding new books and monitoring their
              circulation is straightforward. The software supports easy book
              issuance and return using any barcode scanner, automates fine
              calculations, and sends notifications via email and SMS. It allows
              users to generate various reports and customize data categories
              swiftly using Excel or CSV sheets. CodeAchi offers standalone
              installation on Windows systems with a 30-day free trial, backed
              by 24/7 customer support. Its transparent pricing, free training,
              and a 30-day refund policy contribute to its global reputation in
              universities, colleges, schools, and public libraries. The
              software has received positive reviews for its user-friendly
              interface, data security measures, and continuous customer
              support.
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

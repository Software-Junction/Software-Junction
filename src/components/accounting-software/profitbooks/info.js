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
            <h3>What is ProfitBooks ?</h3>
            <p>
              ProfitBooks is a versatile accounting software designed to
              simplify financial management for businesses of all sizes. With
              user-friendly features, it streamlines tasks like invoicing,
              expense tracking, and tax compliance, making it an ideal solution
              for entrepreneurs and small to medium-sized enterprises. Its
              cloud-based platform ensures accessibility from anywhere, while
              robust reporting tools empower informed decision-making.
              ProfitBooks is the go-to solution for those seeking to efficiently
              manage their finances and grow their business.
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

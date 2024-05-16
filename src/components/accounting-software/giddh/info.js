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
            <h3>What is Giddh ?</h3>
            <p>
              Giddh" is a versatile and user-friendly accounting software that
              simplifies financial management for businesses of all sizes. With
              an intuitive interface and powerful features, it streamlines tasks
              such as invoicing, expense tracking, and financial reporting.
              Giddh also offers seamless integration with banking and taxation
              systems, making it an indispensable tool for entrepreneurs and
              finance professionals. Whether you're a small startup or an
              established corporation, Giddh provides a comprehensive solution
              for all your accounting needs, helping you maintain financial
              clarity and efficiency. Try Giddh to enhance your financial
              management today!
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

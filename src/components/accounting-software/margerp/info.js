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
            <h3>What is Marg ERP 9+Accounting ?</h3>
            <p>
              Marg Compusoft is a powerful and versatile software platform
              designed to streamline and enhance your business operations. With
              a wide array of features, including inventory management,
              accounting, and point-of-sale solutions, Marg Compusoft caters to
              businesses of all sizes. Its user-friendly interface and real-time
              data access make managing your business a breeze. Experience the
              convenience of cloud-based operations and efficient resource
              management with Marg Compusoft, your trusted partner for growth
              and success.
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

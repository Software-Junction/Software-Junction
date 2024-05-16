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
            <h3>What is PrestaShop ?</h3>
            <p>
              PrestaShop, a leading ecommerce solution, empowers businesses to
              create fully customizable online stores with features tailored for
              successful sales. From a rich marketplace offering modules and
              themes to essential suites for efficient selling, PrestaShop
              provides a comprehensive ecosystem. With a focus on control,
              customization, scalability, and dedicated support, it caters to
              both new entrepreneurs and established leaders. Backed by a robust
              community, numerous experts, and strategic partnerships,
              PrestaShop ensures the success of over 300,000 merchants
              worldwide. Stay updated on ecommerce trends and benefit from
              valuable resources through their blog, fostering a platform built
              for commerce and success.
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

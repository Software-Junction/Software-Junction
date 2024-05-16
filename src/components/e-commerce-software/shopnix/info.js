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
            <h3>What is Shopnix ?</h3>
            <p>
              Shopnix is a cutting-edge SaaS platform designed to empower
              merchants in India to effortlessly establish and manage their own
              eCommerce stores. With a range of sales channels, including a
              website, web store, Facebook store, Android Store App, and iOS
              Store App, Shopnix offers a comprehensive solution to boost
              revenue by up to 30%. This platform provides essential features
              such as domain and email IDs, responsive web, and mobile stores,
              Android and iPhone apps, built-in SEO, marketing tools, various
              payment gateways, beautiful store designs, and efficient email and
              SMS notifications. Shopnix caters to businesses of all sizes with
              its flexible and affordable pricing plans.
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
